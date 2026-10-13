---
layout: post
title: Waterfall Chart in JavaScript Charts | Syncfusion
description: Learn here all about Waterfall in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# Waterfall Chart in JavaScript Charts

## Waterfall Chart

To render a `waterfall` series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `Waterfall` in your chart configuration. This indicates that the data should be represented as a waterfall chart, which helps illustrate the cumulative effect of sequentially introduced positive and negative values.

The control is initialized with the remaining configuration in the next step. In JavaScript, the `WaterfallSeries` and `Category` modules are loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

* **Configure intermediate and cumulative sums**: Use the [`intermediateSumIndexes`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#intermediatesumindexes) property to represent intermediate sum values, and the [`sumIndexes`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#sumindexes) property to represent cumulative sum values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs160/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs160/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs160" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs394/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs394/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs394" %}

## Series customization

In waterfall charts, you can customize the appearance of different types of data changes using specific properties. The [`negativeFillColor`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#negativefillcolor) property sets the color for negative (decrease) values, and the [`summaryFillColor`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#summaryfillcolor) property sets the color for summary (intermediate and total) values. The defaults are `#C64E4A` (red) for negative and `#4E81BC` (blue) for summary.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs161/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs161/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs161" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs395/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs395/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs395" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs396/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs396/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs396" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs397/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs397/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs397" %}

## Corner radius

The [`cornerRadius`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#cornerradius) property in the chart series is used to customize the corner radius for bar series. This allows you to create bars with rounded corners. You can customize each corner of the bars using the `topLeft`, `topRight`, `bottomLeft`, and `bottomRight` properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs458A/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs458A/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs458A" %}

### Point corner radius

You can customize the corner radius for individual points in the chart series using the [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iPointRenderEventArgs) event by setting the [`cornerRadius`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iPointRenderEventArgs#cornerradius) property in its event argument.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs458B/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs458B/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs458B" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs457/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs457/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs457" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs458/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs458/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs458" %}

## Troubleshooting
The following list describes common issues you may encounter when working with the Waterfall series and how to resolve them.

**Chart does not render as a waterfall:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of each series is set to `Waterfall`. In JavaScript, the `WaterfallSeries` and `Category` modules are loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Intermediate or cumulative sums do not appear:** [`intermediateSumIndexes`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#intermediatesumindexes) and [`sumIndexes`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#sumindexes) accept arrays of point indexes. Verify that each index references a valid point in the data source; indexes that are out of range or that point to summary points already declared by the other property are ignored.

**Negative or summary colors look wrong:** The default [`negativeFillColor`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#negativefillcolor) is `#C64E4A` (red) and [`summaryFillColor`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#summaryfillcolor) is `#4E81BC` (blue). Set them explicitly to override the defaults.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Column chart](./column)
* [Stacking Column chart](./stack-column)
* [Bar chart](./bar)