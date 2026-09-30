---
layout: post
title: React Chart - Web API Adaptor | Syncfusion
description: Learn how to bind remote data from an ASP.NET Core Web API to the Syncfusion React Chart using DataManager and WebApiAdaptor with OData query support.
platform: ej2-react
control: Chart
documentation: ug
domainurl: ##DomainURL##
---

# Web API Adaptor in React Chart

The `WebApiAdaptor` binds Syncfusion React components with Web API endpoints that support OData-style query processing. In the React Chart component, it works with `DataManager` to fetch remote data from an ASP.NET Core Web API and render it in chart series.

## When to use WebApiAdaptor

Use `WebApiAdaptor` when:

- The backend is an ASP.NET Core Web API or similar Web API service.
- The API can process OData-style query parameters such as `$top`, `$skip`, `$orderby`, and `$filter`.
- The API response can return both data and total count.
- You need server-side processing for large chart data.

By default, `WebApiAdaptor` reads `result` for the data collection and `count` for the total record count:

```json
{
  "result": [],
  "count": 0
}
```

If your API uses different field names, pass a custom field mapping to the `WebApiAdaptor` constructor.

## Prerequisites

Before getting started, install the following:

- Visual Studio Code
- Node.js 18 or later
- .NET SDK 8 or later
- npm 9 or later

Then install the Syncfusion packages:

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

> The example uses `@syncfusion/ej2-react-charts` and `@syncfusion/ej2-data` version 25.x or later.

## Project structure

The completed project uses the following structure:

```text
ReactChartWebApiSample/
│
├── server/
│   ├── Controllers/
│   │   └── SalesController.cs
│   ├── Models/
│   │   └── SalesData.cs
│   ├── Properties/
│   │   └── launchSettings.json
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

## Create the ASP.NET Core Web API

Create a new folder for the sample and add the ASP.NET Core backend project.

```bash
mkdir ReactChartWebApiSample
cd ReactChartWebApiSample
mkdir server
mkdir server/Controllers
mkdir server/Models
mkdir server/Properties
cd server
dotnet new web
```

## Configure the server project

Update the server project file:

```text
server/server.csproj
```

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

## Create the data model

Create the sales data model at the following location:

```text
server/Models/SalesData.cs
```

```csharp
namespace server.Models
{
    public class SalesData
    {
        public int Id { get; set; }
        public string Month { get; set; } = string.Empty;
        public double Sales { get; set; }
        public double Expenses { get; set; }
        public double Profit { get; set; }
        public string Region { get; set; } = string.Empty;
    }
}
```

## Create the Web API controller

Create the controller at the following location:

```text
server/Controllers/SalesController.cs
```

```csharp
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private static readonly List<SalesData> SalesRecords = new()
        {
            new SalesData { Id = 1, Month = "Jan", Sales = 35, Expenses = 20, Profit = 15, Region = "South" },
            new SalesData { Id = 2, Month = "Feb", Sales = 28, Expenses = 18, Profit = 10, Region = "South" },
            new SalesData { Id = 3, Month = "Mar", Sales = 34, Expenses = 22, Profit = 12, Region = "West" },
            new SalesData { Id = 4, Month = "Apr", Sales = 32, Expenses = 21, Profit = 11, Region = "West" },
            new SalesData { Id = 5, Month = "May", Sales = 40, Expenses = 26, Profit = 14, Region = "North" },
            new SalesData { Id = 6, Month = "Jun", Sales = 38, Expenses = 24, Profit = 14, Region = "North" },
            new SalesData { Id = 7, Month = "Jul", Sales = 45, Expenses = 30, Profit = 15, Region = "East" },
            new SalesData { Id = 8, Month = "Aug", Sales = 42, Expenses = 28, Profit = 14, Region = "East" },
            new SalesData { Id = 9, Month = "Sep", Sales = 48, Expenses = 32, Profit = 16, Region = "South" },
            new SalesData { Id = 10, Month = "Oct", Sales = 50, Expenses = 35, Profit = 15, Region = "West" },
            new SalesData { Id = 11, Month = "Nov", Sales = 55, Expenses = 38, Profit = 17, Region = "North" },
            new SalesData { Id = 12, Month = "Dec", Sales = 60, Expenses = 40, Profit = 20, Region = "East" }
        };

        [HttpGet]
        public IActionResult Get()
        {
            IQueryable<SalesData> query = SalesRecords.AsQueryable();

            query = ApplyFiltering(query);

            int count = query.Count();

            query = ApplySorting(query);
            query = ApplyPaging(query);

            return Ok(new
            {
                result = query.ToList(),
                count = count
            });
        }

        private IQueryable<SalesData> ApplyPaging(IQueryable<SalesData> query)
        {
            if (Request.Query.TryGetValue("$skip", out var skipValue) &&
                int.TryParse(skipValue.ToString(), out int skip))
            {
                query = query.Skip(skip);
            }

            if (Request.Query.TryGetValue("$top", out var topValue) &&
                int.TryParse(topValue.ToString(), out int top))
            {
                query = query.Take(top);
            }

            return query;
        }

        private IQueryable<SalesData> ApplySorting(IQueryable<SalesData> query)
        {
            if (!Request.Query.TryGetValue("$orderby", out var orderByValue))
            {
                return query.OrderBy(x => x.Id);
            }

            string orderBy = orderByValue.ToString();
            bool desc = orderBy.Contains("desc", StringComparison.OrdinalIgnoreCase);

            if (orderBy.Contains("Month", StringComparison.OrdinalIgnoreCase))
            {
                return desc ? query.OrderByDescending(x => x.Month) : query.OrderBy(x => x.Month);
            }

            if (orderBy.Contains("Sales", StringComparison.OrdinalIgnoreCase))
            {
                return desc ? query.OrderByDescending(x => x.Sales) : query.OrderBy(x => x.Sales);
            }

            if (orderBy.Contains("Expenses", StringComparison.OrdinalIgnoreCase))
            {
                return desc ? query.OrderByDescending(x => x.Expenses) : query.OrderBy(x => x.Expenses);
            }

            if (orderBy.Contains("Profit", StringComparison.OrdinalIgnoreCase))
            {
                return desc ? query.OrderByDescending(x => x.Profit) : query.OrderBy(x => x.Profit);
            }

            if (orderBy.Contains("Region", StringComparison.OrdinalIgnoreCase))
            {
                return desc ? query.OrderByDescending(x => x.Region) : query.OrderBy(x => x.Region);
            }

            return query.OrderBy(x => x.Id);
        }

        private IQueryable<SalesData> ApplyFiltering(IQueryable<SalesData> query)
        {
            if (!Request.Query.TryGetValue("$filter", out var filterValue))
            {
                return query;
            }

            string filter = Uri.UnescapeDataString(filterValue.ToString());

            if (filter.Contains("Region", StringComparison.OrdinalIgnoreCase))
            {
                string region = ExtractStringValue(filter);

                if (!string.IsNullOrWhiteSpace(region))
                {
                    query = query.Where(x => x.Region.Equals(region, StringComparison.OrdinalIgnoreCase));
                }
            }

            if (filter.Contains("Sales", StringComparison.OrdinalIgnoreCase))
            {
                double value = ExtractNumberValue(filter);

                if (filter.Contains("gt", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(x => x.Sales > value);
                }
                else if (filter.Contains("lt", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(x => x.Sales < value);
                }
                else if (filter.Contains("eq", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(x => x.Sales == value);
                }
            }

            return query;
        }

        private static string ExtractStringValue(string filter)
        {
            int firstQuote = filter.IndexOf('\'');
            int lastQuote = filter.LastIndexOf('\'');

            if (firstQuote >= 0 && lastQuote > firstQuote)
            {
                return filter.Substring(firstQuote + 1, lastQuote - firstQuote - 1);
            }

            string[] parts = filter.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            return parts.Length > 0 ? parts[^1].Trim('\'', '"') : string.Empty;
        }

        private static double ExtractNumberValue(string filter)
        {
            string[] parts = filter.Split(' ', StringSplitOptions.RemoveEmptyEntries);

            foreach (string part in parts.Reverse())
            {
                string cleaned = part.Trim('\'', '"', ')', '(');

                if (double.TryParse(cleaned, out double value))
                {
                    return value;
                }
            }

            return 0;
        }
    }
}
```

## Configure Program.cs

Configure controllers, JSON property casing, and CORS in the `Program.cs` file.

```text
server/Program.cs
```

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactClient", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowReactClient");

app.MapControllers();

app.Run();
```

## Configure launch settings

Set the server URL in the launch settings file.

```text
server/Properties/launchSettings.json
```

```json
{
  "$schema": "https://json.schemastore.org/launchsettings.json",
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": false,
      "applicationUrl": "http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

## Run the Web API

Run the server project.

```bash
cd server
dotnet restore
dotnet run --launch-profile http
```

Open the following URL in a browser:

```text
http://localhost:5000/api/Sales
```

The response should contain `result` and `count` properties.

## Create the React application

Create a React application using Vite.

```bash
cd ..
npm create vite@latest client -- --template react
cd client
npm install
```

## Bind Web API data to the React Chart

Configure the Syncfusion React Chart component with `DataManager` and `WebApiAdaptor` in the following file:

```text
client/src/App.jsx
```

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

import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";

function App() {
  const chartData = new DataManager({
    url: "http://localhost:5000/api/Sales",
    adaptor: new WebApiAdaptor()
  });

  const chartQuery = new Query().take(12);

  const primaryXAxis = {
    valueType: "Category",
    title: "Month"
  };

  const primaryYAxis = {
    title: "Amount",
    labelFormat: "{value}K"
  };

  const tooltip = {
    enable: true
  };

  const marker = {
    dataLabel: {
      visible: true
    }
  };

  return (
    <ChartComponent
      id="sales-chart"
      title="Monthly Sales and Expenses"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      tooltip={tooltip}
      legendSettings={{ visible: true }}
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
          xName="Month"
          yName="Sales"
          name="Sales"
          type="Column"
          marker={marker}
        />

        <SeriesDirective
          dataSource={chartData}
          query={chartQuery}
          xName="Month"
          yName="Expenses"
          name="Expenses"
          type="Line"
          marker={marker}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
```

## Run the React application

Run the client application.

```bash
npm run dev
```

Open the following URL in the browser:

```text
http://localhost:5173
```

The chart displays sales and expenses data from the Web API.

## Apply query operations

Use the `Query` class with `DataManager` to generate remote query operations. For example, to fetch the top six sales records in descending order, update the chart query in `App.jsx`:

```jsx
const chartQuery = new Query()
  .sortBy("Sales", "descending")
  .take(6);
```

The Web API then receives an OData-style query similar to:

```text
http://localhost:5000/api/Sales?$orderby=Sales desc&$top=6
```

> The sample controller supports sorting on `Month`, `Sales`, `Expenses`, `Profit`, and `Region`, and filtering on `Region` (equality) and `Sales` (greater than, less than, equality). Other fields and operators are ignored.

## Troubleshooting

**Chart is not loading data**

Verify the Web API is running and accessible at `http://localhost:5000/api/Sales`, and that the response contains `result` and `count` (lowercase).

**CORS error**

Confirm the CORS policy in `server/Program.cs` allows the React client URL: `http://localhost:5173`.

**Empty or missing data points**

Check that the field names in the chart (`Month`, `Sales`, `Expenses`, `Profit`) match the API response properties exactly.

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToAdaptors/ReactChartWebApiSample) repository.

## Summary

The `WebApiAdaptor` enables the Syncfusion React Chart component to communicate with a Web API that supports OData-style query parameters. The adaptor works with `DataManager` to request remote data, process the response, and bind records to the chart series.

This approach is suitable for applications where chart data is stored on the server and operations such as paging, sorting, and filtering must be handled remotely.
