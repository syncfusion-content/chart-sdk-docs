---
layout: post
title: Histogram Chart in JavaScript Charts | Syncfusion
description: Learn here all about Histogram in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Histogram Chart in JavaScript Charts

## Histogram

To render a [Histogram](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/histogram-chart) series in your chart, configure the chart as follows:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `Histogram` in your chart configuration. Renders the data as a Histogram chart, which groups numeric values into bins along the x-axis and displays the frequency distribution of the dataset.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs103/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs103/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs103" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs459/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs459/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs459" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs460/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs460/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs460" %}

## Troubleshooting

The following list describes common issues you may encounter when working with the Histogram series and how to resolve them.

**Chart does not render bars:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of the series is set to `Histogram`. In JavaScript, the `HistogramSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Bins produce unexpected distribution:** Confirm the data item field mapped to [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) is numeric and that the x-axis [`minimum`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#minimum) and [`maximum`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#maximum) cover the full data range. Values outside the axis range are excluded from the binning.

**Normal distribution curve does not appear:** Confirm [`showNormalDistribution`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#shownormaldistribution) is set to `true` on the series. The curve is computed from the sample mean and standard deviation; highly skewed or sparse data may produce a flat or near-zero curve.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args` object (for example, `args.fill`) inside the handler; setting properties on the series object directly is overwritten during rendering.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)