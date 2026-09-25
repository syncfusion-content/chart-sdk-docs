---
layout: post
title: Remote Save Data Integration in React Chart | Syncfusion
description: Learn how to implement Remote Save-style data integration for Syncfusion React Chart component with backend API operations.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote Save Data Integration in React Chart Component

## Overview

This documentation explains how to implement a **Remote Save-style data integration** for the Syncfusion React Chart component.

The Syncfusion React Grid provides a `RemoteSaveAdaptor` workflow where data is loaded once, client-side operations are handled locally, and only CRUD operations are sent to the server. The Chart component is primarily a visualization component and does not provide built-in row editing or Grid-style CRUD UI. In this sample, the same Remote Save concept is applied to the Chart using:

- A React Chart for visualization
- Local state for chart rendering
- Backend APIs for insert, update, and delete operations
- Initial data loaded from the server

The chart follows this workflow:

1. The React client loads chart data from the server.
2. The Chart renders the loaded data locally.
3. Add, update, and delete actions are triggered from custom UI controls.
4. CRUD requests are sent to the backend API.
5. The chart's data source is refreshed locally after each successful operation.

```text
React Chart
   |
   | GET initial chart data
   v
Backend API
   |
   v
Chart renders data locally
   |
   | Insert / Update / Delete
   v
Backend API save endpoints
   |
   v
Update local chart data and refresh chart
```

---

## Prerequisites

Before creating the sample, install the following tools:

| Tool | Recommended version |
|------|---------------------|
| Node.js | 18.x or later (LTS) |
| npm | 9.x or later (bundled with Node.js) |
| .NET SDK | 8.0 or later (for the optional ASP.NET Core backend) |
| Visual Studio Code | Latest |
| Browser | Microsoft Edge, Chrome, or Firefox (latest) |

---

## Project Structure

Recommended project structure:

```text
remote-save-chart/
├── remote-save-chart.client/
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── remote-save-chart.server/
    ├── Controllers/
    │   └── ChartDataController.cs
    ├── Models/
    │   └── ChartData.cs
    ├── Program.cs
    ├── appsettings.json
    └── remote-save-chart.server.csproj
```

---

## Step 1: Create the React Client Project

Open Visual Studio Code and create a React application using Vite.

```bash
npm create vite@latest remote-save-chart.client -- --template react
```

Navigate to the client project folder.

```bash
cd remote-save-chart.client
```

Install the default project dependencies.

```bash
npm install
```

Vite starts the dev server on `http://localhost:5173` by default. If a different port is used, update the CORS origin in Step 9 to match.

---

## Step 2: Install Syncfusion React Chart Package

Install the required Syncfusion React Chart package.

```bash
npm install @syncfusion/ej2-react-charts --save
```

If you plan to use Syncfusion DataManager utilities, install the data package as well.

```bash
npm install @syncfusion/ej2-data --save
```

---

## Step 3: Add Syncfusion Styles

Open the following file:

```text
remote-save-chart.client/src/App.css
```

Add the Syncfusion base and chart theme styles.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-react-charts/styles/material3.css';
```

---

## Step 4: Configure the React Chart Component

Open the following file:

```text
remote-save-chart.client/src/App.jsx
```

Replace the default content with the React Chart implementation.

```jsx
import React, { useEffect, useState } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend
} from '@syncfusion/ej2-react-charts';
import './App.css';

const serviceUrl = 'https://localhost:7001/api/ChartData';

function App() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = async () => {
    try {
      const response = await fetch(serviceUrl);
      const result = await response.json();
      setChartData(result);
    } catch (error) {
      console.error('Data loading failed:', error);
    }
  };

  const addData = async () => {
    const newItem = {
      id: Date.now(),
      month: 'May',
      sales: 45
    };

    const response = await fetch(`${serviceUrl}/Insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    });

    const savedItem = await response.json();
    setChartData((previousData) => [...previousData, savedItem]);
  };

  const updateData = async () => {
    if (chartData.length === 0) {
      return;
    }

    const firstItem = chartData[0];
    const updatedItem = {
      ...firstItem,
      sales: firstItem.sales + 10
    };

    const response = await fetch(`${serviceUrl}/Update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    });

    const savedItem = await response.json();

    setChartData((previousData) =>
      previousData.map((item) =>
        item.id === savedItem.id ? savedItem : item
      )
    );
  };

  const deleteData = async () => {
    if (chartData.length === 0) {
      return;
    }

    const lastItem = chartData[chartData.length - 1];

    await fetch(`${serviceUrl}/Remove`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: lastItem.id })
    });

    setChartData((previousData) =>
      previousData.filter((item) => item.id !== lastItem.id)
    );
  };

  return (
    <div className="container">
      <h2>React Chart with Remote Save Data Integration</h2>

      <div className="button-group">
        <button onClick={addData}>Add Data</button>
        <button onClick={updateData}>Update Data</button>
        <button onClick={deleteData}>Delete Data</button>
      </div>

      <ChartComponent
        id="remote-save-chart"
        title="Monthly Sales Report"
        primaryXAxis={{ valueType: 'Category', title: 'Month' }}
        primaryYAxis={{ title: 'Sales' }}
        tooltip={{ enable: true }}
        legendSettings={{ visible: true }}
      >
        <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartData}
            xName="month"
            yName="sales"
            name="Sales"
            type="Column"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
```

---

## Step 5: Add Basic Styling

Open the following file:

```text
remote-save-chart.client/src/App.css
```

Add the following styles below the Syncfusion theme imports.

```css
.container {
  margin: 30px;
  text-align: center;
}

.button-group {
  margin-bottom: 20px;
}

.button-group button {
  margin: 5px;
  padding: 8px 14px;
  cursor: pointer;
}
```

---

## Step 6: Create the ASP.NET Core Backend (Optional)

From the parent folder (one level above `remote-save-chart.client`), create the backend project.

```bash
cd ..
dotnet new webapi -n remote-save-chart.server
cd remote-save-chart.server
```

Trust the local HTTPS development certificate so the React client can call the API without browser warnings:

```bash
dotnet dev-certs https --trust
```

The backend should contain the following files:

```text
remote-save-chart.server/Models/ChartData.cs
remote-save-chart.server/Controllers/ChartDataController.cs
remote-save-chart.server/Program.cs
remote-save-chart.server/Properties/launchSettings.json
```

---

## Step 7: Add the Chart Data Model

Create the following file:

```text
remote-save-chart.server/Models/ChartData.cs
```

Add the chart data model.

```csharp
namespace RemoteSaveChart.Server.Models
{
    public class ChartData
    {
        public long Id { get; set; }
        public string Month { get; set; } = string.Empty;
        public double Sales { get; set; }
    }
}
```

---

## Step 8: Add the Chart Data Controller

Create the following file:

```text
remote-save-chart.server/Controllers/ChartDataController.cs
```

Add the controller for initial load and CRUD operations.

```csharp
using Microsoft.AspNetCore.Mvc;
using RemoteSaveChart.Server.Models;

namespace RemoteSaveChart.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChartDataController : ControllerBase
    {
        private static readonly List<ChartData> Data = new()
        {
            new ChartData { Id = 1, Month = "Jan", Sales = 35 },
            new ChartData { Id = 2, Month = "Feb", Sales = 28 },
            new ChartData { Id = 3, Month = "Mar", Sales = 34 },
            new ChartData { Id = 4, Month = "Apr", Sales = 32 }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Data);
        }

        [HttpPost("Insert")]
        public IActionResult Insert([FromBody] ChartData value)
        {
            Data.Add(value);
            return Ok(value);
        }

        [HttpPost("Update")]
        public IActionResult Update([FromBody] ChartData value)
        {
            ChartData? item = Data.FirstOrDefault(data => data.Id == value.Id);

            if (item == null)
            {
                return NotFound();
            }

            item.Month = value.Month;
            item.Sales = value.Sales;

            return Ok(item);
        }

        [HttpPost("Remove")]
        public IActionResult Remove([FromBody] DeleteRequest request)
        {
            ChartData? item = Data.FirstOrDefault(data => data.Id == request.Id);

            if (item == null)
            {
                return NotFound();
            }

            Data.Remove(item);
            return Ok(item);
        }
    }

    public class DeleteRequest
    {
        public long Id { get; set; }
    }
}
```

> The in-memory `List<ChartData>` is not thread-safe and resets on every app restart. For production, replace it with a database accessed through Entity Framework Core or another data layer.

---

## Step 9: Configure CORS in the Backend

Open the following file:

```text
remote-save-chart.server/Program.cs
```

Configure CORS to allow requests from the React development server. The origin below matches Vite's default port (5173). Change it if your client uses a different port.

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowReactClient");
app.UseAuthorization();
app.MapControllers();
app.Run();
```

The default launch URL is configured in `Properties/launchSettings.json`. If your backend does not start on `https://localhost:7001`, update the `serviceUrl` constant in `App.jsx` (Step 4) to match the actual URL.

---

## How to Run the Server and Client

The server and the client are two independent processes. You need **both** running at the same time for the chart to load and save data. Run them in two separate terminals.

**Start the backend server**

Open a terminal in Visual Studio Code (or PowerShell) and navigate to the backend folder.

```bash
cd remote-save-chart.server
```

The first time you run the project, restore its NuGet packages and compile it:

```bash
dotnet restore
dotnet build
```

Then start the API:

```bash
dotnet run
```

`dotnet run` restores any missing packages, builds the project, and launches the Kestrel web server. Look for the `Now listening on:` line in the terminal output. The sample assumes:

```text
https://localhost:7001
```

Keep this terminal **open and running** while you use the app. The server stays in the foreground and logs each HTTP request. To stop the server, press `Ctrl+C` in its terminal.

If `https://localhost:7001` does not match the URL shown, open `Properties/launchSettings.json` and either change the `applicationUrl` or update the `serviceUrl` constant in `App.jsx` to match.

**Start the React client**

Open a **second** terminal (do not close the server terminal) and navigate to the client folder.

```bash
cd remote-save-chart.client
```

Start the Vite dev server:

```bash
npm run dev
```

`npm run dev` runs the `dev` script defined in `package.json`, which invokes Vite. Vite compiles the React code, watches for file changes, and serves the app at:

```text
http://localhost:5173
```

Open that URL in your browser. The page first calls `GET https://localhost:7001/api/ChartData` and renders the four months of seed data as columns.

**Use the chart**

- **Add Data** — Inserts a new column for May (sales = 45). The browser sends `POST /api/ChartData/Insert`, the server appends the record, and the chart re-renders with five columns.
- **Update Data** — Adds 10 to the first data point's sales. The browser sends `POST /api/ChartData/Update`, the server mutates the record, and the chart re-renders.
- **Delete Data** — Removes the last data point. The browser sends `POST /api/ChartData/Remove`, the server removes the record, and the chart re-renders.

Each request and its response are visible in the server terminal because of the default ASP.NET Core request logging, which makes it easy to confirm that the CRUD calls reach the API.

**Stop the processes**

To shut everything down:

1. In the client terminal, press `Ctrl+C` to stop Vite.
2. In the server terminal, press `Ctrl+C` to stop Kestrel.

> Always start the **server first** and then the **client**. If you start the client first, the initial `GET` call fails and the chart appears empty until you reload the page after the server is up.

**Production build**

To produce a static, deployable bundle of the client:

```bash
cd remote-save-chart.client
npm run build
```

The output is written to `dist/`. The compiled `dist/` folder can be served by any static file host or by adding `app.UseStaticFiles()` in `Program.cs` and copying the contents of `dist/` into `remote-save-chart.server/wwwroot/`.

---

## Verify Remote Save Operations

Use the buttons above the chart to verify each operation.

- **Add Data** — Adds a new data point; the chart refreshes and the `Insert` endpoint is called.
- **Update Data** — Increases the first data point's sales value; the chart refreshes and the `Update` endpoint is called.
- **Delete Data** — Removes the last data point; the chart refreshes and the `Remove` endpoint is called.

---

## Troubleshooting

**Chart does not render**

Check that the Syncfusion chart package is installed and the theme styles are imported in `remote-save-chart.client/src/App.css`.

**Data does not load**

Verify the backend is running and the `serviceUrl` constant in `App.jsx` matches the actual backend URL.

**CRUD buttons do not work**

Check the browser developer tools Network tab and verify that the API endpoints are reachable. The client logs the HTTP status to the console on failure.

**CORS error appears**

Ensure CORS is configured in `remote-save-chart.server/Program.cs` and that the allowed origin matches the URL shown by the Vite dev server.

**HTTPS certificate warning**

Run `dotnet dev-certs https --trust` once per machine so the browser trusts the local backend.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToAdaptors/RemoveSaveBehaviour) repository.

---
