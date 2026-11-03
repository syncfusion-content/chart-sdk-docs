---
layout: post
title: Pareto Chart in JavaScript Charts | Syncfusion
description: Learn here all about Pareto in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Pareto Chart in JavaScript Charts

## Pareto

The Pareto series visualizes the 80/20 principle by sorting categories in descending order by value and overlaying a cumulative percentage line. Use it to identify the few categories that contribute the majority of an effect (defects, complaints, costs, and so on).

To render a `Pareto` series in your chart, configure the series as follows:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `Pareto`. Renders the data as a Pareto chart, which uses a combination of column and line series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs107/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs107/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs107" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs386/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs386/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs386" %}

## Pareto customization

The following properties can be used to customize the `Pareto` series.

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#fill) property to apply a color to the Pareto line. By default, a color based on the active theme is used.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs173/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs173/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs173" %}

### Width

Use the [`width`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#width) property to control the thickness of the line for the pareto series, which affects its visual weight on the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs387/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs387/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs387" %}

### Dash array

The [`dashArray`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#dasharray) property determines the pattern of dashes and gaps in the Pareto line series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs388/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs388/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs388" %}

### Marker

Use the [`marker`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#marker) property to display and customize markers for individual points in a pareto line.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs389/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs389/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs389" %}

### Show axis

Use the [`showAxis`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#showaxis) property to show or hide the secondary axis for the pareto series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs390/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs390/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs390" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are handled according to the configured [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode).

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control how empty points are rendered. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs391/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs391/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs391" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs392/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs392/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs392" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs393/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs393/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs393" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs465/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs465/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs465" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs466/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs466/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs466" %}

## Troubleshooting

The following list describes common issues you may encounter when working with the Pareto series and how to resolve them.

**Chart does not render the line or column series:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of the series is set to `Pareto`. In JavaScript, the `ParetoSeries`, `ColumnSeries`, `LineSeries`, and `Category` modules are loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Pareto line color does not change:** Confirm the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#fill) property is set on the `paretoOptions` configuration object (not on the series root). The line color is controlled independently of the column color.

**Secondary axis does not appear or is hidden unexpectedly:** Confirm the [`showAxis`](https://ej2.syncfusion.com/javascript/documentation/api/chart/paretoOptions#showaxis) property on `paretoOptions` is set to `true` (or `false` to hide). The secondary axis is required to display the cumulative percentage scale.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args` object (for example, `args.fill`) inside the handler; setting properties on the series object directly is overwritten during rendering.

**Data does not appear at the expected x position:** Confirm the data item fields match the series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) values. Mismatched field names silently produce empty points.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Column chart](./column)
* [Line chart](./line)