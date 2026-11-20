---
layout: post
title: Tooltip in ASP.NET Core HeatMap Chart | Syncfusion
description: Learn here all about Tooltip in Syncfusion ASP.NET Core Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


# Tooltip in ASP.NET Core HeatMap Chart

Tooltip is used to provide the details of the heatmap cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default tooltip

You can enable the tooltip by setting the [showTooltip](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_ShowTooltip) property to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/tooltip/tooltip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/tooltip/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Tooltip template

In heatmap, you can customize the tooltip using the [tooltipRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_TooltipRender) client side event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/tooltip/template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/tooltip/template/template.cs %}
{% endhighlight %}
{% endtabs %}




## Customize the appearance of Tooltip

The [fill](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapTooltipSettings.html#Syncfusion_EJ2_HeatMap_HeatMapTooltipSettings_Fill) and [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapTooltipSettings.html#Syncfusion_EJ2_HeatMap_HeatMapTooltipSettings_Border) properties are used to customize the background color and border of the tooltip respectively. The [textStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapTooltipSettings.html#Syncfusion_EJ2_HeatMap_HeatMapTooltipSettings_TextStyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/tooltip/tooltipSettings/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/tooltip/tooltipSettings/template.cs %}
{% endhighlight %}
{% endtabs %}


## Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the `data` property in the [`tooltipRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_TooltipRender) event arguments. The `value` property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content without modifying the underlying datasource.

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