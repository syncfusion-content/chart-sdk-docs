---
layout: post
title: SQL Server Using Entity Framework in React Chart | Syncfusion
description: Learn how to bind SQL Server data to the Syncfusion React Chart component using ASP.NET Core Web API and Entity Framework Core.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# SQL Server Using Entity Framework in React Chart

The Syncfusion React Chart supports binding data from remote data sources. This documentation demonstrates how to connect a SQL Server database to the Syncfusion React Chart component using ASP.NET Core Web API and Entity Framework Core.

In this example, a simple monthly sales report is stored in SQL Server, exposed through an ASP.NET Core API, queried using Entity Framework Core, and rendered as a column chart in a React application.

## What is Entity Framework Core?

Entity Framework Core, also known as EF Core, is a lightweight, extensible, open-source ORM for .NET applications. It allows .NET developers to work with relational databases using C# classes instead of writing raw SQL queries for every operation.

In this Chart integration, EF Core is used to:

- Map a C# model to a SQL Server table.
- Query sales data from SQL Server.
- Seed initial chart records into the database.
- Expose chart data through an ASP.NET Core Web API endpoint.

## Why use EF Core with Syncfusion React Chart?

Using EF Core with Syncfusion React Chart provides a clean full-stack architecture for database-driven chart visualization.

```text
SQL Server Database
        ↓
Entity Framework Core DbContext
        ↓
ASP.NET Core Web API Controller
        ↓
React Fetch API / Syncfusion DataManager
        ↓
Syncfusion React Chart
```

This approach keeps the database connection secure on the server side and allows the React application to consume only API data.

## Architecture overview

This documentation demonstrates the following components for connecting SQL Server to Syncfusion React Chart:

- Creating a SQL Server database and seeding chart data
- Creating an ASP.NET Core Web API project
- Installing EF Core SQL Server packages
- Creating data models and DbContext for database access
- Configuring the connection string and database services
- Creating an API controller to expose chart data
- Creating a React application using Vite
- Installing Syncfusion React Chart packages
- Binding remote API data to the Chart component

## Prerequisites

Install the following software before creating the sample:

| Software / Package | Recommended version | Purpose |
|---|---:|---|
| Visual Studio Code | Latest | Development IDE |
| .NET SDK | 8.0 or later | Build and run ASP.NET Core Web API |
| Node.js | 18.0 or later | Run the React application |
| npm | 9.0 or later | Install React and Syncfusion packages |
| SQL Server / SQL Server Express / LocalDB | SQL Server 2019 or later | Store chart data |
| SQL Server Management Studio or Azure Data Studio | Latest | View and manage SQL Server database |
| Microsoft.EntityFrameworkCore | 9.0.0 or later | EF Core ORM package |
| Microsoft.EntityFrameworkCore.SqlServer | 9.0.0 or later | SQL Server provider for EF Core |
| Microsoft.EntityFrameworkCore.Tools | 9.0.0 or later | EF Core migration commands |
| @syncfusion/ej2-react-charts | Latest | Syncfusion React Chart component |

Verify the installed versions:

```bash
dotnet --version
node --version
npm --version
```

Install the EF Core CLI tool if it is not already installed:

```bash
dotnet tool install --global dotnet-ef
```

Verify EF Core CLI:

```bash
dotnet ef --version
```

## Final project structure

```text
SyncfusionChartEfDemo
│
├── ChartApi
│   ├── Controllers
│   │   └── SalesController.cs
│   ├── Data
│   │   └── AppDbContext.cs
│   ├── Models
│   │   └── SalesRecord.cs
│   ├── appsettings.json
│   ├── Program.cs
│   └── ChartApi.csproj
│
└── chart-client
    ├── src
    │   ├── App.tsx
    │   ├── App.css
    │   ├── main.tsx
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.ts
```

## Step 1: Create the main solution folder

Open Visual Studio Code and launch a terminal.

```bash
mkdir SyncfusionChartEfDemo
cd SyncfusionChartEfDemo
```

## Step 2: Create the ASP.NET Core Web API backend

Run the following command to create the backend project:

```bash
dotnet new webapi -n ChartApi --use-controllers
cd ChartApi
```

The `--use-controllers` option creates a controller-based Web API structure.

## Step 3: Install required NuGet packages

Run the following commands from the `ChartApi` folder:

```bash
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.0
```

These packages enable EF Core, SQL Server connectivity, and EF Core migration commands.

## Step 4: Create the data model

Create a folder named `Models` inside the `ChartApi` project.

Create the following file:

```text
ChartApi/Models/SalesRecord.cs
```

Add the following code:

```csharp
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChartApi.Models
{
    public class SalesRecord
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Month { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal SalesAmount { get; set; }
    }
}
```

**Explanation**

- `Id` is the primary key.
- `Month` stores the chart category value.
- `SalesAmount` stores the numeric chart value.
- `decimal(18,2)` is used for currency-like sales values.

## Step 5: Create the DbContext class

Create a folder named `Data` inside the `ChartApi` project.

Create the following file:

```text
ChartApi/Data/AppDbContext.cs
```

Add the following code:

```csharp
using ChartApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ChartApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<SalesRecord> SalesRecords { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<SalesRecord>(entity =>
            {
                entity.ToTable("SalesRecords");

                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Month)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.SalesAmount)
                    .IsRequired()
                    .HasColumnType("decimal(18,2)");

                entity.HasData(
                    new SalesRecord { Id = 1, Month = "Jan", SalesAmount = 12000.00m },
                    new SalesRecord { Id = 2, Month = "Feb", SalesAmount = 18000.00m },
                    new SalesRecord { Id = 3, Month = "Mar", SalesAmount = 15000.00m },
                    new SalesRecord { Id = 4, Month = "Apr", SalesAmount = 22000.00m },
                    new SalesRecord { Id = 5, Month = "May", SalesAmount = 26000.00m },
                    new SalesRecord { Id = 6, Month = "Jun", SalesAmount = 30000.00m }
                );
            });
        }
    }
}
```

**Explanation**

- `AppDbContext` manages database access.
- `DbSet<SalesRecord>` represents the `SalesRecords` table.
- `OnModelCreating` configures table name, primary key, columns, and seed data.
- `HasData` inserts initial records when migrations are applied.

## Step 6: Configure the connection string

Open the `appsettings.json` file and replace its content with one of the following configurations.

### Option 1: SQL Server default instance

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=SyncfusionChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### Option 2: SQL Server Express

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.\\SQLEXPRESS;Database=SyncfusionChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### Option 3: LocalDB

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=SyncfusionChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

## Step 7: Configure services in Program.cs

Open the `Program.cs` file and replace its content with the following code:

```csharp
using ChartApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactClientPolicy", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("ReactClientPolicy");

app.MapControllers();

app.Run();
```

**Explanation**

- `AddControllers` enables API controllers.
- `AddDbContext<AppDbContext>` registers the EF Core context with dependency injection.
- `UseSqlServer` configures SQL Server as the database provider.
- `AddCors` allows the React development server to call the API.
- `MapControllers` maps controller routes.

## Step 8: Create the API controller

Create the following file:

```text
ChartApi/Controllers/SalesController.cs
```

Add the following code:

```csharp
using ChartApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChartApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetSalesData()
        {
            var salesData = await _context.SalesRecords
                .AsNoTracking()
                .OrderBy(record => record.Id)
                .Select(record => new
                {
                    month = record.Month,
                    salesAmount = record.SalesAmount
                })
                .ToListAsync();

            return Ok(salesData);
        }
    }
}
```

**Explanation**

- The controller uses constructor injection to access `AppDbContext`.
- `AsNoTracking` improves performance for read-only chart data.
- The API returns only the fields required by the chart: `month` and `salesAmount`.

## Step 9: Build the backend project

Run the following commands from the `ChartApi` folder:

```bash
dotnet clean
dotnet restore
dotnet build
```

Expected result:

```text
Build succeeded.
```

## Step 10: Create the SQL Server database using EF Core migrations

Run the following commands from the `ChartApi` folder:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

These commands create the `SyncfusionChartDb` database and the `SalesRecords` table with sample data.

## Step 11: Run and test the backend API

Run the API:

```bash
dotnet run --urls "http://localhost:5000"
```

Open the following URL in a browser:

```text
http://localhost:5000/api/sales
```

Expected JSON response:

```json
[
  {
    "month": "Jan",
    "salesAmount": 12000.00
  },
  {
    "month": "Feb",
    "salesAmount": 18000.00
  },
  {
    "month": "Mar",
    "salesAmount": 15000.00
  },
  {
    "month": "Apr",
    "salesAmount": 22000.00
  },
  {
    "month": "May",
    "salesAmount": 26000.00
  },
  {
    "month": "Jun",
    "salesAmount": 30000.00
  }
]
```

## Step 12: Create the React application

Open a new terminal from the root folder `SyncfusionChartEfDemo`.

Run the following commands:

```bash
npm create vite@latest chart-client -- --template react-ts
cd chart-client
npm install
```

## Step 13: Install Syncfusion React Chart package

Run the following command from the `chart-client` folder:

```bash
npm install @syncfusion/ej2-react-charts --save
```

## Step 14: Configure Syncfusion styles

Open the following file:

```text
chart-client/src/index.css
```

Add the following CSS imports for Syncfusion chart styles:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-charts/styles/material.css';

body {
  margin: 0;
  background-color: #f5f7fb;
}
```

These CSS imports enable the Syncfusion material design theme for the chart component.

## Step 15: Configure the React entry file

Open the following file:

```text
chart-client/src/main.tsx
```

Replace the content with this code:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Step 16: Add the Syncfusion React Chart component

Open the following file:

```text
chart-client/src/App.tsx
```

Replace the content with this code:

```tsx
import { useEffect, useState } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  DataLabel
} from '@syncfusion/ej2-react-charts';

import './App.css';

type SalesRecord = {
  month: string;
  salesAmount: number;
};

function App() {
  const [chartData, setChartData] = useState<SalesRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/api/sales')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load sales data from API.');
        }

        return response.json();
      })
      .then((data: SalesRecord[]) => {
        setChartData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>Syncfusion React Chart with SQL Server and Entity Framework Core</h1>

      <p className="description">
        This chart displays monthly sales data loaded from SQL Server through an ASP.NET Core Web API.
      </p>

      {loading && <p>Loading chart data...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="chart-card">
          <ChartComponent
            id="sales-chart"
            title="Monthly Sales Report"
            primaryXAxis={{
              valueType: 'Category',
              title: 'Month'
            }}
            primaryYAxis={{
              title: 'Sales Amount',
              labelFormat: '₹{value}'
            }}
            tooltip={{
              enable: true
            }}
            legendSettings={{
              visible: true
            }}
          >
            <Inject services={[ColumnSeries, Category, Tooltip, Legend, DataLabel]} />

            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={chartData}
                xName="month"
                yName="salesAmount"
                name="Sales"
                type="Column"
                marker={{
                  dataLabel: {
                    visible: true
                  }
                }}
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      )}
    </div>
  );
}

export default App;
```

**Explanation**

- The component uses `useEffect` to fetch data from the ASP.NET Core API.
- The API response is stored in `chartData` state.
- The Chart uses `dataSource={chartData}`.
- `xName="month"` maps the X-axis value.
- `yName="salesAmount"` maps the Y-axis value.
- `ColumnSeries`, `Category`, `Tooltip`, `Legend`, and `DataLabel` are injected as required chart services.

## Step 17: Add component styles

Open the following file:

```text
chart-client/src/App.css
```

Replace the content with this code:

```css
.app-container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  color: #222;
  margin-bottom: 10px;
}

.description {
  text-align: center;
  color: #555;
  margin-bottom: 30px;
}

.chart-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.error-message {
  color: #d32f2f;
  text-align: center;
  font-weight: bold;
}
```

## Step 18: Run the React application

Run the following command from the `chart-client` folder:

```bash
npm run dev
```

Open the React application in a browser:

```text
http://localhost:5173
```

## Complete run order

Use two terminals.

**Terminal 1: Backend**

```bash
cd SyncfusionChartEfDemo/ChartApi
dotnet run --urls "http://localhost:5000"
```

**Terminal 2: Frontend**

```bash
cd SyncfusionChartEfDemo/chart-client
npm run dev
```

Open:

```text
http://localhost:5173
```

## Optional: Binding chart data using Syncfusion DataManager

The previous example uses the native `fetch` API, which is simple and recommended for beginners. Syncfusion Chart also supports binding remote data through `DataManager`.

Install the Data package:

```bash
npm install @syncfusion/ej2-data --save
```

Example concept:

```tsx
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const dataManager = new DataManager({
  url: 'http://localhost:5000/api/sales',
  adaptor: new UrlAdaptor()
});
```

For this simple API, fetch-based binding is easier because the API returns a plain JSON array. If you use `UrlAdaptor`, design the API response format according to the adaptor requirements.

## Troubleshooting

**Build error: `ChartApi.Data` namespace not found**

Make sure this file exists:

```text
ChartApi/Data/AppDbContext.cs
```

Also verify that the file contains this namespace:

```csharp
namespace ChartApi.Data
```

**Build error: `SalesRecord` type not found**

Make sure this file exists:

```text
ChartApi/Models/SalesRecord.cs
```

Also verify that the file contains this namespace:

```csharp
namespace ChartApi.Models
```

**SQL Server connection failed**

Try the LocalDB connection string:

```json
"DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=SyncfusionChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

Or try the SQL Server Express connection string:

```json
"DefaultConnection": "Server=.\\SQLEXPRESS;Database=SyncfusionChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

**`dotnet ef` command not found**

Install the EF Core CLI tool:

```bash
dotnet tool install --global dotnet-ef
```

Close and reopen the terminal, then run:

```bash
dotnet ef --version
```

**React chart shows loading or API error**

Check the backend API directly:

```text
http://localhost:5000/api/sales
```

If the API works but React still fails, verify that CORS allows the React development URL:

```csharp
.WithOrigins("http://localhost:5173")
```

**Final output**

After completing all steps, the browser displays a Syncfusion React column chart with SQL Server data:

```text
Jan - 12000
Feb - 18000
Mar - 15000
Apr - 22000
May - 26000
Jun - 30000
```

## Summary

This documentation demonstrates how to create a simple database-driven Syncfusion React Chart using SQL Server and Entity Framework Core. The backend is implemented using ASP.NET Core Web API, the database access layer is implemented using EF Core, and the frontend chart is implemented using the Syncfusion React Chart component.

This pattern is recommended when chart data must come from a secured database and be exposed through a controlled API endpoint.

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToDatabase/Entityframework-ORM) repository.
