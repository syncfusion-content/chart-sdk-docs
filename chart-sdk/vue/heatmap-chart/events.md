---
layout: post
title: Events in Vue HeatMap Chart | Syncfusion
description: Handle cell interactions in the Syncfusion Vue HeatMap Chart control using events like cellClick, cellRender, cellSelected, loaded, resized, and tooltipRender.
control: Events 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Events in Vue HeatMap Chart

This section describes the HeatMap chart event, which occurs when the required actions are performed.

## cellClick

When you click on a HeatMap cell, the [cellClick](https://ej2.syncfusion.com/vue/documentation/api/heatmap#cellclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iCellClickEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs1" %}

## cellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](https://ej2.syncfusion.com/vue/documentation/api/heatmap#celldoubleclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iCellClickEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs2" %}

## cellRender

The [cellRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap#cellrender) event will be triggered before each HeatMap cell is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iCellEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs3" %}

## cellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](https://ej2.syncfusion.com/vue/documentation/api/heatmap#cellselected) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iSelectedEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs4" %}

## created

Once HeatMap has been completely rendered, the [created](https://ej2.syncfusion.com/vue/documentation/api/heatmap#created) event is triggered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs5" %}

## legendRender

The [legendRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap#legendrender) event is triggered before the legend is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iLegendRenderEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs6" %}

## load

The [load](https://ej2.syncfusion.com/vue/documentation/api/heatmap#load) event is triggered before the HeatMap is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iLoadedEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs7" %}

## loaded

Once HeatMap is loaded, the [loaded](https://ej2.syncfusion.com/vue/documentation/api/heatmap#loaded) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iLoadedEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs8" %}

## resized

When the window is resized, the [resized](https://ej2.syncfusion.com/vue/documentation/api/heatmap#resized) event is triggered to notify the resize of the HeatMap. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iResizeEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs9" %}

## tooltipRender

The [tooltipRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap#tooltiprender) event is triggered before the tooltip is rendered on the HeatMap cell. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iTooltipEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs10" %}

### Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iTooltipEventArgs#data) property in the [tooltipRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap#tooltiprender) event arguments. The [`value`](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iTooltipEventArgs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs11" %}
