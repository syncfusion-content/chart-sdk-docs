---
layout: post
title: Radar Chart in ASP.NET Core Charts
description: Learn here all about Radar Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Radar Chart
publishingplatform: chart-sdk
documentation: ug
---


# Radar Chart in ASP.NET Core Charts

To get started with the ASP.NET Core Radar charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=cwIaOclRzwY" %}

## Radar

To render a [radar](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/radar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

**Set the series type:** Define the series `type` as **Radar** in your chart configuration. This indicates that the data should be represented as a radar chart, which is ideal for plotting data points on a circular grid.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radar-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Radar-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radar-line/radar-line.cs %}
{% endhighlight %}
{% endtabs %}

### Draw type

Similar to the polar chart, use the `drawType` property to change the series plotting type in a Radar chart to line, column, area, range column, spline, scatter, stacking area, spline area, or stacking column. The default value of `drawType` is **Line**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radar-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Radar-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radar-line/radar-line.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radar-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Radar-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radar-line/radar-line.cs %}
{% endhighlight %}
{% endtabs %}

## Customization

### Start angle

You can customize the start angle of the radar series using `startAngle` property. By default, startAngle is 0 degree.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/start-angle/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Start-angle.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/start-angle/start-angle.cs %}
{% endhighlight %}
{% endtabs %}

### Radius

You can customize the radius of the radar series using `coefficient` property. By default, `coefficient` is **100**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/radius/radius.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/radar/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)