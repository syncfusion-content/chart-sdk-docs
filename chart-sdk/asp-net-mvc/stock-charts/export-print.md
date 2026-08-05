---
layout: post
title: Export Print in ASP.NET MVC Stock Chart Component
description: Learn here all about Export Print in Syncfusion ASP.NET MVC Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Export Print
publishingplatform: chart-sdk
documentation: ug
---


# Print and Export

The rendered stock chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the export dropdown button in the period selector toolbar. You can choose the required format using the export dropdown button in stock-chart.

The rendered stock chart can be printed directly using print button in period selector toolbar.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/print/print.cs %}
{% endhighlight %}
{% endtabs %}



## Disable Export and print

To empty the value of `ExportType` for to disable the Export button.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/disable/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Disable.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/disable/disable.cs %}
{% endhighlight %}
{% endtabs %}

