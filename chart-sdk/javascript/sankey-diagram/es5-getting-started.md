---
layout: post
title: ES5 getting started with JavaScript Sankey control | Syncfusion
description: Check out and learn about ES5 getting started with JavaScript Sankey control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
---

# ES5 getting started with JavaScript Sankey control

This guide explains how to create a Sankey diagram using plain JavaScript (ES5). The page includes focused samples: initialize, add data, and tooltip/module injection.

## Dependencies

Below is the list of minimum dependencies required to use the Sankey diagram (part of the charts package).

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

Note: `@syncfusion/ej2-pdf-export`, `@syncfusion/ej2-file-utils`, and `@syncfusion/ej2-compression` are optional—required only for PDF export features.

## Setup for local environment

Create a simple folder for the app and add `index.html` and `index.js`. You can use either local script files (copied from the EJ2 build) or CDN links.

### Using local scripts

Copy required global scripts and styles into a `resources` folder and reference them from `index.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Essential JS 2 Sankey</title>
    <!-- Essential JS 2 dependencies -->
    <script src="resources/scripts/ej2-base.min.js"></script>
    <script src="resources/scripts/ej2-data.min.js"></script>
    <script src="resources/scripts/ej2-svg-base.min.js"></script>
    <!-- Sankey is part of ej2-charts -->
    <script src="resources/scripts/ej2-charts.min.js"></script>
  </head>
  <body>
    <div id="element"></div>
    <script src="index.js"></script>
  </body>
</html>
```

### Using CDN links

```html
<script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js"></script>
```

## Sample 1 — Initialize Sankey

Add a `div` element for the Sankey in `index.html` and initialize it from `index.js`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/initialize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/initialize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/initialize-cs1" %}

## Sample 2 — Add data to Sankey

Provide nodes and links to the Sankey component via the data configuration. See the example:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/data-cs1" %}

## Sample 3 — Tooltip and module injection

Enable tooltip and legend by injecting required modules when using modular imports. For global script usage (CDN or combined bundle), modules are often available without explicit injection.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/getting-started/tooltip-cs1" %}

