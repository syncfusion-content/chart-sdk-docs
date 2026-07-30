---
layout: post
title: High Low Open Close Chart in ASP.NET MVC Charts
description: Learn here all about High Low Open Close Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: High Low Open Close Chart
publishingplatform: chart-sdk
documentation: ug
---


# High Low Open Close Chart in ASP.NET MVC Charts

## High Low Open Close

To render an `hiloOpenClose` series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **HiloOpenClose** in your chart configuration. This indicates that the data should be represented as a hiloOpenClose chart, which displays the high, low, open, and close values for each data point, providing a comprehensive visualization of stock price movements.

* **Provide high, low, open, and close values:** The `HiloOpenClose` series requires five fields (x, high, low, open, and close) to accurately display the stock’s high, low, open, and close prices. Ensure that your data source includes these fields to create a detailed representation of stock price movements over time.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/high-low/razor %}
{% endhighlight %}
{% highlight c# tabtitle="High-low.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/high-low/high-low.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName`, `High`, `Low`, `Open` and `Close` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/high-low/razor %}
{% endhighlight %}
{% highlight c# tabtitle="High-low.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/high-low/high-low.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

In the `hiloOpenClose` series, the `BullFillColor` property is used to fill the segment when the open value is greater than the close value, while the `BearFillColor` property is used to fill the segment when the open value is less than the close value. By default, `BullFillColor` is set to **#e74c3d** and `BearFillColor` is set to **#2ecd71**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/custom-openclose/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-openclose.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/custom-openclose/custom-openclose.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/high-low/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}
## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)