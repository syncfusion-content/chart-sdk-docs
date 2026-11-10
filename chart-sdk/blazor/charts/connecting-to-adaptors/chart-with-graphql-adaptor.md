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

The `GraphQLAdaptor` in Syncfusion Blazor [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html) lets the Chart component read its data from a GraphQL service. The Chart sends a GraphQL query to the service, and the service returns the records that the Chart plots.

This guide creates two applications:

| Application | Purpose |
| --- | --- |
| `ChartGraphQLServer` | A GraphQL service, built with HotChocolate, that returns monthly revenue data. |
| `BlazorChartGraphQL` | A Blazor Web App that displays the data in a Chart. |

## Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0) or later
- Visual Studio 2022 or Visual Studio Code
- A terminal (Command Prompt, PowerShell, or the Visual Studio Code terminal)

## Create the GraphQL service

### Step 1: Create the project and install packages

Run the following commands to create a new web project and add the required packages.

```
dotnet new web -n ChartGraphQLServer
cd ChartGraphQLServer
dotnet add package HotChocolate.AspNetCore
dotnet add package Syncfusion.Blazor.Data
```

### Step 2: Create the data model

Create a folder named `Models`, add a file named `SalesData.cs` to it, and paste the following code.

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

### Step 3: Create the query

Add a file named `Query.cs` to the project folder and paste the following code. The `Sales` method receives the request sent by the Chart, applies paging, and returns a `DataResult<SalesData>` that contains the records and their total count.

`DataResult<T>` and `DataManagerRequest` are provided by the `Syncfusion.Blazor.Data` and `Syncfusion.Blazor` namespaces, so both `using` lines are required.

```csharp
using ChartGraphQLServer.Models;
using Syncfusion.Blazor;
using Syncfusion.Blazor.Data;

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

        public DataResult<SalesData> Sales(DataManagerRequest dataManager)
        {
            IEnumerable<SalesData> result = Data;
            int count = Data.Count;

            if (dataManager.Skip > 0)
            {
                result = result.Skip(dataManager.Skip);
            }
            if (dataManager.Take > 0)
            {
                result = result.Take(dataManager.Take);
            }

            return new DataResult<SalesData> { Result = result.ToList(), Count = count };
        }
    }
}
```

The method name `Sales` becomes the GraphQL field name. The Chart refers to it later through `ResolverName`.

### Step 4: Describe the types to GraphQL

GraphQL needs a description of the request and result types before it can publish them. Add a file named `GraphQLTypes.cs` and paste the following code.

```csharp
using ChartGraphQLServer.Models;
using HotChocolate.Types;
using Syncfusion.Blazor;
using Syncfusion.Blazor.Data;

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

    public class SalesDataResultType : ObjectType<DataResult<SalesData>>
    {
        protected override void Configure(IObjectTypeDescriptor<DataResult<SalesData>> descriptor)
        {
            descriptor.Name("SalesDataResult");
            descriptor.BindFieldsExplicitly();
            descriptor.Field(f => f.Count);
            descriptor.Field(f => f.Result).Type<ListType<ObjectType<SalesData>>>();
        }
    }
}
```

### Step 5: Register the GraphQL endpoint

Open `Program.cs`, delete its content, and paste the following code.

```csharp
using ChartGraphQLServer;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddType<DataManagerRequestInputType>()
    .AddType<SalesDataResultType>();

var app = builder.Build();

app.MapGraphQL();

app.Run();
```

### Step 6: Run the GraphQL service

Run the service on port 5100 and keep this terminal open.

```
dotnet run --urls http://localhost:5100
```

The GraphQL endpoint is now available at `http://localhost:5100/graphql`.

## Create the Blazor Chart

Open a **new** terminal window for the following steps, so the GraphQL service keeps running.

### Step 1: Create the Blazor Web App

```
dotnet new blazor -n BlazorChartGraphQL -int Server -e
cd BlazorChartGraphQL
dotnet add package Syncfusion.Blazor.Charts
dotnet add package Syncfusion.Blazor.Themes
```

### Step 2: Register Syncfusion Blazor

Open `Program.cs`. Add the following line at the top of the file.

```csharp
using Syncfusion.Blazor;
```

Then add the following line immediately after `var builder = WebApplication.CreateBuilder(args);`.

```csharp
builder.Services.AddSyncfusionBlazor();
```

Open `Components/_Imports.razor` and add the following lines at the end of the file.

```cshtml
@using Syncfusion.Blazor
@using Syncfusion.Blazor.Charts
@using Syncfusion.Blazor.Data
```

Open `Components/App.razor` and add the following lines inside the `<head>` element.

```html
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
<script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
```

### Step 3: Bind the Chart to the GraphQL service

Open `Components/Pages/Home.razor`, delete its content, and paste the following code.

The [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html) component is placed inside `SfChart`. It connects the Chart to the service:

| Property | Value | Description |
| --- | --- | --- |
| `Url` | `http://localhost:5100/graphql` | Address of the GraphQL endpoint. |
| `Adaptor` | `Adaptors.GraphQLAdaptor` | Tells the data manager to communicate using GraphQL. |
| `GraphQLAdaptorOptions` | `AdaptorOptions` | Holds the GraphQL query and the name of the field that returns the data. |

The series does not need its own data source. It uses the `SfDataManager` declared in the Chart, and `XName` and `YName` match the field names returned by the service (`month` and `revenue`).

```cshtml
@page "/"
@rendermode InteractiveServer

<SfChart Title="Monthly Sales Revenue">
    <SfDataManager Url="http://localhost:5100/graphql"
                   GraphQLAdaptorOptions="@AdaptorOptions"
                   Adaptor="Adaptors.GraphQLAdaptor">
    </SfDataManager>

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category" Title="Month"></ChartPrimaryXAxis>
    <ChartPrimaryYAxis Title="Revenue"></ChartPrimaryYAxis>
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

`GraphQLAdaptorOptions` has two properties used here:

| Property | Description |
| --- | --- |
| `Query` | The GraphQL query sent to the service. The `$dataManager` variable is filled automatically by the data manager. |
| `ResolverName` | The name of the query field that returns the data. It must match the `Sales` method created in the service. |

### Step 4: Run the application

```
dotnet run
```

Open the address printed in the terminal, such as `http://localhost:5xxx`. The Chart displays the monthly revenue returned by the GraphQL service.

## Troubleshooting

**The Chart is empty or the page shows an error**

Confirm that the GraphQL service is still running and that the `Url` in `Home.razor` matches its address.

**`The type or namespace name 'DataResult' could not be found`**

Add `using Syncfusion.Blazor.Data;` to `Query.cs`.

**The service fails to start with `There is no object type implementing interface IEnumerable`**

Make sure `GraphQLTypes.cs` was added and both types are registered with `AddType` in `Program.cs`.

**The Chart shows no data points but no error appears**

`XName` and `YName` must use the same names as the fields in the query, which are in camel case (`month`, `revenue`).

## See also

- [Blazor Chart Working with Data](https://help.syncfusion.com/chart-sdk/blazor/charts/working-with-data)
- [Blazor DataManager GraphQL Adaptor](https://blazor.syncfusion.com/documentation/data/adaptors#graphql-adaptor)
