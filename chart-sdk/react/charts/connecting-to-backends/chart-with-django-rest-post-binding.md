---
layout: post
title: React Chart with Django REST POST Binding | Syncfusion
description: Learn how to bind Syncfusion React Chart with Django REST Framework backend using POST data binding with DataManager and UrlAdaptor.
control: Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React Chart with Django REST POST Binding

The Syncfusion React Chart can be connected to a Django REST Framework backend by using Syncfusion `DataManager` with `UrlAdaptor`. In this setup, the React Chart requests data from a Django API endpoint, and the Django backend returns JSON data in a format that the Syncfusion data layer can process.

This documentation explains how to create a simple React Chart application that connects to a Django REST Framework backend using HTTP POST request data binding.

---

## Overview

This sample uses:

- Django REST Framework as the backend API service.
- SQLite as the sample database.
- React with Vite as the frontend application.
- Syncfusion React Chart as the chart component.
- Syncfusion DataManager and UrlAdaptor for remote data binding.
- HTTP POST request data binding between the React Chart and Django REST API.

---

## Prerequisites

Install the following software before creating the sample:

- Node.js LTS version 20 or later
- npm
- React 18 or later
- Python 3.11 or later
- Django
- Django REST Framework
- Visual Studio Code

Recommended Visual Studio Code extensions:

- Python
- Pylance
- ES7 React snippets

---

## Application architecture

The React Chart does not directly use a static local array. Instead, the chart uses a Syncfusion `DataManager` instance as the data source. The `UrlAdaptor` posts request details to the Django REST endpoint. The backend reads the request body, applies optional sorting and paging, and returns JSON data.

```text
React Syncfusion Chart
        |
        | DataManager + UrlAdaptor
        | HTTP POST request
        v
Django REST Framework API
        |
        v
SQLite database
```

---

## Set up the Django REST Framework backend

The backend returns monthly sales and expenses data. The React Chart displays the sales values as a column series and the expenses values as a line series.

### Step 0: Project structure

```text
Django REST with HTTP Post/
│
├── backend/
│   ├── manage.py
│   ├── db.sqlite3
│   │
│   ├── chart_backend/
│   │   └── settings.py, urls.py, asgi.py, wsgi.py
│   │
│   └── sales/
│       └── admin.py, models.py, serializers.py, urls.py, views.py
│
└── frontend/
    ├── index.html
    │
    └── src/
        └── App.tsx, main.tsx, index.css
```

### Step 1: Create the backend folder

```cmd
mkdir backend
cd backend
```

### Step 2: Create and activate a virtual environment

```cmd
python -m venv .venv
.venv\Scripts\activate
```

For macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### Step 3: Install required backend packages

```cmd
pip install django djangorestframework django-cors-headers
```

### Step 4: Create the Django project and application

```cmd
django-admin startproject chart_backend .
python manage.py startapp sales
```

---

## Configure Django settings

Open `backend/chart_backend/settings.py` and configure the required applications, middleware, database, CORS, and REST Framework settings.

**`backend/chart_backend/settings.py`**

```python
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "django-insecure-syncfusion-chart-demo-key"

DEBUG = True

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
]

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "corsheaders",
    "rest_framework",

    "sales",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "chart_backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "chart_backend.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kolkata"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Development-only CORS configuration.
# For production, replace this with CORS_ALLOWED_ORIGINS.
CORS_ALLOW_ALL_ORIGINS = True

REST_FRAMEWORK = {
    "DEFAULT_PARSER_CLASSES": [
        "rest_framework.parsers.JSONParser",
        "rest_framework.parsers.FormParser",
        "rest_framework.parsers.MultiPartParser",
    ],
}
```

> For production applications, avoid `CORS_ALLOW_ALL_ORIGINS = True`. Use `CORS_ALLOWED_ORIGINS` with trusted frontend domains.

---

## Create the sales model

The model defines the data used by the Chart. Each record represents monthly sales and expenses.

**`backend/sales/models.py`**

```python
from django.db import models


class MonthlySales(models.Model):
    month = models.CharField(max_length=20)
    sales = models.IntegerField()
    expenses = models.IntegerField()

    class Meta:
        ordering = ["id"]
        verbose_name = "Monthly Sale"
        verbose_name_plural = "Monthly Sales"

    def __str__(self):
        return f"{self.month} - Sales: {self.sales}, Expenses: {self.expenses}"
```

---

## Create the serializer

The serializer converts Django model instances into JSON data for the React Chart.

**`backend/sales/serializers.py`**

```python
from rest_framework import serializers
from .models import MonthlySales


class MonthlySalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlySales
        fields = [
            "id",
            "month",
            "sales",
            "expenses",
        ]
```

---

## Create the API view for POST request data binding

This API view supports both GET and POST requests.

- GET is useful for browser testing.
- POST is used by Syncfusion DataManager and UrlAdaptor.

The response format must contain:

- `result`: the array of records
- `count`: the total number of records

**`backend/sales/views.py`**

```python
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import MonthlySales
from .serializers import MonthlySalesSerializer


class SalesChartDataAPIView(APIView):
    """
    API endpoint for Syncfusion React Chart remote data binding.

    Supports:
    - GET for browser testing
    - POST for Syncfusion DataManager UrlAdaptor
    """

    permission_classes = [AllowAny]

    allowed_sort_fields = {
        "id",
        "month",
        "sales",
        "expenses",
    }

    def get_queryset(self):
        return MonthlySales.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = MonthlySalesSerializer(queryset, many=True)

        return Response(
            {
                "result": serializer.data,
                "count": queryset.count(),
            },
            status=status.HTTP_200_OK,
        )

    def post(self, request, *args, **kwargs):
        payload = request.data
        queryset = self.get_queryset()

        sorted_items = payload.get("sorted", [])

        if isinstance(sorted_items, list):
            for sort_item in sorted_items:
                field_name = sort_item.get("name")
                direction = sort_item.get("direction", "ascending")

                if field_name in self.allowed_sort_fields:
                    if direction == "descending":
                        queryset = queryset.order_by(f"-{field_name}")
                    else:
                        queryset = queryset.order_by(field_name)

        total_count = queryset.count()

        skip = payload.get("skip", 0)
        take = payload.get("take", None)

        try:
            skip = int(skip)
        except (TypeError, ValueError):
            skip = 0

        if take is not None:
            try:
                take = int(take)
            except (TypeError, ValueError):
                take = None

        if take is not None:
            queryset = queryset[skip: skip + take]
        else:
            queryset = queryset[skip:]

        serializer = MonthlySalesSerializer(queryset, many=True)

        return Response(
            {
                "result": serializer.data,
                "count": total_count,
            },
            status=status.HTTP_200_OK,
        )
```

---

## Configure backend routing

**`backend/sales/urls.py`**

```python
from django.urls import path
from .views import SalesChartDataAPIView

urlpatterns = [
    path("sales/", SalesChartDataAPIView.as_view(), name="sales-chart-data"),
]
```

**`backend/chart_backend/urls.py`**

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("sales.urls")),
]
```

The final backend API endpoint is:

```text
http://localhost:8000/api/sales/
```

---

## Configure the Django admin page

**`backend/sales/admin.py`**

```python
from django.contrib import admin
from .models import MonthlySales


@admin.register(MonthlySales)
class MonthlySalesAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "month",
        "sales",
        "expenses",
    )

    search_fields = (
        "month",
    )

    ordering = (
        "id",
    )
```

---

## Run migrations and add sample data

### Step 1: Create and apply migrations

```cmd
python manage.py makemigrations
python manage.py migrate
```

### Step 2: Add sample data using Django shell

```cmd
python manage.py shell
```

Paste the following code in the shell:

```python
from sales.models import MonthlySales

MonthlySales.objects.all().delete()

data = [
    {"month": "Jan", "sales": 35, "expenses": 20},
    {"month": "Feb", "sales": 28, "expenses": 18},
    {"month": "Mar", "sales": 34, "expenses": 22},
    {"month": "Apr", "sales": 40, "expenses": 25},
    {"month": "May", "sales": 32, "expenses": 21},
    {"month": "Jun", "sales": 45, "expenses": 28},
    {"month": "Jul", "sales": 48, "expenses": 30},
    {"month": "Aug", "sales": 50, "expenses": 31},
    {"month": "Sep", "sales": 46, "expenses": 29},
    {"month": "Oct", "sales": 55, "expenses": 33},
    {"month": "Nov", "sales": 60, "expenses": 36},
    {"month": "Dec", "sales": 65, "expenses": 38},
]

for item in data:
    MonthlySales.objects.create(**item)

print(MonthlySales.objects.count())

exit()
```

Expected output:

```text
12
```

---

## Create the React application

Open a new terminal from the project root folder and create a Vite React TypeScript application.

```cmd
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
```

---

## Install Syncfusion React Chart packages

```cmd
npm install @syncfusion/ej2-react-charts @syncfusion/ej2-data
```

Ensure that you include the required Syncfusion styles in your `index.css` file as documented in the [Syncfusion Styles guide](https://ej2.syncfusion.com/react/documentation/chart/chart-appearance#themes).

---

## Configure Syncfusion DataManager with UrlAdaptor

Create a `DataManager` instance and point it to the Django REST API endpoint. The `crossDomain: true` flag is required only when the frontend is served from a different origin than the API (which is the normal case during local development).

```tsx
const chartDataManager = new DataManager({
  url: "http://localhost:8000/api/sales/",
  adaptor: new UrlAdaptor(),
  crossDomain: true,
});
```

The `query` option can be used to request a specific number of records and sort the result. UrlAdaptor reads `query.take`, `query.skip`, and `query.sorted` from the request body, so prefer `take` / `skip` / `sortBy` on `Query` rather than mutating the result locally.

```tsx
const chartQuery = new Query()
  .take(12)
  .skip(0)
  .sortBy("id", "ascending");
```

---

## Create the React Chart component

Open `frontend/src/App.tsx` and replace the content with the following chart component.

**`frontend/src/App.tsx`**

```tsx
import React from "react";

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
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

const App: React.FC = () => {
  const chartDataManager = new DataManager({
    url: "http://localhost:8000/api/sales/",
    adaptor: new UrlAdaptor(),
    crossDomain: true,
  });

  const chartQuery = new Query()
    .take(12)
    .skip(0)
    .sortBy("id", "ascending");

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">
          React Chart with Django REST POST Binding
        </h1>

        <ChartComponent
          id="sales-chart"
          title="Monthly Sales and Expenses"
          primaryXAxis={{
            valueType: "Category",
            title: "Month",
          }}
          primaryYAxis={{
            title: "Amount",
          }}
          tooltip={{
            enable: true,
          }}
          legendSettings={{
            visible: true,
          }}
        >
          <Inject
            services={[
              ColumnSeries,
              LineSeries,
              Category,
              Legend,
              Tooltip,
              DataLabel,
            ]}
          />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartDataManager}
              query={chartQuery}
              xName="month"
              yName="sales"
              name="Sales"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                },
              }}
            />

            <SeriesDirective
              dataSource={chartDataManager}
              query={chartQuery}
              xName="month"
              yName="expenses"
              name="Expenses"
              type="Line"
              marker={{
                visible: true,
                width: 8,
                height: 8,
                dataLabel: {
                  visible: true,
                  position: "Top",
                },
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default App;
```

**`frontend/src/main.tsx`**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**`frontend/index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Syncfusion Django REST Chart</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Run the Django and React applications

This sample uses **two processes that must run at the same time**: the Django REST API serves data on `http://localhost:8000`, and the Vite dev server renders the React Chart that consumes it on `http://localhost:5173`. Open **two separate terminals** so each process keeps running independently.

### Step 1: Start the backend (Terminal A)

Start the backend **first** so the API is reachable when the frontend boots.

From the `backend` folder (with the virtual environment activated):

```cmd
python manage.py runserver
```

You should see Django log lines such as:

```text
Watching for file changes with StatReloader
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

Sanity-check the endpoint in a browser:

```text
http://localhost:8000/api/sales/
```

A valid response contains a `result` array and `count`, for example:

```json
{
  "result": [{ "id": 1, "month": "Jan", "sales": 35, "expenses": 20 }],
  "count": 12
}
```

If the page returns `404`, confirm that you registered the `api/` URL include in `backend/chart_backend/urls.py` and that `sales.urls` exists.

### Step 2: Start the frontend (Terminal B)

Open a **second terminal** from the `frontend` folder and start the Vite dev server:

```cmd
npm run dev
```

Vite prints the local URL, for example:

```text
Local: http://localhost:5173/
```

Open that URL in the browser. If port `5173` is already in use, Vite automatically switches to the next free port (typically `5174`) and prints the chosen URL.

### Step 3: Verify the flow

1. The chart renders two series (Sales as columns, Expenses as a line) sourced from the Django API.
2. The Django terminal (Terminal A) shows an entry like `POST /api/sales/ HTTP/1.1" 200` confirming `UrlAdaptor` posted the request.
3. If you change a value in the SQLite database, refreshing the browser re-fetches the data through the same POST endpoint.

### Step 4: Stop the applications

In each terminal, press `Ctrl + C`:

- Terminal A stops Django.
- Terminal B stops Vite.

Stop the backend **last** so the frontend logs any final POST request as `200`.

---

## Test the API POST request

Use the following command to verify that the Django API accepts POST request data.

**Windows Command Prompt**

```cmd
curl -X POST http://localhost:8000/api/sales/ -H "Content-Type: application/json" -d "{\"skip\":0,\"take\":5,\"requiresCounts\":true}"
```

**macOS or Linux**

```bash
curl -X POST http://localhost:8000/api/sales/ \
  -H "Content-Type: application/json" \
  -d '{"skip":0,"take":5,"requiresCounts":true}'
```

Expected response:

```json
{
  "result": [
    {
      "id": 1,
      "month": "Jan",
      "sales": 35,
      "expenses": 20
    }
  ],
  "count": 12
}
```

---

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/React-Charts-Examples/tree/master/ConnectingToBackends/DjangoRESTwithHTTPPost) repository.

---
