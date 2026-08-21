---
layout: post
title: Empty Points in ASP.NET MVC 3D Circular Charts | Syncfusion
description: Learn here all about empty points in Syncfusion ASP.NET MVC 3D Circular Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Empty points
documentation: ug
---


# Empty Points in ASP.NET MVC 3D Circular Charts

Data points containing `null` or `undefined` values are considered empty points. These empty data points are ignored and not plotted in the 3D Circular Chart. You can customize the handling of empty points using the `EmptyPointSettings` property in the series. The default mode for empty points is `Gap`. Other supported modes include `Average`, `Drop`, and `Zero`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-circular-charts/pie-donut/empty-points/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-points.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-circular-charts/pie-donut/empty-points/empty-points.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

A specific color for an empty point can be set by using the `Fill` property in `EmptyPointSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-circular-charts/pie-donut/empty-point-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-point-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-circular-charts/pie-donut/empty-point-custom/empty-point-custom.cs %}
{% endhighlight %}
{% endtabs %}

