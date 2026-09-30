---
layout: post
title: Connect React Charts to SQL Server Using Dapper | Syncfusion
description: Learn how to connect SQL Server data to the Syncfusion React Chart component using Dapper ORM and ASP.NET Core Web API.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting SQL Server to Syncfusion React Chart Using Dapper

The Syncfusion React Chart component can display data retrieved from SQL Server through an ASP.NET Core Web API. This example demonstrates how to use Dapper to query SQL Server data and bind the result to a Syncfusion React Chart.

This example displays monthly sales data stored in SQL Server and visualizes it using a Syncfusion Column Chart.

## Prerequisites

Before proceeding, ensure the following software is installed:

- .NET 8.0 SDK or later
- SQL Server
- SQL Server Management Studio (SSMS)
- Node.js
- Dapper
- Microsoft.Data.SqlClient
- Syncfusion React Charts package

## Application Architecture

```text
SQL Server
    ↓
Dapper
    ↓
ASP.NET Core Web API
    ↓
fetch()
    ↓
React State
    ↓
Syncfusion React Chart
```

## Create the SQL Server Database

Open SQL Server Management Studio and execute the following script:

```sql
CREATE DATABASE ChartDb;
GO

USE ChartDb;
GO

CREATE TABLE SalesData
(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    MonthName NVARCHAR(20),
    SalesAmount FLOAT
);

INSERT INTO SalesData
VALUES
('Jan',12000),
('Feb',18000),
('Mar',15000),
('Apr',22000),
('May',28000),
('Jun',32000);
```

Verify the data:

```sql
SELECT * FROM SalesData;
```

## Create ASP.NET Core Web API

Create a new Web API project:

```bash
dotnet new webapi -n ChartDapperApi
cd ChartDapperApi
```

Install the required packages:

```bash
dotnet add package Dapper
dotnet add package Microsoft.Data.SqlClient
```

Restore packages:

```bash
dotnet restore
```

## Create the Model

Create the following file:

**Models/SalesData.cs**

```csharp
namespace ChartDapperApi.Models;

public class SalesData
{
    public int Id { get; set; }

    public string MonthName { get; set; } = string.Empty;

    public double SalesAmount { get; set; }
}
```

## Configure the Connection String

Open **appsettings.json** and configure the connection string.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=ChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

### Connection String Examples

SQL Server Express:

```json
"Server=localhost\\SQLEXPRESS;Database=ChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

Default SQL Server Instance:

```json
"Server=localhost;Database=ChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

LocalDB:

```json
"Server=(localdb)\\MSSQLLocalDB;Database=ChartDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

## Create Controller

Create the following file:

**Controllers/SalesController.cs**

```csharp
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using ChartDapperApi.Models;

namespace ChartDapperApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SalesController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public SalesController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    private IDbConnection Connection =>
        new SqlConnection(
            _configuration.GetConnectionString("DefaultConnection"));

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        using var db = Connection;

        var result = await db.QueryAsync<SalesData>(
            @"SELECT
                Id,
                MonthName,
                SalesAmount
              FROM SalesData
              ORDER BY Id");

        return Ok(result);
    }
}
```

## Configure Program.cs

Replace the contents of **Program.cs** with the following code:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapControllers();

app.Run();
```

## Run and Verify the API

Run the application:

```bash
dotnet run
```

Open the API endpoint in a browser:

```text
http://localhost:5050/api/Sales
```

Expected response:

```json
[
  {
    "id": 1,
    "monthName": "Jan",
    "salesAmount": 12000
  },
  {
    "id": 2,
    "monthName": "Feb",
    "salesAmount": 18000
  }
]
```

## Create the React Application

Create a React application using Vite:

```bash
npm create vite@latest chart-client -- --template react
cd chart-client
npm install
```

## Install Syncfusion React Chart Package

```bash
npm install @syncfusion/ej2-react-charts
```

## Bind SQL Data to Chart

Replace the contents of **src/App.jsx** with the following code:

```jsx
import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend
} from "@syncfusion/ej2-react-charts";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/Sales")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <ChartComponent
      id="chart"
      title="Sales Report"
      primaryXAxis={{
        valueType: "Category",
        title: "Month"
      }}
      primaryYAxis={{
        title: "Sales Amount"
      }}
    >
      <Inject
        services={[
          ColumnSeries,
          Category,
          Tooltip,
          Legend
        ]}
      />

      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="monthName"
          yName="salesAmount"
          type="Column"
          name="Sales"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
```

## Configure the React Entry File

**src/main.jsx**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Run the React Application

```bash
npm run dev
```

Open the application:

```text
http://localhost:5173
```

The chart displays sales data loaded from SQL Server through Dapper and ASP.NET Core Web API.

## Data Flow

```text
SQL Server
    ↓
Dapper
    ↓
ASP.NET Core Web API
    ↓
fetch()
    ↓
React State
    ↓
Syncfusion React Chart
```

## Troubleshooting

**SQL connection error**

Verify that the SQL Server instance name in the connection string is correct.

Examples:

```text
localhost\SQLEXPRESS
localhost
(localdb)\MSSQLLocalDB
```

**Empty chart**

Verify that the API returns data:

```text
http://localhost:5050/api/Sales
```

Verify that the table contains records:

```sql
SELECT * FROM SalesData;
```

**CORS issue**

Ensure CORS is enabled in **Program.cs**:

```csharp
app.UseCors("AllowAll");
```

## Summary

This example demonstrates how to connect SQL Server to the Syncfusion React Chart component using Dapper and ASP.NET Core Web API. The backend retrieves data from SQL Server using Dapper and exposes it through a REST endpoint. The React application retrieves the data using `fetch()` and binds it to the Syncfusion React Chart using React state.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToDatabase/Dapper-ORM) repository.

---
