---
layout: post
title: Tooltip in ASP.NET Core Smith Chart | Syncfusion
description: Learn here all about Smith Chart Tooltip in Syncfusion ASP.NET Core Smith Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smithchart Tooltip
documentation: ug
---


# Tooltip in ASP.NET Core Smith Chart

The Smith Chart displays the details of each point via a tooltip when the mouse hovers over it. By default, the tooltip is disabled. To enable the tooltip, add the `<e-smithchartseries-tooltip>` child element to each series and set its `visible` attribute to `true`. You can customize the tooltip's visibility and appearance for each series individually.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/tooltip/tooltip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/tooltip/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}

