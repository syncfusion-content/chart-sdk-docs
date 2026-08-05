---
layout: post
title: Events in TypeScript HeatMap chart control | Syncfusion
description: Learn here all about events in Syncfusion TypeScript HeatMap chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Events 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Events in TypeScript HeatMap chart control

This section describes the HeatMap chart control event, which occurs when the required actions are performed.

## cellClick

When you click on a HeatMap cell, the [cellClick](../api/heatmap/#cellclick/) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iCellClickEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs1" %}

## cellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](../api/heatmap/#celldoubleclick/) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iCellClickEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs2" %}

## cellRender

The [cellRender](../api/heatmap/#cellrender) event will be triggered before each HeatMap cell is rendered. To know more about arguments of this event, refer [here](../api/heatmap/iCellEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs3" %}

## cellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](../api/heatmap/#cellselected/) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iSelectedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs4" %}

## created

Once HeatMap has been completely rendered, the [created](../api/heatmap/#created) event is triggered.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs10" %}

## legendRender

The [legendRender](../api/heatmap/#legendrender/) event is triggered before the legend is rendered. To know more about arguments of this event, refer [here](../api/heatmap/iLegendRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs5" %}

## load

The [load](../api/heatmap/#load) event is triggered before the HeatMap is rendered. To know more about arguments of this event, refer [here](../api/heatmap/iLoadedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs6" %}

## loaded

Once HeatMap is loaded, the [loaded](../api/heatmap/#loaded/) event is triggered. To know more about arguments of this event, refer [here](../api/heatmap/iLoadedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs7" %}

## resized

When the window is resized, the [resized](../api/heatmap/#resized/) event is triggered to notify the resize of the HeatMap. To know more about arguments of this event, refer [here](../api/heatmap/iResizeEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs8" %}

## tooltipRender

The [tooltipRender](../api/heatmap/#tooltiprender/) event is triggered before the tooltip is rendered on the HeatMap cell. To know more about arguments of this event, refer [here](../api/heatmap/iTooltipEventArgs/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs9" %}
