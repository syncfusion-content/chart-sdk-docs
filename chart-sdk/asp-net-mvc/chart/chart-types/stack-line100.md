---
layout: post
title: 100% Stacked Line Chart in ASP.NET MVC Charts
description: Learn here all about 100% Stacked Line Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 100% Stacked Line Chart
publishingplatform: chart-sdk
documentation: ug
---


# 100% Stacked Line Chart in ASP.NET MVC Charts

## 100% Stacked Line

To render a [100% stacked line](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/100-stacked-line-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **StackingLine100** in your chart configuration. This indicates that the data should be represented as a 100% stacked line chart, with each data series shown as a percentage of the total. This chart type ensures that all lines are stacked to always reach 100% at each data point, allowing for easy comparison of the proportional relationships between the series without the influence of absolute values.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line-100/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-line-100.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line-100/stacked-line-100.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName` and `YName` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line-100/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-line-100.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line-100/stacked-line-100.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `100% stacked line` series.

**Fill**

The `Fill` property determines the color applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line100-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-line100-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line100-fill/stacked-line100-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `Fill` property can be used to apply a gradient color to the 100% stacked line series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line100-grad/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-line100-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line100-grad/stacked-line100-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `Opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line100-opacity/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-line100-opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line100-opacity/stacked-line100-opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Dash array**

The `DashArray` property determines the pattern of dashes and gaps in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/dash-array/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

**Width**

The `Width` property specifies the stroke width applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line-100/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-line-100.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/stacked-line-100/stacked-line-100.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/empty-border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-line-100/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)