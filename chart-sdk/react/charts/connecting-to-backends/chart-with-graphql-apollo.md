---
layout: post
title: Connecting React Chart with GraphQL Backend using Apollo | Syncfusion
description: Learn how to connect the Syncfusion React Chart component to a GraphQL backend using Apollo Server with the DataManager GraphQLAdaptor.
control: Chart with Apollo GraphQL
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting React Chart with GraphQL Backend using Apollo

This article explains how to connect the **Syncfusion React Chart** component to a **GraphQL backend built with Apollo Server**. The backend exposes a `getSalesChartData` query that returns monthly sales, expenses, and profit values, and the React app uses the Syncfusion `DataManager` with the [`GraphQLAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/graphql-adaptor) to fetch the data and bind it to the chart series [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#datasource).

Using `DataManager` + `GraphQLAdaptor` is the recommended approach because the adaptor handles the GraphQL request, response shaping, and the `result`/`count` mapping for you, so the React code stays focused on chart configuration.

## Prerequisites

| Software / Package | Recommended version | Purpose |
| --- | --- | --- |
| Node.js | 20.x or later | Runtime for backend and frontend |
| npm | Comes with Node.js | Package manager |
| Visual Studio Code | Latest | IDE for creating and running the sample |
| Vite | Latest | React application setup |
| `@apollo/server` | ^5.5.1 | GraphQL backend server |
| `graphql` | ^16.14.2 | GraphQL implementation for Node.js |
| `@syncfusion/ej2-react-charts` | Latest | React chart visualization |
| `@syncfusion/ej2-data` | Latest | Provides `DataManager`, `Query`, and `GraphQLAdaptor` |

Verify Node.js and npm:

```bash
node -v
npm -v
```

## Project Structure

The sample is split into a `Server` (Apollo GraphQL) and a `Client` (React + Vite + Syncfusion Chart) folder:

```text
GraphQLSampleApollo
├── Server
│   ├── package.json
│   └── src
│       ├── data.js
│       ├── schema.js
│       ├── resolvers.js
│       └── server.js
└── Client
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src
        ├── main.jsx
        ├── App.jsx
        └── index.css
```

## Backend: Apollo GraphQL Server

**Create the backend folder and install dependencies.** From a new terminal:

```bash
mkdir GraphQLSampleApollo
cd GraphQLSampleApollo
mkdir Server
cd Server
npm init -y
npm install @apollo/server graphql
mkdir src
```

**Configure `Server/package.json`.** Replace its contents with the following so the project uses ES modules and exposes the `start`/`dev` scripts:

```json
{
  "name": "chart-graphql-server",
  "version": "1.0.0",
  "description": "Apollo GraphQL backend for Syncfusion React Chart",
  "main": "src/server.js",
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node src/server.js"
  },
  "dependencies": {
    "@apollo/server": "^5.5.1",
    "graphql": "^16.14.2"
  }
}
```

> The `"type": "module"` setting is required because the backend files use ES module `import` and `export` syntax.

**Create `Server/src/data.js` — the sample chart dataset.**

```js
export const salesChartData = [
  { month: "Jan", sales: 35, expenses: 20, profit: 15 },
  { month: "Feb", sales: 45, expenses: 25, profit: 20 },
  { month: "Mar", sales: 40, expenses: 22, profit: 18 },
  { month: "Apr", sales: 55, expenses: 30, profit: 25 },
  { month: "May", sales: 65, expenses: 35, profit: 30 },
  { month: "Jun", sales: 75, expenses: 40, profit: 35 }
];
```

**Create `Server/src/schema.js` — the GraphQL schema.** The schema defines the `SalesChartPoint`, the `ChartDataResponse` wrapper (so the `GraphQLAdaptor` can map `result` and `count`), and the `getSalesChartData` query.

```js
export const typeDefs = `#graphql

type SalesChartPoint {
  month: String!
  sales: Float!
  expenses: Float!
  profit: Float!
}

type ChartDataResponse {
  result: [SalesChartPoint!]!
  count: Int!
}

type Query {
  getSalesChartData: ChartDataResponse!
}

`;
```

**Create `Server/src/resolvers.js` — the resolver that returns the data.**

```js
import { salesChartData } from './data.js';

export const resolvers = {
  Query: {
    getSalesChartData: () => ({
      result: salesChartData,
      count: salesChartData.length
    })
  }
};
```

**Create `Server/src/server.js` — the Apollo Server bootstrap.** It listens on port `4000` and logs the resolved URL.

```js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000
  }
});

console.log(`GraphQL server is running at ${url}`);
```

**Test the backend.** Start it, then open Apollo Sandbox at `http://localhost:4000/` and run the query below. The expected response is shown underneath.

```bash
cd Server
npm start
```

```graphql
query {
  getSalesChartData {
    result {
      month
      sales
      expenses
      profit
    }
    count
  }
}
```

```json
{
  "data": {
    "getSalesChartData": {
      "result": [
        { "month": "Jan", "sales": 35, "expenses": 20, "profit": 15 },
        { "month": "Feb", "sales": 45, "expenses": 25, "profit": 20 },
        { "month": "Mar", "sales": 40, "expenses": 22, "profit": 18 },
        { "month": "Apr", "sales": 55, "expenses": 30, "profit": 25 },
        { "month": "May", "sales": 65, "expenses": 35, "profit": 30 },
        { "month": "Jun", "sales": 75, "expenses": 40, "profit": 35 }
      ],
      "count": 6
    }
  }
}
```

If you see the six `result` items and `"count": 6`, the backend is working correctly.

## Frontend: React + Syncfusion Chart

**Create the React app with Vite.** Open a second terminal from the `GraphQLSampleApollo` root folder (keep the backend terminal running in parallel) and run:

```bash
npm create vite@latest Client -- --template react
cd Client
npm install
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

**Configure `Client/vite.config.js`.** Set the dev server port to `5176` (or any free port of your choice) so it doesn't collide with other Vite apps on your machine:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176
  }
});
```

**Configure `Client/src/main.jsx` — the Vite + React entry file.**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Replace `Client/src/App.jsx` — the chart with `DataManager` + `GraphQLAdaptor`.** The component creates a `DataManager` pointing at the Apollo endpoint, runs a `Query` through the `GraphQLAdaptor`, then assigns the returned array to each series' `dataSource` and calls `refresh()` on the chart.

```jsx
import React, { useEffect, useRef } from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  LineSeries,
  Category,
  Tooltip,
  Legend,
  DataLabel
} from "@syncfusion/ej2-react-charts";

import {
  DataManager,
  Query,
  GraphQLAdaptor
} from "@syncfusion/ej2-data";

const ChartGraphQL = () => {

  const chartRef = useRef(null);

  useEffect(() => {

    const dataManager = new DataManager({
      url: "http://localhost:4000/",

      adaptor: new GraphQLAdaptor({
        response: {
          result: "getSalesChartData.result",
          count: "getSalesChartData.count"
        },

        query: `
          query {
            getSalesChartData {
              count
              result {
                month
                sales
                expenses
                profit
              }
            }
          }
        `
      })
    });

    dataManager
      .executeQuery(new Query())
      .then((e) => {

        console.log(e);

        const chartData =
          Array.isArray(e.result)
            ? e.result
            : e.result?.result || [];

        if (
          chartRef.current &&
          chartRef.current.series &&
          chartRef.current.series.length > 0
        ) {

          chartRef.current.series[0].dataSource = chartData;
          chartRef.current.series[1].dataSource = chartData;
          chartRef.current.series[2].dataSource = chartData;

          chartRef.current.refresh();
        }

      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <ChartComponent
      id="graphql-chart"
      ref={chartRef}
      title="Monthly Sales Analysis"
      primaryXAxis={{
        valueType: "Category",
        title: "Month"
      }}
      primaryYAxis={{
        title: "Amount"
      }}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
      height="500px"
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
          type="Column"
          name="Sales"
        />

        <SeriesDirective
          dataSource={[]}
          xName="month"
          yName="expenses"
          type="Column"
          name="Expenses"
        />

        <SeriesDirective
          dataSource={[]}
          xName="month"
          yName="profit"
          type="Line"
          name="Profit"
        />

      </SeriesCollectionDirective>

    </ChartComponent>
  );
};

export default ChartGraphQL;
```

**Key configuration in the snippet above.**

- `DataManager.url` points at the Apollo Server endpoint.
- `GraphQLAdaptor.response.result` and `response.count` map to `getSalesChartData.result` and `getSalesChartData.count` so the `DataManager` can read the wrapped response shape.
- `GraphQLAdaptor.query` is the GraphQL document sent to the server. Request only the fields your chart needs.
- The series start with `dataSource={[]}` so the chart renders immediately; once the GraphQL promise resolves, the data is assigned and `chartRef.current.refresh()` redraws the chart.
- `month` is mapped to the x-axis via [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#xname); `sales`, `expenses`, and `profit` are mapped to separate series via [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#yname).
- Errors are caught and logged to the browser console for easy debugging.

## How to Run the Sample

You need **two terminals** open side by side: one for the backend, one for the frontend. Start the backend first so the React app has something to call when it loads.

**Terminal 1 — backend.** From the `GraphQLSampleApollo` root:

```bash
cd Server
npm start
```

You should see:

```text
GraphQL server is running at http://localhost:4000/
```

Leave this terminal running.

**Terminal 2 — frontend.** From the `GraphQLSampleApollo` root:

```bash
cd Client
npm run dev
```

Vite prints a local URL. With the `vite.config.js` shown above it is:

```text
http://localhost:5176/
```

Open that URL in the browser. The chart renders with an empty data set first, then immediately updates with the sales, expenses, and profit data returned by the Apollo `getSalesChartData` query.

**To stop the sample.** Press `Ctrl+C` in each terminal. Close the browser tab once both processes are stopped.

**Production build (optional).** From the `Client` folder:

```bash
npm run build
npm run preview
```

The backend does not require a build step because it runs plain JavaScript via `node src/server.js`.

## Troubleshooting

**Backend error: `Cannot use import statement outside a module`.** Add the following to `Server/package.json` (it should already be there from the snippet above) and restart the backend:

```json
"type": "module"
```

**React app shows a fetch/network error.** The backend is most likely not running or is on a different port. In the backend terminal, make sure you see `GraphQL server is running at http://localhost:4000/`. Then refresh the browser.

**Port 4000 is already in use.** Change the port in `Server/src/server.js`:

```js
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4001
  }
});
```

Then update the `DataManager` URL in `Client/src/App.jsx` to match:

```js
const dataManager = new DataManager({
  url: "http://localhost:4001/",
  adaptor: new GraphQLAdaptor({ /* ... */ })
});
```

**Port 5176 is already in use.** Change `server.port` in `Client/vite.config.js` to any free port and restart `npm run dev`.

**CORS errors in the browser console.** The React app and the Apollo Server run on different ports. Apollo Server's standalone starter does not send CORS headers by default, so the browser blocks the `DataManager` request. Wrap the request in your own CORS-enabled handler, or add CORS handling to `Server/src/server.js` using a middleware such as `cors` and pass it through `startStandaloneServer`'s `context` option. For local development you can also use the Vite dev proxy in `Client/vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    proxy: {
      "/graphql": {
        target: "http://localhost:4000",
        changeOrigin: true
      }
    }
  }
});
```

and update `DataManager.url` in `Client/src/App.jsx` to `"/graphql"`.

**Chart renders empty.** Open the browser developer tools and check the console. The most common causes are: the backend is not running, the URL in `DataManager` is wrong, or the `GraphQLAdaptor.response` mapping does not match the actual GraphQL response shape.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/GraphQLSampleApollo) repository.

---

## Summary

The Apollo GraphQL backend exposes chart data through the `getSalesChartData` query. The React app uses the Syncfusion `DataManager` with the `GraphQLAdaptor` to call the endpoint, assigns the returned array to each chart series' `dataSource`, and calls `refresh()` to render the chart. This pattern keeps the React code focused on chart configuration while the adaptor handles the GraphQL request and response mapping.

