---
layout: post
title: Spline Chart in ASP.NET MVC Charts
description: Learn here all about Spline Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Spline Chart
publishingplatform: chart-sdk
documentation: ug
---


# Spline Chart in ASP.NET MVC Charts

## Spline

To render a [spline](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/spline-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **Spline** in your chart configuration. This indicates that the series should be represented as a smooth curve, connecting data points with a spline rather than straight lines.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spline.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline/spline.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName` and `YName` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spline.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline/spline.cs %}
{% endhighlight %}
{% endtabs %}

## Spline type

Use the `SplineType` to define the type of the spline series. The default type is **Natural**, which creates a smooth curve through the data points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/splinetype/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Splinetype.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/splinetype/splinetype.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `spline` series.

**Fill**

The `Fill` property determines the color applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spline-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline-fill/spline-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `Fill` property can be used to apply a gradient color to the spline series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline-grad/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spline-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline-grad/spline-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `Opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/custom-spline/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-spline.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/custom-spline/custom-spline.cs %}
{% endhighlight %}
{% endtabs %}

**Dash array**

The `DashArray` property determines the pattern of dashes and gaps in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/dash-array/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

**Width**

The `Width` property specifies the stroke width applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline-width/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spline-width.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/spline-width/spline-width.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/empty-border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/spline/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)