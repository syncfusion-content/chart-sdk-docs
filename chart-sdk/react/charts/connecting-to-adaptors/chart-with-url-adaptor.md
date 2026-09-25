---
layout: post
title: React Chart - URL Adaptor | Syncfusion
description: Learn how to connect a database to the Syncfusion React Chart component using DataManager and UrlAdaptor with an ASP.NET Core Web API backend.
platform: ej2-react
control: Chart
documentation: ug
domainurl: ##DomainURL##
---

# Custom REST API remote data binding in React Chart using UrlAdaptor

The `UrlAdaptor` in Syncfusion React `DataManager` allows the Chart component to bind data from a custom REST API. This approach is useful when chart data is stored in a database and should be retrieved through a backend service instead of being hard-coded in the React application.

In this example, the React Chart gets monthly sales data from an ASP.NET Core Web API. The API reads data from a SQLite database and returns the response in the format expected by `UrlAdaptor`.

## Project structure

```text
ReactChartUrlAdaptor/
|-- client/                         # React frontend application
|   |-- src/
|   |   |-- App.css                 # Syncfusion and custom styles
|   |   `-- App.jsx                 # React Chart with UrlAdaptor
|   `-- package.json
|
`-- server/                         # ASP.NET Core Web API backend
    |-- Controllers/
    |   `-- SalesController.cs      # API endpoint for chart data
    |-- Data/
    |   `-- AppDbContext.cs         # EF Core database context
    |-- Models/
    |   `-- SalesRecord.cs          # Sales data model
    |-- Program.cs                  # Backend configuration
    `-- server.csproj
```

## Prerequisites

Install the following tools before starting:

- Visual Studio Code
- Node.js 18 or later
- npm
- .NET SDK 9.0 or later
- SQLite database provider through Entity Framework Core

The backend project uses the following NuGet package versions:

| Package | Version |
| --- | --- |
| `Microsoft.EntityFrameworkCore.Sqlite` | `9.0.0` |
| `Microsoft.EntityFrameworkCore.Design` | `9.0.0` |
| `Syncfusion.EJ2.AspNet.Core` | `33.2.8` |

## Create the project in Visual Studio Code

Open Visual Studio Code and create a root project folder.

```bash
mkdir ReactChartUrlAdaptor
cd ReactChartUrlAdaptor
mkdir server
mkdir client
```

## Backend setup with ASP.NET Core Web API

The backend API reads chart data from the database and returns it to the React Chart through an API endpoint.

### Step 1: Create the ASP.NET Core Web API project

Navigate to the `server` folder and create a Web API project.

```bash
cd server
dotnet new webapi
```

### Step 2: Install required NuGet packages

Install the required packages in the `server` project. The `Syncfusion.EJ2.AspNet.Core` package is required because it provides the `DataManagerRequest` type used by the controller.

```bash
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.0
dotnet add package Syncfusion.EJ2.AspNet.Core
```

> **Note:** If the project targets `.NET 9`, do not install `Microsoft.AspNetCore.Mvc.NewtonsoftJson` version `10.x`, because it targets `.NET 10`. This example uses the default ASP.NET Core JSON configuration instead.

### Step 3: Create the chart data model

Create the following file:

```text
server/Models/SalesRecord.cs
```

```csharp
using System.ComponentModel.DataAnnotations;

namespace server.Models
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

This model represents the data displayed in the chart.

### Step 4: Create the database context

Create the following file:

```text
server/Data/AppDbContext.cs
```

```csharp
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
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

The database context is used by Entity Framework Core to access the `SalesRecords` table.

### Step 5: Configure database, CORS, and sample data

Open the following file:

```text
server/Program.cs
```

Replace the existing content with the following code.

```csharp
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=sales.db"));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors();

app.MapControllers();

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

The `PropertyNamingPolicy = null` setting preserves property names such as `Month`, `Sales`, and `Expenses`. This allows the React Chart field names to match the API response.

> **Note:** On the first run, `sales.db` is created inside the running launch profile folder (for example `server/bin/Debug/net9.0/`). Delete this file to reset the seed data.

CORS is enabled because the React frontend and the ASP.NET Core backend usually run on different ports during development.

### Step 6: Create the API controller

Create the following file:

```text
server/Controllers/SalesController.cs
```

```csharp
using Microsoft.AspNetCore.Mvc;
using server.Data;
using Syncfusion.EJ2.Base;

namespace server.Controllers
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

            return new
            {
                result = dataSource.ToList(),
                count = count
            };
        }

        [HttpGet]
        public object Get()
        {
            var dataSource = _context.SalesRecords.ToList();

            return new
            {
                result = dataSource,
                count = dataSource.Count
            };
        }
    }
}
```

The `Post` action receives the `DataManagerRequest` from the Syncfusion `DataManager`. The API returns the data in the following structure:

```json
{
  "result": [
    {
      "Id": 1,
      "Month": "Jan",
      "Sales": 12000,
      "Expenses": 8000
    }
  ],
  "count": 6
}
```

The `result` property contains the chart data, and the `count` property contains the total number of records.

### Step 7: Run the backend application

Run the following commands from the `server` folder.

```bash
dotnet clean
dotnet restore
dotnet build
dotnet run
```

The backend application runs on a URL similar to:

```text
http://localhost:5150
```

The chart data endpoint is:

```text
http://localhost:5150/api/sales
```

Keep the backend running while configuring and testing the React Chart.

## Frontend setup with React Chart

The frontend application uses the Syncfusion React Chart component and binds the chart data through `DataManager` with `UrlAdaptor`.

### Step 1: Create the React application

Open a new terminal from the project root folder and create the React application in the `client` folder.

```bash
cd client
npm create vite@latest . -- --template react
npm install
```

### Step 2: Install Syncfusion React packages

Install the required Syncfusion packages in the `client` project.

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

### Step 3: Configure React Chart with UrlAdaptor

Open the following file:

```text
client/src/App.jsx
```

Replace the existing content with the following code.

```jsx
import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Legend,
  Tooltip
} from '@syncfusion/ej2-react-charts';

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

import './App.css';

function App() {
  const chartData = new DataManager({
    url: 'http://localhost:5150/api/sales',
    adaptor: new UrlAdaptor()
  });

  const primaryXAxis = {
    valueType: 'Category',
    title: 'Month'
  };

  const primaryYAxis = {
    title: 'Amount',
    labelFormat: '${value}'
  };

  const tooltip = {
    enable: true
  };

  return (
    <div className="app-container">
      <div className="chart-card">
        <h2>Sales and Expenses Chart</h2>

        <ChartComponent
          id="sales-chart"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          tooltip={tooltip}
          title="Monthly Sales Report"
        >
          <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartData}
              xName="Month"
              yName="Sales"
              name="Sales"
              type="Column"
            />

            <SeriesDirective
              dataSource={chartData}
              xName="Month"
              yName="Expenses"
              name="Expenses"
              type="Column"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default App;
```

In the above example, `DataManager` uses `UrlAdaptor` to access the `/api/sales` endpoint. The `Month` field is mapped to the X-axis. The `Sales` and `Expenses` fields are mapped to two column series.

> **Note:** If the backend runs on a different port, update the `url` value in `client/src/App.jsx`.

### Step 4: Run the React Application

Start the Vite dev server. The first run installs dependencies from `package.json`.

```bash
npm run dev
```

Open the URL printed by Vite (default `http://localhost:5173`) in the browser. The chart displays monthly sales and expenses data from the SQLite database.

### Step 5: Apply Query to Chart Data (Optional)

You can use the Syncfusion `Query` class with `DataManager` to request a limited set of records from the backend.

Update the import in `client/src/App.jsx`.

```jsx
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';
```

Then attach a query to the chart series.

```jsx
<SeriesDirective
  dataSource={chartData}
  query={new Query().take(5)}
  xName="Month"
  yName="Sales"
  name="Sales"
  type="Column"
/>
```

When using query operations, the backend can read the `DataManagerRequest` values and process operations such as `Take`, `Skip`, sorting, or filtering before returning the response.

## Troubleshooting

**Chart is not displayed**

Check whether the backend API is running and whether the URL in `client/src/App.jsx` is correct: `http://localhost:5150/api/sales`.

**Empty chart**

Verify that the API returns data in the following format:

```json
{
  "result": [ ... ],
  "count": 6
}
```

Do not return only a plain array.

**CORS error**

If the browser blocks the request, verify that CORS is configured in `server/Program.cs`. The backend should allow requests from the frontend development URL.

**Field names do not bind**

If the API returns PascalCase properties (`Month`, `Sales`, `Expenses`), use the same names in the chart configuration. If the API returns camelCase properties (`month`, `sales`, `expenses`), update the `xName` and `yName` values in `client/src/App.jsx` accordingly.

**Entity Framework Core namespace error**

If the `Microsoft.EntityFrameworkCore` namespace is not found, install the required EF Core packages in the `server` project and rebuild the application.

**AddNewtonsoftJson Error**

If `AddNewtonsoftJson` is not found, remove Newtonsoft JSON configuration and use the default ASP.NET Core JSON configuration in `server/Program.cs`.

**Port Already in Use**

If the backend fails to start with a "port already in use" error, change the URL in `server/Properties/launchSettings.json` under `applicationUrl` and update `url` in `client/src/App.jsx` to match.

**sales.db File Location**

`EnsureCreated` puts `sales.db` inside the running launch profile folder (for example `server/bin/Debug/net9.0/`). Delete this file to reset the seed data.

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToAdaptors/ReactChartUrlAdaptor) repository.

## See also

- [React Chart Remote Data Binding](https://react.syncfusion.com/react-ui/charts/data-binding/remote-data/)
- [React DataManager with UrlAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor)
