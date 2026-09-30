---
layout: post
title: Connect Syncfusion React Chart with Next.js Backend | Syncfusion
description: Learn how to connect Syncfusion React Charts to a Next.js API route, fetch server data, bind it to charts, and enable routing.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connecting React Chart with Next.js Backend

This documentation explains how to connect a **Syncfusion React Chart** component to a **Next.js server API route**, bind backend data to the chart, and navigate between pages using the Next.js App Router.

The sample creates a Next.js application that serves monthly sales data from a backend route at `/api/sales` and renders it in a Syncfusion Column Chart on the `/chart` page. A simple navbar with a Home page and a Sales Chart page is included to demonstrate App Router navigation.

---

## Prerequisites

Before getting started, ensure the following prerequisites are installed:

| Software / Package | Recommended version | Purpose |
|---|---:|---|
| Visual Studio Code | Latest | Code editor |
| Node.js | 20.x LTS or later | Runtime for the Next.js application |
| npm | Latest stable | Package manager |

The Syncfusion React Chart package (`@syncfusion/ej2-react-charts`) is installed later in **Step 2**.

Verify the tools:

```bash
node --version
npm --version
```

---

## Project folder structure

After completing this sample, the application structure will look like this:

```text
syncfusion-nextjs-chart-app/
├── package.json
├── next.config.ts
├── tsconfig.json
├── public/
└── src/
    ├── app/
    │   ├── api/
    │   │   └── sales/
    │   │       └── route.ts
    │   ├── chart/
    │   │   └── page.tsx
    │   ├── data/
    │   │   └── salesData.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └── components/
        └── SalesChart.tsx
```

`next.config.ts` and `tsconfig.json` are created automatically by `create-next-app`. The default values are sufficient for this sample, so they are not modified in any of the steps below.

---

## Step 1: Create the Next.js application

Open a terminal in Visual Studio Code and run:

```bash
npx create-next-app@latest syncfusion-nextjs-chart-app
```

Recommended setup options:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: No
Use src/ directory: Yes
Use App Router: Yes
Customize import alias: No
```

Navigate into the project folder:

```bash
cd syncfusion-nextjs-chart-app
```

Open the project in Visual Studio Code:

```bash
code .
```

Install the project dependencies (Next.js, React, etc.) declared in the generated `package.json`:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application is available at:

```text
http://localhost:3000
```

---

## Step 2: Install the Syncfusion React Chart package

```bash
npm install @syncfusion/ej2-react-charts --save
```

The package provides the `ChartComponent`, chart series modules, axis modules, tooltip, and legend features used in this sample.

The resulting `package.json` is:

**File: `package.json`**

```json
{
  "name": "syncfusion-nextjs-chart-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@syncfusion/ej2-react-charts": "^33.2.15",
    "next": "16.2.7",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.2.7",
    "typescript": "^5"
  }
}
```

---

## Step 3: Create the sales data module

Create a new folder named `data` inside `src/app`:

```bash
mkdir src/app/data
```

Add a file named `salesData.ts` with the following content:

**File: `src/app/data/salesData.ts`**

```ts
export type SalesRecord = {
  month: string;
  sales: number;
};

export const salesData: SalesRecord[] = [
  { month: 'Jan', sales: 35 },
  { month: 'Feb', sales: 28 },
  { month: 'Mar', sales: 34 },
  { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 },
  { month: 'Jun', sales: 45 },
  { month: 'Jul', sales: 50 },
  { month: 'Aug', sales: 48 },
  { month: 'Sep', sales: 43 },
  { month: 'Oct', sales: 55 },
  { month: 'Nov', sales: 60 },
  { month: 'Dec', sales: 65 }
];
```

This file holds the in-memory monthly sales dataset returned by the API route.

---

## Step 4: Create the API route handler

Next.js route handlers let you create backend API endpoints inside the App Router. In this sample, the API route returns the sales data to the chart page.

Create the following folder structure:

```bash
mkdir src/app/api/sales
```

Add a file named `route.ts`:

**File: `src/app/api/sales/route.ts`**

```ts
import { NextResponse } from 'next/server';
import { salesData } from '../../data/salesData';

export async function GET() {
  return NextResponse.json({
    result: salesData,
    count: salesData.length
  });
}
```

The API response contains:

- `result`: the chart data records.
- `count`: the total number of records.

The response format is:

```json
{
  "result": [],
  "count": 12
}
```

You can test the endpoint after running the dev server at:

```text
http://localhost:3000/api/sales
```

---

## Step 5: Create the Chart component

Create a new folder named `components` inside `src`:

```bash
mkdir src/components
```

Add a file named `SalesChart.tsx`:

**File: `src/components/SalesChart.tsx`**

```tsx
'use client';

import { useEffect } from 'react';
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

let chartInstance: ChartComponent | null = null;

export default function ChartPage() {
  const loadData = async () => {
    const response = await fetch('/api/sales');
    const data = await response.json();

    if (chartInstance) {
      chartInstance.series[0].dataSource = data.result;
      chartInstance.refresh();
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Monthly Sales Chart</h1>

      <ChartComponent
        id="sales-chart"
        title="Monthly Sales Report"
        primaryXAxis={{
          valueType: 'Category',
          title: 'Month'
        }}
        primaryYAxis={{
          title: 'Sales'
        }}
        tooltip={{
          enable: true
        }}
        legendSettings={{
          visible: true
        }}
        ref={(chart) => {
          chartInstance = chart;
        }}
      >
        <Inject
          services={[
            ColumnSeries,
            Category,
            Tooltip,
            Legend
          ]}
        />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={[]}
            type="Column"
            xName="month"
            yName="sales"
            name="Sales"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
```

**How the chart is bound to the API**

- A module-level `chartInstance` variable is used to hold a reference to the mounted `ChartComponent`. Declaring it outside the component (rather than with `useRef`) makes the reference survive the chart's re-mount that React StrictMode performs in development, and lets the async `loadData` function access the chart instance from outside the component's local scope.
- The `ref` callback assigns the chart instance to `chartInstance` after the chart is rendered.
- The `loadData` function fetches `/api/sales`, reads the `result` array from the response, and assigns it to `chartInstance.series[0].dataSource`.
- `chartInstance.refresh()` redraws the chart with the new data.
- The chart starts with an empty `dataSource={[]}` and is populated immediately after the API call resolves inside `useEffect`.
- For brevity, this sample does not include `try/catch` around the `fetch` call. In a production application, wrap the call in a `try/catch` and surface a fallback UI (for example a loading state and an error message) when the API call fails.

---

## Step 6: Create the Chart page

Create a new folder named `chart` inside `src/app`:

```bash
mkdir src/app/chart
```

Add a file named `page.tsx`:

**File: `src/app/chart/page.tsx`**

```tsx
'use client';

import dynamic from 'next/dynamic';

const SalesChart = dynamic(() => import('../../components/SalesChart'), {
  ssr: false,
  loading: () => (
    <p className="loading-text">
      Loading chart component...
    </p>
  )
});

export default function ChartPage() {
  return (
    <section className="card">
      <h1>Monthly Sales Chart</h1>

      <p>
        This page displays a Syncfusion React Column Chart. The chart data is
        fetched from the Next.js backend API route.
      </p>

      <div className="api-box">
        API Endpoint: /api/sales
      </div>

      <SalesChart />
    </section>
  );
}
```

The Chart page imports the `SalesChart` component dynamically with `ssr: false`. The `ssr: false` option disables server-side rendering for the chart because Syncfusion's chart component relies on browser-only APIs (such as the DOM and `window`) that are not available in the Node.js server environment. The `loading` callback is shown while the chart bundle is being downloaded on the client.

---

## Step 7: Add the navbar layout and home page

The `layout.tsx` file provides a top navigation bar that links the Home page (`/`) and the Sales Chart page (`/chart`).

**File: `src/app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syncfusion Next.js Chart App',
  description:
    'A beginner-friendly Syncfusion React Chart sample with Next.js routing and backend API'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-inner">
            <Link href="/" className="logo">
              Chart App
            </Link>

            <Link href="/" className="nav-link">
              Home
            </Link>

            <Link href="/chart" className="nav-link">
              Sales Chart
            </Link>
          </div>
        </nav>

        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}
```

The Home page introduces the sample and links to the Chart page:

**File: `src/app/page.tsx`**

```tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="card">
      <h1>
        Building a Next.js Application with Syncfusion React Chart and Routing
      </h1>

      <p>
        This sample demonstrates how to create a Next.js application using the
        Syncfusion React Chart component, Next.js App Router, a backend API route,
        and simple page navigation.
      </p>

      <h2>What this sample includes</h2>

      <ul>
        <li>Next.js project created using Visual Studio Code</li>
        <li>Syncfusion React Chart component</li>
        <li>Simple backend API route using route.ts</li>
        <li>Static sales data returned from the backend</li>
        <li>Navigation between Home page and Chart page</li>
        <li>Column chart with tooltip, legend, and data labels</li>
      </ul>

      <h2>Application URLs</h2>

      <div className="api-box">
        Home Page: http://localhost:3000
      </div>

      <div className="api-box">
        Chart Page: http://localhost:3000/chart
      </div>

      <div className="api-box">
        Backend API: http://localhost:3000/api/sales
      </div>

      <Link href="/chart" className="button-link">
        View Sales Chart
      </Link>
    </section>
  );
}
```

---

## Step 8: Update the global styles

The default `src/app/globals.css` file works for this sample. The Syncfusion theme CSS imports are intentionally left commented out so the sample stays minimal:

**File: `src/app/globals.css`**

```css
/* @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-charts/styles/material.css'; */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f7fb;
  color: #1f2937;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  margin-top: 0;
  font-size: 32px;
  color: #111827;
}

h2 {
  margin-top: 24px;
  font-size: 22px;
  color: #1f2937;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #374151;
}

ul {
  padding-left: 22px;
}

li {
  margin-bottom: 8px;
  font-size: 16px;
  color: #374151;
}

.main-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

.navbar {
  background: #111827;
  color: white;
  padding: 16px 24px;
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
}

.nav-link {
  color: #e5e7eb;
  font-size: 15px;
}

.nav-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
}

.button-link {
  display: inline-block;
  margin-top: 16px;
  background: #2563eb;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
}

.button-link:hover {
  background: #1d4ed8;
}

.chart-wrapper {
  margin-top: 24px;
  width: 100%;
}

.loading-text {
  margin-top: 20px;
  color: #2563eb;
  font-weight: 500;
}

.error-text {
  margin-top: 20px;
  color: #dc2626;
  font-weight: 500;
}

.api-box {
  margin-top: 16px;
  padding: 12px;
  background: #f3f4f6;
  border-left: 4px solid #2563eb;
  border-radius: 6px;
  font-family: Consolas, Monaco, monospace;
  color: #111827;
}

@media screen and (max-width: 768px) {
  .navbar-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .main-container {
    padding: 16px;
  }

  h1 {
    font-size: 26px;
  }

  .card {
    padding: 18px;
  }
}
```

If you want to apply a Syncfusion theme, uncomment the `@import` lines at the top of the file. The recommended approach in Next.js 13+ App Router is to import the theme CSS once in `src/app/layout.tsx`, for example:

```tsx
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-charts/styles/material.css';
```

---

## How to run the application

The application uses the standard Next.js dev server, so the **server (API route)** and the **client (React app)** run together in a single process. You only need **one terminal** for development.

### Run the application (single terminal)

```bash
npm run dev
```

What happens:

- Next.js starts the dev server on `http://localhost:3000`.
- The route handler at `/api/sales` becomes available immediately as part of the same Next.js process — there is no separate backend to start.
- Hot module replacement is enabled, so any edit to a component refreshes the page automatically.

Open the application in the browser:

| URL | Description |
|---|---|
| `http://localhost:3000` | Home page with sample description and link to the chart |
| `http://localhost:3000/chart` | Chart page with the Syncfusion React Column Chart |
| `http://localhost:3000/api/sales` | Backend API endpoint that returns the sales data |

Click **View Sales Chart** on the Home page (or use the navbar) to navigate to the chart. The chart loads the data from `/api/sales` and renders the monthly sales report.

### Build and start a production version

To create a production build:

```bash
npm run build
```

To run the production build:

```bash
npm run start
```

### Stop the application

Press `Ctrl + C` in the terminal where the dev server is running.

---

**Build commands:** Build the application with `npm run build` and start the production build with `npm run start`.

---

## Troubleshooting

**Issue: Chart is not rendered**

1. Verify the Syncfusion Chart package is installed:

   ```bash
   npm install @syncfusion/ej2-react-charts --save
   ```

2. Verify the required chart files exist:
   - `src/components/SalesChart.tsx` - Chart component
   - `src/app/chart/page.tsx` - Chart page with dynamic import and `ssr: false`

3. Confirm that both files start with the `'use client';` directive at the top. Without it, Next.js treats the file as a Server Component and `useEffect`, `fetch`, and the `ref` callback do not work.

4. Restart the development server:

   ```bash
   npm run dev
   ```

**Issue: API data is not loaded**

1. Test the API endpoint directly in your browser:

   ```text
   http://localhost:3000/api/sales
   ```

2. Verify that these files exist and are properly configured:
   - `src/app/api/sales/route.ts` - API route handler
   - `src/app/data/salesData.ts` - Sample data file

3. Check the browser console for error messages and network requests.

**Issue: CSS theme is not applied**

The Syncfusion theme CSS imports are commented out in `src/app/globals.css` by default. To apply a theme, uncomment the four `@import` lines at the top of the file, or import the theme CSS from `src/app/layout.tsx` (recommended for Next.js 13+ App Router).

**Issue: Chart is empty on first load**

The chart mounts and renders before the `/api/sales` request completes, so a blank chart is briefly visible. Once the API responds, the `chartInstance.refresh()` call populates the series. If the chart stays empty:

1. Open the browser dev tools, switch to the **Network** tab, and confirm that `/api/sales` returns a 200 response.
2. Switch to the **Console** tab and look for any unhandled promise rejections from the `fetch` call.
3. Reload the page.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/Nextjs2) repository.

---
