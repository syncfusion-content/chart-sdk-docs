---
layout: post
title: Events in ASP.NET Core Linear Gauge Component
description: Learn here all about Events in Syncfusion ASP.NET Core Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Events
publishingplatform: chart-sdk
documentation: ug
---


# Events in ASP.NET Core Linear Gauge

This section describes the Linear Gauge component's event that gets triggered when corresponding operations are performed.

## AnimationComplete

When the pointer animation is completed, the [`AnimationComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AnimationComplete) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAnimationCompleteEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/animationComplete/tagHelper %}
{% endhighlight %}
{% endtabs %}



## AnnotationRender

Before the annotation is rendered in the Linear Gauge, the [`AnnotationRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AnnotationRender) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAnnotationRenderEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/annotationRender/tagHelper %}
{% endhighlight %}
{% endtabs %}



## AxisLabelRender

Before each axis label is rendered in the Linear Gauge, the [`AxisLabelRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AxisLabelRender) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAxisLabelRenderEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/axisLabelRender/tagHelper %}
{% endhighlight %}
{% endtabs %}



## BeforePrint

The [`BeforePrint`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_BeforePrint) event is fired before the print begins. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPrintEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/beforePrint/tagHelper %}
{% endhighlight %}
{% endtabs %}



## DragEnd

The [`DragEnd`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragEnd) event will be fired before the pointer drag is completed. To know more about the argument of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragEnd/tagHelper %}
{% endhighlight %}
{% endtabs %}



## DragMove

The [`DragMove`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragMove) event will be fired when the pointer is dragged. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragMove/tagHelper %}
{% endhighlight %}
{% endtabs %}



## DragStart

When the pointer drag begins, the [`DragStart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragStart) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragStart/tagHelper %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseDown

When mouse is pressed down on the gauge, the [`GaugeMouseDown`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseDown) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseDown/tagHelper %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseLeave

When mouse pointer moves over the gauge, the [`GaugeMouseLeave`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseLeave) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseLeave/tagHelper %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseMove

When mouse pointer leaves the gauge, the [`GaugeMouseMove`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseMove) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseMove/tagHelper %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseUp

When the mouse pointer is released over the Linear Gauge, the [`GaugeMouseUp`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseUp) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseUp/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Load

Before the Linear Gauge is loaded, the [`Load`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Load) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iLoadEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/load/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Loaded

After the Linear Gauge has been loaded, the [`Loaded`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Loaded) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iLoadedEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/loaded/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Resized

After the window resizing, the [`Resized`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Resized) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iResizeEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/resized/tagHelper %}
{% endhighlight %}
{% endtabs %}



## TooltipRender

The [`TooltipRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_TooltipRender) event is fired before the tooltip is rendered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iTooltipRenderEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/tooltipRender/tagHelper %}
{% endhighlight %}
{% endtabs %}



## ValueChange

The [`ValueChange`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_ValueChange) event is triggered when the pointer is dragged from one value to another. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/ap/linear-gauge/iValueChangeEventArgs/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/valueChange/tagHelper %}
{% endhighlight %}
{% endtabs %}

