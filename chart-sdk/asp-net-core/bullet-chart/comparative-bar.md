---
layout: post
title: Comparative Bar in ASP.NET Core Bullet Chart Component | Syncfusion
description: Learn here all about Comparative Bar in Syncfusion ASP.NET Core Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Comparative Bar
publishingplatform: chart-sdk
documentation: ug
---


# Target bar in Bullet Chart Control

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`TargetField`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetField) should be mapped to the appropriate field from the datasource.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/target-bar/target-bar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class TargetBarData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



![Target Bar in Bullet Chart](images/blazor-bullet-chart-target-bar.png)

## Types of target bar

The shape of the target bar can be customized using the [`TargetTypes`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetTypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/target-bar/target-types/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class TargetType
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}

![Rectangle Target Bar with Bullet Chart](images/blazor-bullet-chart-rectangle-target-bar.png)

## Target bar customization

The following properties can be used to customize the target bar. Also, you can bind the color for the target bar from [`DataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_DataSource) for the bullet chart.

* [`TargetColor`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetColor) - Specifies the fill color of target bar.
* [`TargetWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.charts.bulletchart.html#Syncfusion_EJ2_Charts_BulletChart_TargetWidth) - Specifies the width of target bar.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/target-bar/target-color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class TargetBarCustomization
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



![Customizing Target Bar in Bullet Chart](images/blazor-bullet-chart-target-bar-customization.png)