---
layout: post
title: Blazor Chart with GraphQL Adaptor | Syncfusion
description: Learn how to bind the Syncfusion Blazor Chart component to a GraphQL service using SfDataManager and GraphQLAdaptor.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# GraphQL Data Binding in the Blazor Chart

The Blazor Chart can load data from a [GraphQL](https://graphql.org/learn/) endpoint by using [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html) with `Adaptors.GraphQLAdaptor`. This guide explains how to configure the adaptor, the contract the GraphQL resolver must follow, and a minimal end-to-end sample.

## Understanding GraphQL

[GraphQL](https://graphql.org/learn/introduction/) is a query language that lets applications request exactly the data they need. A GraphQL endpoint accepts a `POST` request containing a query and returns only the requested fields inside a `data` envelope:

```json
{ "data": { "sales": { "count": 6, "result": [ ... ] } } }
```

Key concepts used by the Chart:

- **Query**: A read request. The Chart only issues queries to bind data.
- **Resolver**: The server function that returns the data for a query. The adaptor calls the resolver named in `ResolverName`.
- **DataManagerRequest**: The adaptor passes the data operations (paging, sorting, filtering) to the resolver through the `dataManager` variable.
- **DataResult**: The resolver returns an object containing `Result` and `Count`.

## Configure the GraphQL adaptor

Set `Adaptor="Adaptors.GraphQLAdaptor"` on `SfDataManager` and describe the request using [GraphQLAdaptorOptions](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.GraphQLAdaptorOptions.html):

| Option | Description |
| --- | --- |
| `Query` | The GraphQL query string. It receives the `$dataManager` variable that carries the `DataManagerRequest` values. |
| `ResolverName` | The resolver name in PascalCase. The adaptor uses it to locate the result inside the `data` envelope. |
| `Mutation` | Mutations for insert, update, delete and batch. They are not required to render a Chart. |

`SfDataManager` is declared as a child of `SfChart`, before the series. The chart picks it up as its data source, so no `DataSource` is set on `ChartSeries`.

```cshtml
<SfChart>
    <SfDataManager Url="https://localhost:7140/graphql"
                   GraphQLAdaptorOptions="@AdaptorOptions"
                   Adaptor="Adaptors.GraphQLAdaptor">
    </SfDataManager>

    <ChartSeriesCollection>
        <ChartSeries XName="month" YName="revenue" Type="ChartSeriesType.Line"></ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private GraphQLAdaptorOptions AdaptorOptions { get; set; } = new GraphQLAdaptorOptions
    {
        Query = @"query sales($dataManager: DataManagerRequestInput!) {
                    sales(dataManager: $dataManager) {
                        count
                        result { month revenue }
                    }
                  }",
        ResolverName = "Sales"
    };
}
```

The `Query` operation and field names must match the resolver defined on the server.

## Prerequisites

- Visual Studio 2022 or Visual Studio Code
- .NET SDK 8.0 or later

The sample uses two projects: a GraphQL server built with [HotChocolate](https://chillicream.com/docs/hotchocolate) and a Blazor Web App that renders the chart.

| Package | Project |
| --- | --- |
| `HotChocolate.AspNetCore` | GraphQL server |
| `Syncfusion.Blazor.Charts`, `Syncfusion.Blazor.Themes` | Blazor Web App |

## Create the GraphQL server

### Step 1: Create the project and install packages

```
dotnet new web -n ChartGraphQLServer
cd ChartGraphQLServer
dotnet add package HotChocolate.AspNetCore
dotnet add package Syncfusion.Blazor.Data
```

### Step 2: Create the data model, result type and resolver

Create `Models/SalesData.cs`.

```csharp
namespace ChartGraphQLServer.Models
{
    public class SalesData
    {
        public string Month { get; set; } = string.Empty;
        public double Revenue { get; set; }
    }
}
```

Create `Models/SalesResult.cs`. The adaptor expects the resolver to return the records and the total count.

> **Note:** Syncfusion provides `DataResult<T>` for GraphQL services, but with the HotChocolate version used here the server failed to start with it (`There is no object type implementing interface IEnumerable`). Define a plain result class for the GraphQL schema as shown below, which was verified to work. `DataResult` and `DataResult<T>` are defined in the `Syncfusion.Blazor.Data` namespace, not `Syncfusion.Blazor`. Using them without `using Syncfusion.Blazor.Data;` causes error `CS0246`.

```csharp
namespace ChartGraphQLServer.Models
{
    public class SalesResult
    {
        public int Count { get; set; }
        public IEnumerable<SalesData> Result { get; set; } = new List<SalesData>();
    }
}
```

Create `Query.cs`. The resolver receives the `DataManagerRequest`, applies the paging values and returns the `SalesResult`.

```csharp
using ChartGraphQLServer.Models;
using Syncfusion.Blazor;

namespace ChartGraphQLServer
{
    public class Query
    {
        private static readonly List<SalesData> Data = new()
        {
            new() { Month = "Jan", Revenue = 1000 },
            new() { Month = "Feb", Revenue = 1500 },
            new() { Month = "Mar", Revenue = 1200 },
            new() { Month = "Apr", Revenue = 2000 },
            new() { Month = "May", Revenue = 1800 },
            new() { Month = "Jun", Revenue = 2200 }
        };

        public SalesResult Sales(DataManagerRequest dataManager)
        {
            IEnumerable<SalesData> result = Data;
            int count = Data.Count;

            if (dataManager.Skip > 0) result = result.Skip(dataManager.Skip);
            if (dataManager.Take > 0) result = result.Take(dataManager.Take);

            return new SalesResult { Result = result.ToList(), Count = count };
        }
    }
}
```

> **Note:** HotChocolate exposes `Sales` as the `sales` field and converts member names to camelCase, so the response properties are `count`, `result`, `month` and `revenue`.

### Step 3: Register the DataManagerRequest input type

`DataManagerRequest` has many complex members that HotChocolate cannot map automatically, so the server fails to start with `There is no object type implementing interface IEnumerable`. Register an input type that exposes only the members the adaptor sends. Create `DataManagerRequestInputType.cs`.

The adaptor sends the member names in PascalCase (`Skip`, `Take`, and so on), so the field names are set explicitly to match.

```csharp
using HotChocolate.Types;
using Syncfusion.Blazor;

namespace ChartGraphQLServer
{
    public class DataManagerRequestInputType : InputObjectType<DataManagerRequest>
    {
        protected override void Configure(IInputObjectTypeDescriptor<DataManagerRequest> descriptor)
        {
            descriptor.Name("DataManagerRequestInput");
            descriptor.BindFieldsExplicitly();
            descriptor.Field(f => f.Skip).Name("Skip").Type<IntType>();
            descriptor.Field(f => f.Take).Name("Take").Type<IntType>();
            descriptor.Field(f => f.RequiresCounts).Name("RequiresCounts").Type<BooleanType>();
            descriptor.Field(f => f.ServerSideGroup).Name("ServerSideGroup").Type<BooleanType>();
            descriptor.Field(f => f.LazyLoad).Name("LazyLoad").Type<BooleanType>();
            descriptor.Field(f => f.LazyExpandAllGroup).Name("LazyExpandAllGroup").Type<BooleanType>();
        }
    }
}
```

### Step 4: Register the GraphQL endpoint

Replace `Program.cs`. CORS is enabled because the Blazor app and the GraphQL server run on different origins.

```csharp
using ChartGraphQLServer;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o => o.AddDefaultPolicy(p =>
    p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddType<DataManagerRequestInputType>();

var app = builder.Build();
app.UseCors();
app.MapGraphQL();
app.Run();
```

Run the server and note its URL, for example `https://localhost:7140/graphql`. The same `/graphql` path is used by the `Url` property of `SfDataManager`.

```
dotnet run
```

## Create the Blazor Chart

### Step 1: Create the Blazor Web App

```
dotnet new blazor -n BlazorChartGraphQL -int Server -e
cd BlazorChartGraphQL
dotnet add package Syncfusion.Blazor.Charts
dotnet add package Syncfusion.Blazor.Themes
```

### Step 2: Register Syncfusion Blazor

In `Program.cs`, add `using Syncfusion.Blazor;` and register the service before `builder.Build()`.

```csharp
builder.Services.AddSyncfusionBlazor();
```

Add the namespaces to `Components/_Imports.razor`:

```cshtml
@using Syncfusion.Blazor
@using Syncfusion.Blazor.Charts
@using Syncfusion.Blazor.Data
```

Add the theme and script to `<head>` in `Components/App.razor`:

```html
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
<script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
```

### Step 3: Bind the Chart to the GraphQL service

Replace `Components/Pages/Home.razor`. The `SfDataManager` component is placed inside `SfChart` and points to the GraphQL server URL. Update the port in `Url` to match the port printed when the server starts.

```cshtml
@page "/"
@rendermode InteractiveServer

<SfChart Title="Monthly Sales Revenue">
    <SfDataManager Url="https://localhost:7140/graphql"
                   GraphQLAdaptorOptions="@AdaptorOptions"
                   Adaptor="Adaptors.GraphQLAdaptor">
    </SfDataManager>

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category" Title="Month"></ChartPrimaryXAxis>
    <ChartPrimaryYAxis Title="Revenue" Minimum="0" Maximum="2500" Interval="500"></ChartPrimaryYAxis>
    <ChartTooltipSettings Enable="true"></ChartTooltipSettings>
    
    <ChartSeriesCollection>
        <ChartSeries XName="month" YName="revenue" Name="Revenue" Type="ChartSeriesType.Line">
            <ChartMarker Visible="true" Width="10" Height="10"></ChartMarker>
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private GraphQLAdaptorOptions AdaptorOptions { get; set; } = new GraphQLAdaptorOptions
    {
        Query = @"query sales($dataManager: DataManagerRequestInput!) {
                    sales(dataManager: $dataManager) {
                        count
                        result { month revenue }
                    }
                  }",
        ResolverName = "Sales"
    };
}
```

`XName` and `YName` use the camelCase field names returned by the GraphQL response.

### Step 4: Run the application

Start the GraphQL server first, then run the Blazor app.

```
dotnet run
```

The chart displays the monthly revenue loaded from the GraphQL service. In the browser developer tools, the Network tab shows a `POST` request to `/graphql` returning `200 OK`.

## Troubleshooting

**Chart is empty**

- Confirm the `ResolverName` matches the resolver, ignoring the casing of the first letter (`Sales` and `sales`).
- Confirm the fields requested in `Query` match the fields used in `XName` and `YName`.

**Variable `$dataManager` is not defined or has an unknown type**

Register the `DataManagerRequestInputType` input type on the server as shown above, and keep the variable type in `Query` as `DataManagerRequestInput!`.

**`The type or namespace name 'DataResult' could not be found`**

`DataResult` is in the `Syncfusion.Blazor.Data` namespace. Either add `using Syncfusion.Blazor.Data;` or use the `SalesResult` class from Step 2, which this sample uses.

**`The required input field 'skip' is missing`**

The adaptor sends `Skip` and `Take` in PascalCase. Keep the explicit `.Name("Skip")` mappings in `DataManagerRequestInputType`.

**`KeyNotFoundException` while rendering the series**

`XName` and `YName` must match the field names in the response (`month`, `revenue`), which are camelCase.

**CORS error**

Allow the Blazor application origin in the GraphQL server CORS policy.

## See also

- [Blazor Chart Working with Data](https://help.syncfusion.com/chart-sdk/blazor/charts/working-with-data)
- [Blazor DataManager GraphQL Adaptor](https://blazor.syncfusion.com/documentation/data/adaptors#graphql-adaptor)
