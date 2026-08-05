---
layout: post
title: Data Binding in ASP.NET Core Bullet Chart Component | Syncfusion
description: Learn here all about Data Binding in Syncfusion ASP.NET Core Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Binding
publishingplatform: chart-sdk
documentation: ug
---


# Working with data in Bullet Chart Control

Bullet Chart can visualize data bound from local or remote data.

## Local data

You can bind a simple JSON data to the chart using [`DataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_DataSource) direct property of the bullet-chart. Now, map the fields in JSON to [`ValueField`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_ValueField) and [`TargetField`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TargetField) properties. The [`DataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_DataSource) property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the [`ValueField`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_ValueField) and [`TargetField`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TargetField) respectively.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/working-with-data/working-with-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class LocalBulletData
{
    public double value;
    public double comparativeMeasureValue;
    public string category;
}
{% endhighlight %}
{% endtabs %}



![Data Binding in Bullet Chart](images/blazor-bullet-chart-data-binding.png)