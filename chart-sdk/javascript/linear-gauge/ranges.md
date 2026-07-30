---
layout: post
title: Ranges in JavaScript Linear gauge control | Syncfusion
description: Learn here all about Ranges in Syncfusion JavaScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Ranges 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Ranges in JavaScript Linear gauge control

Range is the set of values in the axis. The range can be defined using the [`start`](../api/linear-gauge/rangeModel/#start) and [`end`](../api/linear-gauge/rangeModel/#end) properties in the [`ranges`](../api/linear-gauge/rangeModel/). Any number of ranges can be added to the Linear Gauge using the [`ranges`](../api/linear-gauge/axisModel/#ranges).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs1" %}

## Customizing the range

Ranges can be customized using the following properties in [`ranges`](../api/linear-gauge/rangeModel/).

* [`startWidth`](../api/linear-gauge/rangeModel/#startwidth) - To set the thickness of the range at the start axis value.
* [`endWidth`](../api/linear-gauge/rangeModel/#endwidth) -  To set the thickness of the range at the end axis value.
* [`color`](../api/linear-gauge/rangeModel/#color) - Customize the range color.
* [`position`](../api/linear-gauge/rangeModel/#position) -  To place the range. By default, the range is placed outside of the axis. To change the position, this property can be set as "**Inside**", "**Outside**", "**Cross**", or "**Auto**".
* [`Offset`](../api/linear-gauge/rangeModel/#offset) - To place the range with specified distance from the axis.
* [`border`](../api/linear-gauge/rangeModel/#border) - Customize color and width of range border.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs2" %}

## Setting the range color of the labels

To set the color of the labels like the range color, set the [`useRangeColor`](../api/linear-gauge/labelModel/#userangecolor) property as **true** in the [`labelStyle`](../api/linear-gauge/axisModel/#labelstyle).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs3" %}

## Multiple ranges

Multiple ranges can be added to the Linear Gauge by adding collections of [`range`](../api/linear-gauge/rangeModel/) in the [`ranges`](../api/linear-gauge/axisModel/#ranges) and customization of ranges can be done with [`range`](../api/linear-gauge/rangeModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs4" %}

## Gradient Color

Gradient support allows the addition of multiple colors in the range. The following gradient types are supported in the Linear Gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear-gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [`startValue`](../api/linear-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](../api/linear-gauge/linearGradient/#endvalue) property. The color stop values such as [`color`](../api/linear-gauge/colorStopModel/#color), [`opacity`](../api/linear-gauge/colorStopModel/#opacity), and [`offset`](../api/linear-gauge/colorStopModel/#offset) to be defined in [`colorStop`](../api/linear-gauge/linearGradient/#colorstop).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs5" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](../api/linear-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](../api/linear-gauge/radialGradient/#outerposition) property. The color stop values such as [`color`](../api/linear-gauge/colorStopModel/#color), [`opacity`](../api/linear-gauge/colorStopModel/#opacity), and [`offset`](../api/linear-gauge/colorStopModel/#offset) to be defined in[`colorStop`](../api/linear-gauge/radialGradient/#colorstop).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/ranges-cs6" %}

>If we set both gradients for the range, only the linear gradient gets rendered. If we set the [`startValue`](../api/linear-gauge/linearGradient/#startvalue) and [`endValue`](../api/linear-gauge/linearGradient/#endvalue) of the [`linearGradient`](../api/linear-gauge/linearGradient/) as empty strings, then the radial gradient gets rendered in the pointer of the Linear Gauge.
