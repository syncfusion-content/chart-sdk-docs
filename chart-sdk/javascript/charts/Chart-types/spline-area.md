---
layout: post
title: Spline Area Chart in JavaScript Charts | Syncfusion
description: Learn here all about Spline Area in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Spline Area Chart in JavaScript Charts

## Spline Area

To render a [spline area](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/spline-area-chart) series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](../../api/chart/series#type) as `SplineArea` in your chart configuration. This indicates that the data should be represented as a spline area chart, where data points are connected by smooth, curved lines (splines) instead of straight lines.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs129/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs129/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs129" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](../../api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](../../api/chart/series#xname) and [`yName`](../../api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs282/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs282/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs282" %}

## Series customization

The following properties can be used to customize the `SplineArea` series.

### Solid fill

The [`fill`](../../api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs130/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs130/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs130" %}

### Gradient fill

The [`fill`](../../api/chart/series#fill) property also applies an SVG gradient to a spline area series. Define the gradient within an SVG `<defs>` element using a unique ID, and assign it to the series in the `url(#gradientId)` format. This produces a smooth color transition across the area, useful for emphasizing trends in time-series data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs283/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs283/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs283" %}

### Opacity

The [`opacity`](../../api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs284/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs284/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs284" %}

### Border

Use the [`border`](../../api/chart/series#border) property to configure the border width, color, and dash array of the spline area series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs285/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs285/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs285" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](../../api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](../../api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs286/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs286/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs286" %}

### Fill

Use the [`fill`](../../api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs287/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs287/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs287" %}

### Border

Use the [`border`](../../api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs288/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs288/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs288" %}

## Events

### Series render

The [`seriesRender`](../../api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs425/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs425/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs425" %}

### Point render

The [`pointRender`](../../api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs426/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs426/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs426" %}

## Troubleshooting
The following list describes common issues you may encounter when working with the Spline Area series and how to resolve them.

**Chart does not render a spline area:** Confirm the [`type`](../../api/chart/series#type) property of the series is set to `SplineArea`. If `type` is omitted or set to a different value (for example, `Area` or `Spline`), the data is drawn as a straight-edged area or a non-filled spline line. In JavaScript, the `SplineAreaSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Spline curve does not appear smooth or appears jagged:** The smoothness of the spline is determined by the underlying numeric range. If the y-axis range is too narrow relative to data values, the curve compresses and may appear angular. Widen the axis range or scale the data so successive points differ by a small fraction of the range.

**Empty-point mode produces no visible point:** The default [`mode`](../../api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between connected series. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](../../api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Spline chart](./spline)
* [Area chart](./area)
* [Step Area chart](./step-area)