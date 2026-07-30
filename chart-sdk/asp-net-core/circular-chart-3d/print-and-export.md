---
layout: post
title: Print and Export in ASP.NET Core Syncfusion 3D Circular Chart Component
description: Learn here all about print and export in Syncfusion ASP.NET Core 3D Circular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Print and Export
publishingplatform: chart-sdk
documentation: ug
---


# Print and Export in ASP.NET Core 3D Circular Chart Component

## Print

The rendered 3D Circular Chart can be printed directly from the browser by calling the public method `print`. The ID of the 3D Circular Chart div element must be passed as the input parameter to that method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/user-interaction/print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/user-interaction/print/print.cs %}
{% endhighlight %}
{% endtabs %}



## Export

The rendered 3D Circular Chart can be exported to `JPEG`, `PNG`, or `SVG` format using the `export` method. Additionally, you can export the 3D Circular Chart as a `PDF` format using the `pdfExport` method. The input parameters for this method are `type` for the format and `fileName` for the result.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/user-interaction/export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/user-interaction/export/export.cs %}
{% endhighlight %}
{% endtabs %}


