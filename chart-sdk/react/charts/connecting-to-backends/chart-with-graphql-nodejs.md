---
layout: post
title: Connecting React Chart with GraphQL Backend | Syncfusion
description: Learn how to connect Syncfusion React Chart component with a Node.js GraphQL backend in Syncfusion Essential JS 2 and more.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting React Chart with GraphQL Backend

This guide shows how to bind the **Syncfusion React Chart** to a **Node.js GraphQL backend** using the Syncfusion `GraphQLAdaptor`. The backend serves in-memory monthly sales data, and the React client fetches and renders it as a column and line chart.

The chart displays:

- **Sales** as a column series
- **Expenses** as a line series
- **Month** on the X-axis
- **Amount** on the Y-axis

**Why `GraphQLAdaptor`?** It is part of `@syncfusion/ej2-data` and handles the GraphQL request, variable binding, and response parsing for you, so no `fetch` code, request headers, or manual unwrapping is required.

---

## Prerequisites

Install the following before you start.

| Software / Package | Recommended Version | Purpose |
|---|---:|---|
| Node.js | 20.x LTS or later | Runtime for backend and frontend tooling |
| npm | Bundled with Node.js | Package manager |
| Visual Studio Code | Latest | Development IDE |
| Vite | 5.x or later | React application setup and dev server |
| TypeScript | 5.x or later | Type safety for frontend and backend |
| Express | 5.x | Node.js web server |
| GraphQL | 16.x | GraphQL schema and query execution |
| graphql-http | Latest | GraphQL HTTP endpoint handler |
| cors | Latest | Enables frontend requests to the backend |
| @syncfusion/ej2-react-charts | ^33.2.x | Syncfusion React Chart component |
| @syncfusion/ej2-data | ^33.2.x | Provides `DataManager`, `Query`, and `GraphQLAdaptor` |

Verify your environment:

```bash
node -v
npm -v
```

The `@syncfusion/ej2-data` and `@syncfusion/ej2-react-charts` versions should match (both `^33.2.x` in this sample).

---

## Project Structure

```text
GraphQLChartDemo
│
├── Server
│   ├── package.json
│   ├── tsconfig.json
│   └── src
│       ├── data.ts          // in-memory sales dataset
│       ├── schema.graphql   // GraphQL schema
│       └── server.ts        // Express + graphql-http entry point
│
└── Client
    ├── index.html
    ├── package.json
    ├── tsconfig.json        // project-references shim
    ├── tsconfig.app.json    // app config (Vite default)
    ├── tsconfig.node.json   // node config (Vite default)
    ├── vite.config.ts
    └── src
        ├── App.tsx          // page shell
        ├── ChartGraphQL.tsx // chart + DataManager wiring
        ├── main.tsx         // React entry point
        ├── App.css          // optional pre-styled classes
        └── index.css        // Vite default styles
```

> The `tsconfig.app.json` and `tsconfig.node.json` files are the Vite `react-ts` defaults; the doc only shows them for reference.

---

## Build the Backend

The backend exposes chart data at `http://localhost:4000/graphql`. The React client points its `DataManager` to this URL.

**Create the project and install packages:**

```bash
mkdir GraphQLChartDemo
cd GraphQLChartDemo
mkdir Server
cd Server
npm init -y
npm install express graphql graphql-http cors
npm install -D typescript ts-node-dev @types/node @types/express @types/cors
```

**`Server/package.json`** — scripts and dependencies:

```json
{
  "name": "chart-graphql-server",
  "version": "1.0.0",
  "description": "GraphQL backend for Syncfusion React Chart",
  "main": "dist/server.js",
  "type": "commonjs",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },
  "dependencies": {
    "cors": "^2.8.6",
    "express": "^5.2.1",
    "graphql": "^16.14.2",
    "graphql-http": "^1.23.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/node": "^25.9.5",
    "ts-node-dev": "^2.0.0",
    "typescript": "^6.0.3"
  }
}
```

Reinstall the dependencies after editing the file:

```bash
npm install
```

**`Server/tsconfig.json`** — TypeScript config:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "ignoreDeprecations": "6.0"
  },
  "include": ["src"]
}
```

The `ignoreDeprecations: "6.0"` option silences the `moduleResolution=node10` warning emitted by TypeScript 6.x. Remove it if you install TypeScript 5.x.

**`Server/src/data.ts`** — the in-memory dataset consumed by the resolver:

```ts
export interface MonthlySales {
  id: number;
  month: string;
  sales: number;
  expenses: number;
}

export const monthlySalesData: MonthlySales[] = [
  { id: 1, month: "Jan", sales: 35, expenses: 20 },
  { id: 2, month: "Feb", sales: 28, expenses: 18 },
  { id: 3, month: "Mar", sales: 34, expenses: 22 },
  { id: 4, month: "Apr", sales: 32, expenses: 24 },
  { id: 5, month: "May", sales: 40, expenses: 26 },
  { id: 6, month: "Jun", sales: 48, expenses: 30 }
];
```

**`Server/src/schema.graphql`** — the GraphQL schema. `DataManagerInput` is optional and lets the Syncfusion `DataManager` forward paging parameters:

```graphql
type MonthlySales {
  id: Int!
  month: String!
  sales: Float!
  expenses: Float!
}

type MonthlySalesReturnType {
  result: [MonthlySales!]!
  count: Int!
}

input DataManagerInput {
  skip: Int
  take: Int
  requiresCounts: Boolean
}

type Query {
  getMonthlySales(datamanager: DataManagerInput): MonthlySalesReturnType!
}
```

**`Server/src/server.ts`** — the Express + graphql-http server. `cors()` lets the frontend call the API. The schema is loaded at runtime from `schema.graphql`, and `getMonthlySales` returns `{ result, count }` to match `MonthlySalesReturnType`:

```ts
import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { join } from "path";
import { buildSchema } from "graphql";
import { createHandler } from "graphql-http/lib/use/express";
import { monthlySalesData } from "./data";

const app = express();
const PORT = 4000;

app.use(cors());

const schemaPath = join(__dirname, "schema.graphql");
const schemaFile = readFileSync(schemaPath, "utf8");
const schema = buildSchema(schemaFile);

interface DataManagerInput {
  skip?: number;
  take?: number;
  requiresCounts?: boolean;
}

interface GetMonthlySalesArgs {
  datamanager?: DataManagerInput;
}

const rootValue = {
  getMonthlySales: ({ datamanager }: GetMonthlySalesArgs) => {
    let result = [...monthlySalesData];
    const count = result.length;

    if (datamanager) {
      const skip = datamanager.skip ?? 0;
      const take = datamanager.take ?? result.length;

      result = result.slice(skip, skip + take);
    }

    return {
      result,
      count
    };
  }
};

app.get("/", (_req, res) => {
  res.send("GraphQL Chart Server is running. Use /graphql endpoint.");
});

app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});
```

> **Production build note.** `tsc` does not copy `schema.graphql` to the `dist` folder, and `readFileSync(__dirname, ...)` will then throw at startup. Either copy the file (`cp src/schema.graphql dist/`) or change the path to read from the source location.

---

## Build the Frontend

The React client uses a Syncfusion `DataManager` configured with a `GraphQLAdaptor`. The adaptor posts the configured query, forwards paging variables, and parses the response using the `response` mapping. The resolved array is then bound to the Chart series.

**Create the React app and install Syncfusion packages:**

```bash
cd ../
npm create vite@latest Client -- --template react-ts
cd Client
npm install
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

**`Client/vite.config.ts`** — dev server on port `5176`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    open: true
  }
});
```

> The Vite dev port (5176) is **separate** from the backend GraphQL port (4000). The Chart component is hard-coded to `http://localhost:4000/graphql` for the backend.

**`Client/index.html`** — update the title if you wish:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion React Chart with GraphQL</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**`Client/src/main.tsx`** — Vite default entry. The `react-ts` template generates this file; you do not need to edit it:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**`Client/src/App.tsx`** — page shell that hosts the chart:

```tsx
import ChartGraphQL from "./ChartGraphQL";

function App() {
  return (
    <div className="app-container">
      <div className="header-section">
        <h1>Syncfusion React Chart with GraphQL Backend</h1>

        <p>
          This sample loads monthly sales and expenses data from a Node.js
          GraphQL API and displays it using the Syncfusion React Chart
          component.
        </p>
      </div>

      <ChartGraphQL />
    </div>
  );
}

export default App;
```

> `App.css` is included in the project for convenience and defines classes for the chart area, header, and status states (`app-container`, `header-section`, `chart-card`, `chart-header`, `refresh-button`, `status-card`, `error-card`, `help-box`). It is not imported by default; add `import './App.css';` to `App.tsx` only if you want to use those classes.

**`Client/src/ChartGraphQL.tsx`** — wires the `DataManager` + `GraphQLAdaptor` to the Chart. The query runs once on mount; the response is parsed by the adaptor's `response.result` / `response.count` mapping, and the data is assigned to both series via `chartRef` followed by `refresh()`:

```tsx
import React, { useEffect, useRef } from 'react';

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
  DataLabel,
  Chart
} from '@syncfusion/ej2-react-charts';

import {
  DataManager,
  Query,
  GraphQLAdaptor
} from '@syncfusion/ej2-data';

const ChartGraphQL: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);

  const marker = {
    visible: true,
    width: 10,
    height: 10,
    dataLabel: {
      visible: true,
      position: 'Top'
    }
  };

  useEffect(() => {
    const dataManager = new DataManager({
      url: 'http://localhost:4000/graphql',

      adaptor: new GraphQLAdaptor({
        response: {
          result: 'getMonthlySales.result',
          count: 'getMonthlySales.count'
        },

        query: `
          query getMonthlySales($datamanager: DataManagerInput) {
            getMonthlySales(datamanager: $datamanager) {
              count
              result {
                id
                month
                sales
                expenses
              }
            }
          }
        `
      })
    });

    dataManager
      .executeQuery(new Query())
      .then((e: any) => {
        // The GraphQLAdaptor applies the `response` mapping and exposes
        // the data array at e.result.result, with the count at e.result.count.
        const chartData = e.result.result;

        if (
          chartRef.current &&
          chartRef.current.series &&
          chartRef.current.series.length > 0
        ) {
          chartRef.current.series[0].dataSource = chartData;
          chartRef.current.series[1].dataSource = chartData;
          chartRef.current.refresh();
        }
      })
      .catch((error) => {
        console.error('GraphQL Error:', error);
      });
  }, []);

  return (
    <ChartComponent
      id="graphql-chart"
      title="Monthly Sales and Expenses"
      ref={chartRef as any}
      primaryXAxis={{ valueType: 'Category', title: 'Month' }}
      primaryYAxis={{ title: 'Amount' }}
      tooltip={{ enable: true }}
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
          type="Column"
          name="Sales"
          marker={marker}
        />

        <SeriesDirective
          dataSource={[]}
          xName="month"
          yName="expenses"
          type="Line"
          name="Expenses"
          marker={marker}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default ChartGraphQL;
```

> The `ref={chartRef as any}` cast is required because the React `Ref<Chart>` type does not exactly match the imperative ref type expected by `ChartComponent`.

**Key `GraphQLAdaptor` options used above:**

- **`query`** — the GraphQL document. The `$datamanager: DataManagerInput` variable receives paging parameters forwarded by the `DataManager`.
- **`response.result`** — dotted path the adaptor uses to extract the data array (`getMonthlySales.result`).
- **`response.count`** — dotted path the adaptor uses to extract the total count (`getMonthlySales.count`).

**Inject services explained (briefly):**

- `ColumnSeries` / `LineSeries` — render the two chart types used here.
- `Category` — required for `valueType: 'Category'` on the X-axis.
- `Legend` — shows the series name next to each colour.
- `Tooltip` — hover tooltips.
- `DataLabel` — required to render the value labels on each data point (driven by the `marker.dataLabel` config).

---

## Run the Application

**Always start the backend before the frontend.** The frontend's `DataManager` will retry on mount, but the chart will render empty if the backend is offline.

**Step 1 — Start the backend** (in a terminal from the `Server` folder):

```bash
npm run dev
```

You should see:

```text
GraphQL server running at http://localhost:4000/graphql
```

Open the following URL in a browser to verify the endpoint. (A `Missing query` response is expected when the endpoint is hit without a query string — use the URL below to send one inline.)

```text
http://localhost:4000/graphql?query=%7BgetMonthlySales%7Bcount%20result%7Bid%20month%20sales%20expenses%7D%7D%7D
```

The React client uses a `POST` request with a JSON body, not a `GET` like the test URL above.

**Step 2 — Start the frontend** (in a separate terminal from the `Client` folder):

```bash
npm run dev
```

Vite opens the dev server at `http://localhost:5176`. The page should display the column and line chart.

**Production build**

```bash
# Backend (Server folder) - remember to copy schema.graphql to dist/
npm run build && npm start

# Frontend (Client folder)
npm run build && npm run preview
```

---

## Data Flow

```text
Syncfusion React Chart
        ↓
DataManager + GraphQLAdaptor
        ↓
GraphQL POST to /graphql
        ↓
graphql-http handler → getMonthlySales resolver
        ↓
monthlySalesData array
        ↓
GraphQL JSON response
        ↓
Adaptor applies response.result / response.count
        ↓
e.result.result → chartRef series dataSource
        ↓
chartRef.refresh() → chart renders Sales and Expenses
```

---

## Troubleshooting

**`Missing query` in the browser.** The `/graphql` endpoint requires a query. Use the test URL shown in **Run the Application → Step 1**, or send a `POST` with a JSON body containing a `query` field.

**Frontend shows an empty chart.** Check the following:

- The backend is running at `http://localhost:4000/graphql`.
- The `url` property passed to `DataManager` in `ChartGraphQL.tsx` matches the backend URL.
- CORS is enabled in the backend (`app.use(cors())`).
- The GraphQL response contains `data.getMonthlySales.result`, matching the `response.result` mapping on the adaptor.
- The `@syncfusion/ej2-data` package is installed and imported.
- `xName` and `yName` on each series match the GraphQL field names (`month`, `sales`, `expenses`).

**Production build cannot find `schema.graphql`.** `tsc` does not copy the file to `dist`. Copy it manually (`cp src/schema.graphql dist/`) or change the path in `server.ts` to read from the source location.

**TypeScript 6 `moduleResolution=node10` deprecation.** The backend `tsconfig.json` already includes `"ignoreDeprecations": "6.0"`. Remove it if you install TypeScript 5.x.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/GraphQLChartDemo) repository.

---
