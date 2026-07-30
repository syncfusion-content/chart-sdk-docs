---
layout: post
title: Synchronized Charts in ASP.NET MVC Chart Component
description: Learn here all about Synchronized Charts in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Synchronized charts
publishingplatform: chart-sdk
documentation: ug
---


# Synchronized charts in ASP.NET MVC Chart Component

## Tooltip synchronization

The tooltip can be synchronized across multiple charts using the `ShowTooltip` and `HideTooltip` methods. When we hover over a data point in one chart, we call the `ShowTooltip` method for the other charts to display related information in other connected charts simultaneously.

In the `ShowTooltip` method, specify the following parameters programmatically to enable tooltip for a particular chart:

* `X` - Data point x-value or x-coordinate value.
* `Y` - Data point y-value or y-coordinate value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Crosshair synchronization

The crosshair can be synchronized across multiple charts using the `ShowCrosshair` and `HideCrosshair` methods. When we hover over one chart, we call the `ShowCrosshair` method for the other charts to align with data points in other connected charts, simplifying data comparison and analysis.

In the `ShowCrosshair` method, specify the following parameters programmatically to enable crosshair for a particular chart:

* `X` - Specifies the x-value of the point or x-coordinate.
* `Y` - Specifies the y-value of the point or y-coordinate.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/crosshair/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Crosshair.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/crosshair/crosshair.cs %}
{% endhighlight %}
{% endtabs %}



## Zooming synchronization

You can maintain constant zoom levels across multiple charts using the [`ZoomComplete`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ZoomComplete) event. In the `ZoomComplete` event, obtain the [`ZoomFactor`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_ZoomFactor) and [`ZoomPosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_ZoomPosition) values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/zooming/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Zooming.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/zooming/zooming.cs %}
{% endhighlight %}
{% endtabs %}



## Selection synchronization

You can select the data across multiple charts using the [`SelectionComplete`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SelectionComplete) event. In the `SelectionComplete` event, obtain the selected values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/synchronization/selection/selection.cs %}
{% endhighlight %}
{% endtabs %}


