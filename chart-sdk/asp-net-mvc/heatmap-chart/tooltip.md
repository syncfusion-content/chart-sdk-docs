---
layout: post
title: Tooltip in Syncfusion ASP.NET MVC Heatmap Chart Component
description: Learn here all about Tooltip in Syncfusion ASP.NET MVC Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip
publishingplatform: chart-sdk
documentation: ug
---


# Tooltip in ASP.NET MVC HeatMap Chart Component

Tooltip is used to provide the details of the heatmap cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default tooltip

You can enable the tooltip by setting the [showTooltip](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~ShowTooltip.html) property to **true**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/tooltip/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/tooltip/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Tooltip template

In heatmap, you can customize the tooltip using the [tooltipRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~TooltipRender.html) client side event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/tooltip/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/tooltip/template/template.cs %}
{% endhighlight %}
{% endtabs %}



## Customize the appearance of Tooltip

The [fill](https://help.syncfusion.com/cr/cref_files/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMapTooltipSettings~Fill.html) and [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMapTooltipSettings~Border.html) properties are used to customize the background color and border of the tooltip respectively. The [textStyle](https://help.syncfusion.com/cr/cref_files/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMapTooltipSettings~TextStyle.html) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/tooltip/tooltipSettings/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/tooltip/tooltipSettings/template.cs %}
{% endhighlight %}
{% endtabs %}


