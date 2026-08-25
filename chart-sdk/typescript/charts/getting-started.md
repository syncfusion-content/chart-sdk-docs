---
layout: post
title: Getting started with TypeScript Charts control | Syncfusion
description: Check out and learn about Getting started with TypeScript Charts control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript Charts control

This document explains how to create a simple Chart and configure its features in TypeScript using the Essential JS 2 webpack [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

* [Node.js](https://nodejs.org/en) (v14.15.0 or higher)
* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* [Git](https://git-scm.com/) (for cloning the quickstart repository)
* A web browser to view the result

## Dependencies

Below is the list of minimum dependencies required to use the Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```
> Note: `@syncfusion/ej2-pdf-export`, `@syncfusion/ej2-file-utils`, and `@syncfusion/ej2-compression` are optional and required only for PDF export features. Omit them if you are not using exports.

> Use the latest `@syncfusion/ej2-*` packages that are compatible with Node.js v14.15.0 or higher.

## Quick Setup

### Step 1: Open Command Prompt

Open the command prompt and navigate to the directory where you want to create the project.

* **For Windows**: Open Command Prompt (cmd) or PowerShell and use the `cd` command to navigate to your desired directory.
* **For macOS/Linux**: Open Terminal and use the `cd` command to navigate to your desired directory.

### Step 2: Clone the Quickstart Repository

Run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart

{% endhighlight %}
{% endtabs %}

This creates an `ej2-quickstart` folder in the current directory that contains the seed project.

### Step 3: Navigate to Project Folder

Run the following command to navigate to the cloned project directory.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

### Step 4: Install Required Packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. Install either the umbrella package or the individual control package:

* Umbrella: [`@syncfusion/ej2`](https://www.npmjs.com/package/@syncfusion/ej2) — all Syncfusion controls in a single package.
* Individual: [`@syncfusion/ej2-charts`](https://www.npmjs.com/package/@syncfusion/ej2-charts) — the Chart and its required dependencies.

The quickstart application is preconfigured with the `@syncfusion/ej2` dependency in the `~/package.json` file, including a `start` script that runs the webpack dev server. Use the following command to install all the npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

This command downloads and installs all the dependencies required for the project.

### Step 5: Update the HTML Template

Open the `ej2-quickstart` folder in Visual Studio Code or any text editor of your choice.

> Note: Code snippets here use webpack for local development. For online demos or StackBlitz, SystemJS may be used—ignore loader/helper scripts in rendered previews.

Locate the `~/src/index.html` file in the project and add an HTML `<div>` with its `id` attribute set to `element` to initialize the Chart container.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
     <h1>Syncfusion Chart</h1>
     <!-- Container which renders the Chart -->
     <div id='element'></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

The webpack dev server injects the compiled `app.js` bundle automatically, so no manual `<script>` tag is required.

### Step 6: Create the Chart Component with Data

Locate the `src/app/app.ts` file in your project. Import the `Chart` component along with the modules you need, prepare the sample data, and instantiate the chart.

**Module Injection**: The Chart component requires specific feature modules to be registered before use. To render a line series with a category axis, inject the [`LineSeries`](../api/chart/lineseries) and [`Category`](../api/chart/category) modules.

**Populate Chart with Data**: Add a series object to the chart by using the [`series`](../api/chart/series) property. Map the JSON fields `month` and `sales` to the series [`xName`](../api/chart/series#xname) and [`yName`](../api/chart/series#yname) properties, and assign the JSON array as the [`dataSource`](../api/chart/series#datasource) property.

Since the JSON contains category data, set the [`valueType`](../api/chart/axisModel#valuetype) of the horizontal axis ([`primaryXAxis`](../api/chart/chartModel#primaryxaxis)) to `Category`. By default, the value type is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart, LineSeries, Category } from '@syncfusion/ej2-charts';

// Register required feature modules
Chart.Inject(LineSeries, Category);

// Sample data for the chart
let chartData: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

// Initialize the Chart
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [{
        // Data source for chart series
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Line'
    }],
    title: 'Sales Data'
});

// Render the chart to the target container
chart.appendTo('#element');

{% endhighlight %}
{% endtabs %}

### Step 7: Run the Application

Open the integrated terminal in Visual Studio Code, or use your command prompt, and run the application with the `npm run start` command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The application compiles and automatically opens in your default web browser. By default, the dev server runs at `http://localhost:4000`. If that port is in use, webpack selects the next available port and prints the URL in the terminal.

When the build completes, the Syncfusion<sup style="font-size:70%">&reg;</sup> Chart control renders on the page and is ready for further customization.

## Output

The following screenshot shows the output of the Syncfusion Chart quick start application:

![Syncfusion Chart Quick Start Output - Line chart of monthly sales data](./images/chart.png)

## Troubleshooting

* **`Cannot find module '@syncfusion/ej2-charts'`** — Dependencies are not installed. Run `npm install` in the project root.
* **Chart renders but axis is empty** — The `Category` module was not injected. Verify that `Chart.Inject(LineSeries, Category)` is called before chart construction.
* **Series does not appear** — The `LineSeries` module was not injected. Add `LineSeries` to the `Chart.Inject(...)` call.
* **Port `4000` already in use** — Another process is bound to the port. Stop the conflicting process or change `devServer.port` in `webpack.config.js`.
* **TypeScript build error** — TypeScript version mismatch. Install TypeScript as a dev dependency: `npm install typescript --save-dev`.

## See also

* [Working with Data](./working-with-data)
* [Line Series](./chart-types/line)
* [Category Axis](./category-axis)
* [Chart Title and Subtitle](./title-and-sub-title)
* [Chart Legend](./legend)
* [Chart Tooltip](./tool-tip)