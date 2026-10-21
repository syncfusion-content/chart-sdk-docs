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


