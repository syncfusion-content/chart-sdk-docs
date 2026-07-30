---
layout: post
title: Pointers in JavaScript Linear Gauge Control | Syncfusion
description: Learn here all about Pointers in Syncfusion Essential JavaScript Linear Gauge control, its elements and more.
platform: chart-sdk
control: Pointers 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Pointers in JavaScript Linear Gauge Control

Pointers are used to indicate values on an axis. The value of the pointer can be modified using the [value](../api/linear-gauge/pointerModel/#value) property in [pointers](../api/linear-gauge/axisModel/#pointers).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs1" %}

## Types of pointer

The Linear Gauge supports the following types of pointers:

* Bar
* Marker

The type of pointer can be modified by using the [type](../api/linear-gauge/pointerModel/#type) property in [pointers](../api/linear-gauge/axisModel/#pointers).

### Marker pointer

A marker pointer is a shape that can be used to mark the pointer value in the Linear Gauge.

<b>Types of marker shapes</b>

By default, the marker shape for the pointer is **InvertedTriangle**. To change the shape of the pointer, use the [markerType](../api/linear-gauge/pointerModel/#markertype) property in [pointers](../api/linear-gauge/axisModel/#pointers). The following marker types are available in Linear Gauge.

* Circle
* Rectangle
* Triangle
* InvertedTriangle
* Diamond
* Image
* Text

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs2" %}

Image can be rendered instead of rendering a shape as a pointer. It can be achieved by setting the [markerType](../api/linear-gauge/pointerModel/#markertype) property to **Image** and setting the source URL of image to  [imageUrl](../api/linear-gauge/pointerModel/#imageurl) property in [pointers](../api/linear-gauge/axisModel/#pointers).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs11" %}

Text can be added instead of rendering a shape as a pointer. It can be achieved by setting the [markerType](../api/linear-gauge/pointerModel/#markertype) property to **Text**, and the text content can be set using the [text](../api/linear-gauge/pointerModel/#text) property in [pointers](../api/linear-gauge/axisModel/#pointers).

The following properties in the [textStyle](../api/linear-gauge/pointerModel/#textstyle) property can be used to set the text style for the text pointer.

* [fontFamily](../api/linear-gauge/textStyleModel/#fontfamily) - It is used to set the font family for the text pointer.
* [fontStyle](../api/linear-gauge/textStyleModel/#fontstyle) - It is used to set the font style for the text pointer.
* [fontWeight](../api/linear-gauge/textStyleModel/#fontweight) - It is used to set the font weight for the text pointer.
* [size](../api/linear-gauge/textStyleModel/#size) - It is used to set the font size for the text pointer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs10" %}

**Marker Pointer Customization**

The marker pointer can be customized using the following properties.

* [height](../api/linear-gauge/pointerModel/#height) - To set the height of the pointer.
* [position](../api/linear-gauge/pointerModel/#position) - The position of the pointer can be changed by setting the value as **Inside**, **Outside**, **Cross**, or **Auto**.
* [width](../api/linear-gauge/pointerModel/#width) - To set the width of the pointer.
* [color](../api/linear-gauge/pointerModel/#color) - To set the color of the pointer.
* [placement](../api/linear-gauge/pointerModel/#placement) - To place the pointer in the specified position. By default, the pointer is placed **Far** from the axis. To change the placement, set the [placement](../api/linear-gauge/pointerModel/#placement) property as **Near**, **Center**, or **None**.
* [offset](../api/linear-gauge/pointer/#offset) - To place the pointer with specified distance from the axis.
* [opacity](../api/linear-gauge/pointerModel/#opacity) - To set the opacity of the pointer.
* [animationDuration](../api/linear-gauge/pointerModel/#animationduration) - To specify the duration of the animation in pointer.
* [border](../api/linear-gauge/pointerModel/#border) - To set the color and width for the border of the pointer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs3" %}

### Bar Pointer

The bar pointer is used to track the axis value. The bar pointer starts from the beginning of the gauge and ends at the pointer value. To enable bar pointer set the [type](../api/linear-gauge/pointerModel/#type) property property in [pointer](../api/linear-gauge/axisModel/#pointers) as **Bar**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs4" %}


**Bar pointer customization**

The bar pointer can be customized using following properties.

* [width](../api/linear-gauge/pointerModel/#width) - To set the thickness of the bar pointer.
* [color](../api/linear-gauge/pointerModel/#color) - To set the color of the bar pointer.
* [offset](../api/linear-gauge/pointerModel/#offset) - To place the bar pointer with the specified distance from it's default position.
* [opacity](../api/linear-gauge/pointerModel/#opacity) - To set the opacity of the bar pointer.
* [roundedCornerRadius](../api/linear-gauge/pointerModel/#roundedcornerradius) - To set the corner radius for the bar pointer.
* [border](../api/linear-gauge/pointerModel/#border) - To set the color and width for the border of the pointer.
* [animationDuration](../api/linear-gauge/pointerModel/#animationduration) - To set the duration of the animation in bar pointer.

>Note: The placement property is not applicable for the bar pointer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs5" %}

## Multiple pointers

Multiple pointers can be added to the Linear Gauge by adding multiple [pointer](../api/linear-gauge/pointerModel/) objects in the [pointers](../api/linear-gauge/axisModel/#pointers) and customization for the pointers can be done with the [pointer](../api/linear-gauge/pointerModel/) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs6" %}

## Pointer animation

Pointer is animated on loading the gauge. This can be handled using the [animationDuration](../api/linear-gauge/pointerModel/#animationduration) property. The duration of the animation can be specified in milliseconds.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs7" %}

## Gradient Color

Gradient support allows the addition of multiple colors in the pointers of the Linear Gauge. The following gradient types are supported in the Linear Gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [startValue](../api/linear-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [endValue](../api/linear-gauge/linearGradient/#endvalue) property. The color stop values such as [color](../api/linear-gauge/colorStopModel/#color), [opacity](../api/linear-gauge/colorStopModel/#opacity), and [offset](../api/linear-gauge/colorStopModel/#offset) are set using [colorStop](../api/linear-gauge/linearGradient/#colorstop) property. The linear gradient can be rendered for the pointer in the Linear Gauge by using the below example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs8" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [innerPosition](../api/linear-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [outerPosition](../api/linear-gauge/radialGradient/#outerposition) property. The color stop values such as [color](../api/linear-gauge/colorStopModel/#color), [opacity](../api/linear-gauge/colorStopModel/#opacity), and [offset](../api/linear-gauge/colorStopModel/#offset) are set using [colorStop](../api/linear-gauge/radialGradient/#colorstop) property. The radial gradient can be rendered for the pointer in the Linear Gauge by using the below example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/pointers-cs9" %}

>Note: If we set both gradients, only the linear gradient gets rendered. If we set the [startValue](../api/linear-gauge/linearGradient/#startvalue) and [endValue](../api/linear-gauge/linearGradient/#endvalue) of the [linearGradient](../api/linear-gauge/linearGradient/) as empty strings, then the radial gradient gets rendered in the pointer of the Linear Gauge.
