---
layout: post
title: Connect MySQL Server using ASP.NET Core in React Chart | Syncfusion
description: Learn how to connect Syncfusion React Chart to a MySQL database through an ASP.NET Core Web API using LINQ2DB and bind the response to the Chart component.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting MySQL Server to Syncfusion React Chart

The Syncfusion React Chart component supports binding data from a MySQL database using an ASP.NET Core Web API backend. This documentation explains how to connect a MySQL database to the Syncfusion React Chart component using LINQ2DB and ASP.NET Core.

---

## Overview

This implementation uses the following architecture:

```text
React Chart Component
        ↓
HTTP Request / Fetch API
        ↓
ASP.NET Core Web API
        ↓
LINQ2DB
        ↓
MySQL Database
```

This approach provides:

- Secure server-side database access
- Better scalability
- Separation of frontend and backend logic
- Easy CRUD and analytics integration

---

## Prerequisites

Ensure the following software is installed:

| Software / Package | Recommended Version | Purpose |
|---|---:|---|
| Visual Studio Code | Latest | Development IDE |
| .NET SDK | .NET 8.0 or later | Backend API development |
| MySQL Server | 8.0 or later | Database server |
| MySQL Workbench | Latest | Execute SQL scripts and manage database |
| Node.js | v20 or later | Angular development |
| Angular CLI | Latest | Create and run Angular application |

---

## Step 1: Create a MySQL Database

Create a database and table to store chart data.

Open MySQL Workbench and execute the following SQL script:

```sql
CREATE DATABASE chartdb;

USE chartdb;

CREATE TABLE sales_data (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Month VARCHAR(20),
    SalesAmount DECIMAL(10,2)
);

INSERT INTO sales_data (Month, SalesAmount) VALUES
('Jan', 12000),
('Feb', 18000),
('Mar', 15000),
('Apr', 22000),
('May', 27000);
```

After executing the script, the `sales_data` table contains monthly sales records that will be displayed in the React Chart.

---

## Step 2: Create an ASP.NET Core Web API Project

Open the terminal in Visual Studio Code and run the following commands:

```bash
dotnet new webapi -n ChartMySQL.Server
cd ChartMySQL.Server
code .
```

This creates an ASP.NET Core Web API project that will be used to retrieve data from MySQL.

## Step 3: Install Required NuGet Packages

Install the required packages for LINQ2DB, MySQL connectivity, and ASP.NET Core integration.

```bash
dotnet add package linq2db
dotnet add package linq2db.MySql
dotnet add package linq2db.AspNet
dotnet add package MySqlConnector
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

**Package Purpose**

| Package | Purpose |
|---|---|
| `linq2db` | Provides LINQ-based database access |
| `linq2db.MySql` | Adds MySQL provider support for LINQ2DB |
| `linq2db.AspNet` | Adds ASP.NET Core dependency injection support |
| `MySqlConnector` | Provides modern MySQL connectivity |


## Step 4: Create the Data Model

Create a folder named `Models` in the ASP.NET Core project.

Create a file named `SalesData.cs` inside the `Models` folder.

```csharp
using LinqToDB.Mapping;

[Table("sales_data")]
public class SalesData
{
    [PrimaryKey, Identity]
    public int Id { get; set; }

    [Column]
    public string Month { get; set; }

    [Column]
    public decimal SalesAmount { get; set; }
}
```

**Explanation**

- `[Table("sales_data")]` maps the C# class to the MySQL table.
- `[PrimaryKey, Identity]` maps the `Id` property as an auto-increment primary key.
- `[Column]` maps the properties to database columns.

---

## Step 5: Configure the Database Connection

Create a folder named `Data` in the ASP.NET Core project.

Create a file named `AppDataConnection.cs` inside the `Data` folder.

```csharp
using LinqToDB;
using LinqToDB.Data;
using LinqToDB.DataProvider.MySql;

public class AppDataConnection : DataConnection
{
    public AppDataConnection(IConfiguration config)
        : base(new DataOptions()
            .UseMySql(
                config.GetConnectionString("MySqlConn")!,
                MySqlVersion.MySql80,
                MySqlProvider.MySqlConnector))
    {
    }

    public ITable<SalesData> Sales
    {
        get
        {
            return this.GetTable<SalesData>();
        }
    }
}
```

**Explanation**

- `AppDataConnection` inherits from `DataConnection`.
- `UseMySql` configures LINQ2DB to connect with MySQL.
- `MySqlVersion.MySql80` specifies MySQL 8.0 compatibility.
- `MySqlProvider.MySqlConnector` uses the MySqlConnector provider.
- `Sales` exposes the `sales_data` table as a LINQ queryable table.
---

## Step 6: Configure the Connection String

Open `appsettings.json` and add the MySQL connection string.

```json
{
  "ConnectionStrings": {
    "MySqlConn": "Server=localhost;Port=3306;Database=chartdb;User Id=root;Password=YOUR_PASSWORD;"
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

Replace `YOUR_PASSWORD` with your MySQL password.

> For production applications, store credentials securely using environment variables, secret managers, or secure configuration providers instead of plain text configuration files.


## Step 7: Register Services in `Program.cs`

Open `Program.cs` and replace the contents with the following code:

```csharp
using LinqToDB;
using LinqToDB.AspNet;
using LinqToDB.DataProvider.MySql;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("cors", p =>
        p.AllowAnyOrigin()
         .AllowAnyHeader()
         .AllowAnyMethod());
});

builder.Services.AddLinqToDB((sp, options) =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("MySqlConn")!,
        MySqlVersion.MySql80,
        MySqlProvider.MySqlConnector));

builder.Services.AddScoped<AppDataConnection>();

var app = builder.Build();

app.UseCors("cors");

app.MapControllers();

app.Run();
```

**Explanation**

- `AddControllers()` registers API controllers.
- `AddCors()` enables the Angular application to call the API during development.
- `AddLinqToDB()` registers LINQ2DB with the MySQL provider.
- `AddScoped<AppDataConnection>()` registers the database connection class for dependency injection.

> The CORS configuration shown here is suitable for local development. For production, restrict CORS to trusted domains.

---

## Step 8: Create the Chart API Controller

Create a file named `ChartController.cs` inside the `Controllers` folder.

```csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ChartController : ControllerBase
{
    private readonly AppDataConnection _db;

    public ChartController(AppDataConnection db)
    {
        _db = db;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var data = _db.Sales.ToList();
        return Ok(data);
    }
}
```

**Explanation**

The `Get` action retrieves all records from the `sales_data` table and returns them as JSON.

---

## Step 9: Run and Test the ASP.NET Core API

Run the API project:

```bash
dotnet run
```

The terminal displays the API URL. Open the API endpoint in the browser:

```text
https://localhost:xxxx/api/chart
```

Replace `xxxx` with the actual port shown in the terminal.

Expected JSON response:

```json
[
  {
    "id": 1,
    "month": "Jan",
    "salesAmount": 12000
  },
  {
    "id": 2,
    "month": "Feb",
    "salesAmount": 18000
  },
  {
    "id": 3,
    "month": "Mar",
    "salesAmount": 15000
  },
  {
    "id": 4,
    "month": "Apr",
    "salesAmount": 22000
  },
  {
    "id": 5,
    "month": "May",
    "salesAmount": 27000
  }
]
```
---

## Step 10: Create React Application

Open a new terminal and run:

```bash
npx create-react-app chart-mysql-client

cd chart-mysql-client
```

## Step 11: Install Syncfusion React Chart Packages

Run the following commands:

```bash
npm install @syncfusion/ej2-react-charts

npm install @syncfusion/ej2-base
```

---

## Step 12: Add Chart Component

Open `src/App.js` and replace the contents with the following:

```jsx
import React, { useEffect, useState } from 'react';

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

function App() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {

    fetch('https://localhost:xxxx/api/chart')
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
      });

  }, []);

  const primaryxAxis = {
    valueType: 'Category',
    title: 'Month'
  };

  const primaryyAxis = {
    title: 'Sales Amount'
  };

  return (
    <div style={{ width: '900px', margin: '30px auto' }}>

      <ChartComponent
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title='Monthly Sales Report'>

        <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />

        <SeriesCollectionDirective>

          <SeriesDirective
            dataSource={chartData}
            xName='month'
            yName='salesAmount'
            type='Column'
            name='Sales'>
          </SeriesDirective>

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
  );
}

export default App;
```

> Replace `https://localhost:xxxx/api/chart` with your actual ASP.NET Core API URL.

Example:

```text
http://localhost:5073/api/chart
```

## Step 13: Run React Application

Run the following command:

```bash
npm start
```

Open the browser:

```text
http://localhost:3000
```

**Expected Output**

The Syncfusion React Chart displays MySQL data as a column chart.

| Month | Sales Amount |
|---|---|
| Jan | 12000 |
| Feb | 18000 |
| Mar | 15000 |
| Apr | 22000 |
| May | 27000 |

---

## Troubleshooting

**CORS Error**

Ensure the following middleware is configured:

```csharp
app.UseCors("cors");
```

---

**HTTPS Certificate Issue**

Open the API URL in the browser manually and trust the development certificate.

---

**Empty Chart**

Verify:

- API is running
- Correct API port is used
- Browser console has no errors

---

## Summary

This documentation demonstrated how to:

- Create a MySQL database
- Build an ASP.NET Core Web API
- Connect MySQL using LINQ2DB
- Fetch data from API
- Bind data to Syncfusion React Chart
- Render dynamic chart data in React

This architecture is recommended for enterprise applications because it provides secure, scalable, and maintainable database integration.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToDatabase/MySQLServer) repository.

---
