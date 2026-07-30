---
layout: post
title: Internationalization in ASP.NET Core Circular Gauge Control | Syncfusion
description: Learn here all about Internationalization in Syncfusion ASP.NET Core Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization
publishingplatform: chart-sdk
documentation: ug
---

# Internationalization in Circular Gauge Control

Circular Gauge provides internationalization support for below elements.

* Axis Labels
* Tooltip

For more information about number formatter, you can refer [internationalization](https://ej2.syncfusion.com/aspnetcore/documentation/common/internationalization).

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales.

Internationalization library is used to globalize number in CircularGauge component using [format](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Format) property in [labelStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html).

<!-- markdownlint-disable MD036 -->
**Numeric Format**

In the below example, axis labels are globalized to **EUR**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/internationalization/tagHelper %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/CircularGauge/PrintandExportSample).

## Right-to-left

Circular Gauge can render its elements from right to left, which improves the user experience for certain language users. To do so, set the [enableRtl](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_EnableRtl) property to **true**. When this property is enabled, elements such as the tooltip and legend will be rendered from right to left. Meanwhile, the axis can be rendered from right to left by setting the [direction](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_Direction) property to **AntiClockWise**. For more information on axis, click [here](https://ej2.syncfusion.com/aspnetcore/documentation/circular-gauge/gauge-axes#angles-and-direction).

The following example illustrates the right to left rendering of the Circular Gauge.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/rtl/tagHelper %}
{% endhighlight %}
{% endtabs %}

![Circular Gauge with RTL support](./images/rtl.png)