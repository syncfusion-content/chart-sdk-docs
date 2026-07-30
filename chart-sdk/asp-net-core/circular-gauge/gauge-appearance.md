---
layout: post
title: Gauge Appearance in ASP.NET Core Circular Gauge Control | Syncfusion
description: Learn here all about Gauge Appearance in Syncfusion ASP.NET Core Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge Appearance
publishingplatform: chart-sdk
documentation: ug
---

# Appearance in Circular Gauge Control

## Gauge Title

Circular gauge can be given a title by using [title](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_Title) property, to show the information about the gauge. Title can be customized by using [titleStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_TitleStyle) property in gauge.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/title/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Gauge Position

<!-- markdownlint-disable MD036 -->

Gauge can be positioned anywhere in the container with the help of [centerX](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_CenterX) and [centerY](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_CenterY) property and it accepts values either in percentage or in pixels. The default value of the [centerX](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_CenterX) and [centerY](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_CenterY) property is 50%, which means gauge will get rendered to the centre of the container.

**In Pixel**

You can set the mid point of the gauge in pixel as demonstrated below,

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/position/tagHelper %}
{% endhighlight %}
{% endtabs %}



**In Percentage**

By setting the value in percentage, gauge gets its mid point with respect to its plot area. For example, when the [centerX](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_CenterX) value as '0%' and [centerY](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_CenterY) value is ‘50%’, gauge will get positioned at the top left corner of the plot area.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/position-percentage/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Area Customization

**Customize the gauge background**

Using [background](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_Background) and [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_Border) properties, you can change the background color and border of the circular gauge.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/area-customization/tagHelper %}
{% endhighlight %}
<!-- {% highlight c# tabtitle="Area-customization.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/area-customization/area-customization.cs %}
{% endhighlight %} -->
{% endtabs %}



**Gauge Margin**

You can set margin for gauge from its container through [margin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_Margin) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/margin/tagHelper %}
{% endhighlight %}
<!-- {% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/margin/margin.cs %}
{% endhighlight %} -->
{% endtabs %}



## Radius calculation based on angles

Render semi or quarter circular gauges by modifying the start and end angles. By enabling the radius based on angle option, the radius of circular gauge will be calculated based on the start and end angles to avoid excess white space.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-appearance/radiusbasedgauge/tagHelper %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/CircularGauge/PrintandExportSample).