---
layout: post
title: User interaction in JavaScript Chart control | Syncfusion
description: Learn here all about User interaction in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: User interaction 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---


# User interaction in JavaScript Chart control

<!-- markdownlint-disable MD036 -->

## Tooltip

<!-- markdownlint-disable MD036 -->

Chart will display details about the points through tooltip, when the mouse is moved over the point.

**Enable Tooltip for Data Point**

By default, tooltip is not visible. Enable the tooltip by setting [`enable`](../api/chart/tooltipSettings/#enable) property to true and by injecting `Tooltip` module using `Chart.Inject(Tooltip)`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs22" %}

<!-- markdownlint-disable MD013 -->

**Format the Tooltip**

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs23/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs23" %}

**Tooltip Template**

Any HTML elements can be displayed in the tooltip by using the ‘template’ property of the tooltip. You can use the ${x} and ${y} as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs24" %}

**Customize the Appearance of Tooltip**

The [`fill`](../api/chart/tooltipSettings/#fill) and [`border`](../api/chart/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](../api/chart/tooltipSettings/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs25" %}

## Zooming  and Panning

**Enable Zooming**

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](../api/chart/zoomSettingsModel/#enableselectionzooming) property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](../api/chart/zoomSettingsModel/#enablemousewheelzooming) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](../api/chart/zoomSettingsModel/#enablepinchzooming) property to true in `zoomSettings`, you can   zoom the chart through pinch gesture in touch enabled devices.

>Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11, Chrome and Opera browsers support multi-touch in desktop devices.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs26" %}

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons. Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

**Modes of Zooming**

The [`mode`](../api/chart/zoomSettingsModel/#mode) property in zoomSettings specifies whether the chart is allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X- Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY – Allows us to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs27/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs27" %}

**Customizing Zooming Toolbar**

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show your desire tools in the toolbar using [`toolbarItems`](../api/chart/zoomSettingsModel/#toolbaritems) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs28/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs28" %}

>Note: To use zooming feature, we need to inject `Zoom` module `Chart.Inject(Zoom)` method.

## Crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

**Enable Crosshair**

Crosshair lines can be enabled by using [`enable`](../api/chart/crosshairSettingsModel/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](../api/chart/crosshairTooltipModel/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs29/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs29" %}

**Customization**

The [`fill`](../api/chart/crosshairTooltipModel/#fill) and [`textStyle`](../api/chart/crosshairTooltipModel/#textstyle) prop property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](../api/chart/crosshairSettingsModel/#line) property in the crosshair.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs30/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs30/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs30" %}

>Note: To use crosshair feature, we need to inject `Crosshair` module `Chart.Inject(Crosshair)` method.

## Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `Crosshair` module and `Tooltip` module using
`Chart.Inject(Crosshair, Tooltip)`.

Trackball can be enabled by setting the [`enable`](../api/chart/crosshairSettingsModel/#enable) property of the crosshair to true and
[`shared`](../api/chart/tooltipSettingsModel/#shared) property in `tooltip` to true in chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs31/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs31" %}

## Selection

Chart provides selection support for the series and its data points on mouse click.

>When Mouse is clicked on the data points, the corresponding series legend also will be selected.

We have different types of selection mode for selecting a data.

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

**Point**

You can select a point, by setting `selectionMode` to point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs32/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs32/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs32" %}

**Series**

You can select a series, by setting `selectionMode` to series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs33/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs33/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs33" %}

**Cluster**

You can select the points that corresponds to the same index in all the series, by setting `selectionMode` to cluster.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs34/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs34" %}

**DragXY, DragX and DragY**

To fetch a collection of data under a particular region, you have to set `selectionMode` as `DragXY`.

* DragXY - Allow us to select data with respect to both horizontal and vertical axis.
* DragX - Allow us to select data with respect to horizontal axis.
* DragY - Allow us to select data with respect to vertical axis.

The selected data’s are returned as an array collection in the [`dragComplete`](../api/chart/chartModel/#dragcomplete) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs35/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs35" %}

**Selection Type**

You can select multiple points or series, by enabling the [`isMultiSelect`](../api/chart/chartModel/#ismultiselect)
property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs36/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs36" %}

**Customizing Selection Style**

You can apply custom style to selected points or series with [`selectionStyle`](../api/chart/series/#selectionstyle) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs37/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs37" %}

**Selection on Load**

You can able to select a point or series programmatically on a chart using [`selectedDataIndexes`](../api/chart/chartModel/#selecteddataindexes) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs38/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs38/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs38" %}
