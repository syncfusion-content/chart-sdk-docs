---
layout: post
title: Bullet Chart Dimensions in ASP.NET Core Bullet Chart Component | Syncfusion
description: Learn here all about Bullet Chart Dimensions in Syncfusion ASP.NET Core Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bullet Chart Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Bullet chart dimensions

## Size for container

The size of the Bullet Chart is determined by the container size, and it can be changed inline or via CSS as following.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/bullet-chart-dimensions/container/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class DefaultBulletData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



## Size for bullet chart

The [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Width) and [`Height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Height) properties are used to adjust the size of the Bullet Chart.

### Pixel

Sets the size of the Bullet Chart in pixels as shown below.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/bullet-chart-dimensions/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class BulletData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



### Percentage

By setting a value in percentage, the Bullet Chart gets its dimension with respect to its container. For example, when the height is **50%**, the Bullet Chart renders to half of the container’s height.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/bullet-chart-dimensions/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class DefaultBulletChartData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



N>If the size is not specified, the Bullet Chart will be rendered with a height of **126px** and a width of the window.