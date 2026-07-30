---
layout: post
title: Error Bar Chart in ASP.NET MVC Charts
description: Learn here all about Error Bar Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Error Bar Chart
publishingplatform: chart-sdk
documentation: ug
---


# Error Bar Chart in ASP.NET MVC Charts

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

To render error bars for the series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

**Set visibility:** Set the visible property to true for the error bars to be displayed.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Errorbar.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbar/errorbar.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing error bar

To customize the error bar type, set the error bar `Type` to **Custom**, and then change the horizontal or vertical positive and negative error values for the error bar.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbar-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Errorbar-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbar-custom/errorbar-custom.cs %}
{% endhighlight %}
{% endtabs %}

## Error bar mode

The error bar mode is used to define whether the error bar line is drawn horizontally, vertically or on both sides. To change the error bar mode, use the `Mode` option.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/mode/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mode.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/mode/mode.cs %}
{% endhighlight %}
{% endtabs %}

## Error bar direction

To change the direction of the error bars to plus, minus, or both sides, use the `Direction` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/direction/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Direction.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/direction/direction.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing error bar cap

To customize the length, width, opacity, and fill color of the error bar caps, you can use the `ErrorBarCap` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbarcap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Errorbarcap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbarcap/errorbarcap.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing error bar color

To customize the error bar color for individual errors, use the `ErrorBarColorMapping` property. You can also customize the vertical error, horizontal error, horizontal negative and positive error, and vertical negative and positive error for an individual point using the `VerticalError`, `HorizontalError`, `HorizontalNegativeError`, `HorizontalPositiveError`, `VerticalNegativeError`, and `VerticalPositiveError` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbarcolor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Errorbarcolor.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/errorbarcolor/errorbarcolor.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/error-bar/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)