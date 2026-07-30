---
layout: post
title: Gauge Annotations in ASP.NET Core Circular Gauge Control | Syncfusion
description: Learn here all about Gauge Annotations in Syncfusion ASP.NET Core Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge Annotations
publishingplatform: chart-sdk
documentation: ug
---

# Annotations in Circular Gauge Control

Annotations are used to mark a specific area of interest in the gauge with texts, shapes or images.

## Content

You can place any custom element on the axis area by assigning the id of the element to [content](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAnnotation.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAnnotation_Content) property of [annotation](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAnnotation.html) object.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-annotations/annotations/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Position

Annotation can be placed around the axis by using [radius](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAnnotation.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAnnotation_Radius) and [angle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAnnotation.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAnnotation_Angle) property. For example, if the angle is 90 degree and the radius is 110%, then the annotation, will be placed at the right side of the axis.

Radius of the annotation takes value either in pixel or percentage. By setting value in percentage, annotation gets its position with respect to its axis radius.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-annotations/position/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Sub Gauge

As the annotation allows to place any custom element, it can initialize a gauge to the element and can be used to place that in another gauge.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-annotations/subgauge/tagHelper %}
{% endhighlight %}
<!-- {% highlight c# tabtitle="Subgauge.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-annotations/subgauge/subgauge.cs %}
{% endhighlight %} -->
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/CircularGauge/AnnotationandLegendSample).

## See also

* [Tooltip for Annotations](gauge-user-interaction/#tooltip-for-annotations)