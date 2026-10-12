---
layout: post
title: Data Markers in ASP.NET Core Charts | Syncfusion
description: Learn here all about Data Markers in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Markers
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Data Markers in ASP.NET Core Charts

Data markers are used to provide information about the data points in the series. You can add a shape to adorn each data point.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Markers can be added to points by enabling the [`visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_Visible) property of the [`marker`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Marker) object. By default, markers are not displayed; set the property to `true` to display them.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/marker/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Marker.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/marker/marker.cs %}
{% endhighlight %}
{% endtabs %}

## Shape

Markers can be assigned different shapes such as `Rectangle`, `Circle`, `Diamond`, etc. by using the [`shape`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_Shape) property of the [`marker`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Marker) object.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/shape/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Shape.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/shape/shape.cs %}
{% endhighlight %}
{% endtabs %}

> To learn more about the available marker shapes, refer to the [`shape`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_Shape) property.

## Images

Apart from the shapes, you can also add custom images to mark the data point using the [`imageUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_ImageUrl) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/images/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Images.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/images/images.cs %}
{% endhighlight %}
{% endtabs %}

## Customization

The marker's color and border can be customized using the [`fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_Fill) and [`border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_Border) properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing a specific point

You can also customize the specific marker and label using the [`pointRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) event. The `pointRender` event allows you to change the shape, color, and border for a point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/custom-point/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-point.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/custom-point/custom-point.cs %}
{% endhighlight %}
{% endtabs %}

## Fill marker with the series color

The marker can be filled with the series color by setting the [`isFilled`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartMarkerSettings.html#Syncfusion_EJ2_Charts_ChartMarkerSettings_IsFilled) property to <b>true</b>.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/isfilled/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="IsFilled.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/data-marker/isfilled/isfilled.cs %}
{% endhighlight %}
{% endtabs %}