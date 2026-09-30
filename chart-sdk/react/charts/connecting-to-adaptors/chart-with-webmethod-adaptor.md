---
layout: post
title: Remote Data Binding in React Chart using WebMethodAdaptor | Syncfusion
description: Learn here all about Remote Data Binding in React Chart using WebMethodAdaptor in Syncfusion React Charts component of Syncfusion Essential JS 2 and more.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote Data Binding in React Chart using WebMethodAdaptor

The `WebMethodAdaptor` in Syncfusion React Chart enables remote data binding from web-method-style services. It is useful when the server endpoint expects Syncfusion DataManager query parameters inside a `value` wrapper object. The data returned from the server is mapped to Chart series through `xName` and `yName` fields.

## When to use WebMethodAdaptor

Use `WebMethodAdaptor` when:

- The backend API expects request details inside a `value` object.
- The Chart data should be loaded from a remote service.
- The service follows web-method-style request handling.
- The backend needs to process DataManager query values such as `take`, `skip`, `sorted`, or similar request properties.

For standard REST APIs that do not need the `value` wrapper, `UrlAdaptor` may be more suitable.

## Request and response format

`WebMethodAdaptor` sends DataManager request details inside a `value` object.

Example request format:

```json
{
  "value": {
    "requiresCounts": true,
    "skip": 0,
    "take": 12,
    "sorted": []
  }
}
```

The server should return a response that includes `result` and `count`.

Example response format:

```json
{
  "result": [
    {
      "month": "Jan",
      "sales": 35,
      "expenses": 20,
      "profit": 15
    }
  ],
  "count": 12
}
```

> The ASP.NET Core default JSON serializer emits camelCase property names (C# `Month` becomes JSON `month`). The `xName` and `yName` values on each `SeriesDirective` must therefore use the lowercase field names returned by the server.

## Prerequisites

Before starting, install the following:

- Visual Studio Code
- .NET SDK 8.0 or later
- Node.js
- npm

## Project structure

The completed sample uses the following structure:

```text
ChartWebMethodAdaptor/
├── server/
│   ├── Controllers/
│   │   └── ChartDataController.cs
│   ├── Models/
│   │   └── SalesData.cs
│   ├── Program.cs
│   └── server.csproj
│
└── client/
    ├── src/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Backend setup using ASP.NET Core Web API

### Step 1: Create the backend project

Open Visual Studio Code, open a terminal, and create the project folder.

```bash
mkdir ChartWebMethodAdaptor
cd ChartWebMethodAdaptor
dotnet new webapi -n server
cd server
mkdir Controllers Models
```

Delete the default `WeatherForecastController.cs` and `WeatherForecast.cs` files added by the `webapi` template, since this sample does not use them.

Install the Syncfusion ASP.NET Core package.

```bash
dotnet add package Syncfusion.EJ2.AspNet.Core
```

### Step 2: Configure the backend application

Open the following file:

```text
server/Program.cs
```

Replace the file content with the following configuration.

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactClient", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "http://localhost:5174",
                "http://127.0.0.1:5173",
                "http://127.0.0.1:5174"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowReactClient");

app.MapControllers();

app.Run();
```

> **Note:** Swagger is not required for this sample. If the `webapi` template shipped Swagger/OpenAPI references (default in .NET 8+), remove them and clean the `bin`/`obj` folders to avoid package version conflicts.

### Step 3: Create the chart data model

Create a `Models` folder and add the following file:

```text
server/Models/SalesData.cs
```

```csharp
namespace server.Models
{
    public class SalesData
    {
        public string Month { get; set; } = string.Empty;
        public double Sales { get; set; }
        public double Expenses { get; set; }
        public double Profit { get; set; }
    }
}
```

This model provides the data fields used by the Chart series.

### Step 4: Create the chart data controller

Create a `Controllers` folder and add the following file:

```text
server/Controllers/ChartDataController.cs
```

```csharp
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using server.Models;

namespace server.Controllers
{
    public class DataManagerWrapper
    {
        public DataManagerRequest? Value { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class ChartDataController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            List<SalesData> data = GetSalesData();

            return Ok(new
            {
                result = data,
                count = data.Count
            });
        }

        [HttpPost]
        public IActionResult Post([FromBody] DataManagerWrapper? request)
        {
            IQueryable<SalesData> dataSource = GetSalesData().AsQueryable();

            DataManagerRequest? dm = request?.Value;

            QueryableOperation operation = new QueryableOperation();

            if (dm?.Sorted != null && dm.Sorted.Count > 0)
            {
                dataSource = operation.PerformSorting(dataSource, dm.Sorted);
            }

            int count = dataSource.Count();

            if (dm?.Skip != null && dm.Skip != 0)
            {
                dataSource = operation.PerformSkip(dataSource, dm.Skip);
            }

            if (dm?.Take != null && dm.Take != 0)
            {
                dataSource = operation.PerformTake(dataSource, dm.Take);
            }

            return Ok(new
            {
                result = dataSource.ToList(),
                count = count
            });
        }

        private List<SalesData> GetSalesData()
        {
            return new List<SalesData>
            {
                new SalesData { Month = "Jan", Sales = 35, Expenses = 20, Profit = 15 },
                new SalesData { Month = "Feb", Sales = 28, Expenses = 18, Profit = 10 },
                new SalesData { Month = "Mar", Sales = 34, Expenses = 22, Profit = 12 },
                new SalesData { Month = "Apr", Sales = 32, Expenses = 19, Profit = 13 },
                new SalesData { Month = "May", Sales = 40, Expenses = 25, Profit = 15 },
                new SalesData { Month = "Jun", Sales = 32, Expenses = 21, Profit = 11 },
                new SalesData { Month = "Jul", Sales = 45, Expenses = 29, Profit = 16 },
                new SalesData { Month = "Aug", Sales = 48, Expenses = 30, Profit = 18 },
                new SalesData { Month = "Sep", Sales = 38, Expenses = 24, Profit = 14 },
                new SalesData { Month = "Oct", Sales = 42, Expenses = 26, Profit = 16 },
                new SalesData { Month = "Nov", Sales = 50, Expenses = 31, Profit = 19 },
                new SalesData { Month = "Dec", Sales = 55, Expenses = 35, Profit = 20 }
            };
        }
    }
}
```

### Step 5: Run and test the backend

Run the backend project.

```bash
dotnet run
```

Open the API URL in the browser.

```text
http://localhost:5143/api/ChartData
```

The browser should display JSON data.

## React Chart frontend setup

### Step 1: Create the React project

Go back to the root folder and create the React project using Vite.

```bash
cd ..
npm create vite@latest client -- --template react
cd client
npm install
```

### Step 2: Install Syncfusion packages

Install the required Syncfusion packages.

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

The Chart component uses `@syncfusion/ej2-react-charts`, and DataManager with `WebMethodAdaptor` is available from `@syncfusion/ej2-data`.

### Step 3: Create the React Chart component

Open the following file:

```text
client/src/App.jsx
```

Replace the file content with the Chart component that uses DataManager and `WebMethodAdaptor`:

```jsx
import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  LineSeries,
  Category,
  Legend,
  Tooltip,
  DataLabel
} from "@syncfusion/ej2-react-charts";

import { DataManager, WebMethodAdaptor, Query } from "@syncfusion/ej2-data";

// WebMethodAdaptor expects DataManager request details inside a "value" wrapper
// and a response shape of { result, count }. The chart component handles the
// query lifecycle itself, so the DataManager instance is passed directly as
// dataSource on each series.
const chartData = new DataManager({
  url: "http://localhost:5143/api/ChartData",
  adaptor: new WebMethodAdaptor(),
  crossDomain: true
});

const chartQuery = new Query().take(12);

const primaryXAxis = {
  valueType: "Category",
  title: "Month"
};

const primaryYAxis = {
  title: "Amount in Thousands",
  labelFormat: "{value}K"
};

const tooltip = {
  enable: true,
  shared: true
};

const legendSettings = {
  visible: true,
  position: "Bottom"
};

const marker = {
  dataLabel: {
    visible: true,
    position: "Top"
  }
};

function App() {
  return (
    <ChartComponent
      id="sales-chart"
      title="Monthly Sales, Expenses and Profit"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      tooltip={tooltip}
      legendSettings={legendSettings}
      width="100%"
      height="450px"
    >
      <Inject
        services={[
          ColumnSeries,
          LineSeries,
          Category,
          Legend,
          Tooltip,
          DataLabel
        ]}
      />

      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          query={chartQuery}
          xName="month"
          yName="sales"
          name="Sales"
          type="Column"
          marker={marker}
        />
        <SeriesDirective
          dataSource={chartData}
          query={chartQuery}
          xName="month"
          yName="expenses"
          name="Expenses"
          type="Column"
          marker={marker}
        />
        <SeriesDirective
          dataSource={chartData}
          query={chartQuery}
          xName="month"
          yName="profit"
          name="Profit"
          type="Line"
          marker={marker}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
```

### Step 4: Run the React application

Run the dev server:

```bash
npm run dev
```

Open the Vite URL in your browser. Vite defaults to `http://localhost:5173`, but if that port is in use it will pick the next available one (for example `http://localhost:5175`).

```text
http://localhost:5173
```

The Chart should now display the Sales, Expenses, and Profit data from the backend API.

## Troubleshooting

**Network or fetch error**

If the chart shows a fetch/network error, confirm the following:

- The backend is running on `http://localhost:5143` (or the port configured in `launchSettings.json`).
- The browser console shows no CORS error. If it does, add the React client origin to the CORS policy in `server/Program.cs` (e.g., `http://localhost:5173`).

**Chart renders but data is empty**

Verify the following:

- The backend's POST response contains data inside the `result` field.
- The `xName` and `yName` values on each `SeriesDirective` match the JSON field names returned by the server. ASP.NET Core serializes property names in camelCase by default, so the chart series must use `month`, `sales`, `expenses`, and `profit` (lowercase).
- The browser console shows no errors.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToAdaptors/WebMethodAdaptor) repository.

---

## Summary

This documentation explains how to:

1. Create an ASP.NET Core Web API backend with `WebMethodAdaptor` support.
2. Configure the backend to return Chart data in the expected `{ result, count }` format.
3. Create a React Chart frontend using Vite.
4. Use Syncfusion DataManager with `WebMethodAdaptor` for remote data binding.
5. Bind the returned data to Chart series.

