---
layout: post
title: Connect SQLite Data to React Chart | Syncfusion
description: Learn here all about Connecting SQLite Data in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connect SQLite Data to React Chart

## Overview

This documentation explains how to connect a **SQLite database** to a **Syncfusion EJ2 React Chart** using an **ASP.NET Core Web API** and **Entity Framework Core (EF Core)**.

The React Chart retrieves data from the backend API using the browser `fetch` API. The backend API reads data from the SQLite database through EF Core and returns JSON data to the React application. The chart then renders the returned data as a **Column Chart**.

---

## Architecture

```text
SQLite Database
      ↓
Entity Framework Core
      ↓
ASP.NET Core Web API
      ↓
React fetch API
      ↓
Syncfusion React Chart
```

---

## Suitable Concepts Adapted from the SQLite Integration Pattern

The following concepts are suitable for React Chart database integration:

- Using **ASP.NET Core Web API** as the backend service.
- Using **SQLite** as a lightweight file-based database.
- Using **Entity Framework Core** as the data access layer.
- Creating a model class that maps to a SQLite table.
- Creating a `DbContext` class to manage database communication.
- Configuring the SQLite connection string in `appsettings.json`.
- Registering EF Core, controllers, and CORS services in `Program.cs`.
- Creating a React client application and installing Syncfusion React packages.
- Rendering the Syncfusion React component using data returned from the backend API.


---

## Prerequisites

Before starting, ensure the following tools and packages are installed.

| Software / Package | Recommended Version | Purpose |
|---|---:|---|
| Visual Studio Code | Latest | Development IDE |
| .NET SDK | .NET 9 or compatible | Backend API runtime and build tools |
| Node.js | LTS version | React development runtime |
| npm | Latest compatible version | Package manager for React dependencies |
| SQLite | 3.x or later | Lightweight embedded database engine |
| Microsoft.EntityFrameworkCore | 9.0.0 or compatible | ORM framework |
| Microsoft.EntityFrameworkCore.Sqlite | 9.0.0 or compatible | SQLite provider for EF Core |
| Microsoft.EntityFrameworkCore.Tools | 9.0.0 or compatible | EF Core tooling |
| @syncfusion/ej2-react-charts | Latest compatible version | Syncfusion React Chart component |

---

## Project Structure

The final solution contains two projects:

```text
ReactChartSQLiteSample/
 ├── ReactChartSQLiteAPI/
 │   ├── Controllers/
 │   │   └── SalesController.cs
 │   ├── Data/
 │   │   └── AppDbContext.cs
 │   ├── Models/
 │   │   └── Sales.cs
 │   ├── Program.cs
 │   ├── appsettings.json
 │   └── ReactChartSQLiteAPI.csproj
 │
 └── react-chart-app/
     ├── src/
     │   ├── App.tsx
     │   ├── index.css
     │   └── main.tsx
     ├── package.json
     └── vite.config.ts
```

---

## Backend API Service

This section explains how to create an ASP.NET Core Web API service, configure SQLite with EF Core, seed sample data, and expose the data through an API endpoint.

---

### Step 1: Create the Sample Workspace

Create a parent folder for the backend and frontend projects.

```bash
mkdir ReactChartSQLiteSample
cd ReactChartSQLiteSample
```
---

### Step 2: Create ASP.NET Core Web API Project

Run the following commands:

```bash
dotnet new webapi -n ReactChartSQLiteAPI
cd ReactChartSQLiteAPI
```

This creates a backend API project named `ReactChartSQLiteAPI`.

---

### Step 3: Install Required EF Core Packages

Install the required EF Core and SQLite packages.

```bash
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.0
```

Verify the installed packages:

```bash
dotnet list package
```

Expected packages:

```text
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.Sqlite
Microsoft.EntityFrameworkCore.Tools
```
---

### Step 4: Create the Sales Model

Create a folder named `Models` and add a file named `Sales.cs`.

**File:** `Models/Sales.cs`

```csharp
namespace ReactChartSQLiteAPI.Models
{
    public class Sales
    {
        public int Id { get; set; }
        public string? Category { get; set; }
        public int Amount { get; set; }
    }
}
```

**Explanation**

- `Id` is the primary key.
- `Category` stores the chart category value, such as the month name.
- `Amount` stores the numeric value plotted on the chart.

---

### Step 5: Create the DbContext Class

Create a folder named `Data` and add a file named `AppDbContext.cs`.

**File:** `Data/AppDbContext.cs`

```csharp
using Microsoft.EntityFrameworkCore;
using ReactChartSQLiteAPI.Models;

namespace ReactChartSQLiteAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Sales> Sales { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
    }
}
```

**Explanation**

- `AppDbContext` manages database communication.
- `DbSet<Sales>` represents the `Sales` table in SQLite.
- EF Core uses this class to create, read, update, and delete records.

---

### Step 6: Configure SQLite Connection String

Open `appsettings.json` and add the SQLite connection string.

**File:** `appsettings.json`

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=sales.db"
  }
}
```

**Explanation**

- `sales.db` is the SQLite database file.
- EF Core creates the database file when `EnsureCreated()` runs if the file does not already exist.

---

### Step 7: Register Services in Program.cs

Open `Program.cs` and configure controllers, CORS, EF Core, SQLite, and sample data.

**File:** `Program.cs`

```csharp
using Microsoft.EntityFrameworkCore;
using ReactChartSQLiteAPI.Data;
using ReactChartSQLiteAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    db.Database.EnsureCreated();

    if (!db.Sales.Any())
    {
        db.Sales.AddRange(
            new Sales { Category = "Jan", Amount = 100 },
            new Sales { Category = "Feb", Amount = 200 },
            new Sales { Category = "Mar", Amount = 150 },
            new Sales { Category = "Apr", Amount = 250 },
            new Sales { Category = "May", Amount = 300 }
        );

        db.SaveChanges();
    }
}

app.Run();
```

**Explanation**

- `AddControllers()` enables API controller support.
- `UseSqlite()` configures EF Core to use SQLite.
- `AddCors()` allows the React application to call the API during local development.
- `EnsureCreated()` creates the SQLite database and table if they do not already exist.
- Five sample sales records are inserted into the database.

---

### Step 8: Create the Sales API Controller

Create a folder named `Controllers` and add a file named `SalesController.cs`.

**File:** `Controllers/SalesController.cs`

```csharp
using Microsoft.AspNetCore.Mvc;
using ReactChartSQLiteAPI.Data;

namespace ReactChartSQLiteAPI.Controllers
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

        [HttpGet]
        public IActionResult Get()
        {
            var data = _context.Sales.ToList();
            return Ok(data);
        }
    }
}
```

**Explanation**

The `GET api/sales` endpoint returns sales data as JSON.

Example response:

```json
[
  { "id": 1, "category": "Jan", "amount": 100 },
  { "id": 2, "category": "Feb", "amount": 200 },
  { "id": 3, "category": "Mar", "amount": 150 },
  { "id": 4, "category": "Apr", "amount": 250 },
  { "id": 5, "category": "May", "amount": 300 }
]
```

---

### Step 9: Run and Test the Backend API

Run the backend API:

```bash
dotnet run
```

The application displays a local API URL similar to:

```text
Now listening on: http://localhost:5165
```

Open the API endpoint in the browser:

```text
http://localhost:5165/api/sales
```

---

## React Chart Application

This section explains how to create the React application, install the Syncfusion React Chart package, fetch data from the API, and render a Column Chart.

---

### Step 1: Create React Application

Open a new terminal from the parent folder and run:

```bash
npm create vite@latest react-chart-app -- --template react-ts
cd react-chart-app
npm install
```

This creates a React + TypeScript application using Vite.

---

### Step 2: Install Syncfusion React Chart Package

Install the Syncfusion React Chart package and required base package.

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-base
```
---

### Step 3: Create the React Chart Component

Open `src/App.tsx` and replace the existing content with the following code.

**File:** `src/App.tsx`

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
  DataLabel
} from '@syncfusion/ej2-react-charts';

interface SalesData {
  id: number;
  category: string;
  amount: number;
}

function App() {
  const [chartData, setChartData] = useState<SalesData[]>([]);

  useEffect(() => {
    fetch('http://localhost:5165/api/sales')
      .then((response) => response.json())
      .then((data) => {
        console.log('API DATA:', data);
        setChartData(data);
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, []);

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Monthly Sales</h2>

      <ChartComponent
        id="sales-chart"
        title="Monthly Sales"
        primaryXAxis={{
          valueType: 'Category',
          title: 'Month'
        }}
        primaryYAxis={{
          title: 'Sales Amount'
        }}
        tooltip={{ enable: true }}
      >
        <Inject services={[ColumnSeries, Category, Tooltip, DataLabel]} />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartData}
            xName="category"
            yName="amount"
            type="Column"
            name="Sales"
            marker={{
              dataLabel: {
                visible: true
              }
            }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
```

**Explanation**

- `ChartComponent` renders the Syncfusion React Chart.
- `ColumnSeries` enables the Column Chart series.
- `Category` enables category-based x-axis labels.
- `Tooltip` enables chart tooltips.
- `DataLabel` displays values above columns.
- `fetch()` retrieves data from the ASP.NET Core API.
- `dataSource`, `xName`, and `yName` bind the API response to the chart.

> If the backend API runs on a different port, update the API URL in `fetch()`.

---

### Step 4: Run the React Application

Make sure the backend API is already running.

Run the React application:

```bash
npm run dev
```

Open the application in the browser:

```text
http://localhost:5173
```

---

**Output**

The React application renders a Syncfusion Column Chart with five data points from SQLite.

| Category | Amount |
|---|---:|
| Jan | 100 |
| Feb | 200 |
| Mar | 150 |
| Apr | 250 |
| May | 300 |

---

## Run Commands Summary

Use two separate terminals.

**Terminal 1: Backend API**

```bash
cd ReactChartSQLiteSample/ReactChartSQLiteAPI
dotnet run
```

Test endpoint:

```text
http://localhost:5165/api/sales
```

**Terminal 2: React Client**

```bash
cd ReactChartSQLiteSample/react-chart-app
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Troubleshooting

**1. Couldn't find a project to run**

This error occurs when `dotnet run` is executed outside the backend project folder.

Run the command from the backend folder:

```bash
cd ReactChartSQLiteSample/ReactChartSQLiteAPI
dotnet run
```

Or specify the project file:

```bash
dotnet run --project ReactChartSQLiteAPI/ReactChartSQLiteAPI.csproj
```

---

**2. API returns 404 at root URL**

If the root URL returns 404, open the API endpoint instead:

```text
http://localhost:5165/api/sales
```

The backend project is an API service, so the root URL may not render a page.

---

**3. CORS error in browser console**

Ensure CORS is configured in `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

app.UseCors("AllowAll");
```

---

**4. Chart renders but columns are not visible**

Verify that the API returns data:

```text
http://localhost:5165/api/sales
```

Verify that the required chart services are injected:

```tsx
<Inject services={[ColumnSeries, Category, Tooltip, DataLabel]} />
```

Also confirm that `xName` and `yName` match the JSON field names:

```tsx
xName="category"
yName="amount"
```

---

**5. React package dependency issues**

Use a Node.js LTS version. Then reinstall packages if required:

```bash
node -v
npm install
```

If package installation is corrupted, delete `node_modules` and `package-lock.json`, then run:

```bash
npm install
```

---

## Summary

This documentation demonstrated how to:

1. Create an ASP.NET Core Web API backend.
2. Connect the backend to a SQLite database using EF Core.
3. Seed a minimum of five records into SQLite.
4. Expose the data through an API endpoint.
5. Create a React + TypeScript application using Vite.
6. Install and configure Syncfusion React Chart.
7. Fetch API data using the React `fetch` API.
8. Render a Column Chart using SQLite data.

The completed application displays SQLite data in a Syncfusion React Column Chart using a clean full-stack architecture.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToDatabase/SQLLite) repository.

---
