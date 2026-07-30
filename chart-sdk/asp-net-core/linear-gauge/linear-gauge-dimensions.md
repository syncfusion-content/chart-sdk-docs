---
layout: post
title: Linear Gauge Dimensions in ASP.NET Core Linear Gauge Component
description: Learn here all about Linear Gauge Dimensions in Syncfusion ASP.NET Core Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Linear Gauge Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Dimensions in ASP.NET Core Linear Gauge

<!-- markdownlint-disable MD036 -->

## Size for Linear Gauge

The height and width of the Linear Gauge can be set using the [`Height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Height) and [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Width) properties in [`ejs-lineargauge`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html).

### In Pixel

The size of the Linear Gauge can be set in pixel as demonstrated below.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/dimensions/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/dimensions/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}



![Linear Gauge with height and width in pixel value](../linear-gauge/images/gauge-pixel.png)

### In Percentage

By setting value in percentage, Linear Gauge receives its dimension matching to its parent. For example, when the height is set as **50%**, Linear Gauge renders to half of the parent height. The Linear Gauge will be responsive when the width is set as **100%**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/dimensions/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/dimensions/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}



![Linear Gauge with height and width in percentage value](../linear-gauge/images/gauge-percentage.png)

N> When the component's size is not specified, the height will be **450px** and the width will be the same as the parent element's width.