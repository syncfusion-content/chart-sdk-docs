---
layout: post
title: Category axis in ASP.NET MVC 3D Chart Component
description: Learn here all about category axis in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Category Axis
publishingplatform: chart-sdk
documentation: ug
---


# Category axis in ASP.NET MVC 3D Chart Component

The category axis is the horizontal axis of a 3D chart that shows text values rather than numerical values. Compared to the vertical axis, this axis has fewer labels. The following sample shows to render the 3D chart using category axis.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/category/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Category.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/category/category.cs %}
{% endhighlight %}
{% endtabs %}



## Labels placement

By default, category axis labels are placed between ticks in an axis. It can also be placed on ticks using the [`LabelPlacement`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_LabelPlacement) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/labelplacement/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Labelplacement.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/labelplacement/labelplacement.cs %}
{% endhighlight %}
{% endtabs %}



## Range

The range of the category axis can be customized using [`Minimum`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_Minimum), [`Maximum`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_Maximum) and [`Interval`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_Interval) properties of the axis.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/range/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Range.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/range/range.cs %}
{% endhighlight %}
{% endtabs %}



## Indexed category axis

The caategory axis can also be rendered based on the index values of the data source. This can be achieved by defining the [`IsIndexed`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_IsIndexed) property to **true** in the axis.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/index/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/index/index.cs %}
{% endhighlight %}
{% endtabs %}

