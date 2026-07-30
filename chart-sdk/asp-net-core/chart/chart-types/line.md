---
layout: post
title: Line Chart in ASP.NET Core Charts
description: Learn here all about Line Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Line Chart
publishingplatform: chart-sdk
documentation: ug
---


# Line Chart in ASP.NET Core Charts

## Line

To render a [line](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/line-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

   * **Set the series type:** Define the series `type` as **Line** in your chart configuration. This indicates that the data should be represented as a line chart, which is ideal for visualizing trends over time or across categories.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/line/line.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/line/line.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `line` series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/series-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/series-line/series-line.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the line series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/series-line-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-line-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/series-line-grad/series-line-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/custom-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/custom-line/custom-line.cs %}
{% endhighlight %}
{% endtabs %}

**Dash array**

The `dashArray` property determines the pattern of dashes and gaps in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/dash-array/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

**Width**

The `width` property specifies the stroke width applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/line-width/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Line-width.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/line-width/line-width.cs %}
{% endhighlight %}
{% endtabs %}

## Multicolored line

To render a multicolored line series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **MultiColoredLine** in your chart configuration. This specifies that the series should be rendered as a multicolored line chart, with different segments of the line having distinct colors.

* **Map individual colors:** Utilize the `pointColorMapping` property to assign individual colors to each data point. This allows you to customize the color of each segment of the line based on your data.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/multi-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multi-line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/multi-line/multi-line.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series Render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/line-charts/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)