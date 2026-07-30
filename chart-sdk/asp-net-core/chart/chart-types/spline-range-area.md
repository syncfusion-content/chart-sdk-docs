---
layout: post
title: Spline Range Area Chart in ASP.NET Core Charts
description: Learn here all about Spline Range Area Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Spline Range Area Chart
publishingplatform: chart-sdk
documentation: ug
---


# Spline Range Area Chart in ASP.NET Core Charts

## Spline Range Area

To render a [spline range area](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/spline-range-area-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **SplineRangeArea** in your chart configuration. This indicates that the data should be represented as a spline range area chart, which is ideal for visualizing continuous data points as a set of splines that vary between high and low values over intervals of time and across different categories.

* **Provide high and low values:** The SplineRangeArea series requires two y-values for each data point, you need to specify both the high and low values. The high value represents the maximum range, while the low value represents the minimum range for each data point. These values define the upper and lower boundaries of the area for each point on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/splinerangearea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Splinerangearea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/splinerangearea/splinerangearea.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName`, `high`, and `low` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/splinerangearea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Splinerangearea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/splinerangearea/splinerangearea.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `spline range area` series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/range-spline-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Range-spline-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/range-spline-fill/range-spline-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the spline range area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/range-spline-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Range-spline-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/range-spline-grad/range-spline-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/opacity/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/dash-array/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is Gap.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/spline-range/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)