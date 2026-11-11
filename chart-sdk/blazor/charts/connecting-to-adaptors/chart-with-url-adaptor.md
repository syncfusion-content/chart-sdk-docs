---
layout: post
title: Blazor Chart with URL Adaptor | Syncfusion
description: Learn how to connect a database to the Syncfusion Blazor Chart component using SfDataManager and UrlAdaptor with an ASP.NET Core Web API backend.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Custom REST API remote data binding in Blazor Chart using UrlAdaptor

The `UrlAdaptor` in Syncfusion Blazor [`SfDataManager`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html) allows the Chart component to bind data from a custom REST API. This approach is useful when chart data is stored in a database and should be retrieved through a backend service instead of being hard-coded in the Blazor application.

In this example, the Blazor Chart gets monthly sales data from an ASP.NET Core Web API. The API reads data from a SQLite database and returns the response in the format expected by `UrlAdaptor`. The Blazor front-end project and the Web API project are kept in a single ASP.NET Core host so the Razor component and the controller share the same origin.

## Project structure

```
BlazorChartUrlAdaptor/
|-- Components/
|   |-- App.razor                       # Syncfusion theme and script references
|   |-- _Imports.razor                  # Global using directives
|   `-- Pages/
|       `-- Home.razor                  # Blazor Chart with UrlAdaptor
|-- Controllers/
|   `-- SalesController.cs              # API endpoint for chart data
|-- Data/
|   `-- AppDbContext.cs                 # EF Core database context
|-- Models/
|   `-- SalesRecord.cs                  # Sales data model
|-- Program.cs                          # Backend and Blazor configuration
`-- BlazorChartUrlAdaptor.csproj
```

## Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later
- Visual Studio 2022 or Visual Studio Code
- A terminal (Command Prompt, PowerShell, or the Visual Studio Code terminal)

| Package | Version |
| --- | --- |
| `Microsoft.EntityFrameworkCore.Sqlite` | `8.0.0` |
| `Syncfusion.Blazor.Charts` | Latest |
| `Syncfusion.Blazor.Themes` | Latest |

## Create the project


```
dotnet new blazor -n BlazorChartUrlAdaptor -int Server -e
cd BlazorChartUrlAdaptor
```

## Backend setup with ASP.NET Core Web API

### Step 1: Install required NuGet packages

Run the following commands inside the project folder.

```
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 8.0.0
dotnet add package Syncfusion.Blazor.Charts
dotnet add package Syncfusion.Blazor.Themes
```

### Step 2: Create the chart data model

Create a folder named `Models`, add a file named `SalesRecord.cs` to it, and paste the following code.

```csharp
using System.ComponentModel.DataAnnotations;

namespace BlazorChartUrlAdaptor.Models
{
    public class SalesRecord
    {
        [Key]
        public int Id { get; set; }

        public string Month { get; set; } = string.Empty;

        public double Sales { get; set; }

        public double Expenses { get; set; }
    }
}
```

### Step 3: Create the database context

Create a folder named `Data`, add a file named `AppDbContext.cs` to it, and paste the following code.

```csharp
using BlazorChartUrlAdaptor.Models;
using Microsoft.EntityFrameworkCore;

namespace BlazorChartUrlAdaptor.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<SalesRecord> SalesRecords => Set<SalesRecord>();
    }
}
```

### Step 4: Create the API controller

Create a folder named `Controllers`, add a file named `SalesController.cs` to it, and paste the following code.

```csharp
using BlazorChartUrlAdaptor.Data;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Blazor;

namespace BlazorChartUrlAdaptor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public object Post([FromBody] DataManagerRequest dm)
        {
            var dataSource = _context.SalesRecords.AsQueryable();

            int count = dataSource.Count();

            if (dm.Skip > 0)
            {
                dataSource = dataSource.Skip(dm.Skip);
            }
            if (dm.Take > 0)
            {
                dataSource = dataSource.Take(dm.Take);
            }

            return new
            {
                result = dataSource.ToList(),
                count = count
            };
        }
    }
}
```

The `Post` action receives the `DataManagerRequest` sent by [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html). Paging values (`Skip`, `Take`) are applied here, and the response uses the structure expected by `UrlAdaptor`:

```json
{
  "result": [
    { "Id": 1, "Month": "Jan", "Sales": 12000, "Expenses": 8000 }
  ],
  "count": 6
}
```

The `result` property contains the chart data and the `count` property contains the total number of records.

### Step 5: Configure services, endpoints, and sample data

Open `Program.cs`, delete its content, and paste the following code.

```csharp
using BlazorChartUrlAdaptor.Components;
using BlazorChartUrlAdaptor.Data;
using BlazorChartUrlAdaptor.Models;
using Microsoft.EntityFrameworkCore;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents().AddInteractiveServerComponents();
builder.Services.AddSyncfusionBlazor();

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=sales.db"));

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

SeedDatabase(app);

app.Run();

static void SeedDatabase(WebApplication app)
{
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    db.Database.EnsureCreated();

    if (!db.SalesRecords.Any())
    {
        db.SalesRecords.AddRange(
            new SalesRecord { Month = "Jan", Sales = 12000, Expenses = 8000 },
            new SalesRecord { Month = "Feb", Sales = 15000, Expenses = 9000 },
            new SalesRecord { Month = "Mar", Sales = 18000, Expenses = 11000 },
            new SalesRecord { Month = "Apr", Sales = 22000, Expenses = 13000 },
            new SalesRecord { Month = "May", Sales = 26000, Expenses = 15000 },
            new SalesRecord { Month = "Jun", Sales = 30000, Expenses = 17000 }
        );

        db.SaveChanges();
    }
}
```

`PropertyNamingPolicy = null` preserves property names such as `Month` and `Sales`, so they match `XName` and `YName`.

The `sales.db` file is created automatically the first time the application runs.

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

### Step 3: Configure the Chart with UrlAdaptor

Open `Components/Pages/Home.razor`, delete its content, and paste the following code. The `Url` must be absolute for server-side rendering, so it is built from [NavigationManager](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.components.navigationmanager).

```cshtml
@page "/"
@rendermode InteractiveServer
@inject NavigationManager Navigation

<SfChart Title="Monthly Sales Report">
    <SfDataManager Url="@DataUrl" Adaptor="Adaptors.UrlAdaptor"></SfDataManager>

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category" Title="Month"></ChartPrimaryXAxis>
    <ChartPrimaryYAxis Title="Amount" LabelFormat="${value}"></ChartPrimaryYAxis>
    <ChartLegendSettings Visible="true"></ChartLegendSettings>
    <ChartTooltipSettings Enable="true"></ChartTooltipSettings>

    <ChartSeriesCollection>
        <ChartSeries XName="Month" YName="Sales" Name="Sales" Type="ChartSeriesType.Column"></ChartSeries>
        <ChartSeries XName="Month" YName="Expenses" Name="Expenses" Type="ChartSeriesType.Column"></ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private string DataUrl => Navigation.ToAbsoluteUri("api/sales").ToString();
}
```

The `SfDataManager` placed inside `SfChart` is shared by every series that does not define its own data source. Each series maps `Month` to the X-axis and `Sales` or `Expenses` to the Y-axis.

### Step 4: Run the application

```
dotnet run
```

Open the address printed in the terminal, such as `http://localhost:5xxx`. The chart displays the monthly sales and expenses stored in the SQLite database.

## Troubleshooting

**Chart is not displayed**

Check that the application is running and that `DataUrl` in `Home.razor` resolves to `api/sales`.

**Empty chart**

Verify that the API returns data in the following format:

```json
{
  "result": [ ... ],
  "count": 6
}
```

Do not return only a plain array.

**Field names do not bind**

If the API returns PascalCase properties (`Month`, `Sales`, `Expenses`), use the same names in the chart configuration. If the API returns camelCase properties (`month`, `sales`, `expenses`), update the `XName` and `YName` values in `Home.razor` accordingly.

**Entity Framework Core namespace error**

If the `Microsoft.EntityFrameworkCore` namespace is not found, install the required EF Core packages and rebuild the application.

**Port Already in Use**

If the application fails to start with a "port already in use" error, change the URL in `Properties/launchSettings.json` under `applicationUrl`.

**Reset the sample data**

Stop the application, delete the `sales.db` file from the project folder, and run the application again.

## See also

- [Blazor Chart Working with Data](https://help.syncfusion.com/chart-sdk/blazor/charts/working-with-data)
- [Blazor DataManager Adaptors](https://blazor.syncfusion.com/documentation/data/adaptors)
