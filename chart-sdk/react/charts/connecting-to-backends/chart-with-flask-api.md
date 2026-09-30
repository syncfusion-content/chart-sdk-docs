---
layout: post
title: Connect the Syncfusion React Chart with Flask API Backend | Syncfusion
description: Learn here all about connecting the Syncfusion React Charts component with Flask API backend for remote data binding.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting the Syncfusion React Chart with Flask API Backend

This documentation explains how to connect a Syncfusion React Chart component with a Flask API backend. The Flask backend exposes a REST API endpoint that returns monthly sales data in JSON format. The React application fetches this data and binds it to the Syncfusion React Chart component.

---

## Application architecture

**Backend: Flask server (Python)**
- Handles REST API endpoints
- Returns chart data as JSON
- Enables CORS for React client requests

**Frontend: React application**
- Displays the Syncfusion React Chart UI
- Fetches data from the Flask API
- Binds the API response to chart series

**Data model: Monthly sales and expenses**
- `month`
- `sales`
- `expenses`

---

## Prerequisites

| Software / Package | Recommended version | Purpose |
|---|---:|---|
| Python | 3.8 or later | Runtime for Flask server |
| Flask | 2.0 or later | REST API framework |
| Flask-CORS | 3.0 or later | Enables cross-origin requests from React to Flask |
| Node.js | 20.x LTS or later | Runtime for React client |
| npm | 10.x or later | Package manager |
| TypeScript | 5.x or later | Client-side type safety |
| Vite | Latest | React build tool |
| Visual Studio Code | Latest | IDE for backend and frontend development |

---

## Setting up the Flask backend using Python

The Flask backend acts as the REST API service. It handles HTTP requests from the React application and returns chart data in JSON format.

In this sample, the backend exposes the following endpoint:

```text
GET http://127.0.0.1:5000/api/sales
```

The API response format is:

```json
{
  "result": [
    {
      "month": "Jan",
      "sales": 35,
      "expenses": 20
    }
  ],
  "count": 12
}
```

The `result` property contains the chart data collection, and the `count` property contains the number of records returned by the API.

---

## Step 1: Create the project root folder

Open Visual Studio Code and open a terminal.

```bash
mkdir react-chart-flask-api
cd react-chart-flask-api
code .
```

---

## Step 2: Create the Flask backend folder

Create a `server` folder for the Flask API.

```bash
mkdir server
cd server
```

Create a Python virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment.

**Windows**

```bash
venv\Scripts\activate
```

**macOS / Linux**

```bash
source venv/bin/activate
```

Install Flask packages.

```bash
pip install flask flask-cors
```

You can create a `requirements.txt` file now (after `app.py` is added in the next step) by running the following from the `server` folder:

```bash
pip freeze > requirements.txt
```

---

## Step 3: Create the Flask application

Create a file named `app.py` inside the `server` folder.

**File: `server/app.py`**

```python
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS so that the React client can access the Flask API.
CORS(app)

# Sample chart data used by the React Chart component.
sales_data = [
    {"month": "Jan", "sales": 35, "expenses": 20},
    {"month": "Feb", "sales": 28, "expenses": 18},
    {"month": "Mar", "sales": 34, "expenses": 22},
    {"month": "Apr", "sales": 32, "expenses": 24},
    {"month": "May", "sales": 40, "expenses": 25},
    {"month": "Jun", "sales": 45, "expenses": 30},
    {"month": "Jul", "sales": 50, "expenses": 28},
    {"month": "Aug", "sales": 48, "expenses": 32},
    {"month": "Sep", "sales": 55, "expenses": 35},
    {"month": "Oct", "sales": 60, "expenses": 38},
    {"month": "Nov", "sales": 65, "expenses": 40},
    {"month": "Dec", "sales": 70, "expenses": 42}
]


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Flask API is running successfully",
        "salesApi": "http://127.0.0.1:5000/api/sales"
    })


@app.route("/api/sales", methods=["GET"])
def get_sales_data():
    return jsonify({
        "result": sales_data,
        "count": len(sales_data)
    })


if __name__ == "__main__":
    # NOTE: debug=True enables the Werkzeug interactive debugger and auto-reloader.
    # It is convenient for local development but exposes a remote code-execution
    # surface and should NEVER be enabled in production.
    app.run(host="127.0.0.1", port=5000, debug=True)
```

---

## Step 4: Run the Flask server

Run the Flask application from the `server` folder.

```bash
python app.py
```

Expected terminal output:

```text
* Serving Flask app 'app'
* Debug mode: on
* Running on http://127.0.0.1:5000
Press CTRL+C to quit
```

Open the following URL in the browser:

```text
http://127.0.0.1:5000/
```

Expected response:

```json
{
  "message": "Flask API is running successfully",
  "salesApi": "http://127.0.0.1:5000/api/sales"
}
```

Open the chart data API:

```text
http://127.0.0.1:5000/api/sales
```

Expected response:

```json
{
  "count": 12,
  "result": [
    {
      "expenses": 20,
      "month": "Jan",
      "sales": 35
    }
  ]
}
```

---

## Step 5: Create the React application

Open a new terminal from the project root folder.

```bash
npm create vite@latest client -- --template react-ts
cd client
npm install
```

---

## Step 6: Install Syncfusion React Chart package

Install the Syncfusion React Chart package.

```bash
npm install @syncfusion/ej2-react-charts --save
```

---

## Step 7: Configure the React project files

The final project structure should look like this:

```text
react-chart-flask-api/
│
├── server/
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
│
└── client/
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── src/
        ├── App.css
        ├── App.tsx
        ├── main.tsx
        └── services/
            └── chartService.ts
```

---

## Step 8: Configure package.json

**File: `client/package.json`**

```json
{
  "name": "syncfusion-react-chart-flask-api",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1 --port 5173",
    "build": "tsc && vite build",
    "preview": "vite preview --host 127.0.0.1 --port 4173"
  },
  "dependencies": {
    "@syncfusion/ej2-react-charts": "^29.1.35",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}
```

---

## Step 9: Configure index.html

**File: `client/index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React Chart with Flask API</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Step 10: Configure Vite

**File: `client/vite.config.ts`**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173
  }
});
```

---

## Step 11: Configure the React entry file

The Syncfusion React Chart requires a theme stylesheet. Import the Material theme (or replace with `fabric.css`, `bootstrap.css`, `tailwind.css`) at the top of the entry file.

**File: `client/src/main.tsx`**

```tsx
// Syncfusion theme stylesheet (required for chart styling).
import '@syncfusion/ej2-react-charts/styles/material.css';
import '@syncfusion/ej2-base/styles/material.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
```

---

## Step 12: Create the chart service file

The React Chart component is connected to the Flask backend using the browser `fetch` API. The API call is separated into a service file so that the chart component remains clean and focused only on UI rendering.

Create a `services` folder inside `client/src`, and then create a file named `chartService.ts`.

**File: `client/src/services/chartService.ts`**

```ts
export interface SalesData {
  month: string;
  sales: number;
  expenses: number;
}

export interface SalesApiResponse {
  result: SalesData[];
  count: number;
}

const API_BASE_URL = 'http://127.0.0.1:5000';

export async function getSalesData(): Promise<SalesApiResponse> {
  const response = await fetch(`${API_BASE_URL}/api/sales`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data: SalesApiResponse = await response.json();

  return data;
}
```

---

## Step 13: Create the React Chart component

The chart component uses React state to store API data. The data is loaded using `useEffect` when the component is mounted. The `dataSource`, `xName`, and `yName` properties are used to bind Flask API data to the Syncfusion Chart series.

Create a stylesheet at `client/src/App.css` so the layout classes referenced in `App.tsx` (`app-container`, `card`, `heading`, etc.) render correctly.

**File: `client/src/App.css`**

```css
.app-container {
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  background-color: #f5f6fa;
  min-height: 100vh;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

.card {
  width: 100%;
  max-width: 960px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.heading {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #1f2937;
}

.description {
  margin: 0 0 16px 0;
  color: #4b5563;
}

.status {
  padding: 12px;
  background-color: #eef2ff;
  color: #1e3a8a;
  border-radius: 4px;
  text-align: center;
}

.status.error {
  background-color: #fee2e2;
  color: #991b1b;
}

.reload-button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #1d4ed8;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.reload-button:hover {
  background-color: #1e40af;
}

.api-info {
  margin-top: 12px;
  font-size: 12px;
  color: #6b7280;
  text-align: center;
}
```

**File: `client/src/App.tsx`**

```tsx
import { useEffect, useState } from 'react';

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

import {
  getSalesData,
  SalesData
} from './services/chartService';

export default function App() {
  const [chartData, setChartData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const loadChartData = async () => {
    try {
      setLoading(true);
      setError('');

      const apiResponse = await getSalesData();

      setChartData(apiResponse.result);
    } catch (exception) {
      console.error('Error loading chart data:', exception);

      setError(
        'Unable to load chart data from Flask API. Please check whether Flask is running on http://127.0.0.1:5000'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChartData();
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Sales and Expenses Chart</h1>

          <p className="description">
            React Syncfusion Chart connected with Flask API
          </p>

          <div className="status">
            Loading chart data from Flask API...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Sales and Expenses Chart</h1>

          <p className="description">
            React Syncfusion Chart connected with Flask API
          </p>

          <div className="status error">
            {error}
          </div>

          <button
            className="reload-button"
            type="button"
            onClick={loadChartData}
          >
            Retry
          </button>

          <div className="api-info">
            Backend API URL: http://127.0.0.1:5000/api/sales
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="heading">Sales and Expenses Chart</h1>

        <p className="description">
          Data loaded from Flask API and displayed using Syncfusion React Chart
        </p>

        <ChartComponent
          id="sales-expenses-chart"
          title="Monthly Sales and Expenses"
          primaryXAxis={{
            valueType: 'Category',
            title: 'Month'
          }}
          primaryYAxis={{
            title: 'Amount',
            // Syncfusion's labelFormat uses ${value} as a placeholder. The single quotes
            // are a literal string; do NOT change them to backticks (that would be a JS
            // template literal and would render the literal text "${value}K" on every label).
            labelFormat: '${value}K'
          }}
          tooltip={{
            enable: true
          }}
          legendSettings={{
            visible: true
          }}
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
              xName="month"
              yName="sales"
              name="Sales"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true
                }
              }}
            />

            <SeriesDirective
              dataSource={chartData}
              xName="month"
              yName="expenses"
              name="Expenses"
              type="Line"
              marker={{
                visible: true,
                dataLabel: {
                  visible: true
                }
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>

        <div className="api-info">
          Data Source: http://127.0.0.1:5000/api/sales
        </div>

        <button
          className="reload-button"
          type="button"
          onClick={loadChartData}
        >
          Reload Data
        </button>
      </div>
    </div>
  );
}
```

---

## Step 14: Run the Flask backend

Open terminal 1.

```bash
cd server
venv\Scripts\activate
python app.py
```

For macOS / Linux:

```bash
cd server
source venv/bin/activate
python app.py
```

Flask backend URL:

```text
http://127.0.0.1:5000
```

Chart API endpoint:

```text
http://127.0.0.1:5000/api/sales
```

---

## Step 15: Run the React frontend

Open terminal 2.

```bash
cd client
npm run dev
```

React frontend URL:

```text
http://127.0.0.1:5173
```

Open the URL in the browser. The chart displays monthly sales and expenses data.

---

## Build the React application

To create a production build, run the following command inside the `client` folder.

```bash
npm run build
```

The build output is created in the following folder:

```text
client/dist
```

To preview the production build locally:

```bash
npm run preview
```

Preview URL:

```text
http://127.0.0.1:4173
```

---

## Troubleshooting

**Cannot GET /api/sales**

Use this exact API URL:

```text
http://127.0.0.1:5000/api/sales
```

Make sure the Flask backend is running in the `server` folder.

```bash
python app.py
```

If another application is using port `5000`, change the Flask port from `5000` to `5001` in `server/app.py`.

```python
app.run(host="127.0.0.1", port=5001, debug=True)
```

Then update the API base URL in `client/src/services/chartService.ts`.

```ts
const API_BASE_URL = 'http://127.0.0.1:5001';
```

**CORS error**

Make sure `flask-cors` is installed.

```bash
pip install flask-cors
```

Make sure the following code is available in `server/app.py`.

```python
from flask_cors import CORS
CORS(app)
```

**Syncfusion module not found**

Run the following command inside the `client` folder.

```bash
npm install @syncfusion/ej2-react-charts --save
```

**Chart is empty**

Check these points:

1. The Flask API should return a valid `result` array.
2. The React service should call the correct backend URL.
3. The Chart `xName` and `yName` values should match the API field names.
4. The browser console should not show API or CORS errors.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/FlaskAPI) repository.

---
