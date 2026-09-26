---
layout: post
title: Connecting Chart to HotChocolate GraphQL Backend | Syncfusion
description: Learn how to connect Syncfusion React Charts component to an ASP.NET Core HotChocolate GraphQL backend for remote data binding.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting Syncfusion React Chart to HotChocolate GraphQL Backend

This documentation explains how to connect a **Syncfusion React Chart** component to an **ASP.NET Core HotChocolate GraphQL backend** for remote data binding.

The sample uses simple monthly sales data from a GraphQL API and displays it in a Syncfusion React Chart.

---

## GraphQL and Chart integration flow

The React frontend connects to the GraphQL endpoint using Syncfusion's `DataManager` with the `GraphQLAdaptor` (from `@syncfusion/ej2-data`). The adaptor encapsulates the GraphQL request and response mapping, so the chart can be bound declaratively and refreshed with the returned data.

```text
Syncfusion React Chart
        ↓
DataManager (GraphQLAdaptor)
        ↓
HotChocolate GraphQL endpoint /graphql
        ↓
GraphQL Query resolver
        ↓
Sales data source
        ↓
Chart data response
```

In this sample, the backend returns static in-memory sales data. In a real application, this data can come from a database, REST service, repository, or Entity Framework Core.

---

## Prerequisites

Install the following tools before running the sample:

| Software / Package | Recommended version | Purpose |
|---|---:|---|
| Visual Studio Code | Latest | Code editor |
| .NET SDK | 8.0 or later | Runtime and SDK for ASP.NET Core backend |
| HotChocolate.AspNetCore | 13.0.0 | GraphQL server implementation |
| Node.js | 20.x LTS or later | Runtime for React frontend |
| npm | Latest stable | Package manager |
| Vite | Latest stable | React build tool |
| @syncfusion/ej2-react-charts | ^33.2.15 | Syncfusion React Chart component |
| @syncfusion/ej2-data | ^34.2.2 | Syncfusion DataManager with GraphQLAdaptor |

Verify the tools:

```bash
dotnet --version
node --version
npm --version
```

---

## Project folder structure

```text
HotChocolateGraphQL/
│
├── Server/
│   ├── backend.csproj
│   ├── Program.cs
│   ├── Models/
│   │   └── SalesData.cs
│   └── GraphQL/
│       └── Query.cs
│
└── Client/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        └── index.css
```

---

## Server: Setting up the HotChocolate GraphQL backend

The backend exposes a `/graphql` endpoint and returns chart data using a query resolver.

### Step 1: Create the ASP.NET Core backend project

```bash
dotnet new webapi -n backend
cd backend
```

### Step 2: Install the HotChocolate package

```bash
dotnet add package HotChocolate.AspNetCore --version 13.0.0
```

### Step 3: Verify the project file

**File: `Server/backend.csproj`**

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="HotChocolate.AspNetCore" Version="13.0.0" />
  </ItemGroup>

</Project>
```

### Step 4: Create the sales data model

```bash
mkdir Models
```

**File: `Server/Models/SalesData.cs`**

```csharp
namespace backend.Models
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

The `SalesData` class defines the shape of the chart data returned by GraphQL. Each record represents one month of business data.

### Step 5: Create the GraphQL query resolver

```bash
mkdir GraphQL
```

**File: `Server/GraphQL/Query.cs`**

```csharp
using backend.Models;

namespace backend.GraphQL
{
    public class Query
    {
        public List<SalesData> GetSalesChartData()
        {
            return new List<SalesData>
            {
                new SalesData { Month = "Jan", Sales = 35, Expenses = 20, Profit = 15 },
                new SalesData { Month = "Feb", Sales = 28, Expenses = 18, Profit = 10 },
                new SalesData { Month = "Mar", Sales = 34, Expenses = 22, Profit = 12 },
                new SalesData { Month = "Apr", Sales = 32, Expenses = 21, Profit = 11 },
                new SalesData { Month = "May", Sales = 40, Expenses = 25, Profit = 15 },
                new SalesData { Month = "Jun", Sales = 45, Expenses = 27, Profit = 18 }
            };
        }
    }
}
```

The `GetSalesChartData` method is exposed in GraphQL as `salesChartData`.

### Step 6: Configure HotChocolate in Program.cs

**File: `Server/Program.cs`**

```csharp
using backend.GraphQL;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy for React Vite frontend.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy
            .WithOrigins("http://localhost:5178")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Register HotChocolate GraphQL server.
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();

app.UseCors("AllowReactApp");

// GraphQL endpoint:
// http://localhost:5168/graphql
app.MapGraphQL("/graphql");

app.MapGet("/", () => "HotChocolate GraphQL Backend is running.");

app.Run();
```

`AddGraphQLServer()` registers HotChocolate, `AddQueryType<Query>()` registers the resolver, and `MapGraphQL("/graphql")` exposes the endpoint. `UseCors("AllowReactApp")` permits the React frontend at `http://localhost:5178` to call the API.

---

## Client: Setting up the Syncfusion React Chart frontend

### Step 7: Install dependencies

Open a new terminal in the `Client` folder and install all packages:

```bash
cd HotChocolateGraphQL/Client
npm install
```

The `package.json` already declares the required packages:

**File: `Client/package.json`**

```json
{
  "name": "syncfusion-chart-graphql-hotchocolate",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@syncfusion/ej2-data": "^34.2.2",
    "@syncfusion/ej2-react-charts": "^33.2.15",
    "react": "^19.2.6",
    "react-dom": "^19.2.6"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}
```

### Step 8: Review the React entry file

**File: `Client/src/main.jsx`**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Step 9: Review the styles

**File: `Client/src/index.css`**

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f7fb;
}
```

**File: `Client/src/App.css`**

```css
.app-container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 24px;
}

.header {
  text-align: center;
  margin-bottom: 24px;
}

.header h1 {
  margin-bottom: 8px;
  color: #1f2937;
}

.header p {
  color: #6b7280;
}

.chart-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.status {
  text-align: center;
  padding: 24px;
  font-size: 18px;
}

.error {
  color: #dc2626;
}
```

### Step 10: Confirm the Vite dev port

**File: `Client/vite.config.js`**

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178
  }
});
```

The Vite dev server runs at `http://localhost:5178`, which is the same origin allowed by the backend CORS policy.

### Step 11: Build the Chart component and bind GraphQL data

**File: `Client/src/App.jsx`**

```jsx
import React, { useEffect, useMemo, useRef } from 'react';

import {
  DataManager,
  GraphQLAdaptor,
  Query
} from '@syncfusion/ej2-data';

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
} from '@syncfusion/ej2-react-charts';

import './App.css';

function App() {
  const chartRef = useRef(null);

  const salesService = useMemo(() => {
    return new DataManager({
      url: 'http://localhost:5168/graphql',
      adaptor: new GraphQLAdaptor({
        response: {
          result: 'salesChartData'
        },
        query: `
          query {
            salesChartData {
              month
              sales
              expenses
              profit
            }
          }
        `
      })
    });
  }, []);

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const result = await salesService.executeQuery(new Query());
        const chartData = result.result;

        if (chartRef.current) {
          chartRef.current.series[0].dataSource = chartData;
          chartRef.current.series[1].dataSource = chartData;
          chartRef.current.series[2].dataSource = chartData;
          chartRef.current.refresh();
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadChartData();
  }, [salesService]);

  const primaryXAxis = useMemo(
    () => ({
      valueType: 'Category',
      title: 'Month',
      majorGridLines: { width: 0 }
    }),
    []
  );

  const primaryYAxis = useMemo(
    () => ({
      title: 'Amount in USD',
      labelFormat: '${value}K',
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 }
    }),
    []
  );

  const tooltip = useMemo(() => ({ enable: true }), []);

  const marker = useMemo(
    () => ({
      dataLabel: { visible: true }
    }),
    []
  );

  return (
    <div className="app-container">
      <div className="header">
        <h1>Syncfusion React Chart with HotChocolate GraphQL</h1>
        <p>This chart loads sales data from an ASP.NET Core HotChocolate GraphQL backend.</p>
      </div>

      <div className="chart-card">
        <ChartComponent
          id="sales-chart"
          ref={chartRef}
          title="Monthly Sales, Expenses, and Profit"
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
              dataSource={[]}
              xName="month"
              yName="sales"
              name="Sales"
              type="Column"
              marker={marker}
            />
            <SeriesDirective
              dataSource={[]}
              xName="month"
              yName="expenses"
              name="Expenses"
              type="Column"
              marker={marker}
            />
            <SeriesDirective
              dataSource={[]}
              xName="month"
              yName="profit"
              name="Profit"
              type="Line"
              marker={{
                visible: true,
                width: 8,
                height: 8,
                dataLabel: { visible: true }
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default App;
```

**How the GraphQL binding works**

- `DataManager` is configured with the `GraphQLAdaptor` and the HotChocolate `/graphql` endpoint URL.
- The `query` field of the adaptor contains the GraphQL document that returns `month`, `sales`, `expenses`, and `profit`.
- The `response.result` field tells the adaptor that the chart data is located at `salesChartData` in the GraphQL response.
- `salesService.executeQuery(new Query())` executes the query and returns the result.
- The chart's `ref` is used to assign the returned data to each series' `dataSource` and to refresh the chart after data is loaded.
- `xName="month"` maps the x-axis field.
- `yName="sales"`, `yName="expenses"`, and `yName="profit"` map the y-axis fields.

---

## How to run the application

The backend and frontend must be started **separately** in two different terminals. Start the backend first so the GraphQL endpoint is available before the React app boots.

### Run the backend (Terminal 1)

```bash
cd HotChocolateGraphQL/Server
dotnet run
```

What happens:

- The .NET CLI compiles and starts the ASP.NET Core app using the URL defined in `Server/Properties/launchSettings.json`.
- The app listens on `http://localhost:5168`.
- HotChocolate exposes the GraphQL endpoint at `http://localhost:5168/graphql`.
- The CORS policy `AllowReactApp` is now active, allowing requests from the Vite frontend.

Verify the backend by opening the GraphQL IDE in a browser:

```text
http://localhost:5168/graphql
```

Run this query in the IDE to confirm the data:

```graphql
query {
  salesChartData {
    month
    sales
    expenses
    profit
  }
}
```

Expected response:

```json
{
  "data": {
    "salesChartData": [
      { "month": "Jan", "sales": 35, "expenses": 20, "profit": 15 },
      { "month": "Feb", "sales": 28, "expenses": 18, "profit": 10 }
    ]
  }
}
```

Keep this terminal open. Stop the backend with `Ctrl + C` when you are finished.

### Run the frontend (Terminal 2)

Open a second terminal and start the React dev server:

```bash
cd HotChocolateGraphQL/Client
npm run dev
```

What happens:

- Vite starts the dev server on `http://localhost:5178`.
- React mounts the chart component.
- The `useEffect` hook creates a `DataManager` with the `GraphQLAdaptor` and calls `executeQuery(new Query())` against `http://localhost:5168/graphql`.
- The returned data is assigned to each series and the chart is refreshed.
- Hot module replacement (HMR) is enabled, so any edit to `App.jsx` updates the chart instantly.

Open the React app in the browser:

```text
http://localhost:5178
```

You should see a Syncfusion React Chart displaying monthly sales, expenses, and profit data returned from the HotChocolate GraphQL backend.

### Stop the application

To stop the application, press `Ctrl + C` in each terminal (frontend and backend).

---

**Build commands:** Build the backend with `cd HotChocolateGraphQL/Server && dotnet build` and the frontend with `cd HotChocolateGraphQL/Client && npm run build`.

---

## Troubleshooting

**Issue: Network request failed**

Possible causes:

- Backend is not running.
- Backend URL is incorrect in the `DataManager` configuration.
- CORS is not configured correctly.

Check that this URL responds:

```text
http://localhost:5168/graphql
```

Check that CORS allows:

```text
http://localhost:5178
```

**Issue: Cannot query field `salesChartData`**

Make sure the backend query method is named:

```csharp
public List<SalesData> GetSalesChartData()
```

Also confirm the `GraphQLAdaptor` is configured with the correct response mapping:

```javascript
new GraphQLAdaptor({
  response: { result: 'salesChartData' },
  query: `
    query {
      salesChartData {
        month
        sales
        expenses
        profit
      }
    }
  `
})
```

**Issue: Chart is empty**

Check the browser developer tools console and network tab.

The `DataManager` request should post the GraphQL document to:

```text
http://localhost:5168/graphql
```

The response should contain the chart data inside the `salesChartData` field. Also verify that the chart series uses the correct field names:

```jsx
xName="month"
yName="sales"
```

---

**Next steps**

You can extend this sample by adding:

- Query arguments such as `year`, `region`, or `category`.
- Database integration using Entity Framework Core.
- More chart types such as line, area, pie, stacked column, or spline.
- Dashboard layout with multiple charts.
- Authentication and authorization.
- Loading indicators and retry button.
- Real-time updates with polling or subscriptions.

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/HotChocolateGraphQL) repository.

---
