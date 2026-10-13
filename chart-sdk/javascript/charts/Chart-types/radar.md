---
layout: post
title: Radar Chart in JavaScript Charts | Syncfusion
description: Learn here all about Radar in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# Radar Chart in JavaScript Charts

## Radar Chart

To render a [radar](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/radar-chart) series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) as `Radar` in your chart configuration. This indicates that the data should be represented as a radar chart, which is ideal for plotting data points on a circular grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs370/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs370/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs370" %}

## Draw types

Use the [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#drawtype) property to change the series plotting type in a Radar chart to line, column, area, range column, spline, scatter, stacking area, spline area, or stacking column. The default value of `drawType` is `Line`.

### Line

To render a line draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#drawtype) as `Line` in your chart configuration. This indicates that the data should be represented as a radar line chart, with lines connecting each data point.

The [`isClosed`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#isclosed) property specifies whether to join the start and end points of a line or area series used in a polar or radar chart to form a closed path. The default value of `isClosed` is true. This property applies only when the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#drawtype) is `Line`, `Spline`, `Area`, or `SplineArea`; it is ignored for other draw types.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs118/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs118/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs118" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs367/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs367/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs367" %}

## Series customization

The following properties can be used to customize the radar series.

### Start angle

You can customize the start angle of the radar series using [`startAngle`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#startangle) property. The value is expressed in **degrees** (0–360, where 0 is the 12 o'clock position). By default, `startAngle` is 0 degrees.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs119/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs119/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs119" %}

### Radius

You can customize the radius of the radar series using [`coefficient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs120/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs120/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs120" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs364/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs364/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs364" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points. Note that the series `marker` must be visible for the empty-point fill to be rendered.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs365/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs365/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs365" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs366/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs366/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs366" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs447/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs447/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs447" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs448/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs448/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs448" %}

## Troubleshooting

The following entries describes common issues you may encounter when working with the Radar series and how to resolve them.

**Chart does not render a radar series:** Confirm the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#type) property of the series is set to `Radar`. If `type` is omitted or set to a different value (for example, `Line`), the data is drawn on a Cartesian axis. In JavaScript, the `RadarSeries` module is loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**`isClosed` has no visible effect:** The [`isClosed`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#isclosed) property applies only when the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#drawtype) is `Line`, `Spline`, `Area`, or `SplineArea`. It is ignored for `Column`, `Scatter`, and other draw types.

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between connected series. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Polar chart](./polar)
* [Line chart](./line)
