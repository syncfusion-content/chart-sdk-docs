---
layout: post
title: Events in React HeatMap Chart | Syncfusion
description: Handle React HeatMap Chart events such as cellClick, cellRender, cellSelected, and created to react to user interaction and cell lifecycle.
control: Events 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Events in React HeatMap Chart

This section describes the HeatMap chart event, which occurs when the required actions are performed.

## cellClick

When you click on a HeatMap cell, the [cellClick](https://ej2.syncfusion.com/react/documentation/api/heatmap#cellclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/icellclickeventargs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs1" %}

## cellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](https://ej2.syncfusion.com/react/documentation/api/heatmap#celldoubleclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iCellClickEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs2" %}

## cellRender

The [cellRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#cellrender) event will be triggered before each HeatMap cell is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iCellEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/preview-sample/events-cs3" %}

## cellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](https://ej2.syncfusion.com/react/documentation/api/heatmap#cellselected) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iSelectedEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs4" %}

## created

Once HeatMap has been completely rendered, the [created](https://ej2.syncfusion.com/react/documentation/api/heatmap#created) event is triggered.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs5" %}

## legendRender

The [legendRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#legendrender) event is triggered before the legend is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iLegendRenderEventArgs).


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs6" %}

## load

The [load](https://ej2.syncfusion.com/react/documentation/api/heatmap#load) event is triggered before the HeatMap is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iLoadedEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs7" %}

## loaded

Once HeatMap is loaded, the [loaded](https://ej2.syncfusion.com/react/documentation/api/heatmap#loaded) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iLoadedEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs8" %}

## resized

When the window is resized, the [resized](https://ej2.syncfusion.com/react/documentation/api/heatmap#resized) event is triggered to notify the resize of the HeatMap. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iResizeEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs9" %}

## tooltipRender

The [tooltipRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#tooltiprender) event is triggered before the tooltip is rendered on the HeatMap cell. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/react/documentation/api/heatmap/iTooltipEventArgs).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs10" %}

### Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/react/documentation/api/heatmap/iTooltipEventArgs#data) property in the [tooltipRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#tooltiprender) event arguments. The [`value`](https://ej2.syncfusion.com/react/documentation/api/heatmap/iTooltipEventArgs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs11" %}
