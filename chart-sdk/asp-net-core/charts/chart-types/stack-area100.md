---
layout: post
title: 100% Stacked Area Chart in ASP.NET Core Charts
description: Learn here all about 100% Stacked Area Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 100% Stacked Area Chart
publishingplatform: chart-sdk
documentation: ug
---


# 100% Stacked Area Chart in ASP.NET Core Charts

## 100% Stacked Area Chart

To render a [100% stacked area](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/100-stacked-area-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **StackingArea100** in your chart configuration. This indicates that the data should be represented as a 100% stacked area chart, where the cumulative values for each data point are expressed as a percentage of the total. This ensures that the sum of all series at each point is always 100%.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stackedarea100/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedarea100.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stackedarea100/stackedarea100.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stackedarea100/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedarea100.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stackedarea100/stackedarea100.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `100% stacked area` series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stacked-area100-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-area100-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stacked-area100-fill/stacked-area100-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the 100% stacked area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/stacked-area100-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-area100-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/Stacked-area100-grad/stacked-area100-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/opacity/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/dash-array/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-area-100/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)