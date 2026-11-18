---
layout: post
title: Events in ASP.NET Core HeatMap Chart | Syncfusion
description: Learn here all about Events in Syncfusion ASP.NET Core HeatMap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Events
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


# Events in ASP.NET Core HeatMap Chart

This section describes the HeatMap chart event, which occurs when the required actions are performed.

## CellClick

When you click on a HeatMap cell, the [cellClick](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellClick) event is triggered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-click/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellClick.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-click/cell-click.cs %}
{% endhighlight %}
{% endtabs %}


## CellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellDoubleClick) event is triggered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-double-click/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellDoubleClick.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-double-click/cell-double-click.cs %}
{% endhighlight %}
{% endtabs %}

## CellRender

The [cellRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellRender) event will be triggered before each HeatMap cell is rendered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellRender.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-render/cell-render.cs %}
{% endhighlight %}
{% endtabs %}

## CellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellSelected) event is triggered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-selected/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellSelected.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/cell-selected/cell-selected.cs %}
{% endhighlight %}
{% endtabs %}

## Created

Once HeatMap has been completely rendered, the [created](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_Created) event is triggered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/created/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Created.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/created/created.cs %}
{% endhighlight %}
{% endtabs %}

## LegendRender

The [legendRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_LegendRender) event is triggered before the legend is rendered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/legend-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="LegendRender.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/legend-render/legend-render.cs %}
{% endhighlight %}
{% endtabs %}


## Load

The [load](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_Load) event is triggered before the HeatMap is rendered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/load/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Load.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/load/load.cs %}
{% endhighlight %}
{% endtabs %}

## Loaded

Once HeatMap is loaded, the [loaded](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_Loaded) event is triggered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/loaded/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Loaded.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/loaded/loaded.cs %}
{% endhighlight %}
{% endtabs %}


## Resized

When the window is resized, the [resized](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_Resized) event is triggered to notify the resize of the HeatMap.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/resized/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Resized.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/resized/resized.cs %}
{% endhighlight %}
{% endtabs %}


## TooltipRender

The [tooltipRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_TooltipRender) event is triggered before the tooltip is rendered on the HeatMap cell.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/tooltip-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TooltipRender.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/tooltip-render/tooltip-render.cs %}
{% endhighlight %}
{% endtabs %}

### Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the `data` property in the [`tooltipRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_TooltipRender) event arguments. The `value` property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/tooltip-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TooltipData.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/events/tooltip-data/tooltip-data.cs %}
{% endhighlight %}
{% endtabs %}

