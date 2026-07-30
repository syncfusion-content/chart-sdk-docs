---
layout: post
title: Hide Tool Tip in ASP.NET MVC Chart Component
description: Learn here all about Hide Tool Tip in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Hide Tool Tip
publishingplatform: chart-sdk
documentation: ug
---


<!-- markdownlint-disable MD036 -->

# Hide the tooltip for unselected series

By using the [`tooltipRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TooltipRender) event, you can cancel the tooltip for unselected series in the chart.

To hide the tooltip value in unselected series, follow the given steps:

**Step 1**: By using the [`tooltipRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TooltipRender) event, you can get the series elements in the arguments. By using this argument, it can be compared whether seriesElementclasslist is deselected container or not. If it is true then the tooltip can be cancelled by setting the value for `args.cancel` as `true`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/column/hide-tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hide-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/column/hide-tooltip/hide-tooltip.cs %}
{% endhighlight %}
{% endtabs %}

