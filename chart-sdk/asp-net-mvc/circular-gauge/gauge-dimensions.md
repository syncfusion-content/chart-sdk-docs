---
layout: post
title: Gauge Dimensions in ASP.NET MVC Circular Gauge Control | Syncfusion
description: Learn here all about Gauge Dimensions in Syncfusion ASP.NET MVC Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge Dimensions
publishingplatform: chart-sdk
documentation: ug
---

# Circular Gauge Dimensions

## Size for Circular Gauge

<!-- markdownlint-disable MD036 -->

You can also set size for the gauge directly through [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_Width) and [height](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_Height) properties.

**In Pixel**

You can set the size of the gauge in pixel as demonstrated below.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/circular-gauge/gauge-dimension/gauge-dimension/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Gauge-dimension.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/circular-gauge/gauge-dimension/gauge-dimension/gauge-dimension.cs %}
{% endhighlight %}
{% endtabs %}



**In Percentage**

By setting value in percentage, gauge gets its dimension with respect to its container. For example, when the height is ‘50%’, gauge renders to half of the container height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/circular-gauge/gauge-dimension/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/circular-gauge/gauge-dimension/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}



N> When you do not specify the size, it takes `450px` as the height and window size as its width.

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/CircularGauge/CircularGaugeUGSample).