---
layout: post
title: ES5 getting started with JavaScript 3D Circular Chart | Syncfusion
description: Check out and learn about ES5 getting started with JavaScript 3D Circular Chart of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting Started with Syncfusion® JavaScript (ES5) 3D Circular Chart Control

Build your first Syncfusion JavaScript (ES5) application with a simple 3D Circular Chart in just a few minutes. This quickstart guides you through creating a minimal, runnable HTML page that loads the Syncfusion EJ2 (ES5) 3D Circular Chart from the CDN, initializes it with sample data, and renders an interactive Pie chart with a title.

## Prerequisites

* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* A web browser to view the result
* A local web server such as the VS Code [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

## Dependencies

The 3D Circular Chart control ships as part of the `@syncfusion/ej2-charts` package. Below is the list of minimum dependencies required.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Quick Setup

### Step 1: Create Folder and HTML file

* Create a folder named `quickstart` in your desired directory.
* Inside the `quickstart` folder, create two new files: `index.html` and `index.js`.

### Step 2: Add Syncfusion<sup style="font-size:70%">&reg;</sup> CDN Resources

Include the following JavaScript links in the `<head>` section.

**Scripts (JavaScript):**
```html
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
```

**Or**, to load all Syncfusion components in a single combined bundle:

```html
<script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>
```

### Step 3: Add the Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Circular Chart Control to the Application

The `index.html` file contains the chart container and loads `index.js`. The `index.js` file initializes the 3D Circular Chart with sample data.

The Syncfusion CDN scripts provide the `ej.charts.CircularChart3D` class. The sample displays browser market-share data as a 3D Pie chart, applies a tilt angle, adds a title, and renders the chart in the `#element` container.

The main configuration options are:

- [`series`](https://ej2.syncfusion.com/javascript/documentation/api/circularchart3d/index-default#series) - Defines the chart data and maps the data fields using [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/circularchart3d/circularchart3dseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/circularchart3d/circularchart3dseriesmodel#yname).
- [`tilt`](https://ej2.syncfusion.com/javascript/documentation/api/circularchart3d/index-default#tilt) - Sets the tilt angle of the 3D chart.
- [`title`](https://ej2.syncfusion.com/javascript/documentation/api/circularchart3d/index-default#title) - Sets the chart title.

Finally, `circularChart.appendTo('#element')` renders the chart in the `<div id="element">` container.

Copy the snippets below into the matching files in your `quickstart` folder.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/getting-started/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

### Step 4: Open in Browser

Open `quickstart/index.html` through a local web server. With the VS Code **Live Server** extension installed, right-click `index.html` in the Explorer and choose **Open with Live Server**, then visit the URL it prints (for example, `http://127.0.0.1:5500/`). You should see the Syncfusion 3D Circular Chart control displaying the browser-market-share sample data as a 3D Pie series with a title.

## Output

The 3D Circular Chart shows 6 browser vendors rendered as a 3D Pie series. The title "Browser Market Shares in November 2023" appears above the chart.

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/getting-started" %}

## Troubleshooting

- **The page is blank.** Open the page through a local web server (for example, the VS Code **Live Server** extension) instead of double-clicking the file. Syncfusion charts require an `http://` or `https://` origin.
- **`ej is not defined`.** Confirm that `ej2-charts.min.js` is loaded before your script. Place the `<script>` tag inside the `<head>` or just before your own `<script src="index.js">` tag.
- **The container is empty.** Make sure the `id` in your markup (`#element`) matches the selector passed to `appendTo('#element')`.
- **Only an empty circular chart is rendered.** Confirm that the `series` array is configured with at least a `dataSource`, `xName`, and `yName`, as shown in the example.
