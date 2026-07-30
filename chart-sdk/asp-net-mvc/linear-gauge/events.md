---
layout: post
title: Events in ASP.NET MVC Linear Gauge Component
description: Learn here all about Events in Syncfusion ASP.NET MVC Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Events
publishingplatform: chart-sdk
documentation: ug
---


# Events in ASP.NET MVC Linear Gauge

This section describes the Linear Gauge component's event that gets triggered when corresponding operations are performed.

## AnimationComplete

When the pointer animation is completed, the [`AnimationComplete`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AnimationComplete) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAnimationCompleteEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/animationComplete/razor %}
{% endhighlight %}
{% endtabs %}



## AnnotationRender

Before the annotation is rendered in the Linear Gauge, the [`AnnotationRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AnnotationRender) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAnnotationRenderEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/annotationRender/razor %}
{% endhighlight %}
{% endtabs %}



## AxisLabelRender

Before each axis label is rendered in the Linear Gauge, the [`AxisLabelRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AxisLabelRender) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAxisLabelRenderEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/axisLabelRender/razor %}
{% endhighlight %}
{% endtabs %}



## BeforePrint

The [`BeforePrint`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_BeforePrint) event is fired before the print begins. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPrintEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/beforePrint/razor %}
{% endhighlight %}
{% endtabs %}



## DragEnd

The [`DragEnd`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragEnd) event will be fired before the pointer drag is completed. To know more about the argument of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/dragEnd/razor %}
{% endhighlight %}
{% endtabs %}



## DragMove

The [`DragMove`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragMove) event will be fired when the pointer is dragged. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/dragMove/razor %}
{% endhighlight %}
{% endtabs %}



## DragStart

When the pointer drag begins, the [`DragStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragStart) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/dragStart/razor %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseDown

When mouse is pressed down on the gauge, the [`GaugeMouseDown`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseDown) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/gaugeMouseDown/razor %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseLeave

When mouse pointer moves over the gauge, the [`GaugeMouseLeave`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseLeave) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/gaugeMouseLeave/razor %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseMove

When mouse pointer leaves the gauge, the [`GaugeMouseMove`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseMove) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/gaugeMouseMove/razor %}
{% endhighlight %}
{% endtabs %}



## GaugeMouseUp

When the mouse pointer is released over the Linear Gauge, the [`GaugeMouseUp`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseUp) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/gaugeMouseUp/razor %}
{% endhighlight %}
{% endtabs %}



## Load

Before the Linear Gauge is loaded, the [`Load`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Load) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iLoadEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/load/razor %}
{% endhighlight %}
{% endtabs %}



## Loaded

After the Linear Gauge has been loaded, the [`Loaded`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Loaded) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iLoadedEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/loaded/razor %}
{% endhighlight %}
{% endtabs %}



## Resized

After the window resizing, the [`Resized`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Resized) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iResizeEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/resized/razor %}
{% endhighlight %}
{% endtabs %}



## TooltipRender

The [`TooltipRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_TooltipRender) event is fired before the tooltip is rendered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iTooltipRenderEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/tooltipRender/razor %}
{% endhighlight %}
{% endtabs %}



## ValueChange

The [`ValueChange`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_ValueChange) event is triggered when the pointer is dragged from one value to another. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/ap/linear-gauge/iValueChangeEventArgs/).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/linear-gauge/events/valueChange/razor %}
{% endhighlight %}
{% endtabs %}

