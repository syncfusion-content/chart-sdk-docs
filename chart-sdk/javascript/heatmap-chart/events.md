---
layout: post
title: Events in JavaScript HeatMap Chart | Syncfusion
description: Handle cellClick, cellDoubleClick, cellRender, cellSelected, created, legendRender, load, loaded, resized, and tooltipRender events in JavaScript HeatMap Chart.
platform: chart-sdk
control: Events 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Events in JavaScript HeatMap Chart

This section describes the HeatMap chart control event, which occurs when the required actions are performed.

## cellClick

When you click on a HeatMap cell, the [cellClick](../api/heatmap#cellclick) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iCellClickEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs1" %}

## cellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](../api/heatmap#celldoubleclick) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iCellClickEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs2" %}

## cellRender

The [cellRender](../api/heatmap#cellrender) event will be triggered before each HeatMap cell is rendered. To know more about arguments of this event, refer [here](../api/heatmap/iCellEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs3" %}

## cellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](../api/heatmap#cellselected) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iSelectedEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs4" %}

## created

Once HeatMap has been completely rendered, the [created](../api/heatmap#created) event is triggered.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs10" %}

## legendRender

The [legendRender](../api/heatmap#legendrender) event is triggered before the legend is rendered. To know more about arguments of this event, refer [here](../api/heatmap/iLegendRenderEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs5" %}

## load

The [load](../api/heatmap#load) event is triggered before the HeatMap is rendered. To know more about arguments of this event, refer [here](../api/heatmap/iLoadedEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs6" %}

## loaded

Once HeatMap is loaded, the [loaded](../api/heatmap#loaded) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iLoadedEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs7" %}

## resized

When the window is resized, the [resized](../api/heatmap#resized) event is triggered to notify the resize of the HeatMap. To know more about arguments of this event, refer [here](../api/heatmap/iResizeEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs8" %}

## tooltipRender

The [tooltipRender](../api/heatmap#tooltiprender) event is triggered before the tooltip is rendered on the HeatMap cell. To know more about arguments of this event, refer [here](../api/heatmap/iTooltipEventArgs).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs9" %}

### Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/javascript/documentation/api/heatmap/itooltipeventargs#data) property in the [tooltipRender](https://ej2.syncfusion.com/javascript/documentation/api/maps/ishapeselectedeventargs#name) event arguments. The [`value`](https://ej2.syncfusion.com/javascript/documentation/api/heatmap/itooltipeventargs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/events-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/events-cs11" %}
