---
layout: post
title: Synchronized Charts in ASP.NET Core Charts | Syncfusion
description: Learn here all about Synchronized Charts in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Synchronized charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Synchronized Charts in ASP.NET Core Charts

## Tooltip synchronization

The tooltip can be synchronized across multiple charts using the `showTooltip` and `hideTooltip` client-side methods. When the user hovers over a data point in one chart, the `showTooltip` method is called for the other charts to display related information in the connected charts simultaneously.

In the `showTooltip` method, specify the following parameters programmatically to enable the tooltip for a particular chart:

* `X` - Data point x-value or x-coordinate value.
* `Y` - Data point y-value or y-coordinate value.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/tooltip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}

## Crosshair synchronization

The crosshair can be synchronized across multiple charts using the `showCrosshair` and `hideCrosshair` client-side methods. When the user hovers over one chart, the `showCrosshair` method is called for the other charts to align with data points in the connected charts, simplifying data comparison and analysis.

In the `showCrosshair` method, specify the following parameters programmatically to enable the crosshair for a particular chart:

* `X` - Specifies the x-value of the point or x-coordinate.
* `Y` - Specifies the y-value of the point or y-coordinate.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/crosshair/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Crosshair.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/crosshair/crosshair.cs %}
{% endhighlight %}
{% endtabs %}

## Zooming synchronization

You can maintain constant zoom levels across multiple charts using the [`ZoomComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ZoomComplete) event. In the `ZoomComplete` event, obtain the [`ZoomFactor`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_ZoomFactor) and [`ZoomPosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_ZoomPosition) values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/zooming/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Zooming.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/zooming/zooming.cs %}
{% endhighlight %}
{% endtabs %}

## Selection synchronization

You can select the data across multiple charts using the [`SelectionComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SelectionComplete) event. In the `SelectionComplete` event, obtain the selected values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/synchronization/selection/selection.cs %}
{% endhighlight %}
{% endtabs %}

