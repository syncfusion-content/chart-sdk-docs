---
layout: post
title: Pareto Chart in ASP.NET MVC Charts
description: Learn here all about Pareto Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pareto Chart
publishingplatform: chart-sdk
documentation: ug
---


# Pareto Chart in ASP.NET MVC Charts

## Pareto

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of **Column** and **Line** series, where the initial values are represented by the column chart and the cumulative values are represented by the line chart.

To render a **pareto** series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

**Set the series type:** Define the series `Type` as **Pareto** in your chart configuration. This indicates that the data should be represented as a pareto chart, will use a combination of column and line series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pareto.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto/pareto.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName` and `YName` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pareto.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto/pareto.cs %}
{% endhighlight %}
{% endtabs %}

## Pareto customization

## Fill

Use the `Fill` property to apply a color to the pareto line. By default, a color based on the theme is used.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pareto-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto-fill/pareto-fill.cs %}
{% endhighlight %}
{% endtabs %}

### Width

Use the `Width` property to control the thickness of the line for the pareto series, which affects its visual weight on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto-width/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pareto-width.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/pareto-width/pareto-width.cs %}
{% endhighlight %}
{% endtabs %}

### Dash array

The `DashArray` property determines the pattern of dashes and gaps in the pareto line series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/dasharray/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dasharray.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/dasharray/dasharray.cs %}
{% endhighlight %}
{% endtabs %}

### Marker

Use the `Marker` property to display and customize markers for individual points in a pareto line.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/marker/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Marker.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/marker/marker.cs %}
{% endhighlight %}
{% endtabs %}

### Show axis

Use the `ShowAxis` property to show or hide the secondary axis for the pareto series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/showaxis/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Showaxis.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/showaxis/showaxis.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/empty-border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/pareto/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}
## See also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)