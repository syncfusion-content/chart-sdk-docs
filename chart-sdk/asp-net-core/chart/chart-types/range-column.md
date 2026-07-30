---
layout: post
title: Range Column Chart in ASP.NET Core Charts
description: Learn here all about Range Column Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range Column Chart
publishingplatform: chart-sdk
documentation: ug
---


# Range Column Chart in ASP.NET Core Charts

## Range Column

To render a [range column](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/range-column-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **RangeColumn** in your chart configuration. This indicates that the data should be represented as a range column chart, which is ideal for visualizing data that has both minimum and maximum values for each category. This is especially useful for visualizing data ranges, such as temperature fluctuations over time, stock prices, or any other data with upper and lower bounds.

* **Provide high and low values:** The RangeColumn series requires two y-values for each data point, you need to specify both the high and low values. The high value represents the maximum range, while the low value represents the minimum range for each data point. These values define the upper and lower boundaries of the column for each point on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangecolumn.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn/rangecolumn.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName`, `high`, and `low` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangecolumn.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn/rangecolumn.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `range column` series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangecolumn-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn-fill/rangecolumn-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the range column series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangecolumn-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/rangecolumn-grad/rangecolumn-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/opacity/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/border/border.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}



## Corner radius

The [`CornerRadius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_CornerRadius) property in the chart series is used to customize the corner radius for range column series. This allows you to create range columns with rounded corners, giving your chart a more polished appearance. You can customize each corner of the range columns using the topLeft, topRight, bottomLeft, and bottomRight properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/corner-radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Corner-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/corner-radius/corner-radius.cs %}
{% endhighlight %}
{% endtabs %}



### Point corner radius

We can customize the corner radius for individual points in the chart series using the [`PointRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) event by setting the [`CornerRadius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_CornerRadius) property in its event argument.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/point-corner-radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-corner-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/point-corner-radius/point-corner-radius.cs %}
{% endhighlight %}
{% endtabs %}



## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-column/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)