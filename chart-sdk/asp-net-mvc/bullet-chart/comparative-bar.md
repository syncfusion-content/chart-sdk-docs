---
layout: post
title: Comparative Bar in ASP.NET MVC Bullet Chart Component
description: Learn here all about Comparative Bar in Syncfusion ASP.NET MVC Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Comparative Bar
publishingplatform: chart-sdk
documentation: ug
---


# Target bar

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`TargetField`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetField) should be mapped to the appropriate field from the datasource.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/target-bar/target-bar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Target-bar.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/target-bar/target-bar/target-bar.cs %}
{% endhighlight %}
{% endtabs %}



![Target Bar in Bullet Chart](images/blazor-bullet-chart-target-bar.png)

## Types of target bar

The shape of the target bar can be customized using the [`TargetTypes`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetTypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/target-bar/target-types/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Target-types.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/target-bar/target-types/target-types.cs %}
{% endhighlight %}
{% endtabs %}

![Rectangle Target Bar with Bullet Chart](images/blazor-bullet-chart-rectangle-target-bar.png)

## Target bar customization

The following properties can be used to customize the target bar. Also, you can bind the color for the target bar from [`DataSource`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_DataSource) for the bullet chart.

* [`TargetColor`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetColor) - Specifies the fill color of target bar.
* [`TargetWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetWidth) - Specifies the width of target bar.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/target-bar/target-color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Target-color.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/target-bar/target-color/target-color.cs %}
{% endhighlight %}
{% endtabs %}



![Customizing Target Bar in Bullet Chart](images/blazor-bullet-chart-target-bar-customization.png)