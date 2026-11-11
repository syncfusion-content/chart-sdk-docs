---
layout: post
title: Blazor Chart with Web API Adaptor | Syncfusion
description: Learn how to bind remote data from an ASP.NET Core Web API to the Syncfusion Blazor Chart component using SfDataManager and WebApiAdaptor.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Web API Adaptor in Blazor Chart

The `WebApiAdaptor` in Syncfusion Blazor [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html) binds the Chart component to a Web API endpoint that understands OData-style query parameters such as `$skip`, `$top`, `$orderby`, and `$filter`. The Chart requests the data with a `GET` call, and the Web API returns the records as a JSON array.

## When to use WebApiAdaptor

Use `WebApiAdaptor` when:

- The backend is an ASP.NET Core Web API or a similar service that responds to `GET` requests.
- The API can read OData-style query parameters sent in the URL.
- You want the server to handle paging, sorting, or filtering for large chart data.

In this guide, the Blazor Chart gets monthly sales data from an ASP.NET Core Web API. The Blazor front end and the Web API are kept in a single ASP.NET Core project, so the Razor component and the controller share the same origin and no CORS configuration is needed.

## Project structure

```
BlazorChartWebApiAdaptor/
|-- Components/
|   |-- App.razor                       # Syncfusion theme and script references
|   |-- _Imports.razor                  # Global using directives
|   `-- Pages/
|       `-- Home.razor                  # Blazor Chart with WebApiAdaptor
|-- Controllers/
|   `-- SalesController.cs              # Web API endpoint for chart data
|-- Models/
|   `-- SalesData.cs                    # Sales data model
|-- Program.cs                          # Backend and Blazor configuration
`-- BlazorChartWebApiAdaptor.csproj
```

## Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later
- Visual Studio 2022 or Visual Studio Code
- A terminal (Command Prompt, PowerShell, or the Visual Studio Code terminal)

## Create the project

Run the following commands in a terminal to create a Blazor Web App and open its folder.

```
dotnet new blazor -n BlazorChartWebApiAdaptor -int Server -e
cd BlazorChartWebApiAdaptor
```

## Backend setup with ASP.NET Core Web API

### Step 1: Install the NuGet packages

Run the following commands inside the project folder.

```
dotnet add package Syncfusion.Blazor.Charts
dotnet add package Syncfusion.Blazor.Themes
```

### Step 2: Create the data model

Create a folder named `Models`, add a file named `SalesData.cs` to it, and paste the following code.

```csharp
namespace BlazorChartWebApiAdaptor.Models
{
    public class SalesData
    {
        public int Id { get; set; }
        public string Month { get; set; } = string.Empty;
        public double Sales { get; set; }
        public double Expenses { get; set; }
    }
}
```

### Step 3: Create the Web API controller

Create a folder named `Controllers`, add a file named `SalesController.cs` to it, and paste the following code. The `Get` action reads the `$skip` and `$top` values sent by the adaptor and returns the matching records.

```csharp
using BlazorChartWebApiAdaptor.Models;
using Microsoft.AspNetCore.Mvc;

namespace BlazorChartWebApiAdaptor.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private static readonly List<SalesData> SalesRecords = new()
        {
            new() { Id = 1, Month = "Jan", Sales = 35, Expenses = 20 },
            new() { Id = 2, Month = "Feb", Sales = 28, Expenses = 18 },
            new() { Id = 3, Month = "Mar", Sales = 34, Expenses = 22 },
            new() { Id = 4, Month = "Apr", Sales = 32, Expenses = 21 },
            new() { Id = 5, Month = "May", Sales = 40, Expenses = 26 },
            new() { Id = 6, Month = "Jun", Sales = 38, Expenses = 24 }
        };

        [HttpGet]
        public IActionResult Get()
        {
            IQueryable<SalesData> query = SalesRecords.AsQueryable();

            if (Request.Query.TryGetValue("$skip", out var skipValue) && int.TryParse(skipValue, out int skip))
            {
                query = query.Skip(skip);
            }

            if (Request.Query.TryGetValue("$top", out var topValue) && int.TryParse(topValue, out int top))
            {
                query = query.Take(top);
            }

            return Ok(query.ToList());
        }
    }
}
```

### Step 4: Configure services and endpoints

Open `Program.cs`, delete its content, and paste the following code. `PropertyNamingPolicy = null` keeps property names such as `Month` and `Sales` unchanged, so they match `XName` and `YName` in the Chart.

```csharp
using BlazorChartWebApiAdaptor.Components;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents().AddInteractiveServerComponents();
builder.Services.AddSyncfusionBlazor();

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapControllers();
app.MapRazorComponents<App>().AddInteractiveServerRenderMode();

app.Run();
```

## Frontend setup with Blazor Chart

### Step 1: Add the namespaces

Open `Components/_Imports.razor` and add the following lines at the end of the file.

```cshtml
@using Syncfusion.Blazor
@using Syncfusion.Blazor.Charts
@using Syncfusion.Blazor.Data
```

### Step 2: Add the theme and script

Open `Components/App.razor` and add the following lines inside the `<head>` element.

```html
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
<script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
```

### Step 3: Configure the Chart with WebApiAdaptor

Open `Components/Pages/Home.razor`, delete its content, and paste the following code. The `Url` must be absolute for server-side rendering, so it is built from [NavigationManager](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.components.navigationmanager).

```cshtml
@page "/"
@rendermode InteractiveServer
@inject NavigationManager Navigation

<SfChart Title="Monthly Sales and Expenses">
    <SfDataManager Url="@DataUrl" Adaptor="Adaptors.WebApiAdaptor"></SfDataManager>

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category" Title="Month"></ChartPrimaryXAxis>
    <ChartPrimaryYAxis Title="Amount"></ChartPrimaryYAxis>
    <ChartLegendSettings Visible="true"></ChartLegendSettings>
    <ChartTooltipSettings Enable="true"></ChartTooltipSettings>

    <ChartSeriesCollection>
        <ChartSeries XName="Month" YName="Sales" Name="Sales" Type="ChartSeriesType.Column"></ChartSeries>
        <ChartSeries XName="Month" YName="Expenses" Name="Expenses" Type="ChartSeriesType.Line"></ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private string DataUrl => Navigation.ToAbsoluteUri("api/sales").ToString();
}
```

The `SfDataManager` placed inside `SfChart` is shared by every series that does not define its own data source.

### Step 4: Run the application

```
dotnet run
```

Open the address printed in the terminal, such as `http://localhost:5xxx`. The Chart displays the monthly sales and expenses returned by the Web API. To check the API itself, open `/api/sales` on the same address. It returns a JSON array of the six records.

## Apply query operations

Assign a [Query](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.Query.html) to the `Query` property of `SfChart` to ask the server for a subset of the data. The adaptor converts the query into OData-style parameters on the request URL.

For example, the following query requests the first four records.

```cshtml
<SfChart Query="@ChartQuery" Title="Monthly Sales and Expenses">
    ...
</SfChart>

@code {
    private Query ChartQuery = new Query().Take(4);
}
```

The Web API receives the following request, and the Chart displays January to April.

```
GET /api/sales?$skip=0&$top=4
```

Sorting and filtering are sent in the same way. For example, `new Query().Sort("Sales", "descending")` adds `$orderby=Sales desc` and `new Query().Where("Sales", "greater than", 30)` adds `$filter=Sales gt 30`. The controller in this guide handles only `$skip` and `$top`, so add the matching logic to the `Get` action to apply sorting and filtering on the server.

## Troubleshooting

**The Chart is empty or the page shows an error**

Open `/api/sales` in the browser and confirm that it returns a JSON array. Then check that `DataUrl` in `Home.razor` resolves to `api/sales`.

**The Chart shows no data points but no error appears**

`XName` and `YName` must match the property names in the JSON response exactly. Confirm that `PropertyNamingPolicy = null` is set in `Program.cs`.

**`The given key was not present in the dictionary`**

This error appears when the JSON property names are in camel case (`month`) while the Chart uses `Month`. Set `PropertyNamingPolicy = null` in `Program.cs`.

**The query has no effect**

Set the `Query` on `SfChart` when `SfDataManager` is declared inside the Chart. A `Query` set on an individual series is not used in this case.

## See also

- [Blazor Chart Working with Data](https://help.syncfusion.com/chart-sdk/blazor/charts/working-with-data)
- [Blazor DataManager Web API Adaptor](https://blazor.syncfusion.com/documentation/data/adaptors#web-api-adaptor)
