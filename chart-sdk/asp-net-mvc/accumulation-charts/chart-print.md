---
layout: post
title: Chart Print in ASP.NET MVC Accumulation Chart Component
description: Learn here all about Chart Print in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Print
publishingplatform: chart-sdk
documentation: ug
---


# Print and Export

## Print

The rendered chart can be printed directly from the browser by calling the public method print.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/print/print.cs %}
{% endhighlight %}
{% endtabs %}



## Export

The rendered chart can be exported to `Image`(jpeg or png) or `SVG` or `PDF` format by using the export method. Input parameters for this method are `Export` Type for `format` and `fileName` of result.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/export/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/export/export.cs %}
{% endhighlight %}
{% endtabs %}

