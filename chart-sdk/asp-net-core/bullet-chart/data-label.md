---
layout: post
title: Data Label in ASP.NET Core Bullet Chart Component | Syncfusion
description: Learn here all about Data Label in Syncfusion ASP.NET Core Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Label
publishingplatform: chart-sdk
documentation: ug
---


# Data label in Bullet Chart Control

Data Labels are used to identify the value of actual bar in the Bullet Chart component. The Data Labels will be shown by specifying the [`DataLabel`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_DataLabel) setting's [`Enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChartBulletDataLabel.html#Syncfusion_EJ2_Charts_BulletChartBulletDataLabel_Enable) property to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/data-label/data-label/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class Data
{           
    public double value;
    public double comparativeMeasureValue;
    public string category;
}
{% endhighlight %}
{% endtabs %}



## Data label customization

Data Labels color, opacity, font size, font family, font weight, and font style can be customized using the [`LabelStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChartBulletDataLabel.html#Syncfusion_EJ2_Charts_BulletChartBulletDataLabel_LabelStyle).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/data-label/data-label-custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class CustomData
{           
    public double value;
    public double comparativeMeasureValue;
    public string category;
}
{% endhighlight %}
{% endtabs %}



![Bullet Chart with Data Labels](images/blazor-bullet-chart-data-label.png)