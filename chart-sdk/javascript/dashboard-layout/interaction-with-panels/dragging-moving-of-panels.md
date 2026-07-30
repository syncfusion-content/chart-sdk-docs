---
layout: post
title: Dragging panels in JavaScript Dashboard layout | Syncfusion
description: Learn here all about Dragging of panels in Syncfusion JavaScript Dashboard layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dragging of panels
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Dragging of panels in JavaScript Dashboard layout control

The Dashboard Layout control is equipped with dragging functionality to drag and reorder the panels within the layout. While dragging a panel, a holder will be highlighted below the panel indicating the panel placement on panel drop. This helps the user decide whether to place the panel in the current position or revert to the previous position without disturbing the layout.

If one or more panels collide while dragging, the colliding panels are pushed towards left, right, top, or bottom directions where an adaptive space for the collided panel is available. These position changes of these collided panels will be updated dynamically during the dragging of a panel so the users can conclude whether to place the panel in the current position or not.

While dragging a panel in the Dashboard Layout, the following events are triggered:
  * [`dragStart`](../../api/dashboard-layout#dragstart) - Triggers when panel drag starts.
  * [`drag`](../../api/dashboard-layout#drag) - Triggers when panel is being dragged.
  * [`dragStop`](../../api/dashboard-layout#dragstop) - Triggers when panel drag stops.

The following sample demonstrates dragging and pushing of panels. For example, while dragging panel 0 over panel 1, these panels get collided and push panel 1 towards a feasible direction so that panel 0 gets placed in panel 1's position.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-cs1" %}

## Customizing the dragging handler

By default, the complete panel acts as the handler for dragging the panel such that the dragging action occurs when clicking anywhere over a panel. However, this dragging handler for the panels can be customized using the [`draggableHandle`](../../api/dashboard-layout#draggablehandle) property to restrict the dragging action within a particular element in the panel.

The following sample demonstrates customizing the dragging handler so dragging action of a panel occurs only with the header of the panel.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/drag-handler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/drag-handler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/drag-handler-cs1" %}

## Disable dragging of panels

By default, dragging is enabled in the Dashboard Layout. It can also be disabled with the help of the [`allowDragging`](../../api/dashboard-layout#allowdragging) API. Setting [`allowDragging`](../../api/dashboard-layout#allowdragging) to **false** disables the dragging functionality in the Dashboard Layout.

The following sample demonstrates the Dashboard Layout with dragging disabled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/disable-dragging-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/disable-dragging-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/disable-dragging-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.
