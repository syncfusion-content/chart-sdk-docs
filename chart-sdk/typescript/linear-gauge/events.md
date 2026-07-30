---
layout: post
title: Events in TypeScript Linear gauge control | Syncfusion
description: Learn here all about Events in Syncfusion TypeScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Events 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Events in TypeScript Linear gauge control

This section describes the Linear Gauge component's event that gets triggered when corresponding operations are performed.

## animationComplete

When the pointer animation is completed, the [`animationComplete`](../api/linear-gauge/#animationcomplete) event will be triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iAnimationCompleteEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs1" %}

## annotationRender

Before the annotation is rendered in the Linear Gauge, the [`annotationRender`](../api/linear-gauge/#annotationrender) event will be triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iAnnotationRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs2" %}

## axisLabelRender

Before each axis label is rendered in the Linear Gauge, the [`axisLabelRender`](../api/linear-gauge/#axislabelrender) event is fired. To know more about the arguments of this event, refer [here](../api/linear-gauge/iAxisLabelRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs3" %}

## beforePrint

The [`beforePrint`](../api/linear-gauge/#beforeprint) event is fired before the print begins. To know more about the arguments of this event, refer [here](../api/linear-gauge/iPrintEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-print-cs1" %}

## dragEnd

The [`dragEnd`](../api/linear-gauge/#dragend) event will be fired before the pointer drag is completed. To know more about the argument of this event, refer [here](../api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs4" %}

## dragMove

The [`dragMove`](../api/linear-gauge/#dragmove) event will be fired when the pointer is dragged. To know more about the arguments of this event, refer [here](../api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs5" %}

## dragStart

When the pointer drag begins, the [`dragStart`](../api/linear-gauge/#dragstart) event is triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs6" %}

## gaugeMouseDown

When mouse is pressed down on the gauge, the [`gaugeMouseDown`](../api/linear-gauge/#gaugemousedown) event is triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs7" %}

## gaugeMouseLeave

When mouse pointer moves over the gauge, the [`gaugemouseleave`](../api/linear-gauge/#gaugemouseleave) event is triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs8" %}

## gaugeMouseMove

When mouse pointer leaves the gauge, the [`gaugeMouseMove`](../api/linear-gauge/#gaugemousemove) event is triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs9" %}

## gaugeMouseUp

When the mouse pointer is released over the Linear Gauge, the [`gaugeMouseUp`](../api/linear-gauge/#gaugemouseup) event is triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs10" %}

## load

Before the Linear Gauge is loaded, the [`load`](../api/linear-gauge/#load) event is fired. To know more about the arguments of this event, refer [here](../api/linear-gauge/iLoadEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs11" %}

## loaded

After the Linear Gauge has been loaded, the [`loaded`](../api/linear-gauge/#loaded) event will be triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iLoadedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs12" %}

## resized

After the window resizing, the [`resized`](../api/linear-gauge/#resized) event is triggered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iResizeEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs13" %}

## tooltipRender

The [`tooltipRender`](../api/linear-gauge/#tooltiprender) event is fired before the tooltip is rendered. To know more about the arguments of this event, refer [here](../api/linear-gauge/iTooltipRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs14" %}

## valueChange

The [`valueChange`](../api/linear-gauge/#valuechange) event is triggered when the pointer is dragged from one value to another. To know more about the arguments of this event, refer [here](../api/linear-gauge/iValueChangeEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/events-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/events-cs15" %}