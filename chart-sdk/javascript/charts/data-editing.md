---
layout: post
title: Data editing in JavaScript Charts | Syncfusion
description: Learn here all about Data editing in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD036 -->

# Data editing in JavaScript Charts

## Enable data editing

Data editing allows users to modify chart data points interactively by dragging and dropping the rendered points. This functionality is enabled by injecting the [`DataEditing`](https://ej2.syncfusion.com/javascript/documentation/api/chart#dat-editing) module into the chart, which adds the drag-and-drop functionality for data points.

Set the [`enable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/dragSettings#enable) property to **true** in the [`dragSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#dragsettings) of the corresponding series to activate data editing. Once enabled, the y value of a data point can be changed dynamically by dragging it vertically.

You can also use the following properties to customize the data editing behavior and appearance:

- [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/dragSettings#fill) — Sets the color of the editable data points.
- [`minY`](https://ej2.syncfusion.com/javascript/documentation/api/chart/dragSettings#miny) and [`maxY`](https://ej2.syncfusion.com/javascript/documentation/api/chart/dragSettings#maxy) — Define the minimum and maximum allowable range for editing the data points.

These options control the visual feedback and the valid value range while editing data directly on the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs9" %}

## See also

* [User interaction in JavaScript Charts](https://ej2.syncfusion.com/javascript/documentation/chart/user-interaction)