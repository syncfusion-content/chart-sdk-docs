---
layout: post
title: Column chart in ASP.NET MVC Syncfusion 3D Chart Component
description: Learn here all about column chart in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Column chart
publishingplatform: chart-sdk
documentation: ug
---


# Column chart in ASP.NET MVC 3D Chart Component

## Column chart

To render a column series, use series [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Type) as [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_Column).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Column.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column/column.cs %}
{% endhighlight %}
{% endtabs %}



## Column space and width

The [`ColumnSpacing`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnSpacing) and [`ColumnWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnWidth) properties are used to customize the space between columns.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column-space/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Column-space.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column-space/column-space.cs %}
{% endhighlight %}
{% endtabs %}



## Grouped column

The data points can be grouped in the column type charts by using the [`GroupName`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_GroupName) property. Data points with same group name are grouped together.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/group-column/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group-column.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/group-column/group-column.cs %}
{% endhighlight %}
{% endtabs %}



## Cylindrical column chart

To render a cylindrical column chart, set the [`ColumnFacet`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_ColumnFacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column-cylinder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Column-cylinder.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column-cylinder/column-cylinder.cs %}
{% endhighlight %}
{% endtabs %}



## Series customization

The following properties can be used to customize the [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeriesType.html#Syncfusion_EJ2_Charts_Chart3DSeriesType_Column) series.

* [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) – Specifies the color of the series.
* [Opacity](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Opacity) – Specifies the opacity of the [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_Fill) color.
## Series customization

The following properties can be used to customize the `column` series.

* [fill](../../api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](../../api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](../../api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column-series/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Column-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/column-charts/column-series/column-series.cs %}
{% endhighlight %}
{% endtabs %}


