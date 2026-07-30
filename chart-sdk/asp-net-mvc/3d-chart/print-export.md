---
layout: post
title: Print and Export in ASP.NET MVC 3D Chart Component
description: Learn here all about print and export in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Print and Export
publishingplatform: chart-sdk
documentation: ug
---

# Print and Export in ASP.NET MVC 3D Chart Component

## Print

The rendered 3D chart can be printed directly from the browser by calling the public method `print`. The ID of the 3D chart's div element must be passed as the input parameter to that method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/print/print.cs %}
{% endhighlight %}
{% endtabs %}



## Export

The rendered 3D chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the `export` method. The input parameters for this method are `type` for format and `fileName` for result.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/export/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/export/export.cs %}
{% endhighlight %}
{% endtabs %}


