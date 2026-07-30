---
layout: post
title: Polar Chart in ASP.NET Core Charts
description: Learn here all about Polar Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Polar Chart
publishingplatform: chart-sdk
documentation: ug
---


# Polar Chart in ASP.NET Core Charts

To get started with the ASP.NET Core Polar charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=cwIaOclRzwY" %}

## Polar chart

To render a [polar](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/polar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **Polar** in your chart configuration. This indicates that the data should be represented as a polar chart, which is ideal for plotting data points on a circular graph.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-line/polar-line.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-line/polar-line.cs %}
{% endhighlight %}
{% endtabs %}

## Draw types

Use the `drawType` property to change the series plotting type in a Polar chart to line, column, area, range column, spline, scatter, stacking area, spline area, or stacking column. The default value of `drawType` is **Line**.

### Line

To render a line draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **Line** in your chart configuration. This indicates that the data should be represented as a polar line chart, with lines connecting each data point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-line/polar-line.cs %}
{% endhighlight %}
{% endtabs %}

### Spline

To render a spline draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **Spline** in your chart configuration. This indicates that the data should be represented as a polar spline chart, with smooth, curved lines connecting each data point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-spline/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-spline.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-spline/polar-spline.cs %}
{% endhighlight %}
{% endtabs %}

### Area

To render an area draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **Area** in your chart configuration. This indicates that the data should be represented as a polar area chart, with filled areas below the lines connecting each data point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-area/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-area.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-area/polar-area.cs %}
{% endhighlight %}
{% endtabs %}

### Stacked Area

To render a stacked area draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **StackingArea** in your chart configuration. This indicates that the data should be represented as a polar stacked area chart, with areas stacked on top of each other, displaying the cumulative value of multiple series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-stackedarea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-stackedarea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-stackedarea/polar-stackedarea.cs %}
{% endhighlight %}
{% endtabs %}

### Column

To render a column draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **Column** in your chart configuration. This indicates that the data should be represented as a polar column chart, allowing for the comparison of values across categories.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-column/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-column.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-column/polar-column.cs %}
{% endhighlight %}
{% endtabs %}

### Stacked Column

To render a stacked column draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **StackingColumn** in your chart configuration. This indicates that the data should be represented as a polar stacked column chart, with each column consisting of multiple segments stacked on top of each other.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-stackedcolumn/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-stackedcolumn.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-stackedcolumn/polar-stackedcolumn.cs %}
{% endhighlight %}
{% endtabs %}

### Range Column

To render a range column draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **RangeColumn** in your chart configuration. This indicates that the data should be represented as a polar range column chart, where each column spans a range of values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-rangecolumn/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-rangecolumn.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-rangecolumn/polar-rangecolumn.cs %}
{% endhighlight %}
{% endtabs %}

### Scatter

To render a scatter draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **Scatter** in your chart configuration. This indicates that the data should be represented as a polar scatter chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-scatter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-scatter.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-scatter/polar-scatter.cs %}
{% endhighlight %}
{% endtabs %}

### Spline area

To render an spline area draw type, you need to follow a few steps to configure it correctly.

**Set the series type:** Define the series `drawType` as **SplineArea** in your chart configuration. This indicates that the data should be represented as a polar spline area chart, where the series is drawn with smooth, curved lines connecting each data point, and the area beneath the line is filled with color.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-splinearea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Polar-splinearea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/polar-splinearea/polar-splinearea.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

### Start Angle

You can customize the start angle of the polar series using startAngle property. By default, `startAngle` is **0** degree.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/start-angle/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Start-angle.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/start-angle/start-angle.cs %}
{% endhighlight %}
{% endtabs %}

### Radius

You can customize the radius of the polar series using `coefficient` property. By default, `coefficient` is **100**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/co-efficient/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Co-efficient.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/co-efficient/co-efficient.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/polar-radar/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)