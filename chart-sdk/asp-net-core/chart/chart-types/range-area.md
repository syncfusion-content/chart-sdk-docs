---
layout: post
title: Range Area Chart in ASP.NET Core Charts
description: Learn here all about Range Area Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range Area Chart
publishingplatform: chart-sdk
documentation: ug
---


# Range Area Chart in ASP.NET Core Charts

## Range Area

To render a [range area](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/range-area-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **RangeArea** in your chart configuration. This indicates that the data should be represented as a range area chart, which is ideal for visualizing a range of values for each data point. This type of chart is particularly useful for displaying data that has a range between a minimum and maximum value, such as temperature ranges, stock price ranges, or any other type of data that varies within a specific interval.

* **Provide high and low values:** The RangeArea series requires two y-values for each data point, you need to specify both the high and low values. The high value represents the maximum range, while the low value represents the minimum range for each data point. These values define the upper and lower boundaries of the area for each point on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangearea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea/rangearea.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName`, `high`, and `low` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangearea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea/rangearea.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the range area series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangearea-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea-fill/rangearea-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the range area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rangearea-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/rangearea-grad/rangearea-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/opacity/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/dash-array/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/range-area/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)