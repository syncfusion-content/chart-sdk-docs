---
layout: post
title: How to add a chart dynamically in ASP.NET MVC Charts | Syncfusion
description: Learn here all about Dynamic Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dynamic Chart
documentation: ug
---


# How to add a chart dynamically in ASP.NET MVC Charts

By using html button, you can add the chart dynamically by clicking the button.

To add the chart dynamically through button click, follow the given steps:

**Step 1**: Initially create the html button. Then create chart inside of button `onClick` function. Now, clicking the button charts will render based on click count.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/column/dynamic-chart/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dynamic-chart.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/column/dynamic-chart/dynamic-chart.cs %}
{% endhighlight %}
{% endtabs %}

