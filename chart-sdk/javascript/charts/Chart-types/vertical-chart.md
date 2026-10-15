---
layout: post
title: Vertical Chart in JavaScript Charts | Syncfusion
description: Learn here all about Vertical Chart in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Vertical Chart in JavaScript Charts

## Vertical Chart

To draw a chart in a vertical manner, set [`isTransposed`](https://ej2.syncfusion.com/javascript/documentation/api/chart#istransposed) to `true` on the chart configuration. The property is supported by all chart series types and swaps the x-axis and y-axis orientation, so a column series renders horizontally and a bar series renders vertically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs159/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs159/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs159" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs382/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs382/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs382" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs383/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs383/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs383" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs384/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs384/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs384" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs385/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs385/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs385" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs463/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs463/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs463" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs464/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs464/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs464" %}

## Troubleshooting
The following list describes common issues you may encounter when rendering a vertical (transposed) chart and how to resolve them.

**Axis labels render in the wrong position after transposing:** [`isTransposed`](https://ej2.syncfusion.com/javascript/documentation/api/chart#istransposed) swaps the orientation of the x- and y-axis. Confirm that axis titles, label formats, and intervals are configured on the axes you intend (the original y-axis becomes the horizontal axis and vice versa).

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between connected series. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Column chart](./column)
* [Bar chart](./bar)
* [Spline chart](./spline)