---
layout: post
title: ES5 getting started with JavaScript Bullet Chart control | Syncfusion
description: Check out and learn about ES5 getting started with JavaScript Bullet Chart control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Bullet Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting Started with Syncfusion® JavaScript (ES5) Bullet Chart Control

Build your first Syncfusion JavaScript (ES5) application with a simple Bullet Chart in just a few minutes. This quickstart guides you through creating a minimal, runnable HTML page that loads the Syncfusion EJ2 (ES5) Bullet Chart from the CDN, initializes it with sample data, and renders an interactive value-and-target comparison.

## Prerequisites

* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* A web browser to view the result
* A local web server such as the VS Code [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

## Dependencies

The Bullet Chart control ships as part of the `@syncfusion/ej2-charts` package. Below is the list of minimum dependencies required.

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

### Step 3: Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Bullet Chart Control to the Application

The `index.html` file references a separate `index.js` file that contains the Bullet Chart component initialization. This keeps your markup and script logic cleanly separated, which is the recommended pattern for Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) apps.

`index.js` imports nothing manually — the global scripts added in Step 2 register the `ej.charts.BulletChart` class on the `ej` namespace. The script then builds the Bullet Chart component with sample `value`/`target` data and renders the control into the `#element` container declared in `index.html`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

The `new ej.charts.BulletChart({...})` call creates the Bullet Chart component. The configuration object accepts the following key options:

- [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#datasource) — Array of data points. Each item needs a `value` and a `target` (or remap them with `valueField`/`targetField`).
- [`valueField`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#valuefield) — Field name in `dataSource` mapped to the value bar.
- [`targetField`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#targetfield) — Field name in `dataSource` mapped to the target marker.
- [`minimum`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#minimum), [`maximum`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#maximum), [`interval`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#interval) — Numeric axis range and tick spacing.
- [`title`](https://ej2.syncfusion.com/javascript/documentation/api/bullet-chart/index-default#title) — Text shown above the chart.

Finally, `bulletChart.appendTo('#element')` renders the control into the `<div id="element">` element declared in `index.html`.

### Step 4: Open in Browser

Open `quickstart/index.html` through a local web server. With the VS Code **Live Server** extension installed, right-click `index.html` in the Explorer and choose **Open with Live Server**, then visit the URL it prints (for example, `http://127.0.0.1:5500/`). You should see the Syncfusion Bullet Chart control displaying the sample data.

## Output

The chart now renders five value bars with their target markers between `0` and `500`, with tick marks every `50` units.

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/getting-started-cs2" %}

## Troubleshooting

- **`ej is not defined`.** Confirm that `ej2-charts.min.js` is loaded before your script. Place the `<script>` tag inside the `<head>` or just before your own `<script src="index.js">` tag.
- **The container is empty.** Make sure the `id` in your markup (`#element`) matches the selector passed to `appendTo('#element')`.
- **The value bar is hidden.** Confirm that `valueField` and `targetField` match the field names in your `dataSource` and that the values fall within `[minimum, maximum]`.
- **Ranges don't appear.** Verify that each `ranges[].end` is between `minimum` and `maximum`, and that `end` values are sorted ascending.