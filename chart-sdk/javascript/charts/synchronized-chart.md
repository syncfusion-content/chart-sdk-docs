---
layout: post
title: Synchronized Charts in JavaScript Chart control | Syncfusion
description: Learn here all about Synchronized Charts in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Synchronized charts 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Synchronized Charts in JavaScript Chart control

Synchronized charts allow multiple chart instances to share common interactions so that actions performed on one chart are reflected across the others. This approach is useful for comparing related datasets and analyzing trends consistently across multiple visualizations.

## Tooltip synchronization

The tooltip can be synchronized across multiple charts by using the [`showTooltip`](../api/chart#showtooltip) and [`hideTooltip`](../api/chart#hidetooltip) methods. When the user hovers over a data point in one chart, the `showTooltip` method can be invoked for the other charts to display the corresponding tooltip information simultaneously.

In the `showTooltip` method, specify the following parameters programmatically to enable the tooltip for a specific chart:

* `x` – The x-value of the data point or the x-coordinate.
* `y` – The y-value of the data point or the y-coordinate.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs45/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs45/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs45" %}

## Crosshair synchronization

The crosshair can be synchronized across multiple charts by using the [`showCrosshair`](../api/chart#showcrosshair) and [`hideCrosshair`](../api/chart#hidecrosshair) methods. When the user moves the pointer over one chart, calling the `showCrosshair` method on the other charts aligns the crosshair position across all synchronized charts, making data comparison easier.

In the `showCrosshair` method, specify the following parameters to render the crosshair for a particular chart:

* `x` – Specifies the x-value of the data point or the x-coordinate.
* `y` – Specifies the y-value of the data point or the y-coordinate.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs46/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs46/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs46" %}

## Zooming synchronization

Zoom levels can be synchronized across multiple charts by using the [`zoomComplete`](../api/chart/iZoomCompleteEventArgs) event. In the `zoomComplete` event, retrieve the [`zoomFactor`](../api/chart/iZoomCompleteEventArgs#currentzoomfactor) and [`zoomPosition`](../api/chart/iZoomCompleteEventArgs#currentzoomposition) values from the zoomed chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs47/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs47/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs47" %}

## Selection synchronization

Selection can be synchronized across multiple charts by using the [`selectionComplete`](../api/chart/iSelectionCompleteEventArgs) event. In the `selectionComplete` event, retrieve the selected data values or region from the active chart and apply the same selection state to the other charts.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs48/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs48/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs48" %}

## See Also

* [Synchronized Hover Between EJ2 JavaScript Charts](https://support.syncfusion.com/kb/article/21479/how-to-synchronized-hover-between-ej2-javascript-charts)