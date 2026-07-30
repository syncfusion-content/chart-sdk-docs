---
layout: post
title: Box and Whisker Chart in ASP.NET MVC Charts
description: Learn here all about Box and Whisker Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Box and Whisker Chart
publishingplatform: chart-sdk
documentation: ug
---


# Box and Whisker Chart in ASP.NET MVC Charts

## Box and Whisker

To render a `box and whisker` series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **BoxAndWhisker** in your chart configuration. This indicates that the data should be represented as a box and whisker chart, which will plot segments to illustrate the statistical distribution of the data.

* **Data requirements:** The y field of the Box and Whisker series requires a specific number of data points, with a minimum of five values needed to plot a segment.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Box.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box/box.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName` and `YName` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Box.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box/box.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `box and whisker` series.

**Fill**

The `Fill` property determines the color applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Box-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-fill/box-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `Fill` property can be used to apply a gradient color to the box and whisker series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-grad/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Box-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-grad/box-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `Opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/opacity/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/border/border.cs %}
{% endhighlight %}
{% endtabs %}

## Box Plot

To change the rendering mode of the box and whisker series, use the `BoxPlotMode` property. The default value for `BoxPlotMode` is **Exclusive**. The other available options for `BoxPlotMode` are **Inclusive** and **Normal**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-plot/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Box-plot.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-plot/box-plot.cs %}
{% endhighlight %}
{% endtabs %}

## Show mean

In the box and whisker series, the `ShowMean` property is used to display the average value of the box and whisker. The default value of `ShowMean` is **false**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-mean/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Box-mean.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/box-mean/box-mean.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/box/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}
## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)