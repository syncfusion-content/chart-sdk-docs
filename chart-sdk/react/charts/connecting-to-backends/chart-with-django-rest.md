---
layout: post
title: React Chart with Django REST Framework | Syncfusion
description: Learn how to connect Syncfusion React Chart component to Django REST Framework backend for dynamic data binding and visualization.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React Chart with Django REST Framework

This guide explains how to integrate the **Syncfusion React Chart** component with a **Django REST Framework (DRF)** backend. The frontend sends a GET request to a DRF API and binds the returned JSON array directly to the chart for visualization.

---

## Overview

A Django REST API returns sales records, and a Syncfusion React Chart displays the response as a column chart.

```text
React Application
    ↓ Axios GET request
Django REST API
    ↓ JSON response
Syncfusion React Chart
```

---

## Prerequisites

- Python 3.10 or later
- Node.js 18 or later
- npm 9 or later
- pip

Backend packages (minimum versions):

- Django 4.2 or later
- Django REST Framework 3.14 or later
- django-cors-headers 4.0 or later

Frontend packages:

- React 18 or later (provided by the Vite template)
- Vite 5 or later (provided by the Vite template)
- Axios 1.x
- `@syncfusion/ej2-react-charts` 27.x or later

---

## Project Structure

```text
chart-project/
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── settings.py
│   │   └── urls.py
│   └── api/
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       └── migrations/
└── frontend/
    ├── package.json
    └── src/
        └── App.jsx
```

> For TypeScript, use `npm create vite@latest frontend -- --template react-ts` and edit `src/App.tsx`.

---

## Backend: Create the Django REST API

### 1. Create the Project

```bash
mkdir chart-project && cd chart-project
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework django-cors-headers
django-admin startproject backend
cd backend
python manage.py startapp api
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

> On macOS/Linux, activate the venv with `source venv/bin/activate`.

### 2. Configure `backend/backend/settings.py`

Add `rest_framework`, `corsheaders`, and `api` to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'api',
]
```

Add `CorsMiddleware` at the top of `MIDDLEWARE`:

```python
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

Allow all hosts and the Vite dev server ports:

```python
ALLOWED_HOSTS = ["*"]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "http://127.0.0.1:5175",
]
```

> Vite defaults to port 5173, but falls back to 5174, 5175, ... if earlier ports are in use. Read the actual URL from the Vite terminal output and add it to `CORS_ALLOWED_ORIGINS` if it is not in the list.

### 3. Define the Model

`backend/api/models.py`:

```python
from django.db import models

class Sales(models.Model):
    month = models.CharField(max_length=20)
    revenue = models.IntegerField()
    year = models.IntegerField(default=2026)

    def __str__(self):
        return f"{self.month} - {self.year}"
```

- `month` - category value for the X axis
- `revenue` - numeric value for the Y axis
- `year` - optional filter parameter

### 4. Define the Serializer

Create `backend/api/serializers.py` (Django does not create it automatically):

```python
from rest_framework import serializers
from .models import Sales

class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales
        fields = '__all__'
```

The serializer converts model instances to JSON for the React client.

### 5. Define the API View

`backend/api/views.py`:

```python
from rest_framework.viewsets import ModelViewSet
from .models import Sales
from .serializers import SalesSerializer

class SalesViewSet(ModelViewSet):
    queryset = Sales.objects.all()
    serializer_class = SalesSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        year = self.request.query_params.get('year')
        if year:
            queryset = queryset.filter(year=year)
        return queryset
```

Supported endpoints:

- `GET /api/sales/` - returns all sales records
- `GET /api/sales/?year=2026` - returns filtered sales records
- `POST /api/sales/` - creates a sales record
- `PUT /api/sales/{id}/` - updates a sales record
- `DELETE /api/sales/{id}/` - deletes a sales record

### 6. Register URLs

`backend/backend/urls.py`:

```python
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import SalesViewSet

router = DefaultRouter()
router.register(r'sales', SalesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
```

The API endpoint is:

```text
http://127.0.0.1:8000/api/sales/
```

### 7. Seed Sample Data

Use the Django shell:

```bash
python manage.py shell
```

```python
from api.models import Sales
Sales.objects.bulk_create([
    Sales(month="Jan", revenue=1000, year=2026),
    Sales(month="Feb", revenue=1500, year=2026),
    Sales(month="Mar", revenue=2000, year=2026),
    Sales(month="Apr", revenue=2500, year=2026),
])
exit()
```

### 8. Run the Server

From the `chart-project/backend/` folder:

```bash
python manage.py runserver
```

The API now listens on `http://127.0.0.1:8000/api/sales/`. The root URL `http://127.0.0.1:8000/` is not routed and returns 404.

### 9. Expected API Response

```json
[
  { "id": 1, "month": "Jan", "revenue": 1000, "year": 2026 },
  { "id": 2, "month": "Feb", "revenue": 1500, "year": 2026 },
  { "id": 3, "month": "Mar", "revenue": 2000, "year": 2026 },
  { "id": 4, "month": "Apr", "revenue": 2500, "year": 2026 }
]
```

---

## Frontend: Create the React Application

### 1. Create the Project

```bash
cd chart-project
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install @syncfusion/ej2-react-charts axios
```

### 2. Bind Data to the Chart

Replace the contents of `frontend/src/App.jsx` (or `App.tsx` for TypeScript):

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  DataLabel,
} from '@syncfusion/ej2-react-charts';

function App() {
  const [chartData, setChartData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2026');

  const loadChartData = (year) => {
    axios
      .get(`http://127.0.0.1:8000/api/sales/?year=${year}`)
      .then((response) => setChartData(response.data))
      .catch((error) => console.error('Error loading chart data:', error));
  };

  useEffect(() => {
    loadChartData(selectedYear);
  }, [selectedYear]);

  return (
    <div style={{ width: '80%', margin: '40px auto' }}>
      <h2>Syncfusion React Chart with Django REST</h2>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="yearFilter" style={{ marginRight: '10px' }}>Select Year:</label>
        <select id="yearFilter" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="2026">2026</option>
        </select>
      </div>

      <ChartComponent
        id="sales-chart"
        title="Monthly Sales Revenue"
        primaryXAxis={{ valueType: 'Category', title: 'Month' }}
        primaryYAxis={{ title: 'Revenue' }}
        tooltip={{ enable: true }}
        legendSettings={{ visible: true }}
      >
        <Inject services={[ColumnSeries, Category, Legend, DataLabel, Tooltip]} />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartData}
            xName="month"
            yName="revenue"
            name="Revenue"
            type="Column"
            dataLabel={{ visible: true }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
```

Key points:

- `dataLabel` is a top-level prop on `SeriesDirective`. Placing it inside `marker` does not display labels.

### 3. Run the Client

From the `chart-project/frontend/` folder:

```bash
npm run dev
```

Vite prints the URL on startup, for example:

```text
  ➜  Local: http://127.0.0.1:5173/
```

Open that URL in the browser.

---

## How Server and Client Work Together

The two servers run side by side. The Django backend listens on port `8000` and serves JSON; the Vite dev server listens on port `5173` (or the next available port) and serves the React UI. The browser fetches data from the backend on every state change and re-renders the chart.

### Server Execution

1. `python manage.py runserver` starts Django on port `8000` and registers the `SalesViewSet` at `/api/sales/` via the DRF router.
2. A browser request `GET /api/sales/?year=2026` reaches `SalesViewSet.get_queryset`, which reads the `year` query parameter, filters the `Sales` model, and returns the matching records.
3. `SalesSerializer` serializes each `Sales` instance to JSON.
4. `CorsMiddleware` adds the `Access-Control-Allow-Origin` header for the React origin so the browser accepts the response.
5. `ALLOWED_HOSTS = ["*"]` lets Django accept the browser's `Host` header during local development.

### Client Execution

1. `npm run dev` starts the Vite dev server on port `5173` with hot-reload enabled.
2. The `App` component mounts with `chartData = []` and `selectedYear = '2026'`.
3. `useEffect` runs `loadChartData('2026')` once. Axios sends `GET http://127.0.0.1:8000/api/sales/?year=2026`.
4. When the response arrives, `setChartData(response.data)` triggers a re-render. The Syncfusion chart redraws the column series with the new data.
5. When the user changes the dropdown, `setSelectedYear` updates state, `useEffect` re-runs, and a new request is sent. The chart redraws with the filtered data.

### End-to-End Data Flow

```text
User changes dropdown
    ↓
React setState(selectedYear)
    ↓
useEffect fires
    ↓
Axios GET /api/sales/?year=<value>
    ↓
CORS preflight + request
    ↓
Django SalesViewSet.get_queryset filters by year
    ↓
SalesSerializer returns JSON array
    ↓
React setChartData(response.data)
    ↓
ChartComponent re-renders the column series
```

---

## Troubleshooting

**Chart is empty**

1. Confirm the Django server is running and the API endpoint returns data.
2. Confirm the frontend URL matches the Django port.
3. Confirm CORS allows the exact Vite origin shown in the terminal.
4. Confirm `xName` and `yName` match the API JSON keys.
5. Confirm `dataLabel` is a top-level prop on `SeriesDirective`, not nested inside `marker`.

**CORS error in the browser console**

Add the exact Vite origin to `CORS_ALLOWED_ORIGINS` in `settings.py` and restart Django.

**404 at `http://127.0.0.1:8000/`**

The Django root URL is not routed. Use `http://127.0.0.1:8000/api/sales/`.

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/Django) repository.

---

## References

- [Syncfusion React Chart Documentation](https://ej2.syncfusion.com/react/documentation/chart/getting-started)
- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
- [django-cors-headers Documentation](https://github.com/adamchainz/django-cors-headers)
- [Vite Documentation](https://vitejs.dev/guide/)

