---
layout: post
title: Range Step Area Chart in JavaScript Charts | Syncfusion
description: Learn here all about Range Step Area in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Range Step Area Chart in JavaScript Charts

## Range Step Area

To render a range step area series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `RangeStepArea` in your chart configuration. This indicates that the data should be represented as a range step area chart, which is ideal for displaying data points as a range with high and low values. It connects these points with vertical and horizontal lines, creating a step like appearance.

* **Provide high and low values**: The `RangeStepArea` series requires two y-values for each data point, you need to specify both the high and low values. The high value represents the maximum range, while the low value represents the minimum range for each data point. These values define the upper and lower boundaries of the area for each point on the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs125/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs125/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs125" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#high), and [`low`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#low) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs258/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs258/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs258" %}

## Series customization

The following properties can be used to customize the `Range Step Area` series.

### Solid fill

The [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs126/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs126/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs126" %}

### Gradient fill

The [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#fill) property also applies an SVG gradient to a range step area series. Define the gradient within an SVG `<defs>` element using a unique ID, and assign it to the series in the `url(#gradientId)` format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs259/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs259/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs259" %}

### Opacity

The [`opacity`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs260/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs260/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs260" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#border) property to configure the border width, color, and dash array of the range step area series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs261/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs261/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs261" %}

### Step

Use the [`step`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#step) property to change the position of the steps in a range step area series. Available positions are `Left`, `Center`, and `Right`. Default value is `Left`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs262/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs262/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs262" %}

### No risers

You can eliminate the vertical lines between points by using the [`noRisers`](../api/chart/seriesModel#norisers) property in a series. This approach is useful for highlighting trends without the distraction of risers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/rangestepareariser-cs/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/rangestepareariser-cs/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/rangestepareariser-cs" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control how empty points are handled. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs263/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs263/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs263" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points. Note that the series `marker` must be visible for the empty-point fill to be rendered.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs264/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs264/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs264" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs265/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs265/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs265" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs419/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs419/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs419" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs420/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs420/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs420" %}

## Troubleshooting
The following list describes common issues you may encounter when working with the Range Step Area series and how to resolve them.

**Chart does not render a range step area:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of the series is set to `RangeStepArea`. If `type` is omitted or set to a different value (for example, `StepArea` or `Line`), the data is drawn as a regular step area or line. In JavaScript, the `RangeStepAreaSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between connected series. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

**Data does not appear at the expected x position:** Confirm the data item fields match the series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#high), and [`low`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#low) values. Mismatched or missing field names silently produce empty or collapsed bands.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Step Line chart](./step-line)
* [Step Area chart](./step-area)
* [Range Area chart](./range-area)