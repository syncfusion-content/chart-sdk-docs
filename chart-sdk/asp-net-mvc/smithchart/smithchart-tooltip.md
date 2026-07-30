---
layout: post
title: Smithchart Tooltip in ASP.NET MVC Smithchart Component
description: Learn here all about Smithchart Tooltip in Syncfusion ASP.NET MVC Smithchart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smithchart Tooltip
publishingplatform: chart-sdk
documentation: ug
---


# Tooltip

Smithchart will display details about the points through tooltip, when the mouse is moved over the point. By default, tooltip is disabled. To enable the tooltip for smithchart, you need to import and inject TooltipRender module from chart. And also set the property visible as true, in tooltip settings. You can customize the tooltip's visibility and appearance differently each series in the smithchart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/tooltip/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/tooltip/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}

