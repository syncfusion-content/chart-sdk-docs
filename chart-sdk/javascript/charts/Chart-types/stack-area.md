---
layout: post
title: Stacked Area Chart in JavaScript Charts | Syncfusion
description: Learn here all about Stacked area in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Stacked Area Chart in JavaScript Charts

## Stacked Area

To render a [stacked area](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/stacked-area-chart) series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `StackingArea` in your chart configuration. This indicates that the data should be represented as a stacked area chart, which is ideal for showing the contribution of each part to a total over time or across other categorical dimensions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs135/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs135/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs135" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs237/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs237/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs237" %}

## Series customization

The following properties can be used to customize the `StackingArea` series.

### Solid fill

The [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs136/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs136/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs136" %}

### Gradient fill

The [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#fill) property also applies an SVG gradient to a stacked area series. Define the gradient within an SVG `<defs>` element using a unique ID, and assign it to the series in the `url(#gradientId)` format. This produces a smooth color transition across the stacked bands, useful for emphasizing the contribution of each layer to the total.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs238/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs238/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs238" %}

### Opacity

The [`opacity`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs239/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs239/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs239" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#border) property to configure the border width, color, and dash array of the stacked area series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs240/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs240/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs240" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs241/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs241/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs241" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs242/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs242/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs242" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs243/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs243/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs243" %}

## Stack labels

The stack labels in stacked charts display cumulative total values for stack segments directly using data labels. Configure the [`stackLabels`](https://ej2.syncfusion.com/javascript/documentation/api/chart#stackLabels) on the chart to enable and customize these labels. If a stacked point has negative values, the stack labels are displayed below the point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs491/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs491/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs491" %}

### Stack labels customization

Stack labels expose the following properties for customization:

* [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#visible) - Specifies whether stack labels are visible. Setting to true will display the labels. Default is false.
* [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#fill) - Defines the background color of the stack labels. Accepts valid CSS color strings (hex, RGBA, etc.). Default is transparent.
* [`format`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#format) - Formats the text displayed in the stack labels. Supports placeholders like {value}. Default is null.
* [`angle`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#angle) - Specifies the rotation angle for stack labels in degrees. Default is 0.
* [`rx`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#rx) - Defines the rounded corner radius along the X-axis (horizontal direction) for the stack label background. Default is 5.
* [`ry`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#ry) - Defines the rounded corner radius along the Y-axis (vertical direction) for the stack label background. Default is 5.
* [`margin`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#margin) - Configures the margin around the stack label (left, right, top, and bottom).
* [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#border) - Configures the appearance of the stack label's border.
* [`font`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#font) - Customizes the stack label text, including font size, color, style, weight, and family.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs491A/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs491A/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs491A" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs413/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs413/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs413" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs414/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs414/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs414" %}

## Troubleshooting
The following list describes common issues you may encounter when working with the Stacked Area series and how to resolve them.

**Chart does not render a stacked area:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of each series is set to `StackingArea`. If `type` is omitted or set to a different value (for example, `Area`), the data is drawn as overlapping (non-stacked) area bands. In JavaScript, the `StackingAreaSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Stacked values do not sum or look misaligned:** In stacked series, each successive series contributes to the cumulative total by being rendered above the previous series. Confirm that each series uses a unique `yName` (or series-specific data field) and that all series share the same `xName`; otherwise, points fall out of order and the bands misalign.

**Stack labels do not appear:** Stack labels are off by default. Set [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stackLabelSettings#visible) to `true` on [`stackLabels`](https://ej2.syncfusion.com/javascript/documentation/api/chart#stackLabels) to render the cumulative totals above each x-position. Negative values are automatically rendered below the point.

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between segments. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Area chart](./area)
* [100% Stacked Area chart](./stack-area-100)
* [Stacked Column chart](./stack-column)