---
layout: post
title: High Low Chart in ASP.NET MVC Charts
description: Learn here all about High Low Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: High Low Chart
publishingplatform: chart-sdk
documentation: ug
---


# High Low Chart in ASP.NET MVC Charts

## High Low

To render a `hilo` series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **Hilo** in your chart configuration. This indicates that the data should be represented as a hilo chart, which shows the high and low values for each data point, illustrating price movements in stocks and providing a clear visualization of price ranges.

* **Provide high and low values:** The Hilo series requires two y-values for each data point, you need to specify both the high and low values. The high value represents the maximum price, while the low value represents the minimum price of the stock.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hilo.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo/hilo.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName`, `High`, and `Low` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hilo.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo/hilo.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the hilo series.

**Fill**

The `Fill` property determines the color applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hilo-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo-fill/hilo-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `Fill` property can be used to apply a gradient color to the hilo series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo-grad/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hilo-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/hilo-grad/hilo-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `Opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/opacity/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/hilo/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)