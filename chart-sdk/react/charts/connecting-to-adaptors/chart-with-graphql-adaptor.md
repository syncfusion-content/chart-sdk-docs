---
layout: post
title: GraphQL Adaptor Binding in the React Chart | Syncfusion
description: Learn how to bind a Syncfusion React Chart component to a GraphQL service using DataManager and GraphQLAdaptor.
control: GraphQL Adaptor
platform: ej2-react
documentation: ug
---

# GraphQL Data Binding in the React Chart

The React Chart can load data from a [GraphQL](https://graphql.org/learn/) endpoint by using the Syncfusion `DataManager` with `GraphQLAdaptor`. This guide shows how to configure the adaptor, the request payload it sends, and the response shape it expects, then walks through a minimal end-to-end sample.

## Understanding GraphQL

[GraphQL](https://graphql.org/learn/introduction/) is a query language that lets applications request exactly the data they need. A GraphQL endpoint accepts a single `POST` request that contains a query and returns only the requested fields in a `data` envelope:

```json
{ "data": { "getSalesData": { "result": [ ... ] } } }
```

For visualization, this is a good fit for the React Chart because chart series are well-defined: each point needs a small, fixed set of fields, and over-fetching rarely helps a chart render faster or better.

Key GraphQL concepts:

- **Query** — A read request. The Chart only needs to issue queries; mutations are not used for binding chart data.
- **Schema** — Defines the available types and operations. The schema in this guide exposes a single `getSalesData` query that returns a `SalesResult` containing a `result` array of `SalesData` records.
- **Resolver** — The function on the server that returns the data for a query. In the sample, `getSalesData` returns a hard-coded list of six months.
- **Response envelope** — GraphQL responses are wrapped in `{ data: { ... } }`. The `GraphQLAdaptor` strips the `data.` prefix automatically, so the `response.result` mapping is relative to the `data` object, not the full response.

GraphQL query example used in this guide:

```graphql
query {
  getSalesData {
    result {
      month
      revenue
    }
  }
}
```

## Integrating Syncfusion React Chart with GraphQLAdaptor

The `GraphQLAdaptor` is a specialized adaptor in the Syncfusion `DataManager` that handles communication between the React Chart and a GraphQL server. It sends the configured query, parses the response, and binds the resulting array to the chart series.

Workflow:

1. **Chart mount** — The `ChartComponent` renders and the `SeriesDirective` references a `DataManager` configured with `GraphQLAdaptor`.
2. **Query construction** — The adaptor wraps the configured `query` together with paging/sort metadata into a GraphQL request body.
3. **POST request** — The request is sent to the configured `url`.
4. **Response processing** — The adaptor reads the path specified in `response.result` and returns the array (and optional `count` and `aggregates`).
5. **Chart rendering** — The Chart renders the series using `xName` and `yName` to read each point.

### DataManager configuration

The `DataManager` is created once at module scope and passed directly to the `SeriesDirective`:

```javascript
import { DataManager, GraphQLAdaptor } from '@syncfusion/ej2-data';

const dataManager = new DataManager({
  url: 'http://localhost:4000/graphql',
  adaptor: new GraphQLAdaptor({
    response: {
      result: 'getSalesData.result'
    },
    query: `
      query {
        getSalesData {
          result {
            month
            revenue
          }
        }
      }
    `
  })
});
```

Key options:

- `url` — the GraphQL endpoint. The adaptor always uses `POST` and a JSON body.
- `adaptor` — an instance of `GraphQLAdaptor`.
- `response.result` — a dot-separated path to the array of points, **relative to the `data` envelope** (which the adaptor strips). In this sample the array lives at `getSalesData.result` inside `data`.
- `query` — the GraphQL query string sent on every request. Variables such as paging, sorting, and filtering are appended automatically.

### Chart binding

The `DataManager` is then passed to the series `dataSource`. The Chart issues the query and re-renders when the response arrives — no `useState` or `useEffect` is required:

```jsx
<ChartComponent
  id="sales-chart"
  title="Monthly Sales Revenue"
  primaryXAxis={{ valueType: 'Category', title: 'Month' }}
  primaryYAxis={{ title: 'Revenue', minimum: 0, maximum: 2500, interval: 500 }}
  tooltip={{ enable: true }}
  legendSettings={{ visible: true }}
>
  <Inject services={[LineSeries, Category, Tooltip, Legend]} />
  <SeriesCollectionDirective>
    <SeriesDirective
      dataSource={dataManager}
      xName="month"
      yName="revenue"
      name="Revenue"
      type="Line"
      marker={{ visible: true, width: 10, height: 10 }}
    />
  </SeriesCollectionDirective>
</ChartComponent>
```

`primaryXAxis.valueType: 'Category'` tells the Chart to treat each `month` value as a discrete label rather than a continuous numeric value. The series-level `xName` and `yName` map the GraphQL response fields to the X and Y axes.

## Execution procedure

The sample runs as two independent processes: a Node.js GraphQL server that returns data, and a Create React App client that renders the chart. Run them in this order.

### 1. Start the GraphQL server

The server is created from four pieces:

- **Express** — HTTP server framework that listens on port 4000.
- **`express-graphql`** — middleware that exposes the `/graphql` endpoint and runs the GraphQL executor for incoming requests.
- **Schema** — a `buildSchema` graph that declares `SalesData`, `SalesResult`, and the `getSalesData` query.
- **Resolver** — the `getSalesData` arrow function that returns the hard-coded list of six months.

When you run `node server.js`, Express starts, `cors()` is applied to every request, and the `/graphql` route becomes available at `http://localhost:4000/graphql`. No background work happens until a client sends the first query.

### 2. Start the React client

In a second terminal, `npm start` (run inside `chart-client`) launches the Create React App dev server on port 3000. Webpack compiles `src/App.js` and serves the bundle to the browser. When the browser opens `http://localhost:3000`, React mounts `App`.

### 3. What happens when the Chart mounts

In order:

1. React renders `<ChartComponent>` and its `<SeriesDirective>` children.
2. The series sees `dataSource={dataManager}` and recognizes that the source is a `DataManager` rather than an array.
3. The Chart calls `dataManager.executeQuery(...)` internally. This is the same call the `useEffect` version of the sample makes — the Chart is making it for you, so React state is not required.
4. The `GraphQLAdaptor` constructs the GraphQL request body. It always wraps the configured `query` together with paging, sorting, and filtering variables generated from the chart's `Query` (empty in this sample because the chart is not paging).
5. The adaptor POSTs the JSON body to `http://localhost:4000/graphql` with `Content-Type: application/json`.
6. `express-graphql` matches the `getSalesData` field in the query to the `getSalesData` resolver and runs it.
7. The resolver returns `{ result: [ ... ] }`. `express-graphql` wraps the resolver output in the standard GraphQL envelope: `{ data: { getSalesData: { result: [ ... ] } } }`.
8. The response travels back to the browser. The adaptor reads the path specified in `response.result` (`getSalesData.result`) **relative to the `data` envelope** — because the adaptor strips the `data.` prefix for you, the path starts at `getSalesData`, not at the top of the JSON.
9. The resulting array of six `{ month, revenue }` objects is bound to the series.
10. The Chart reads `xName="month"` and `yName="revenue"` from each point and renders the line.

### 4. Verifying the request

To confirm everything is wired up correctly:

- In the browser, open DevTools → Network and filter on `graphql`. You should see a `POST /graphql` request with status `200 OK`.
- The request body's `query` field matches the configuration in `App.js`. The `variables.datamanager` field is empty for this chart because there is no paging/sort/filter to send.
- The response body's `data.getSalesData.result` contains the six monthly records in the order the resolver returned them.

### 5. Stopping the sample

Press `Ctrl+C` in each terminal to stop the server and the client. Run them again with the same commands when you want to restart.

## Sample implementation

The sample is split into a small Node.js GraphQL server and a Create React App client.

### Server (`chart-graphql-server/server.js`)

```javascript
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();
app.use(cors());

const schema = buildSchema(`
  type SalesData {
    month: String
    revenue: Int
  }

  type SalesResult {
    result: [SalesData]
  }

  type Query {
    getSalesData: SalesResult
  }
`);

const root = {
  getSalesData: () => ({
    result: [
      { month: 'Jan', revenue: 1000 },
      { month: 'Feb', revenue: 1500 },
      { month: 'Mar', revenue: 1200 },
      { month: 'Apr', revenue: 2000 },
      { month: 'May', revenue: 1800 },
      { month: 'Jun', revenue: 2200 }
    ]
  })
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});
```

`cors()` is required because the React dev server (port 3000) and the GraphQL server (port 4000) are on different origins.

### Client (`chart-client/src/App.js`)

```javascript
import React, { useEffect, useState } from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Category,
  Tooltip,
  Legend
} from '@syncfusion/ej2-react-charts';

import { DataManager, GraphQLAdaptor, Query } from '@syncfusion/ej2-data';

import './App.css';

const dataManager = new DataManager({
  url: 'http://localhost:4000/graphql',
  adaptor: new GraphQLAdaptor({
    response: {
      result: 'getSalesData.result'
    },
    query: `
      query {
        getSalesData {
          result {
            month
            revenue
          }
        }
      }
    `
  })
});

function App() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    dataManager.executeQuery(new Query())
      .then((response) => {
        setChartData(response.result || []);
      })
      .catch((err) => {
        console.error('GraphQL Error:', err);
        setError(err.message || 'Failed to load data');
      });
  }, []);

  return (
    <div className="App">
      <h1>Sales Chart using GraphQLAdaptor</h1>

      <ChartComponent
        id="sales-chart"
        title="Monthly Sales Revenue"
        primaryXAxis={{ valueType: 'Category', title: 'Month' }}
        primaryYAxis={{ title: 'Revenue', minimum: 0, maximum: 2500, interval: 500 }}
        tooltip={{ enable: true }}
        legendSettings={{ visible: true }}
      >
        <Inject services={[LineSeries, Category, Tooltip, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartData}
            xName="month"
            yName="revenue"
            name="Revenue"
            type="Line"
            marker={{ visible: true, width: 10, height: 10 }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
```

### Running the sample

From the project root, open two terminals:

```bash
# Terminal 1
cd chart-graphql-server
node server.js

# Terminal 2
cd chart-client
npm start
```

Then open `http://localhost:3000` and confirm in the browser DevTools → Network tab that a `POST /graphql` request returns `200 OK` with the expected JSON.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToAdaptors/ReactGraphQL) repository.

---
