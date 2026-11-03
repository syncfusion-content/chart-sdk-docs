---
layout: post
title: High Low Open Close Chart in JavaScript Charts | Syncfusion
description: Learn here all about High Low Open Close in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# High Low Open Close Chart in JavaScript Charts

## High Low Open Close

The High Low Open Close series displays the highest, lowest, opening, and closing prices for each data point using vertical tick marks. Use it to visualize OHLC (open-high-low-close) stock data without the body rectangles of a Candle chart.
 
To render a [`HiloOpenClose`](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/ohlc-chart) series, configure the chart as follows:

* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `HiloOpenClose`. Renders the data as a High Low Open Close chart, showing the high, low, open, and close prices for each period to visualize stock price movements over time.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs99/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs99/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs99" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#high), [`low`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#low), [`open`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#open) and [`close`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#close) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs374/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs374/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs374" %}

## Series customization

In the `HiloOpenClose` series, use `bullFillColor` to control the segment fill when the open value is greater than the close value, and `bearFillColor` to control the segment fill when the open value is less than the close value. By default, `bullFillColor` is `#e74c3d` and `bearFillColor` is `#2ecd71`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs100/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs100/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs100" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are handled according to the configured [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode).

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control how empty points are rendered. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs377/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs377/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs377" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs378/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs378/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs378" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs451/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs451/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs451" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs452/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs452/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs452" %}

## Troubleshooting

The following list describes common issues you may encounter when working with the High Low Open Close series and how to resolve them.

**Chart does not render tick marks:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of the series is set to `HiloOpenClose`. In JavaScript, the `HiloOpenCloseSeries` and `Category` modules are loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Field mappings produce empty OHLC ticks:** Confirm the data item fields match the series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#high), [`low`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#low), [`open`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#open), and [`close`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#close) values. Mismatched field names silently produce empty points.

**Bull and bear colors do not swap as expected:** Confirm that `bullFillColor` and `bearFillColor` are set on the series configuration and that the data fields mapped to `open` and `close` are numeric. The color swap is determined by comparing these two fields per data point.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args` object (for example, `args.fill`) inside the handler; setting properties on the series object directly is overwritten during rendering.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Candle chart](candle)
* [Box and whisker chart](box-and-whisker)