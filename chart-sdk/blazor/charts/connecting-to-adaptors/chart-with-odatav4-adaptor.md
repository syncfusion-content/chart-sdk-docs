---
layout: post
title: Blazor Chart with ODataV4 Adaptor | Syncfusion
description: Learn how to connect the Syncfusion Blazor Chart component to an OData V4 service using SfDataManager and ODataV4Adaptor in an ASP.NET Core backend.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Using ODataV4Adaptor with the Blazor Chart

The `ODataV4Adaptor` in Syncfusion Blazor [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html) connects the Chart component to an OData V4 service. It sends OData-formatted requests, reads the OData response, and lets the service handle filtering, sorting, and paging.

In this guide, the Blazor Chart displays order amounts from an ASP.NET Core OData V4 service. The Blazor front end and the OData service are kept in a single ASP.NET Core project, so the Razor component and the controller share the same origin and no CORS configuration is needed.

## Project structure

```
BlazorChartODataV4Adaptor/
|-- Components/
|   |-- App.razor                       # Syncfusion theme and script references
|   |-- _Imports.razor                  # Global using directives
|   `-- Pages/
|       `-- Home.razor                  # Blazor Chart with ODataV4Adaptor
|-- Controllers/
|   `-- OrdersController.cs             # OData endpoint for chart data
|-- Models/
|   `-- Order.cs                        # Order data model
|-- Program.cs                          # OData and Blazor configuration
`-- BlazorChartODataV4Adaptor.csproj
```

## Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0) or later
- Visual Studio 2022 or Visual Studio Code
- A terminal (Command Prompt, PowerShell, or the Visual Studio Code terminal)

## Create the project

Run the following commands in a terminal to create a Blazor Web App and open its folder.

```
dotnet new blazor -n BlazorChartODataV4Adaptor -int Server -e
cd BlazorChartODataV4Adaptor
```

## Backend setup with ASP.NET Core OData

### Step 1: Install the NuGet packages

Run the following commands inside the project folder.

```
dotnet add package Syncfusion.Blazor.Charts
dotnet add package Syncfusion.Blazor.Themes
dotnet add package Microsoft.AspNetCore.OData --version 9.4.1
```

### Step 2: Create the data model

Create a folder named `Models`, add a file named `Order.cs` to it, and paste the following code.

```csharp
using System.ComponentModel.DataAnnotations;

namespace BlazorChartODataV4Adaptor.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        public string CustomerID { get; set; } = string.Empty;
        public int Amount { get; set; }
        public string ShipCountry { get; set; } = string.Empty;
    }
}
```

### Step 3: Create the OData controller

Create a folder named `Controllers`, add a file named `OrdersController.cs` to it, and paste the following code. The `[EnableQuery]` attribute allows the endpoint to process query options such as `$top`, `$skip`, `$filter`, and `$orderby`.

```csharp
using BlazorChartODataV4Adaptor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace BlazorChartODataV4Adaptor.Controllers
{
    public class OrdersController : ODataController
    {
        private static readonly List<Order> Orders = new()
        {
            new() { OrderID = 1001, CustomerID = "VINET", Amount = 120, ShipCountry = "France" },
            new() { OrderID = 1002, CustomerID = "TOMSP", Amount = 180, ShipCountry = "Germany" },
            new() { OrderID = 1003, CustomerID = "HANAR", Amount = 250, ShipCountry = "Brazil" },
            new() { OrderID = 1004, CustomerID = "VICTE", Amount = 310, ShipCountry = "France" },
            new() { OrderID = 1005, CustomerID = "SUPRD", Amount = 400, ShipCountry = "Belgium" },
            new() { OrderID = 1006, CustomerID = "RICSU", Amount = 230, ShipCountry = "Switzerland" }
        };

        [EnableQuery]
        public IActionResult Get()
        {
            return Ok(Orders);
        }
    }
}
```

### Step 4: Configure OData and Blazor

Open `Program.cs`, delete its content, and paste the following code.

```csharp
using BlazorChartODataV4Adaptor.Components;
using BlazorChartODataV4Adaptor.Models;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents().AddInteractiveServerComponents();
builder.Services.AddSyncfusionBlazor();

var modelBuilder = new ODataConventionModelBuilder();
modelBuilder.EntitySet<Order>("Orders");

builder.Services.AddControllers().AddOData(options =>
{
    options.Select().Filter().OrderBy().Expand().Count().SetMaxTop(100);
    options.AddRouteComponents("odata", modelBuilder.GetEdmModel());
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

The OData endpoint is available at `/odata/Orders` on the address where the application runs.

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

### Step 3: Configure the Chart with ODataV4Adaptor

Open `Components/Pages/Home.razor`, delete its content, and paste the following code. The `Url` must be absolute for server-side rendering, so it is built from [NavigationManager](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.components.navigationmanager).

```cshtml
@page "/"
@rendermode InteractiveServer
@inject NavigationManager Navigation

<SfChart Title="Order Amount by Customer">
    <SfDataManager Url="@DataUrl" Adaptor="Adaptors.ODataV4Adaptor"></SfDataManager>

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category" Title="Customer"></ChartPrimaryXAxis>
    <ChartPrimaryYAxis Title="Amount"></ChartPrimaryYAxis>
    <ChartLegendSettings Visible="true"></ChartLegendSettings>
    <ChartTooltipSettings Enable="true"></ChartTooltipSettings>

    <ChartSeriesCollection>
        <ChartSeries XName="CustomerID" YName="Amount" Name="Orders" Type="ChartSeriesType.Column"></ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private string DataUrl => Navigation.ToAbsoluteUri("odata/Orders").ToString();
}
```

The `SfDataManager` placed inside `SfChart` is shared by every series that does not define its own data source. The `ODataV4Adaptor` handles the request and response format, and the series maps `CustomerID` to the X-axis and `Amount` to the Y-axis.

### Step 4: Run the application

```
dotnet run
```

Open the address printed in the terminal, such as `http://localhost:5xxx`. The Chart displays the order amount for each customer. To check the endpoint itself, open `/odata/Orders` on the same address. It returns the orders in the OData `value` array.

## Apply query operations

Assign a [Query](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.Query.html) to the `Query` property of `SfChart` to filter, sort, or limit the data on the server. The adaptor converts the query into OData parameters, and the `[EnableQuery]` attribute applies them.

For example, the following query shows the four largest orders that are above 200.

```cshtml
<SfChart Query="@ChartQuery" Title="Order Amount by Customer">
    ...
</SfChart>

@code {
    private Query ChartQuery = new Query()
        .Where("Amount", "greaterthan", 200)
        .Sort("Amount", "descending")
        .Take(4);
}
```

The service receives the following request, and the Chart displays `SUPRD`, `VICTE`, `HANAR`, and `RICSU`.

```
GET /odata/Orders?$orderby=Amount desc&$filter=Amount gt 200&$skip=0&$top=4
```

## Troubleshooting

**The Chart is empty or the page shows an error**

Open `/odata/Orders` in the browser and confirm that it returns a JSON response with a `value` array. Then check that `DataUrl` in `Home.razor` resolves to `odata/Orders`.

**The Chart shows no data points but no error appears**

`XName` and `YName` must match the property names in the response exactly. The OData service keeps the property names from the model, such as `CustomerID` and `Amount`.

**`/odata/Orders` returns 404**

Confirm that the entity set name in `modelBuilder.EntitySet<Order>("Orders")` matches the controller name `OrdersController`, and that the route prefix in `AddRouteComponents("odata", ...)` is `odata`.

**The query has no effect**

Set the `Query` on `SfChart` when `SfDataManager` is declared inside the Chart. A `Query` set on an individual series is not used in this case.

## See also

- [Blazor Chart Working with Data](https://help.syncfusion.com/chart-sdk/blazor/charts/working-with-data)
- [Blazor DataManager OData V4 Adaptor](https://blazor.syncfusion.com/documentation/data/adaptors#odatav4-adaptor)
