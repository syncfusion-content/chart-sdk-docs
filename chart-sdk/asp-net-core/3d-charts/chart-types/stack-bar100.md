---
layout: post
title: 100% Stacked bar chart in ASP.NET Core Syncfusion Chart Component
description: Learn here all about 100% stacked bar chart in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 100% Stacked bar chart
publishingplatform: chart-sdk
documentation: ug
---


# 100% Stacked bar chart in ASP.NET Core 3D Chart Component

## 100% Stacked bar chart

To render a 100% stacked bar series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Type) as [`StackingBar100`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_StackingBar100).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/bar-charts/100perstackedbar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedbar100.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/bar-charts/100perstackedbar/stackedbar100.cs %}
{% endhighlight %}
{% endtabs %}



## 100% Cylindrical stacked bar chart

To render a cylindrical 100% stacked bar chart, set the [`ColumnFacet`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnFacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/bar-charts/stackedbar100-cylinder/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedbar100-cylinder.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/bar-charts/stackedbar100-cylinder/stackedbar100-cylinder.cs %}
{% endhighlight %}
{% endtabs %}



## Series customization

The following properties can be used to customize the [`100% Stacked Bar`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_StackingBar100) series.

* [Fill](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) – Specifies the color of the series.
* [Opacity](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Opacity) – Specifies the opacity of the [Fill](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) color.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/bar-charts/stackedbar-100-series/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedbar-100-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/bar-charts/stackedbar-100-series/stackedbar-100-series.cs %}
{% endhighlight %}
{% endtabs %}