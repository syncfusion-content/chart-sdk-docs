---
layout: post
title: Waterfall Chart in ASP.NET Core Charts
description: Learn here all about Waterfall Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Waterfall Chart
publishingplatform: chart-sdk
documentation: ug
---


# Waterfall Chart in ASP.NET Core Charts

## Waterfall

To render a `waterfall` series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **Waterfall** in your chart configuration. This indicates that the data should be represented as a waterfall chart, which helps illustrate the cumulative effect of sequentially introduced positive and negative values.

* **Configure intermediate and cumulative sums:** Use the `intermediateSumIndexes` property to represent intermediate sum values, and the `sumIndexes` property to represent cumulative sum values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/waterfall/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Waterfall.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/waterfall/waterfall.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/waterfall/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Waterfall.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/waterfall/waterfall.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

In waterfall charts, you can customize the appearance of different types of data changes using specific properties. The `negativeFillColor` property is used to specify the color for negative changes, which helps visually distinguish decreases in the data. Similarly, the `summaryFillColor` property is used to define the color for summary changes. By default, the `negativeFillColor` is set to **green**, indicating decreases, while the `summaryFillColor` is set to **black**, marking summary or total values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/custom-waterfall/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-waterfall.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/custom-waterfall/custom-waterfall.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}



## Corner radius

The [`CornerRadius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_CornerRadius) property in the chart series is used to customize the corner radius for waterfall series. This allows you to create waterfalls with rounded corners, giving your chart a more polished appearance. You can customize each corner of the waterfalls using the topLeft, topRight, bottomLeft, and bottomRight properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/corner-radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Corner-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/corner-radius/corner-radius.cs %}
{% endhighlight %}
{% endtabs %}



### Point corner radius

We can customize the corner radius for individual points in the chart series using the [`PointRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) event by setting the [`CornerRadius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_CornerRadius) property in its event argument.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/point-corner-radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-corner-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/point-corner-radius/point-corner-radius.cs %}
{% endhighlight %}
{% endtabs %}



## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/waterfall/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)