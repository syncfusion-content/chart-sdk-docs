---
layout: post
title: Gauge Axes in ASP.NET Core Circular Gauge Control | Syncfusion
description: Learn here all about Gauge Axes in Syncfusion ASP.NET Core Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge Axes
publishingplatform: chart-sdk
documentation: ug
---

# Axes in Circular Gauge Control

By default, gauge will be displayed with an axis. Each axis contains its own ranges, pointers and annotation.

<!-- markdownlint-disable MD036 -->

## Axis Customization

You can customize the width and color of an axis line by using [lineStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_LineStyle) property. Background for an axis can be customized by using [background](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_Background) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/axes/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Angles and Direction

Circular gauge axis can sweep from 0 to 360 degrees. By default start angle of an axis is 200 degree and end angle is 160 degree and you can customize this option by using [startAngle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_StartAngle) and [endAngle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_EndAngle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/angles/tagHelper %}
{% endhighlight %}
{% endtabs %}


The [direction](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_Direction) property enables you to render the gauge axis either in `ClockWise` or in `AntiClockWise` direction.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/direction/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Axis Radius

By default, radius of an axis is calculated based on the available size. You can customize this, by using [radius](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_Radius) property. It takes value either in `percentage` or in `pixel`.

**In Pixel**

You can set the radius of the gauge in pixel as demonstrated below,

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/radius-pixel/tagHelper %}
{% endhighlight %}
{% endtabs %}



**In Percentage**

By setting value in percentage, gauge gets its dimension with respect to its available size. For example, when the radius is ‘50%’, gauge renders to half of the available size.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/radius-percentage/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Ticks

You can customize the [height](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html), [color](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html#Syncfusion_EJ2_CircularGauge_CircularGaugeTick_Color) and [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html#Syncfusion_EJ2_CircularGauge_CircularGaugeTick_Width) of major and minor ticks by using [majorTicks](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_MajorTicks) and [minorTicks](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_MinorTicks) property. By default, [interval](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html#Syncfusion_EJ2_CircularGauge_CircularGaugeTick_Interval) for `majorTicks` will be calculated automatically and also you can customize the interval for major and minor ticks using `interval` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/ticks/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Tick Position**

Both minor and major ticks can be moved by using [offset](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html) and [position](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html) property. The [offset](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html#Syncfusion_EJ2_CircularGauge_CircularGaugeTick_Offset) defines the distance between the axis and ticks. By default, offset value is 0. The [position](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeTick.html#Syncfusion_EJ2_CircularGauge_CircularGaugeTick_Position) will place the ticks either inside or outside of the axis. By default, ticks will be placed `inside` the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/tick-position/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Labels

Labels of an axis can be customized by using [font](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeFont.html#Syncfusion_EJ2_CircularGauge_CircularGaugeFont_FontFamily) property in [labelStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_LabelStyle) options.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/labels/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Label Position**

Labels can be moved by using [offset](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Offset) or [position](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Position) property. The [offset](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Offset) defines the distance between the labels and ticks. By default, offset value is 0. The [position](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Position) will place the labels either inside or outside of the axis. By default, labels will be placed `inside` the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/label-position/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Auto Angle**

Labels can be swept along the axis angle by enabling [autoAngle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_AutoAngle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/auto-angles/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Smart Labels**

When an axis makes a complete circle, then the first and last label of the axis will get overlap with each other. In this scenario, you can either hide 1st or last label using [hiddenLabel](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_HiddenLabel) property. When `hiddenLabel` value is `First`, then the 1st label will be hidden and when the `hiddenLabel` value is 'Last', then the last label will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/smart-labels/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Label Format**

Axis labels can be formatted by using [format](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Format) property in [labelStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLabel.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLabel_Font) and its supports all globalize format.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/label-format/tagHelper %}
{% endhighlight %}
{% endtabs %}



The following table describes the result of applying some commonly used label formats on numeric values.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1,000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1,000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal places</td>
</tr>
</table>

**Custom Label Format**

Axis labels support custom label format using placeholder like {value}°C, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/custom-label-format/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Hide Intersecting Axis Labels**

When the axis labels overlap with each other, you can hide the intersected labels by setting the `hideIntersectingLabel` property to true in the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/hide-intersecting-label/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Minimum and Maximum

The [minimum](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_Minimum) and [maximum](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeAxis.html#Syncfusion_EJ2_CircularGauge_CircularGaugeAxis_Maximum) properties enables you to customize the start and end values of an axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/minMax/tagHelper %}
{% endhighlight %}
{% endtabs %}




## Multiple Axes

In addition to the default axis, you can add n number of axis to a gauge. Each axis will have its own ranges, pointers, annotations and customization options.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-axes/multiple-axes/tagHelper %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/CircularGauge/Axes).