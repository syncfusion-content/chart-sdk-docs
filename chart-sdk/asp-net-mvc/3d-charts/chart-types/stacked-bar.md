---
layout: post
title: Stacked bar chart in ASP.NET MVC Syncfusion 3D Chart Component
description: Learn here all about stacked bar chart in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stacked bar chart
publishingplatform: chart-sdk
documentation: ug
---


# Stacked bar chart in ASP.NET MVC 3D Chart Component

## Stacked bar chart

To render a stacked bar series, use series [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Type) as [`StackingBar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_StackingBar).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/stackedbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedbar.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/stackedbar/stackedbar.cs %}
{% endhighlight %}
{% endtabs %}



## Stacking group

To group the stacked bar, the [`StackingGroup`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_StackingGroup) property can be used. The bars with same group name are stacked on top of each other.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/group-stackedbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group-stackedbar.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/group-stackedbar/group-stackedbar.cs %}
{% endhighlight %}
{% endtabs %}



## Cylindrical stacked bar chart

To render a cylindrical stacked bar chart, set the [`ColumnFacet`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnFacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/stackedbar-cylinder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedbar-cylinder.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/stackedbar-cylinder/stackedbar-cylinder.cs %}
{% endhighlight %}
{% endtabs %}



## Series customization

The following properties can be used to customize the [`Stacked Bar`]((https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_StackingBar)) series.

* [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) – Specifies the color of the series.
* [Opacity](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Opacity) – Specifies the opacity of the [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) color.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/stackedbar-series/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedbar-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/stackedbar-series/stackedbar-series.cs %}
{% endhighlight %}
{% endtabs %}


