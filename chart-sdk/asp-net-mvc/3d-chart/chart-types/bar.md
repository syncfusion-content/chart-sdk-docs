---
layout: post
title: Bar chart in ASP.NET MVC Syncfusion 3D Chart Component
description: Learn here all about bar chart in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bar chart
publishingplatform: chart-sdk
documentation: ug
---


# Bar chart in ASP.NET MVC 3D Chart Component

## Bar chart

To render a bar series, use series [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Type) as [`Bar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_Bar).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bar.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar/bar.cs %}
{% endhighlight %}
{% endtabs %}



## Bar space and width

The [`ColumnSpacing`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnSpacing) and [`ColumnWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnWidth) properties are used to customize the space between bars.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar-space/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bar-space.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar-space/bar-space.cs %}
{% endhighlight %}
{% endtabs %}


## Grouped bar

The data points can be grouped in the bar type charts by using the [`GroupName`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_GroupName) property. Data points with same group name are grouped together.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/group-bar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group-bar.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/group-bar/group-bar.cs %}
{% endhighlight %}
{% endtabs %}



## Cylindrical bar chart

To render a cylindrical bar chart, set the [`ColumnFacet`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnFacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar-cylinder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bar-cylinder.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar-cylinder/bar-cylinder.cs %}
{% endhighlight %}
{% endtabs %}



## Series customization

The following properties can be used to customize the [`Bar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_Bar) series.

* [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) – Specifies the color of the series.
* [Opacity](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Opacity) – Specifies the opacity of the [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) color.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar-series/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bar-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/bar-charts/bar-series/bar-series.cs %}
{% endhighlight %}
{% endtabs %}

