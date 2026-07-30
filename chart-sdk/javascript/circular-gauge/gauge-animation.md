---
layout: post
title: Animation in JavaScript Circular Gauge control | Syncfusion
description: Learn here all about animation in the Syncfusion JavaScript Circular Gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Circular Gauge
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Animation in JavaScript Circular Gauge control

All of the elements in the Circular Gauge, such as the axis lines, ticks, labels, ranges, pointers, and annotations, can be animated sequentially by using the [animationDuration](../api/circular-gauge#animationduration) property. The animation for the Circular Gauge is enabled when the `animationDuration` property is set to an appropriate value in milliseconds, providing a smooth rendering effect for the control. If the `animationDuration` property is set to **0**, which is the default value, the animation effect is disabled. If the animation is enabled, the control will behave in the following order.

1. The axis line will be animated in the rendering direction (clockwise or anticlockwise).
2. Each tick line and label will then be animated.
3. If available, ranges will be animated.
4. If available, pointers will be animated in the same way as [pointer animation](https://ej2.syncfusion.com/javascript/documentation/circular-gauge/gauge-pointers#animation).
5. If available, annotations will be animated.

The animation of the Circular Gauge is demonstrated in the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-animation-cs1" %}

> Only the pointer of the Circular Gauge can be animated individually, not the axis lines, ticks, labels, ranges, and annotations. You can refer this [link](https://ej2.syncfusion.com/javascript/documentation/circular-gauge/gauge-pointers#animation) to enable only pointer animation.

