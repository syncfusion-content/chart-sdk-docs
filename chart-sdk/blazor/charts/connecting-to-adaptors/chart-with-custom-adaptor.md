---
layout: post
title: Blazor Chart with Custom Adaptor | Syncfusion
description: Learn how to connect the Syncfusion Blazor Chart component to any data source using SfDataManager and a custom adaptor derived from DataAdaptor.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Custom Remote Data Binding in Blazor Chart

A custom adaptor gives complete control over how the Blazor Chart reads data. It is a class that derives from `DataAdaptor` and is assigned to [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html). Use it when the data comes from a service whose request or response format is not covered by the built-in adaptors, or when the data must be transformed before it is rendered.

## How the Chart uses a custom adaptor

1. The Chart creates a `Query` (or uses the one set on `ChartSeries.Query`).
2. `SfDataManager` converts the query to a `DataManagerRequest` and calls the `ReadAsync` method of the custom adaptor.
3. The adaptor returns the list of records to render.
4. The Chart maps `XName` and `YName` on each record.

## Project structure

```
BlazorChartCustomAdaptor/
|-- Components/
|   |-- App.razor                       # Syncfusion theme and script references
|   |-- _Imports.razor                  # Global using directives
|   `-- Pages/
|       `-- Home.razor                  # Blazor Chart with the custom adaptor
|-- Data/
|   `-- SalesAdaptor.cs                 # Custom adaptor deriving from DataAdaptor
|-- Models/
|   `-- SalesData.cs                    # Sales data model
|-- Program.cs                          # Blazor and Syncfusion configuration
`-- BlazorChartCustomAdaptor.csproj
```

## Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later
- Visual Studio 2022 or Visual Studio Code
- A terminal (Command Prompt, PowerShell, or the Visual Studio Code terminal)

## Create the project

```
dotnet new blazor -n BlazorChartCustomAdaptor -int Server -e
cd BlazorChartCustomAdaptor
dotnet add package Syncfusion.Blazor.Charts
dotnet add package Syncfusion.Blazor.Themes
```

## Register Syncfusion Blazor

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

## Step 1: Create the data model

Create a folder named `Models`, add a file named `SalesData.cs` to it, and paste the following code.

```csharp
namespace BlazorChartCustomAdaptor.Models
{
    public class SalesData
    {
        public string Month { get; set; } = string.Empty;
        public double Sales { get; set; }
    }
}
```

## Step 2: Create the custom adaptor

Create a folder named `Data`, add a file named `SalesAdaptor.cs` to it, and paste the following code. The adaptor overrides `ReadAsync`, which is the method used by the Chart to fetch data.

| Member | Purpose |
| --- | --- |
| `ReadAsync(DataManagerRequest, string key)` | Returns the data for the chart. Apply the requested data operations here. |
| `DataManagerRequest` | Carries the query operations such as `Skip`, `Take`, `Where` and `Sorted`. |
| `DataOperations` | Static helper that applies filtering, sorting and paging to an `IEnumerable`. |

```csharp
using BlazorChartCustomAdaptor.Models;
using Syncfusion.Blazor;
using Syncfusion.Blazor.Data;

namespace BlazorChartCustomAdaptor.Data
{
    public class SalesAdaptor : DataAdaptor
    {
        // Replace with a call to your own service or database.
        private static readonly List<SalesData> Source = new()
        {
            new() { Month = "Jan", Sales = 35 },
            new() { Month = "Feb", Sales = 28 },
            new() { Month = "Mar", Sales = 34 },
            new() { Month = "Apr", Sales = 32 },
            new() { Month = "May", Sales = 40 },
            new() { Month = "Jun", Sales = 32 }
        };

        public override Task<object> ReadAsync(DataManagerRequest dataManagerRequest, string key = null)
        {
            IEnumerable<SalesData> result = Source;
            if (dataManagerRequest.Where != null && dataManagerRequest.Where.Count > 0)
            {
                result = DataOperations.PerformFiltering(result, dataManagerRequest.Where, dataManagerRequest.Where[0].Operator);
            }
            if (dataManagerRequest.Sorted != null && dataManagerRequest.Sorted.Count > 0)
            {
                result = DataOperations.PerformSorting(result, dataManagerRequest.Sorted);
            }
            if (dataManagerRequest.Skip != 0)
            {
                result = DataOperations.PerformSkip(result, dataManagerRequest.Skip);
            }
            if (dataManagerRequest.Take != 0)
            {
                result = DataOperations.PerformTake(result, dataManagerRequest.Take);
            }

            return Task.FromResult((object)result.ToList());
        }
    }
}
```

Because the adaptor controls the whole read pipeline, it can also add headers to an `HttpClient` request, call a non-standard endpoint, or reshape the response (for example, map `month_name` and `sales_amount` fields to `Month` and `Sales`) before returning the list.

## Step 3: Bind the Chart to the custom adaptor

In the code below, set `Adaptor="Adaptors.CustomAdaptor"` and point `AdaptorInstance` to the adaptor type. `SfDataManager` creates the instance with `Activator.CreateInstance`.

Open `Components/Pages/Home.razor`, delete its content, and paste the following code.

```cshtml
@page "/"
@rendermode InteractiveServer
@using BlazorChartCustomAdaptor.Data
@using Syncfusion.Blazor.Charts
@using Syncfusion.Blazor.Data

<SfChart Title="Monthly Sales Report">
    <SfDataManager AdaptorInstance="@typeof(SalesAdaptor)" Adaptor="Adaptors.CustomAdaptor"></SfDataManager>

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category" Title="Month"></ChartPrimaryXAxis>
    <ChartPrimaryYAxis Title="Sales Amount"></ChartPrimaryYAxis>
    <ChartTooltipSettings Enable="true"></ChartTooltipSettings>
    <ChartLegendSettings Visible="true"></ChartLegendSettings>

    <ChartSeriesCollection>
        <ChartSeries XName="Month" YName="Sales" Name="Sales" Type="ChartSeriesType.Column">
            <ChartMarker>
                <ChartDataLabel Visible="true"></ChartDataLabel>
            </ChartMarker>
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>
```

## Step 4: Run the application

```
dotnet run
```

Open the address printed in the terminal, such as `http://localhost:5xxx`. The Chart displays the monthly sales returned by the custom adaptor.

## Using services inside the adaptor

`AdaptorInstance` does not support dependency injection. If the adaptor needs services such as `HttpClient`, create it as a Razor component that derives from `DataAdaptor`. Add a file named `Data/SalesComponentAdaptor.razor` and paste the following code.

```cshtml
@inherits DataAdaptor
@using BlazorChartCustomAdaptor.Models
@using Syncfusion.Blazor
@using Syncfusion.Blazor.Data
@inject HttpClient Http

@code {
    public override async Task<object> ReadAsync(DataManagerRequest dataManagerRequest, string key = null)
    {
        // Call your own service through the injected client.
        // var items = await Http.GetFromJsonAsync<List<SalesData>>("https://your-service/api/sales");
        await Task.CompletedTask;
        return new List<SalesData>
        {
            new() { Month = "Jan", Sales = 10 },
            new() { Month = "Feb", Sales = 20 }
        };
    }
}
```

Then place the component inside `SfDataManager` in `Home.razor`.

```cshtml
<SfDataManager Adaptor="Adaptors.CustomAdaptor">
    <SalesComponentAdaptor></SalesComponentAdaptor>
</SfDataManager>
```

## Apply a Query to the Chart

A `Query` assigned to the series is converted into the `DataManagerRequest` received by `ReadAsync`.

```cshtml
<ChartSeries Query="@ChartQuery" XName="Month" YName="Sales" Type="ChartSeriesType.Column"></ChartSeries>

@code {
    private Query ChartQuery = new Query().Take(5);
}
```

## Troubleshooting

**Chart is empty or throws an invalid cast exception**

Return a list or array of items from `ReadAsync`, not a `DataResult` or a single object.

**Query operations have no effect**

A custom adaptor must apply `Where`, `Sorted`, `Skip` and `Take` itself, as shown in `ReadAsync`.

**Injected services are null**

Use the component form of the adaptor instead of `AdaptorInstance`.

## See also

- [Blazor Chart Working with Data](https://help.syncfusion.com/chart-sdk/blazor/charts/working-with-data)
- [Blazor DataManager Custom Adaptor](https://blazor.syncfusion.com/documentation/data/adaptors#custom-adaptor)
