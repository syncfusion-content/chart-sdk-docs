---
layout: post
title: Stacked Area Chart in JavaScript Charts | Syncfusion
description: Learn here all about Stacked Area in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# Stacked Area Chart in JavaScript Charts

## 100% Stacked Area

To render a [100% stacked area](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/100-stacked-area-chart) series in your chart, follow the steps below:

* **Set the series type**: Define the series [`type`](../../api/chart/series#type) as `StackingArea100` in your chart configuration. This indicates that the data should be represented as a 100% stacked area chart, where the cumulative values for each data point are expressed as a percentage of the total. This ensures that the sum of all series at each point is always 100%.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs145/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs145/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs145" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](../../api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](../../api/chart/series#xname) and [`yName`](../../api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs244/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs244/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs244" %}

## Series customization

The following properties can be used to customize the `StackingArea100` series.

### Solid fill

The [`fill`](../../api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs146/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs146/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs146" %}

### Gradient fill

The [`fill`](../../api/chart/series#fill) property also applies an SVG gradient to a 100% stacked area series. Define the gradient within an SVG `<defs>` element using a unique ID, and assign it to the series in the `url(#gradientId)` format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs245/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs245/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs245" %}

### Opacity

The [`opacity`](../../api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs246/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs246/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs246" %}

### Border

Use the [`border`](../../api/chart/series#border) property to configure the border width, color, and dash array of the 100% stacked area series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs247/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs247/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs247" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](../../api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](../../api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs248/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs248/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs248" %}

### Fill

Use the [`fill`](../../api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs249/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs249/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs249" %}

### Border

Use the [`border`](../../api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs250/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs250/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs250" %}

## Events

### Series render

The [`seriesRender`](../../api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs415/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs415/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs415" %}

### Point render

The [`pointRender`](../../api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs416/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs416/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs416" %}

## Troubleshooting
The following list describes common issues you may encounter when working with the 100% Stacked Area series and how to resolve them.

**Chart does not render a 100% stacked area:** Confirm the [`type`](../../api/chart/series#type) property of each series is set to `StackingArea100`. If `type` is omitted or set to a different value (for example, `StackingArea`), the data is drawn as overlapping (non-normalized) bands. In JavaScript, the `StackingAreaSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Bands do not normalize to 100%:** 100% stacked series render each x-position as 100% of all contributing values. If percentages do not sum to 100, verify that each series shares the same `xName` and that the input data is non-negative. Negative values are not normalized and will produce inconsistent percentages.

**Empty-point mode produces no visible point:** The default [`mode`](../../api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between the stacked bands. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](../../api/chart/emptyPointSettings#fill) on `emptyPointSettings`, otherwise the percentage may collapse locally.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Area chart](./area)
* [Stacked Area chart](./stack-area)
* [100% Stacked Column chart](./stacked-column)