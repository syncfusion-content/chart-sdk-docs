---
layout: post
title: Gauge user interaction in JavaScript Circular gauge control | Syncfusion
description: Learn here all about Gauge user interaction in Syncfusion JavaScript Circular gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge user interaction 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---


# Gauge user interaction in JavaScript Circular gauge control

## Tooltip for pointers

Circular gauge will displays the pointer details through [tooltip](../api/circular-gauge/tooltipSettings),when the mouse is moved over the pointer.

**Enable Tooltip**

By default, tooltip is not visible. Enable the tooltip by setting [`enable`](../api/circular-gauge/tooltipSettings/#enable-boolean) property to true and injecting `GaugeTooltip` module using `CircularGauge.Inject(GaugeTooltip)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs1" %}

**Template**

Any HTML elements can be displayed in the tooltip by using the [`template`](../api/circular-gauge/tooltipSettings/#template-string) property of the tooltip.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs2" %}

## Tooltip for ranges

Circular gauge displays the information about the ranges through tooltip when hovering the mouse over the ranges. You can enable this feature by setting the type property of tooltip to ‘Range’ in the array collection.

**Range tooltip customization**

To customize the range tooltip, use the `rangeSettings` property in tooltip. The following options are available to customize the range tooltip:

* fill - Specifies the range tooltip fill color.

* textStyle - Specifies the range tooltip text style.

* format - Specifies the range content format.

* template - Specifies the custom template for tooltip.

* enableAnimation - Animates as it moves from one point to another.

* border - Specifies the tooltip border.

* showMouseAtPosition - Displays the position of the tooltip on the cursor position.

## Tooltip for annotation

Circular gauge displays the information about the annotations through tooltip when hovering the mouse over the annotation. You can enable this feature by setting the type property of tooltip to ‘Annotation’ in the array collection.

**Annotation tooltip customization**

To customize the annotation tooltip, use the `annotationSettings` property in tooltip. The following options are available to customize the annotation tooltip:

* fill - Specifies the annotation tooltip fill color.

* textStyle - Specifies the annotation tooltip text style.

* format - Specifies the annotation content format.

* template - Specifies the tooltip content with custom template.

* enableAnimation - Animates as it moves from one point to another.

* border - Specifies the tooltip border.

The following code example shows the tooltip for the ranges and annotation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs3" %}

## Pointer Drag

Pointers can be dragged over the axis value. This can be achieved by clicking and dragging the pointer. To enable or disable the pointer drag, you can use
[`enablePointerDrag`](../api/circular-gauge/#enablepointerdrag-boolean) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-user-interaction-cs4" %}