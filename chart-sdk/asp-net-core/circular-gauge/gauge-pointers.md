---
layout: post
title: Gauge Pointers in ASP.NET Core Circular Gauge Control | Syncfusion
description: Learn here all about Gauge Pointers in Syncfusion ASP.NET Core Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge Pointers
publishingplatform: chart-sdk
documentation: ug
---

# Pointers in Circular Gauge Control

Pointers are used to indicate values on the axis. Value of the pointer can be modified using the [value](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html#Syncfusion_EJ2_CircularGauge_CircularGaugePointer_Value) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/pointers/tagHelper %}
{% endhighlight %}
{% endtabs %}



Gauge supports 3 types of pointers such as `Needle`, `RangeBar` and `Marker`. You can choose any one of the pointer by using [type](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html#Syncfusion_EJ2_CircularGauge_CircularGaugePointer_Type) property.

## Needle Pointers

A needle pointer contains three parts, a needle, a cap / knob and a tail. The length of the needle can be customized by using [radius](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html#Syncfusion_EJ2_CircularGauge_CircularGaugePointer_Radius) property. The length of the tail can be customized by using [length](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property. The radius of the cap can be customized by using [radius](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) in cap object. The needle and tail length takes value either in `percentage` or `pixel`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/needle-pointers/tagHelper %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD036 -->

**Customization**

Needle color and width can be customized by using [color](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) and [pointerWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property. Cap and tails can be customized by using [cap](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) and [needleTail](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) object.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/customization/tagHelper %}
{% endhighlight %}
{% endtabs %}



The appearance of the needle pointer can be customized by using [NeedleStartWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html#Syncfusion_EJ2_CircularGauge_CircularGaugePointer_NeedleStartWidth) and [NeedleEndWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html#Syncfusion_EJ2_CircularGauge_CircularGaugePointer_NeedleEndWidth).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/needle-customization/tagHelper %}
{% endhighlight %}
{% endtabs %}



## RangeBar Pointer

RangeBar pointer is like ranges in an axis, that can be placed on gauge to mark the pointer value. RangeBar starts from the beginning of the gauge and ends at the pointer value.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/rangebar-pointer/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Customization**

RangeBar can be customized in terms of color, border and thickness by using [color](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html), [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) and [pointerWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/pointer-customization/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Rounded corner for range bar pointer

The start and end pointers of range bar in the circular gauge are rounded to form arc gauges.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/rangebarroundedcorner/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Marker Pointer

Different type of marker shape can be used to mark the pointer value in axis. You can change the marker shape using [markerShape](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property in pointer. Gauge supports the below marker shape.
* Circle
* Rectangle
* Triangle
* InvertedTriangle
* Diamond

The image can be used instead of rendering marker shape to denote the pointer value. It can be achieved by setting [markerShape](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) to Image and assigning  image path to [imageUrl](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) in pointer.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/marker-pointer/tagHelper %}
{% endhighlight %}
{% endtabs %}



**Customization**

The marker can be customized in terms of color, border, width and height by using [color](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html), [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html), [markerWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) and [markerHeight](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property in [pointer](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/marker-customization/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Dragging Pointer

The pointers can be dragged along the axis line by clicking and dragging them. To enable or disable the drag functionality for all pointers across all axes, use the [EnablePointerDrag](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGauge.html#Syncfusion_EJ2_CircularGauge_CircularGauge_EnablePointerDrag) property. When this property is set to **true**, all pointers can be dynamically adjusted by dragging. Setting it to **false** keeps all pointers fixed in their specified positions.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/dragging-pointer/tagHelper %}
{% endhighlight %}
{% endtabs %}

### Enabling drag functionality for a specific pointer

To enable or disable the drag functionality for specific pointers along the axis line, use the `enableDrag` property in the required pointer model.

N> When the `enableDrag` property is enabled for any individual pointer model, the `enablePointerDrag` property becomes ineffective.

The following example demonstrates how to enable the drag functionality for multiple pointers individually.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/gauge-pointers-drag/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Multiple Pointers

In addition to the default pointer, you can add n number of pointer to an axis by using `pointers` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/multiple-pointer/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Animation

Pointer will get animate on loading the gauge, this can be handled by using [animation](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property in pointer. The [enable](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property in animation allows to enable or disable the animation. The [duration](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugePointer.html) property specifies the duration of the animation in milliseconds.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/animation/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Gradient Color

Gradient support allows to add multiple colors in the range and pointer of the circular gauge. The following gradient types are supported in the circular gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient will be set using the [startValue](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLinearGradient.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLinearGradient_StartValue) property. The end value of the linear gradient will be set using the [endValue](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLinearGradient.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLinearGradient_EndValue) property. The color stop values such as color, opacity and offset are set using [colorStop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeLinearGradient.html#Syncfusion_EJ2_CircularGauge_CircularGaugeLinearGradient_ColorStop) property.

The linear gradient can be applied to all pointer types like marker, range bar and needle.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/lineargradient/tagHelper %}
{% endhighlight %}
{% endtabs %}



### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [innerPosition](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeRadialGradient.html#Syncfusion_EJ2_CircularGauge_CircularGaugeRadialGradient_InnerPosition) property. The outer circle position of the radial gradient can be set using the [outerPosition](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeRadialGradient.html#Syncfusion_EJ2_CircularGauge_CircularGaugeRadialGradient_OuterPosition) property. The color stop values such as color, opacity and offset are set using [colorStop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.CircularGauge.CircularGaugeRadialGradient.html#Syncfusion_EJ2_CircularGauge_CircularGaugeRadialGradient_ColorStop) property.

The radial gradient can be applied to all pointer types like marker, range bar and needle.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/gauge-pointers/radialgradient/tagHelper %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/CircularGauge/PointersUGSample).
