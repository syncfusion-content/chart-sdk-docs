---
layout: post
title: Tooltip Template in ##Platform_Name## HeatMap Chart | Syncfusion
description: Learn here all about Tooltip Template in Syncfusion ##Platform_Name## Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip Template
publishingplatform: chart-sdk
documentation: ug
---


# How to Customize Tooltip as a template in ASP.NET Core HeatMap Chart

You can show a tooltip as a table using the `template` property in `TooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**: Initialize the tooltip template div as shown in the following html page.

**Step 2**: Set the element id to the `template` property in `TooltipSettings` to show the tooltip template.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/how-to/tooltip-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/how-to/tooltip-template/tooltip.cs %}
{% endhighlight %}
{% endtabs %}


