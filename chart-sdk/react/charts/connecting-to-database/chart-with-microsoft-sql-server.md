---
layout: post
title: Connect Microsoft SQL Server to React Chart | Syncfusion
description: Learn how to connect Syncfusion React Chart to a Microsoft SQL Server database through an ASP.NET Core Web API and bind the response to the Chart component.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connect Microsoft SQL Server to React Chart

## Overview

The Syncfusion React Chart component can be bound to data stored in a Microsoft SQL Server database through an ASP.NET Core Web API. This approach follows a secure and maintainable architecture where the React application does not connect directly to the database. Instead, the React Chart requests data from a Web API, and the Web API retrieves chart data from SQL Server using `Microsoft.Data.SqlClient`.

This documentation explains how to create a SQL Server database, expose the data through an ASP.NET Core Web API, and bind the response to the Syncfusion React Chart component.

## Architecture

```text
React Application
    ↓
Syncfusion React Chart
    ↓
HTTP request using Axios or Fetch
    ↓
ASP.NET Core Web API
    ↓
Repository using Microsoft.Data.SqlClient
    ↓
Microsoft SQL Server Database
```

This architecture provides the following benefits:

- Keeps SQL Server connection strings secure on the server.
- Avoids direct database access from the browser.
- Separates UI, API, and data access responsibilities.
- Supports scalable data retrieval for chart visualization.
- Allows future enhancements such as filtering, stored procedures, authentication, and real-time updates.

---

## Prerequisites

Before getting started, ensure the following software and packages are installed.

| Software / Package | Purpose |
|---|---|
| Node.js 18.x or later | React development runtime |
| Visual Studio Code | Development IDE |
| .NET SDK 8.0 or later | Build and run ASP.NET Core Web API |
| Microsoft SQL Server | Database server |
| SQL Server extension for VS Code or Azure Data Studio | Run SQL scripts and verify data |
| `@syncfusion/ej2-react-charts` | Syncfusion React Chart component |
| `axios` | HTTP client for calling the Web API |
| `Microsoft.Data.SqlClient` | SQL Server connectivity for ASP.NET Core |

---

## Step 1: Set Up the SQL Server Database

Create a sample database and table to store sales data that will be displayed in the React Chart.

### 1.1 Connect to SQL Server

Open Visual Studio Code and connect to SQL Server using the **SQL Server (mssql)** extension.

Use the following connection details for a local SQL Server instance:

```text
Server name: localhost
Authentication type: Windows Authentication
Database: Leave empty
Trust server certificate: Enabled
```

> If using SQL Server Express, the server name may be `localhost\\SQLEXPRESS`.

---

### 1.2 Create Database and Table

Open a new SQL query window and run the following script.

```sql
CREATE DATABASE SalesDB;
GO

USE SalesDB;
GO

CREATE TABLE SalesRecords (
    Id INT PRIMARY KEY IDENTITY(1,1),
    ProductName VARCHAR(100),
    Year INT,
    Revenue FLOAT
);
GO

INSERT INTO SalesRecords (ProductName, Year, Revenue)
VALUES 
('Laptop', 2022, 50000),
('Laptop', 2023, 65000),
('Laptop', 2024, 80000),
('Mobile', 2022, 30000),
('Mobile', 2023, 45000),
('Mobile', 2024, 60000);
GO

SELECT * FROM SalesRecords;
```

**Explanation**

- `SalesDB` is the database used by the sample application.
- `SalesRecords` is the table used as the chart data source.
- `ProductName` is used to separate chart series such as Laptop and Mobile.
- `Year` is used as the chart X-axis value.
- `Revenue` is used as the chart Y-axis value.

---

## Step 2: Create the ASP.NET Core Web API Project

The ASP.NET Core Web API acts as the backend service between the React Chart and SQL Server.

### 2.1 Create the Web API Project

Open a terminal in Visual Studio Code and run:

```bash
dotnet new webapi -n ChartAPI
cd ChartAPI
```

### 2.2 Install SQL Server Client Package

Install the `Microsoft.Data.SqlClient` NuGet package.

```bash
dotnet add package Microsoft.Data.SqlClient
```
---

## Step 3: Configure the SQL Server Connection String

Open `appsettings.json` and add the SQL Server connection string.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=SalesDB;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "AllowedHosts": "*"
}
```

**Explanation**

- `Server=localhost` connects to the local SQL Server instance.
- `Database=SalesDB` points to the database created earlier.
- `Trusted_Connection=True` uses Windows Authentication.
- `TrustServerCertificate=True` helps avoid certificate issues in local development.

> For SQL Server Express, update the server value as shown below:

```json
"DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=SalesDB;Trusted_Connection=True;TrustServerCertificate=True;"
```

---

## Step 4: Create the Data Model

Create a folder named `Models` in the API project.

Inside the `Models` folder, create a file named `SalesRecord.cs`.

```csharp
using System.ComponentModel.DataAnnotations;

namespace ChartAPI.Models
{
    public class SalesRecord
    {
        [Key]
        public int Id { get; set; }

        public string? ProductName { get; set; }

        public int Year { get; set; }

        public double Revenue { get; set; }
    }
}
```

**Explanation**

The `SalesRecord` class represents the structure of the `SalesRecords` table in SQL Server.

| Property | SQL Column | Purpose |
|---|---|---|
| `Id` | `Id` | Unique record identifier |
| `ProductName` | `ProductName` | Product category or series name |
| `Year` | `Year` | X-axis value |
| `Revenue` | `Revenue` | Y-axis value |

---

## Step 5: Create the Repository Class

Create a folder named `Data` in the API project.

Inside the `Data` folder, create a file named `SalesRepository.cs`.

```csharp
using Microsoft.Data.SqlClient;
using ChartAPI.Models;

namespace ChartAPI.Data
{
    public class SalesRepository
    {
        private readonly string _connectionString;

        public SalesRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection")!;
        }

        private SqlConnection GetConnection()
        {
            return new SqlConnection(_connectionString);
        }

        public async Task<List<SalesRecord>> GetSalesDataAsync()
        {
            var salesRecords = new List<SalesRecord>();

            const string query = @"
                SELECT Id, ProductName, Year, Revenue
                FROM SalesRecords
                ORDER BY Year, ProductName;
            ";

            await using var connection = GetConnection();
            await connection.OpenAsync();

            await using var command = new SqlCommand(query, connection);
            await using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                salesRecords.Add(new SalesRecord
                {
                    Id = Convert.ToInt32(reader["Id"]),
                    ProductName = reader["ProductName"]?.ToString(),
                    Year = Convert.ToInt32(reader["Year"]),
                    Revenue = Convert.ToDouble(reader["Revenue"])
                });
            }

            return salesRecords;
        }
    }
}
```

**Explanation**

The repository class handles all SQL Server operations.

- Reads the connection string from `appsettings.json`.
- Opens a SQL Server connection using `SqlConnection`.
- Executes a SQL query using `SqlCommand`.
- Reads database rows using `SqlDataReader`.
- Converts SQL rows into a list of `SalesRecord` objects.

---

## Step 6: Create the API Controller

Inside the `Controllers` folder, create a file named `SalesController.cs`.

```csharp
using Microsoft.AspNetCore.Mvc;
using ChartAPI.Data;

namespace ChartAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private readonly SalesRepository _repository;

        public SalesController(SalesRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetSalesData()
        {
            var data = await _repository.GetSalesDataAsync();
            return Ok(data);
        }
    }
}
```

The API endpoint will be:

```text
/api/sales
```

---

## Step 7: Configure Services and CORS

Open `Program.cs` and update the file as shown below.

```csharp
using ChartAPI.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddScoped<SalesRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
```

**Explanation**

- `AddControllers()` enables API controller support.
- `AddScoped<SalesRepository>()` registers the repository class for dependency injection.
- `AddCors()` allows the React application to call the API from a different port.
- `MapControllers()` maps controller routes such as `/api/sales`.

---

## Step 8: Run and Test the API

Run the ASP.NET Core Web API.

```bash
dotnet run
```

The terminal will display an API URL similar to one of the following:

```text
http://localhost:5000
https://localhost:7000
```

Open the API endpoint in a browser:

```text
http://localhost:5000/api/sales
```

Expected JSON response:

```json
[
  {
    "id": 1,
    "productName": "Laptop",
    "year": 2022,
    "revenue": 50000
  },
  {
    "id": 2,
    "productName": "Laptop",
    "year": 2023,
    "revenue": 65000
  }
]
```
---

## Step 9: Create the React Application

Open a new terminal and create a React project using Vite.

```bash
npm create vite@latest chart-react-app -- --template react
cd chart-react-app
npm install
```

Install the required packages.

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-charts @syncfusion/ej2-base @syncfusion/ej2-buttons @syncfusion/ej2-popups axios
```

---

## Step 10: Create the React Chart Component

Inside the `src` folder, create a file named `SalesChart.jsx`.

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Legend,
  Tooltip,
  DataLabel
} from "@syncfusion/ej2-react-charts";

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-charts/styles/material.css";

function SalesChart() {
  const [laptopData, setLaptopData] = useState([]);
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sales")
      .then((response) => {
        const data = response.data;

        const laptops = data.filter(
          (item) => item.productName === "Laptop"
        );

        const mobiles = data.filter(
          (item) => item.productName === "Mobile"
        );

        setLaptopData(laptops);
        setMobileData(mobiles);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []);

  return (
    <div style={{ margin: "30px", backgroundColor: "white", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#222" }}>
        Sales Revenue Chart
      </h2>

      <ChartComponent
        id="sales-chart"
        title="Laptop vs Mobile Revenue by Year"
        background="white"
        primaryXAxis={{
          valueType: "Category",
          title: "Year",
          labelStyle: { color: "#333" },
          titleStyle: { color: "#333" }
        }}
        primaryYAxis={{
          title: "Revenue",
          labelStyle: { color: "#333" },
          titleStyle: { color: "#333" },
          minimum: 0
        }}
        chartArea={{
          border: {
            width: 0
          }
        }}
        tooltip={{
          enable: true
        }}
        legendSettings={{
          visible: true,
          textStyle: { color: "#333" }
        }}
        titleStyle={{
          color: "#222"
        }}
      >
        <Inject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]} />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={laptopData}
            xName="year"
            yName="revenue"
            name="Laptop"
            type="Column"
            fill="#4CAF50"
            columnWidth={0.6}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: "Top",
                font: {
                  color: "#000",
                  fontWeight: "600"
                }
              }
            }}
          />

          <SeriesDirective
            dataSource={mobileData}
            xName="year"
            yName="revenue"
            name="Mobile"
            type="Column"
            fill="#2196F3"
            columnWidth={0.6}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: "Top",
                font: {
                  color: "#000",
                  fontWeight: "600"
                }
              }
            }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default SalesChart;
```

**Important Note**

Update the API URL if the backend runs on a different port.

```jsx
axios.get("http://localhost:5000/api/sales")
```

For example:

```jsx
axios.get("http://localhost:5208/api/sales")
```

---

## Step 11: Use the Chart Component in the React App

Open `src/App.jsx` and replace the content with the following code.

```jsx
import SalesChart from "./SalesChart";

function App() {
  return (
    <div>
      <SalesChart />
    </div>
  );
}

export default App;
```

---

## Step 12: Update Basic Page Styling

Open `src/index.css` and replace the content with the following CSS.

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: white;
  color: #222;
}

#root {
  width: 100%;
}
```

---

## Step 13: Run the React Application

Run the React app.

```bash
npm run dev
```

Open the local React URL in a browser.

```text
http://localhost:5173/
```

The Syncfusion React Chart should now display SQL Server data retrieved through the ASP.NET Core Web API.

The chart displays product revenue by year using SQL Server data.

Expected visualization:

- X-axis: Year
- Y-axis: Revenue
- Series 1: Laptop
- Series 2: Mobile
- Tooltip: Enabled
- Legend: Enabled
- Data labels: Enabled

---

## Troubleshooting

**Issue 1: Chart is blank**

Verify the API returns data in the browser.

```text
http://localhost:5000/api/sales
```

Also verify the field names used in the chart component.

```jsx
xName="year"
yName="revenue"
```

The ASP.NET Core API returns JSON using camelCase property names, so `year` and `revenue` should be used instead of `Year` and `Revenue`.

---

**Issue 2: CORS error**

If the browser console shows a CORS error, verify that CORS is configured in `Program.cs`.

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

app.UseCors("AllowReactApp");
```

---

**Issue 3: SQL Server connection error**

Verify the connection string in `appsettings.json`.

For default SQL Server instance:

```json
"DefaultConnection": "Server=localhost;Database=SalesDB;Trusted_Connection=True;TrustServerCertificate=True;"
```

For SQL Server Express:

```json
"DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=SalesDB;Trusted_Connection=True;TrustServerCertificate=True;"
```

---

**Issue 4: Syncfusion CSS import error**

If Vite shows an error for the following import:

```jsx
import "@syncfusion/ej2-react-charts/styles/material.css";
```

Remove that line and use these imports instead:

```jsx
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-charts/styles/material.css";
```

---

## Best Practices

**Security**

- Do not connect React directly to SQL Server.
- Keep database connection strings in the backend configuration.
- Use parameterized queries when accepting user input.
- Add authentication and authorization for production APIs.

**Performance**

- Return only the data required for the chart.
- Use SQL aggregation for large datasets.
- Add API filters such as year range, product name, or category where needed.

**Maintainability**

- Keep chart UI logic in React components.
- Keep database access logic in the repository class.
- Keep API routing logic in controllers.
- Use strongly typed models for API responses.

---

## Summary

This documentation demonstrated how to connect Microsoft SQL Server data to a Syncfusion React Chart using an ASP.NET Core Web API.

The completed integration follows this flow:

```text
SQL Server → ASP.NET Core Web API → React Application → Syncfusion React Chart
```

This approach is suitable for dashboards, reporting applications, sales analytics, monitoring systems, and any React application that needs to visualize SQL Server data using Syncfusion Charts.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToDatabase/MicrosoftSQLServer) repository.

---