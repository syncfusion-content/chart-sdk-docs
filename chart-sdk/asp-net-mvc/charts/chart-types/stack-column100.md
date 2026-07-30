---
layout: post
title: 100% Stacked Column Chart in ASP.NET MVC Charts
description: Learn here all about 100% Stacked Column Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 100% Stacked Column Chart
publishingplatform: chart-sdk
documentation: ug
---


# 100% Stacked Column Chart in ASP.NET MVC Charts

## 100% Stacked Column

To render a [100% stacked column](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/100-stacked-column-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **StackingColumn100** in your chart configuration. This indicates that the data should be represented as a 100% stacked column chart, with segments that show the percentage contribution of each part.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-column100.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100/stacked-column100.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName` and `YName` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-column100.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100/stacked-column100.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `100% stacked column` series.

**Fill**

The `Fill` property determines the color applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-column100-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100-fill/stacked-column100-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `Fill` property can be used to apply a gradient color to the 100% stacked column series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100-grad/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-column100-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stacked-column100-grad/stacked-column100-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `Opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/opacity/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/border/border.cs %}
{% endhighlight %}
{% endtabs %}

## 100% Cylindrical stacked column chart

To render a 100% cylindrical stacked column chart, set the `ColumnFacet` property to **Cylinder** in the chart series. This property transforms the regular 100% stacked columns into cylindrical shapes, enhancing the visual representation of the data.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stackedcolumn100-cylinder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedcolumn100-cylinder.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/stackedcolumn100-cylinder/stackedcolumn100-cylinder.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/empty-border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}



## Corner radius

The [`CornerRadius`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_CornerRadius) property in the chart series is used to customize the corner radius for 100% stacked column series. This allows you to create 100% stacked columns with rounded corners, giving your chart a more polished appearance. You can customize each corner of the 100% stacked columns using the topLeft, topRight, bottomLeft, and bottomRight properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/corner-radius/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Corner-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/corner-radius/corner-radius.cs %}
{% endhighlight %}
{% endtabs %}



### Point corner radius

We can customize the corner radius for individual points in the chart series using the [`PointRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) event by setting the [`CornerRadius`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_CornerRadius) property in its event argument.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/point-corner-radius/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-corner-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/point-corner-radius/point-corner-radius.cs %}
{% endhighlight %}
{% endtabs %}



## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/stacked-column100/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Data Label](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html)
* [Tooltip](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartTooltipSettings.html)