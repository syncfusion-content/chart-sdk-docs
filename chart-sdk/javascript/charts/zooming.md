---
layout: post
title: Zooming in JavaScript Charts | Syncfusion
description: Learn here all about Zooming in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Zooming in JavaScript Charts

## Zoom methods

The Chart supports three zooming methods. Each option defaults to `false`:

- **Selection zooming:*- Set [`enableSelectionZooming`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enableselectionzooming) to `true`, and drag a rectangular region in the plot area.
- **Mouse-wheel zooming:*- Set [`enableMouseWheelZooming`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enablemousewheelzooming) to `true` to zoom with the mouse wheel.
- **Pinch zooming:*- Set [`enablePinchZooming`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enablepinchzooming) to `true` to zoom with a multi-touch pinch gesture.

> **Note:*- Pinch zooming requires multi-touch support.

Set [`enableDeferredZooming`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enabledeferredzooming) to `true` to apply selection zooming after pointer release. This option requires `enableSelectionZooming: true` and defaults to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs39" %}

After zooming, the toolbar can display `Zoom`, `ZoomIn`, `ZoomOut`, `Pan`, and `Reset`. Select `Pan` to move through a zoomed range, or select `Reset` to restore the original view.

## Zoom mode

Use [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#mode) to control the zoom direction. The default value is `XY`.

- `X`: Horizontal axis.
- `Y`: Vertical axis.
- `XY`: Both axes.

Selection zooming requires `enableSelectionZooming: true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs40" %}

## Zoom toolbar

The default [`toolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#toolbaritems) are `Zoom`, `ZoomIn`, `ZoomOut`, `Pan`, and `Reset`. Set [`showToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#showtoolbar) to `true` to display the toolbar initially; the default is `false`. Customize the list through `zoomSettings.toolbarItems`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs41" %}

### Toolbar position

Use [`toolbarPosition`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#toolbarposition) to configure nested horizontal and vertical alignment values and `x` and `y` offsets. If supported by the installed version, set `draggable` to `true` to drag the toolbar within the Chart area.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs51/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs51/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs51" %}


## Panning

Set [`enablePan`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enablepan) to `true` to pan without selecting the toolbar Pan item. The default is `false`; pan after the Chart is zoomed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs42/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs42/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs42" %}

## Zoom scrollbar

Set [`enableScrollbar`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enablescrollbar) to `true` to display scrollbars for zoomed axes. The default is `false`.

Configure appearance on the relevant axis through [`scrollbarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/scrollbarsettings). The default `height` is `16`, `enableZoom` is `true`, and radius values are `0`. To show an initial scrollbar, set an axis `zoomFactor` below `1`, enable the scrollbar, and initialize a zoomed state.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs43/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs43/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs43" %}

### Scrollbar position

Set axis [`scrollbarSettings.position`](https://ej2.syncfusion.com/javascript/documentation/api/chart/scrollbarsettings#position):

- `PlaceNextToAxisLine`: Beside the axis line; default.
- `Top` or `Bottom`: Horizontal scrollbar.
- `Left` or `Right`: Vertical scrollbar.

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

Set [`enableAnimation`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings#enableanimation) to `true` to animate zoom operations. The default is `false`.

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

Set axis [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axismodel#enableautointervalonzooming) to `true` to recalculate the interval for the current zoomed range.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs44/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs44/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs44" %}

## Troubleshooting

- If selection zooming does not work, enable `enableSelectionZooming` and drag inside the plot area.
- If the toolbar is missing, enable a zoom method or set `showToolbar` to `true`.
- If panning does not work, zoom first and enable `enablePan` or select `Pan`.
- If the initial scrollbar is missing, set an axis `zoomFactor` below `1`, enable the scrollbar, and initialize a zoomed state.
- If pinch zooming does not work, verify browser and device multi-touch support.

## See also

- [ZoomSettings API](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomsettings)
- [ScrollbarSettings API](https://ej2.syncfusion.com/javascript/documentation/api/chart/scrollbarsettings)
- [Initial scrollbar](./how-to/initial-scrollbar)
- [Synchronized charts](./synchronized-chart)
- [Accessibility](./accessibility)
- [User interaction](./user-interaction)
- [Selection](./selection)
- [Crosshair and trackball](./cross-hair-and-track-ball)
