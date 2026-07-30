---
layout: post
title: Dynamic Chart in ASP.NET Core Chart Component
description: Learn here all about Dynamic Chart in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dynamic Chart
publishingplatform: chart-sdk
documentation: ug
---


# To add chart dynamically

By using html button, you can add the chart dynamically by clicking the button.

To add the chart dynamically through button click, follow the given steps:

**Step 1**: Initially create the html button. Then create chart inside of button `onClick` function. Now, clicking the button charts will render based on click count.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/dynamic-chart/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dynamic-chart.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/dynamic-chart/dynamic-chart.cs %}
{% endhighlight %}
{% endtabs %}

