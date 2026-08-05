---
layout: post
title: Data Label in ASP.NET MVC Bullet Chart Component
description: Learn here all about Data Label in Syncfusion ASP.NET MVC Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Label
publishingplatform: chart-sdk
documentation: ug
---


# Data label

Data Labels are used to identify the value of actual bar in the Bullet Chart component. The Data Labels will be shown by specifying the [`DataLabel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_DataLabel) setting's [`Enable`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChartBulletDataLabel.html#Syncfusion_EJ2_Charts_BulletChartBulletDataLabel_Enable) property to **true**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/data-label/data-label/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/data-label/data-label/data-label.cs %}
{% endhighlight %}
{% endtabs %}



## Data label customization

Data Labels color, opacity, font size, font family, font weight, and font style can be customized using the [`LabelStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChartBulletDataLabel.html#Syncfusion_EJ2_Charts_BulletChartBulletDataLabel_LabelStyle).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/data-label/data-label-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data-label-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/data-label/data-label-custom/data-label-custom.cs %}
{% endhighlight %}
{% endtabs %}



![Bullet Chart with Data Labels](images/blazor-bullet-chart-data-label.png)