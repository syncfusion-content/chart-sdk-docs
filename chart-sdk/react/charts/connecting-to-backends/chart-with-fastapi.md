---
layout: post
title: Connect the Syncfusion React Chart with FastAPI Backend | Syncfusion
description: Learn how to connect the Syncfusion React Chart to a FastAPI backend using DataManager and UrlAdaptor for remote data binding.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting the Syncfusion React Chart with FastAPI Backend

This guide shows how to load a Syncfusion React Chart from a FastAPI backend. The backend serves monthly sales data through REST endpoints, and the React Chart binds remotely using Syncfusion `DataManager` and `UrlAdaptor`.

---

## Prerequisites

| Software / Package | Recommended version | Purpose |
|---|---:|---|
| Python | 3.11 or later | Backend runtime |
| FastAPI | 0.111.x | REST API framework |
| Uvicorn | 0.30.x | ASGI development server |
| Node.js | 20.x LTS or later | React tooling and runtime |
| npm | 10.x or later | Package manager |
| Visual Studio Code | Latest | Development IDE |
| @syncfusion/ej2-react-charts | 27.x or later | Syncfusion React Chart component |
| @syncfusion/ej2-data | 27.x or later | Syncfusion DataManager and adapters |

Check installed versions:

```bash
python --version
node --version
npm --version
```

---

## Project structure

Create the following project structure:

```text
fastapi-react-chart-sample/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── App.css
        ├── index.css
        └── main.jsx
```

---

The FastAPI backend provides chart data to the React Chart. The backend returns a compact JSON response that can be consumed by the Chart directly or through Syncfusion `DataManager`.

---

### Backend Step 1: Create the backend project

Open Visual Studio Code and start a terminal.

```bash
mkdir fastapi-react-chart-sample
cd fastapi-react-chart-sample
mkdir backend
cd backend
```

Create and activate a Python virtual environment. From this point on, run all commands inside the venv.

On Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

On macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

---

### Backend Step 2: Install FastAPI and Uvicorn

Create a file named `requirements.txt` inside the `backend` folder.

**`backend/requirements.txt`**

```txt
fastapi==0.111.0
uvicorn[standard]==0.30.1
```

Install the packages:

```bash
pip install -r requirements.txt
```

> Add a `backend/.gitignore` with at least `.venv/` and `__pycache__/` so the virtual environment and compiled cache are not committed.

---

### Backend Step 3: Create the FastAPI application

Create a file named `main.py` inside the `backend` folder.

**`backend/main.py`**

```python
from typing import Any, Dict, List, Optional

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Syncfusion React Chart FastAPI Backend",
    description="FastAPI backend for connecting Syncfusion React Chart with remote data",
    version="1.0.0"
)


# CORS configuration.
# The frontend runs on http://localhost:5173 (Vite default) and the backend on
# http://localhost:8000. Exact origins are required when allow_credentials=True.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


SALES_DATA: List[Dict[str, Any]] = [
    {"month": "Jan", "sales": 35},
    {"month": "Feb", "sales": 28},
    {"month": "Mar", "sales": 34},
    {"month": "Apr", "sales": 32},
    {"month": "May", "sales": 40},
    {"month": "Jun", "sales": 45},
    {"month": "Jul", "sales": 38},
    {"month": "Aug", "sales": 42},
    {"month": "Sep", "sales": 48},
    {"month": "Oct", "sales": 50},
    {"month": "Nov", "sales": 55},
    {"month": "Dec", "sales": 60},
]


CATEGORY_SALES_DATA: List[Dict[str, Any]] = [
    {"category": "Electronics", "sales": 120},
    {"category": "Fashion", "sales": 90},
    {"category": "Grocery", "sales": 150},
    {"category": "Books", "sales": 60},
    {"category": "Sports", "sales": 80},
]


# Format a list as the { result, count } response expected by Syncfusion UrlAdaptor.
# Supports basic paging via `skip` and `take` from the request payload.
def get_datamanager_response(
    payload: Optional[Dict[str, Any]],
    source_data: List[Dict[str, Any]]
) -> Dict[str, Any]:
    data = source_data.copy()
    payload = payload or {}

    skip = int(payload.get("skip", 0) or 0)
    take = payload.get("take")
    total_count = len(data)

    if take is not None:
        take = int(take)
        data = data[skip: skip + take]

    return {"result": data, "count": total_count}


@app.get("/")
def root():
    return {
        "message": "FastAPI backend is running successfully",
        "endpoints": {
            "monthly_sales": "http://localhost:8000/chart-data",
            "category_sales": "http://localhost:8000/category-sales",
            "health": "http://localhost:8000/health",
            "swagger_docs": "http://localhost:8000/docs"
        }
    }


@app.get("/chart-data")
def get_chart_data():
    """Plain JSON array; suitable for fetch() and browser testing."""
    return SALES_DATA


@app.post("/chart-data")
async def post_chart_data(request: Request):
    payload = await request.json()
    return get_datamanager_response(payload, SALES_DATA)


@app.get("/category-sales")
def get_category_sales():
    return CATEGORY_SALES_DATA


@app.post("/category-sales")
async def post_category_sales(request: Request):
    payload = await request.json()
    return get_datamanager_response(payload, CATEGORY_SALES_DATA)


@app.get("/health")
def health_check():
    return {"status": "ok"}
```

> Notes:
> - `payload = await request.json()` parses the body; FastAPI auto-serializes dicts and lists without needing `JSONResponse`.
> - `allow_origins` lists exact origins. With `allow_credentials=True` you cannot use a wildcard (`"*"`).
> - For production, replace the origins in `allow_origins` with your deployed frontend URLs and serve over HTTPS.

---

### Backend Step 4: run the FastAPI backend (skip ahead)

From the `backend` folder, run:

```bash
uvicorn main:app --reload
```

The complete execution procedure (start backend, then frontend, stop both) is detailed in the **Run the sample** section below.

---

The React application uses Vite and the Syncfusion React Chart component. The Chart connects to the FastAPI API by using `DataManager` and `UrlAdaptor`.

> Use a second terminal for the frontend; keep the backend terminal running from the previous step.

---

### Frontend Step 1: Create a React app using Vite

Open a new terminal in the `fastapi-react-chart-sample` folder (the one you created in Backend Step 1) and run a single command chain that scaffolds the React app, installs its dependencies, and enters the new folder.

On Windows (PowerShell):

```bash
npm create vite@latest frontend --template react; cd frontend; npm install
```

On macOS or Linux (bash):

```bash
npm create vite@latest frontend --template react && cd frontend && npm install
```

> `--template react` selects the JavaScript template. To use TypeScript instead, switch to `--template react-ts` and rename file extensions throughout the rest of this guide (`.jsx` → `.tsx`).

---

### Frontend Step 2: Install Syncfusion packages

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

---

### Frontend Step 3: Configure the React project files

Vite creates an `index.css` with default styles that conflict with the chart card layout. Replace the following files with the code below.

---

**`frontend/package.json`**

```json
{
  "name": "syncfusion-fastapi-chart-sample",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@syncfusion/ej2-data": "^27.1.0",
    "@syncfusion/ej2-react-charts": "^27.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0"
  }
}
```

After updating `package.json`, run:

```bash
npm install
```

> Pinning to specific versions avoids drift caused by `"latest"` (which always installs whatever the registry publishes today).

---

**`frontend/vite.config.js`**

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Add `host: true` if you need to access the dev server from another
    // device on your network (for example, a phone). Remove it to keep the
    // server on `localhost` only.
    host: true
  }
});
```

---

**`frontend/index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion React Chart with FastAPI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

**`frontend/src/main.jsx`**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

// Syncfusion Chart theme style
import '@syncfusion/ej2-react-charts/styles/material.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

**`frontend/src/App.jsx`**

```jsx
import React, { useMemo } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  DataLabel
} from '@syncfusion/ej2-react-charts';

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const chartDataManager = new DataManager({
    url: 'http://localhost:8000/chart-data',
    adaptor: new UrlAdaptor()
  });

  const primaryXAxis = { valueType: 'Category', title: 'Month' };
  const primaryYAxis = { title: 'Sales', labelFormat: '{value}' };
  const tooltip = { enable: true };
  const marker = { dataLabel: { visible: true } };

  return (
    <div className="app-container">
      <div className="chart-card">
        <h1>Syncfusion React Chart with FastAPI Backend</h1>
        <p>
          This chart loads monthly sales data from a FastAPI REST API using
          Syncfusion DataManager and UrlAdaptor.
        </p>

        <ChartComponent
          id="sales-chart"
          title="Monthly Sales Report"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          tooltip={tooltip}
          legendSettings={{ visible: true }}
        >
          <Inject services={[ColumnSeries, Category, Tooltip, Legend, DataLabel]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartDataManager}
              xName="month"
              yName="sales"
              name="Sales"
              type="Column"
              marker={marker}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default App;
```

> The `legendSettings` prop and the `name="Sales"` attribute on `SeriesDirective` together enable the legend. Chart props such as `tooltip`, `marker`, and `legendSettings` are documented in the [Chart API reference](https://ej2.syncfusion.com/react/documentation/chart).

---

**`frontend/src/App.css`**

```css
.app-container {
  padding: 40px;
}

.chart-card {
  max-width: 1000px;
}
```

---

## Run the sample

You need two terminals running side by side:

| Terminal | Process | Port | Host script |
|---|---|---|---|
| 1 | FastAPI (Uvicorn) | `8000` | `backend/` |
| 2 | Vite dev server | `5173` | `frontend/` |

**Start the backend terminal first**, then start the frontend. The React chart makes the API request on page load; if the backend is not running, the chart will be blank.

**Terminal 1: run the FastAPI backend**

```bash
cd fastapi-react-chart-sample/backend
```

Activate the Python environment. On Windows:

```bash
.venv\Scripts\activate
```

On macOS or Linux:

```bash
source .venv/bin/activate
```

Start Uvicorn:

```bash
uvicorn main:app --reload
```

You should see:

```text
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [...]
INFO:     Started server process [...]
INFO:     Application startup complete.
```

Quick checks (open in a browser):

- `http://localhost:8000/` — backend status.
- `http://localhost:8000/chart-data` — `GET` returns the array.
- `http://localhost:8000/docs` — interactive Swagger UI for all endpoints.
- `http://localhost:8000/health` — returns `{"status": "ok"}`.

To stop the backend, switch to this terminal and press `Ctrl+C`. To leave the virtual environment, run `deactivate`.

**Terminal 2: run the React frontend**

In the second terminal:

```bash
cd fastapi-react-chart-sample/frontend
npm run dev
```

Vite prints the local URL (default `http://localhost:5173/`). Open it in a browser; you should see a column chart titled **Monthly Sales Report** with twelve bars (Jan–Dec).

To stop the frontend, press `Ctrl+C` in this terminal.

**What a working setup looks like**

| Tab / Window | URL | What you see |
|---|---|---|
| Backend terminal | n/a | Uvicorn output (INFO lines); press `Ctrl+C` to stop |
| Browser tab A | `http://localhost:8000/docs` | Swagger UI listing all endpoints |
| Browser tab B | `http://localhost:5173/` | The Syncfusion Chart with monthly sales data |
| Frontend terminal | n/a | Vite HMR output; press `Ctrl+C` to stop |

If the chart tab is blank, open the DevTools Network tab and confirm the request `http://localhost:8000/chart-data` returns `200 OK` with JSON.

---

## Build the React application

To create a production build, run this command from the `frontend` folder:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## API reference

**Root endpoint**

```http
GET /
```

Returns backend status and available endpoint details.

**Monthly sales chart data**

```http
GET /chart-data
```

Returns a simple JSON array. Useful for browser testing and `fetch` binding.

Example response:

```json
[
  { "month": "Jan", "sales": 35 },
  { "month": "Feb", "sales": 28 }
]
```

```http
POST /chart-data
```

Returns a Syncfusion `DataManager` friendly response.

Example response:

```json
{
  "result": [
    { "month": "Jan", "sales": 35 },
    { "month": "Feb", "sales": 28 }
  ],
  "count": 12
}
```

**Category sales chart data**

```http
GET /category-sales
POST /category-sales
```

This optional endpoint can be used to create another Chart with category-based sales data.

**Optional: bind Chart using the Fetch API**

For a simpler beginner version, replace `DataManager` with the browser `fetch` API. This approach works when the backend simply returns an array of data points (`GET /chart-data`).

Replace `frontend/src/App.jsx` with the following code:

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
  Legend,
  DataLabel
} from '@syncfusion/ej2-react-charts';

function App() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Abort the fetch if the component unmounts before it resolves.
    const controller = new AbortController();

    fetch('http://localhost:8000/chart-data', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setChartData(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading chart data...</p>;
  }

  if (error) {
    return <p role="alert">Failed to load chart data: {error}</p>;
  }

  return (
    <div className="app-container">
      <div className="chart-card">
        <h1>Syncfusion React Chart with FastAPI Backend</h1>
        <p>This chart loads data from FastAPI using the Fetch API.</p>

        <ChartComponent
          id="sales-chart"
          title="Monthly Sales Report"
          primaryXAxis={{ valueType: 'Category', title: 'Month' }}
          primaryYAxis={{ title: 'Sales' }}
          tooltip={{ enable: true }}
          legendSettings={{ visible: true }}
        >
          <Inject services={[ColumnSeries, Category, Tooltip, Legend, DataLabel]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartData}
              xName="month"
              yName="sales"
              name="Sales"
              type="Column"
              marker={{ dataLabel: { visible: true } }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default App;
```

Notes:
- `AbortController` cancels the in-flight request if the component unmounts, preventing "set state on unmounted component" warnings.
- `loading` and `error` states give the UI visible feedback while data is fetched or when the request fails.

## Troubleshooting

**Chart is blank**

Verify the backend is reachable in a browser at `http://localhost:8000/chart-data`. If the page does not return JSON, restart Uvicorn. If it returns data but the chart is still blank, open the browser DevTools → Network tab and confirm the React app actually issued a request to `/chart-data` and received a 200 response.

**CORS error in browser console**

Make sure `CORSMiddleware` is configured in `backend/main.py` and that the React URL (`http://localhost:5173`) is listed in `allow_origins`. Restart Uvicorn after any change to `main.py`.

**Module not found error**

If React cannot find Syncfusion packages, run this command from the `frontend` folder:

```bash
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

**FastAPI port already in use**

Run FastAPI on another port:

```bash
uvicorn main:app --reload --port 8001
```

Then update the React URL in `frontend/src/App.jsx`:

```jsx
url: 'http://localhost:8001/chart-data'
```

**Backend returns 422 Unprocessable Entity**

The `POST /chart-data` endpoint expects a JSON body. The default React DataManager payload is valid JSON, but if you test it manually, send:

```bash
curl -X POST http://localhost:8000/chart-data -H "Content-Type: application/json" -d '{}'
```

A 422 response means the JSON body is malformed or missing the required `Content-Type` header.

**PowerShell blocks `activate` script**

On Windows, if running `.venv\Scripts\activate` fails with a script execution error, run PowerShell as Administrator once and execute:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Then close and reopen your terminal.

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/FastAPI) repository.

## Summary

The sample contains a FastAPI backend exposing `/chart-data` (and `/docs`, `/health`) and a Vite + React frontend whose chart binds to the backend through Syncfusion `DataManager` and `UrlAdaptor`. Use this pattern when chart data is stored on a server, generated dynamically, or shared across multiple applications.

