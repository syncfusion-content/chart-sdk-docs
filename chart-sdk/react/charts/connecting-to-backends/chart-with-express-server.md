---
layout: post
title: Connecting React Chart with Express.js Server | Syncfusion
description: Learn how to connect the Syncfusion React Chart component to an Express.js backend server using DataManager and UrlAdaptor for remote data binding.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting the React Chart with Express.js Server

This documentation explains how to connect the **Syncfusion® React Chart** component to an **Express.js backend server**. The backend returns monthly sales data through a REST API, and the React Chart uses **Syncfusion DataManager** with **UrlAdaptor** to bind the remote data. Chart is primarily a visualization component, so this sample focuses on data binding from a backend server rather than CRUD operations.

---

## Prerequisites

| Software / Package | Recommended version | Purpose |
|---|---:|---|
| Node.js | 20.x or later | Runtime environment |
| npm | 10.x or later | Package manager |
| Visual Studio Code | Latest | IDE for development |
| Vite | 5.x | React application setup |
| TypeScript | 5.x | Type safety for backend and frontend |
| @syncfusion/ej2-react-charts | 27.x or later | Syncfusion React Chart component |
| @syncfusion/ej2-data | 27.x or later | Syncfusion DataManager and adapters |

To verify the installed versions, run the following commands:

```bash
node -v
npm -v
```

---

## Application architecture

```text
Backend: Express.js server
    - Provides REST API endpoint for chart data
    - Handles server-side data response formatting
    - Returns monthly sales and expenses data

Frontend: React application
    - Displays Syncfusion React Chart
    - Uses DataManager and UrlAdaptor for remote data binding
    - Renders the backend data as a column chart

Data model: Monthly sales record (`SalesData` interface)
    - month (string)
    - sales (number)
    - expenses (number)
```

---

## Create the project root folder

Open **Visual Studio Code**, then open a new terminal and run the following commands:

```bash
mkdir ej2-react-chart-with-express-js
cd ej2-react-chart-with-express-js
```

The project will contain two applications:

```text
ej2-react-chart-with-express-js/
├── server/
└── ChartClient/
```

---

## Setting up the Express.js backend using Node.js

The Express.js backend acts as a REST API service. In this sample, the backend returns monthly sales data to the React Chart component.

### Backend Step 1: Create the backend server folder

Run the following commands from the project root folder:

```bash
mkdir server
cd server
```

Initialize the Node.js project:

```bash
npm init -y
```

Install required runtime packages:

```bash
npm install express cors
```

Install development packages:

```bash
npm install -D typescript ts-node nodemon @types/express @types/cors @types/node
```

Package details:

- `express` is used to create REST API endpoints.
- `cors` allows the React frontend to call the backend server.
- `typescript`, `ts-node`, and `nodemon` are used for TypeScript development and auto-restart.
- `@types/*` packages provide TypeScript type definitions.

---

### Backend Step 2: Create backend folder structure

Run the following commands inside the `server` folder:

```bash
mkdir src
mkdir src/controllers
mkdir src/routes
mkdir src/types
mkdir src/utils
```

The backend folder structure should look like this:

```text
server/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── types/
│   └── utils/
├── package.json
└── package-lock.json
```

---

### Backend Step 3: Configure TypeScript

Create a TypeScript configuration file:

```bash
npx tsc --init
```

Replace the content of `server/tsconfig.json` with the following code:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node16",
    "module": "Node16"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

> If you prefer the older style, you can use `"moduleResolution": "node"` with `"module": "commonjs"`. Note that `node` resolution is deprecated in recent TypeScript versions and triggers a warning.

---

### Backend Step 4: Configure backend npm scripts

Open `server/package.json` and update the `scripts` section:

```json
{
  "scripts": {
    "dev": "nodemon --watch src --ext ts --exec \"ts-node src/server.ts\"",
    "start": "ts-node src/server.ts",
    "build": "tsc"
  }
}
```

A complete `package.json` example is shown below:

```json
{
  "name": "chart-express-server",
  "version": "1.0.0",
  "description": "Express.js backend for Syncfusion React Chart",
  "main": "dist/server.js",
  "scripts": {
    "dev": "nodemon --watch src --ext ts --exec \"ts-node src/server.ts\"",
    "start": "ts-node src/server.ts",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.0",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.0"
  }
}
```

> Package versions may differ depending on when the packages are installed. The important part is the `scripts` configuration.

---

### Backend Step 5: Create TypeScript interfaces

Create the following file:

```text
server/src/types/interface.ts
```

Add the following code:

```ts
export interface SalesData {
  month: string;
  sales: number;
  expenses: number;
}

export interface DataManagerRequest {
  skip?: number;
  take?: number;
  sorted?: Array<{
    name: string;
    direction: string;
  }>;
  where?: any[];
  search?: Array<{
    fields: string[];
    key: string;
    operator: string;
    ignoreCase: boolean;
  }>;
  requiresCounts?: boolean;
}
```

The `SalesData` interface defines the chart data model. The `DataManagerRequest` interface represents the request payload sent by Syncfusion DataManager/UrlAdaptor to the endpoint.

---

### Backend Step 6: Create sample chart data

Create the following file:

```text
server/src/utils/data.ts
```

Add the following code:

```ts
import { SalesData } from '../types/interface';

export const salesData: SalesData[] = [
  { month: 'Jan', sales: 35, expenses: 20 },
  { month: 'Feb', sales: 28, expenses: 18 },
  { month: 'Mar', sales: 34, expenses: 22 },
  { month: 'Apr', sales: 32, expenses: 24 },
  { month: 'May', sales: 40, expenses: 26 },
  { month: 'Jun', sales: 32, expenses: 21 },
  { month: 'Jul', sales: 45, expenses: 28 },
  { month: 'Aug', sales: 38, expenses: 25 },
  { month: 'Sep', sales: 42, expenses: 27 },
  { month: 'Oct', sales: 48, expenses: 30 },
  { month: 'Nov', sales: 50, expenses: 32 },
  { month: 'Dec', sales: 55, expenses: 35 }
];
```

This data is stored in memory for learning and testing. In a real application, this data can be fetched from a database.

---

### Backend Step 7: Create the chart controller

Create the following file:

```text
server/src/controllers/chart.controller.ts
```

Add the following code:

```ts
import { Request, Response } from 'express';
import { salesData } from '../utils/data';
import { DataManagerRequest, SalesData } from '../types/interface';

const getFieldValue = (item: SalesData, field: string): string | number | undefined => {
  return item[field as keyof SalesData];
};

const normalizeValue = (value: unknown): string => {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value).toLowerCase();
};

const evaluateCondition = (item: SalesData, condition: any): boolean => {
  const field: string = condition.field;
  const operator: string = condition.operator || 'equal';
  const value = condition.value;
  const ignoreCase: boolean = condition.ignoreCase !== false;

  if (!field) {
    return true;
  }

  const fieldValue = getFieldValue(item, field);

  if (fieldValue === undefined || fieldValue === null) {
    return false;
  }

  const fieldText = ignoreCase ? normalizeValue(fieldValue) : String(fieldValue);
  const filterText = ignoreCase ? normalizeValue(value) : String(value);

  const fieldNumber = Number(fieldValue);
  const filterNumber = Number(value);

  switch (operator.toLowerCase()) {
    case 'equal':
      return fieldText === filterText;

    case 'notequal':
      return fieldText !== filterText;

    case 'contains':
      return fieldText.includes(filterText);

    case 'startswith':
      return fieldText.startsWith(filterText);

    case 'endswith':
      return fieldText.endsWith(filterText);

    case 'greaterthan':
      return fieldNumber > filterNumber;

    case 'greaterthanorequal':
      return fieldNumber >= filterNumber;

    case 'lessthan':
      return fieldNumber < filterNumber;

    case 'lessthanorequal':
      return fieldNumber <= filterNumber;

    default:
      return fieldText === filterText;
  }
};

const applyWhere = (data: SalesData[], where: any[]): SalesData[] => {
  if (!where || where.length === 0) {
    return data;
  }

  return data.filter((item) => {
    return where.every((condition) => {
      if (condition.isComplex && Array.isArray(condition.predicates)) {
        const conditionType = (condition.condition || 'and').toLowerCase();

        if (conditionType === 'or') {
          return condition.predicates.some((predicate: any) =>
            evaluateCondition(item, predicate)
          );
        }

        return condition.predicates.every((predicate: any) =>
          evaluateCondition(item, predicate)
        );
      }

      return evaluateCondition(item, condition);
    });
  });
};

const applySearch = (data: SalesData[], search: any[]): SalesData[] => {
  if (!search || search.length === 0) {
    return data;
  }

  return data.filter((item) => {
    return search.every((searchItem) => {
      const fields: string[] = searchItem.fields || [];
      const key: string = searchItem.key || '';
      const operator: string = searchItem.operator || 'contains';
      const ignoreCase: boolean = searchItem.ignoreCase !== false;

      if (!fields.length || !key) {
        return true;
      }

      const searchKey = ignoreCase ? key.toLowerCase() : key;

      return fields.some((field) => {
        const fieldValue = getFieldValue(item, field);

        if (fieldValue === undefined || fieldValue === null) {
          return false;
        }

        const compareValue = ignoreCase
          ? normalizeValue(fieldValue)
          : String(fieldValue);

        switch (operator.toLowerCase()) {
          case 'contains':
            return compareValue.includes(searchKey);

          case 'startswith':
            return compareValue.startsWith(searchKey);

          case 'endswith':
            return compareValue.endsWith(searchKey);

          case 'equal':
            return compareValue === searchKey;

          default:
            return compareValue.includes(searchKey);
        }
      });
    });
  });
};

const applySort = (data: SalesData[], sorted: any[]): SalesData[] => {
  if (!sorted || sorted.length === 0) {
    return data;
  }

  const result = [...data];

  sorted.forEach((sort) => {
    const field = sort.name as keyof SalesData;
    const direction =
      (sort.direction || 'ascending').toLowerCase() === 'descending' ? -1 : 1;

    result.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue === undefined || bValue === undefined) {
        return 0;
      }

      if (aValue < bValue) {
        return -direction;
      }

      if (aValue > bValue) {
        return direction;
      }

      return 0;
    });
  });

  return result;
};

export const getChartData = (req: Request, res: Response) => {
  try {
    const dm: DataManagerRequest = req.body || {};

    let result: SalesData[] = [...salesData];

    if (dm.where && dm.where.length > 0) {
      result = applyWhere(result, dm.where);
    }

    if (dm.search && dm.search.length > 0) {
      result = applySearch(result, dm.search);
    }

    const count = result.length;

    if (dm.sorted && dm.sorted.length > 0) {
      result = applySort(result, dm.sorted);
    }

    if (typeof dm.skip === 'number' && typeof dm.take === 'number') {
      result = result.slice(dm.skip, dm.skip + dm.take);
    }

    res.status(200).json({
      result,
      count
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve chart data',
      message: error instanceof Error ? error.message : String(error),
      result: [],
      count: 0
    });
  }
};
```

The controller returns data in the `result` and `count` format. This response format works well with Syncfusion DataManager and UrlAdaptor remote binding.

---

### Backend Step 8: Create API routes

Create the following file:

```text
server/src/routes/chart.routes.ts
```

Add the following code:

```ts
import { Router } from 'express';
import { getChartData } from '../controllers/chart.controller';

const router = Router();

// Browser testing endpoint
router.get('/', (req, res) => {
  return getChartData(req, res);
});

// Syncfusion DataManager UrlAdaptor endpoint
router.post('/', (req, res) => {
  return getChartData(req, res);
});

export default router;
```

The `GET` route is useful for testing the API directly in a browser. The `POST` route is used by Syncfusion DataManager with UrlAdaptor.

---

### Backend Step 9: Create the Express server

Create the following file:

```text
server/src/server.ts
```

Add the following code:

```ts
import express, { Application } from 'express';
import cors from 'cors';
import chartRoutes from './routes/chart.routes';

const app: Application = express();
const PORT = 5000;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Express.js Chart API is running');
});

app.use('/api/chart-sales', chartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Chart API endpoint: http://localhost:${PORT}/api/chart-sales`);
});

export default app;
```

---

### Backend Step 10: Verify the backend endpoint

Open the following URL in a browser to confirm the API responds with the chart data:

```text
http://localhost:5000/api/chart-sales
```

A successful response looks like the sample below (the array shown is the first 2 of 12 records):

```json
{
  "result": [
    {
      "month": "Jan",
      "sales": 35,
      "expenses": 20
    },
    {
      "month": "Feb",
      "sales": 28,
      "expenses": 18
    }
  ],
  "count": 12
}
```

> `count` is the total number of records available after filtering and searching. `result` is the page of records returned (after pagination).

---

The React frontend uses the Syncfusion React Chart component to visualize remote data from the Express.js API.

---

### Frontend Step 1: Create React application with Vite

Go back to the project root folder:

```bash
cd ..
```

Create the React application:

```bash
npm create vite@latest ChartClient --template react-ts
```

Navigate to the React project:

```bash
cd ChartClient
```

Install dependencies:

```bash
npm install
```

---

### Frontend Step 2: Install Syncfusion packages

Install the Syncfusion React Chart package and DataManager package:

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

---

### Frontend Step 3: Create frontend folders

Run the following commands inside the `ChartClient` folder:

```bash
mkdir src/components
mkdir src/services
```

The frontend folder structure should look like this:

```text
ChartClient/
├── src/
│   ├── components/
│   │   └── SalesChart.tsx
│   ├── services/
│   │   └── dataManager.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
└── package.json
```

---

### Frontend Step 4: Configure DataManager for REST API communication

Create the following file:

```text
ChartClient/src/services/dataManager.ts
```

Add the following code:

```ts
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const API_BASE_URL = 'http://localhost:5000/api/chart-sales';

export const salesDataManager = new DataManager({
  url: API_BASE_URL,
  adaptor: new UrlAdaptor()
});
```

The DataManager sends a request to the Express.js API. The UrlAdaptor processes the API response and supplies the returned data to the Chart series.

---

### Frontend Step 5: Create the React Chart component

Create the following file:

```text
ChartClient/src/components/SalesChart.tsx
```

Add the following code:

```tsx
import React from 'react';
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
} from '@syncfusion/ej2-react-charts';
import { salesDataManager } from '../services/dataManager';

const SalesChart: React.FC = () => {
  const primaryXAxis = {
    valueType: 'Category',
    title: 'Month'
  };

  const primaryYAxis = {
    title: 'Amount',
    labelFormat: '{value}K'
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
    <div className="chart-wrapper">
      <ChartComponent
        id="sales-chart"
        title="Monthly Sales Report"
        primaryXAxis={primaryXAxis}
        primaryYAxis={primaryYAxis}
        tooltip={tooltip}
        height="450px"
      >
        <Inject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]} />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={salesDataManager}
            xName="month"
            yName="sales"
            name="Sales"
            type="Column"
            marker={marker}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default SalesChart;
```

The Chart uses `xName="month"` for the horizontal axis and `yName="sales"` for the vertical axis.

---

### Frontend Step 6: Update the application component

Open the following file:

```text
ChartClient/src/App.tsx
```

Replace the content with the following code:

```tsx
import SalesChart from './components/SalesChart';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Syncfusion React Chart with Express.js Server</h1>
      <p>This chart loads monthly sales data from an Express.js backend API.</p>

      <SalesChart />
    </div>
  );
}

export default App;
```

---

### Frontend Step 7: Import Syncfusion Chart theme CSS

Syncfusion React Chart depends on a bundled style sheet. Import the CSS in `ChartClient/src/index.css` so it is loaded once for the app.

Open the following file:

```text
ChartClient/src/index.css
```

Replace the content with the following code:

```css
@import '@syncfusion/ej2-react-charts/styles/material.css';

#root {
  width: 100%;
}
```

> Replace `material.css` with another available theme (`bootstrap5.css`, `tailwind.css`, `fabric.css`, `highcontrast.css`, etc.) if your design requires it. Themes are listed at `node_modules/@syncfusion/ej2-react-charts/styles/`.

---

### Frontend Step 8: Update the application entry file

Open the following file:

```text
ChartClient/src/main.tsx
```

Replace the content with the following code:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Frontend Step 9: Verify the dev server starts

After running `npm run dev`, Vite reports the local URL. By default it is:

```text
http://localhost:5173/
```

---

## Running the sample

You need two terminals: one for the Express backend (port `5000`) and one for the Vite dev server (port `5173`). The backend must be running **before** the frontend opens, otherwise the chart receives no data.

### Step 1: Start the backend

In the first terminal, from the project root:

```bash
cd server
npm run dev
```

You should see:

```text
Server is running at http://localhost:5000
Chart API endpoint: http://localhost:5000/api/chart-sales
```

Leave this terminal running. `nodemon` watches `src/` and restarts the server automatically when files change.

To verify the API quickly, open `http://localhost:5000/api/chart-sales` in a browser or run:

```bash
curl http://localhost:5000/api/chart-sales
```

### Step 2: Start the frontend

In the second terminal, from the project root:

```bash
cd ChartClient
npm run dev
```

Vite prints a local URL (default `http://localhost:5173/`). Open it in a browser. You should see a column chart titled **Monthly Sales Report** with twelve bars (Jan–Dec).

### Step 3: Stop the servers

To stop either process, switch to its terminal and press `Ctrl+C`. To stop both, repeat in each terminal.

### Optional: Run both with a single command

If you prefer a single-command workflow from the project root, install `concurrently` and add a root `package.json`:

```bash
npm init -y
npm install -D concurrently
```

Then add to the root `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"npm --prefix server run dev\" \"npm --prefix ChartClient run dev\""
  }
}
```

Now `npm run dev` from the project root starts the backend and frontend together, in the same terminal.

### Production build

To produce optimized builds:

```bash
cd server && npm run build
cd ../ChartClient && npm run build
```

`server/dist/` compiles the TypeScript to JavaScript and `ChartClient/dist/` contains the static React build. Serve `ChartClient/dist/` with any static host and point its API URL to the deployed backend.

---

## Troubleshooting

**Chart is not displayed**

Check the following:

- Backend server is running at `http://localhost:5000`.
- Frontend app is running at `http://localhost:5173`.
- `ChartClient/src/services/dataManager.ts` contains the correct API URL.
- Syncfusion Chart theme CSS is imported in `src/index.css` (see Step 7).
- The `index.css` import is referenced from `src/main.tsx`.

---

**Browser shows 404 for API URL**

Make sure `server/src/routes/chart.routes.ts` wires both methods to the controller, for example:

```ts
router.get('/', getChartData);
router.post('/', getChartData);
```

Also verify that `server/src/server.ts` contains:

```ts
app.use('/api/chart-sales', chartRoutes);
```

---

**CORS error appears in browser console**

Make sure the Express server contains the following CORS configuration:

```ts
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
```

---

**Port 5000 is already in use**

Change the port in `server/src/server.ts`:

```ts
const PORT = 5001;
```

Then update the frontend API URL in `ChartClient/src/services/dataManager.ts`:

```ts
const API_BASE_URL = 'http://localhost:5001/api/chart-sales';
```

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/Express) repository.

---

## References

- Syncfusion React Chart getting started documentation: https://ej2.syncfusion.com/react/documentation/chart/getting-started
- Syncfusion React Chart remote data binding documentation: https://react.syncfusion.com/react-ui/charts/data-binding/remote-data/
- Syncfusion React DataManager UrlAdaptor documentation: https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor
