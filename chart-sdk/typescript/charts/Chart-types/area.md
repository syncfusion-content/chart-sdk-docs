---
layout: post
title: Area Chart in TypeScript Charts | Syncfusion
description: Learn here all about Area in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Area 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# Area Chart in TypeScript Charts

## Area

To render an [area](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/area-chart) series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) as `Area` in your chart configuration. This renders the data as an area chart, which is ideal for showing trends over time or across categories, with a filled area beneath the data line.

* **Inject the AreaSeries module**: Use the `Chart.Inject(AreaSeries)` method to inject the `AreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering area series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs73/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs73/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs73/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs73" %}

## Binding data with series

You can bind data to the chart by assigning a JSON array (or a remote data source resolved through a data adapter) to the series [`dataSource`](https://ej2.syncfusion.com/documentation/api/chart/series#datasource) property. To render that data correctly, map the fields from each data item to the series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/documentation/api/chart/series#yname) properties in the series configuration.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs223/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs223/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs223/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs223" %}

## Series customization

The following properties can be used to customize the `area` series.

### Solid fill

The [fill](https://ej2.syncfusion.com/documentation/api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs75/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs75/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs75/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs75" %}

### Gradient fill

The [`fill`](https://ej2.syncfusion.com/documentation/api/chart/series#fill) property applies an SVG gradient to an area series. Define the gradient within an SVG `<defs>` element using a unique ID, and assign it to the series in the `url(#gradientId)` format.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs224/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs224/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs224/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs224" %}

### Opacity

The [opacity](https://ej2.syncfusion.com/documentation/api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs225/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs225/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs225/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs225" %}

## Area border

Use the [`border`](https://ej2.syncfusion.com/documentation/api/chart/series#border) property to configure the border width and color, and dash array of the area series. Border sub-properties include [`border.color`](https://ej2.syncfusion.com/documentation/api/chart/border#color), [`border.width`](https://ej2.syncfusion.com/documentation/api/chart/border#width) and [`border.dashArray`](https://ej2.syncfusion.com/documentation/api/chart/border#dasharray).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs76/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs76/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs76/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs76" %}

## Multicolored area

To render a multicolored area series in your chart, configure the series as follows:

* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) as `MultiColoredArea` in your chart configuration. This specifies that the series should be rendered as a multicolored area chart, with different segments of the area having distinct colors.

* **Inject the MultiColoredAreaSeries module**: Use the `Chart.Inject(MultiColoredAreaSeries)` method to inject the `MultiColoredAreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering the MultiColored Area series are available.

* **Customize the segments**: Define the segments of the series using the [`segments`](https://ej2.syncfusion.com/documentation/api/chart/series#segments) property along with the [`segmentAxis`](https://ej2.syncfusion.com/documentation/api/chart/series#segmentaxis) property set to `X` or `Y` to indicate the axis the segment `value` is measured against. Each segment can be customized with the following properties:
   * [value](https://ej2.syncfusion.com/documentation/api/chart/chartSegmentModel#value) - Specifies the starting point of the segment along the configured `segmentAxis`.
   * [color](https://ej2.syncfusion.com/documentation/api/chart/chartSegmentModel#color) - Defines the color of the segment.
   * [dashArray](https://ej2.syncfusion.com/documentation/api/chart/chartSegmentModel#dasharray) - Defines the pattern of dashes and gaps for the segment stroke.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs74/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs74/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs74/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs74" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) property to control how empty points are handled. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs227/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs227/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs227/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs227" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs228/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs228/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs228/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs228" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs229/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs229/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs229/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs229" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs409/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs409/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs409/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs409" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs410/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs410/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs410/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs410" %}

## Troubleshooting

The following entries describes common issues you may encounter when working with the Area series and how to resolve them.

**Chart does not render an area shape:** Confirm the [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) property of the series is set to `Area` (or `MultiColoredArea` for a multicolored area). If `type` is omitted or set to a different value (for example, `Line`), the data is drawn as a line. In JavaScript, the `AreaSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between connected series. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args` object (for example, `args.fill`) inside the handler; setting properties on the series object directly is overwritten during rendering.

**Data does not appear at the expected x position:** Confirm the data item fields match the series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/documentation/api/chart/series#yname) values. Mismatched field names silently produce empty points.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Line chart](./line)
* [Step Area chart](./step-area)
* [Spline Area chart](./spline-area)