---
layout: post
title: Export and Print in ASP.NET MVC Stock Charts | Syncfusion
description: Learn here all about Export and Print in Syncfusion ASP.NET MVC Stock Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Export and Print
documentation: ug
---


# Export and Print in ASP.NET MVC Stock Charts

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

