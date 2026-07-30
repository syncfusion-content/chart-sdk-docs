---
layout: post
title: Bullet Chart Dimensions in ASP.NET MVC Bullet Chart Component
description: Learn here all about Bullet Chart Dimensions in Syncfusion ASP.NET MVC Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bullet Chart Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Bullet chart dimensions

## Size for container

The size of the Bullet Chart is determined by the container size, and it can be changed inline or via CSS as following.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/bullet-chart-dimensions/container/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Container.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/bullet-chart-dimensions/container/container.cs %}
{% endhighlight %}
{% endtabs %}



## Size for bullet chart

The [`Width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Width) and [`Height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Height) properties are used to adjust the size of the Bullet Chart.

### Pixel

Sets the size of the Bullet Chart in pixels as shown below.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/bullet-chart-dimensions/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/bullet-chart-dimensions/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}



### Percentage

By setting a value in percentage, the Bullet Chart gets its dimension with respect to its container. For example, when the height is **50%**, the Bullet Chart renders to half of the container’s height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/bullet-chart-dimensions/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/bullet-chart-dimensions/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}



N>If the size is not specified, the Bullet Chart will be rendered with a height of **126px** and a width of the window.