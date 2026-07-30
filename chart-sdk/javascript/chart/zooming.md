---
layout: post
title: Zooming in JavaScript Chart control | Syncfusion
description: Learn here all about Zooming in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Zooming 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Zooming in JavaScript Chart control

## Enable zooming

The chart supports zooming through the following three interaction methods:

* **Selection** – By setting [`enableSelectionZooming`](../api/chart/zoomSettingsModel) to **true** in `zoomSettings`, zooming can be performed using a rubber-band selection.
* **Mouse wheel** – By setting [`enableMouseWheelZooming`](../api/chart/zoomSettingsModel) to **true** in `zoomSettings`, the chart can be zoomed in and out by scrolling the mouse wheel.
* **Pinch** – By setting [`enablePinchZooming`](../api/chart/zoomSettingsModel) to **true** in `zoomSettings`, zooming can be performed using pinch gestures on touch-enabled devices.

> Pinch zooming is supported only in browsers that support multi-touch gestures.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs39" %}

After zooming, a toolbar is displayed that includes **zoom**, **zoomin**, **zoomout**, **pan**, and **reset** buttons.  
Selecting **Pan** allows the chart to be panned, and selecting **Reset** restores the chart to its original zoom state.

## Modes

The [`mode`](../api/chart/zoomSettingsModel) property in `zoomSettings` specifies whether zooming can be applied along the horizontal axis, vertical axis, or both. The default value is **XY**.

The supported zooming modes are:

* **X** – Allows zooming along the horizontal axis.
* **Y** – Allows zooming along the vertical axis.
* **XY** – Allows zooming along both horizontal and vertical axes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs40" %}

## Toolbar

By default, the **zoomin**, **zoomout**, **pan**, and **reset** buttons are displayed when the chart is zoomed. The toolbar contents can be customized by using the [`toolbarItems`](../api/chart/zoomSettingsModel#toolbaritems) property.  

Additionally, the zooming toolbar can be displayed during initial rendering by setting the [`showToolbar`](../api/chart/zoomSettingsModel#showtoolbar) property to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs41" %}

### Toolbar customization

The zoom toolbar position can be customized by using the [`toolbarPosition`](../api/chart/zoomSettingsModel#toolbarposition) property. This property supports horizontal alignments (**Near**, **Center**, and **Far**) and vertical alignments (**Top**, **Middle**, and **Bottom**). The default values are **Far** for horizontal alignment and **Top** for vertical alignment.

For precise placement, the [`x`](../api/chart/toolbarPositionModel#x) and [`y`](../api/chart/toolbarPositionModel#y) properties can be used.  
Enabling the [`draggable`](../api/chart/toolbarPositionModel#draggable) property allows the toolbar to be repositioned freely within the chart area.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs51/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs51/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs51" %}


## Enable pan

By using the [`enablePan`](../api/chart/zoomSettingsModel) property, the zoomed chart can be panned without using toolbar items.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs42/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs42/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs42" %}

## Enable scrollbar

By using the [`enableScrollbar`](../api/chart/zoomSettingsModel#enablescrollbar) property, a scrollbar can be displayed for the zoomed chart. This scrollbar supports both zooming and panning interactions.

Scrollbar appearance can be customized using properties within [`scrollbarSettings`](../api/chart/scrollbarSettings). For example:
- [`trackColor`](../api/chart/scrollbarSettings#trackcolor) and [`trackRadius`](../api/chart/scrollbarSettings#trackradius) control the track appearance.
- [`scrollbarColor`](../api/chart/scrollbarSettings#scrollbarcolor) and [`scrollbarRadius`](../api/chart/scrollbarSettings#scrollbarradius) customize the scroller.
- Zooming through the scrollbar can be enabled or disabled using [`enableZoom`](../api/chart/scrollbarSettings#enablezoom).
- The grip color and scrollbar height can be customized using [`gripColor`](../api/chart/scrollbarSettings#gripcolor) and [`height`](../api/chart/scrollbarSettings#height).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs43/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs43/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs43" %}

### Position

The [`position`](../api/chart/scrollbarPosition) property specifies where the scrollbar is rendered. By default, both vertical and horizontal scrollbars are placed near their respective axes.

The available positions are:

* **Default** – `placeNextToAxisLine`
* **Horizontal scrollbar** – `Top`, `Bottom`
* **Vertical scrollbar** – `Left`, `Right`

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs53/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs53/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs53" %}

## Enable animation

Use the [`enableAnimation`](../api/chart/zoomSettingsModel#enableanimation) property to apply smooth animation effects during zoom operations.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/animation-cs/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/animation-cs/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/animation-cs" %}

## Auto interval on zooming

By using the [`enableAutoIntervalOnZooming`](../api/chart/axis#enableautointervalonzooming) property, the axis interval is calculated automatically based on the current zoomed range.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs44/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs44/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs44" %}

>Note: To use the zooming feature, inject `Zoom` module `Chart.Inject(Zoom)` method.
