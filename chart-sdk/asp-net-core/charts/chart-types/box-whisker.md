---
layout: post
title: Box and Whisker Chart in ASP.NET Core Charts
description: Learn here all about Box and Whisker Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Box and Whisker Chart
publishingplatform: chart-sdk
documentation: ug
---


# Box and Whisker Chart in ASP.NET Core Charts

## Box and Whisker

To render a `box and whisker` series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **BoxAndWhisker** in your chart configuration. This indicates that the data should be represented as a box and whisker chart, which will plot segments to illustrate the statistical distribution of the data.

* **Data requirements:** The y field of the Box and Whisker series requires a specific number of data points, with a minimum of five values needed to plot a segment.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Box.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box/box.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Box.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box/box.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `box and whisker` series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Box-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-fill/box-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the box and whisker series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Box-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-grad/box-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/opacity/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/border/border.cs %}
{% endhighlight %}
{% endtabs %}

## Box Plot

To change the rendering mode of the box and whisker series, use the `boxPlotMode` property. The default value for `boxPlotMode` is **Exclusive**. The other available options for `boxPlotMode` are **Inclusive** and **Normal**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-plot/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Box-plot.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-plot/box-plot.cs %}
{% endhighlight %}
{% endtabs %}

## Show mean

In the box and whisker series, the `showMean` property is used to display the average value of the box and whisker. The default value of `showMean` is **false**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-mean/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Box-mean.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/box-mean/box-mean.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/box/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)