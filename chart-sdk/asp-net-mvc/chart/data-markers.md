---
layout: post
title: Data Markers in ASP.NET MVC Syncfusion Chart Component
description: Learn here all about Data Markers in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Markers
publishingplatform: chart-sdk
documentation: ug
---


# Data Markers in ASP.NET MVC Chart Component

Data markers are used to provide information about the data points in the series. You can add a shape to adorn each data point.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Markers can be added to points by enabling the [`Visible`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Marker) option of the marker property. By default, distinct markers will be enabled for each series in the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/marker/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Marker.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/marker/marker.cs %}
{% endhighlight %}
{% endtabs %}



## Shape

Markers can be assigned with different shapes such as Rectangle, Circle, Diamond etc using the [`Shape`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Marker) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/shape/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Shape.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/shape/shape.cs %}
{% endhighlight %}
{% endtabs %}



N> To know more about the marker shape type refer the [`Shape`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_Shape).

## Images

Apart from the shapes, you can also add custom images to mark the data point using the [`ImageUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_ImageUrl) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/images/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Images.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/images/images.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

Marker's color and border can be customized using `Fill` and `Border` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing specific point

You can also customize the specific marker and label using [`PointRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) event. The `PointRender` event allows you to change the shape, color and border for a point.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/custom-point/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-point.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/custom-point/custom-point.cs %}
{% endhighlight %}
{% endtabs %}

## Fill marker with series color

Marker can be filled with the series color by setting the [`IsFilled`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_IsFilled) property to <b>true</b>.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/isfilled/razor %}
{% endhighlight %}
{% highlight c# tabtitle="IsFilled.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/data-marker/isfilled/isfilled.cs %}
{% endhighlight %}
{% endtabs %}