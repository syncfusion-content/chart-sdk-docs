---
layout: post
title: Export in ASP.NET Core Range Navigator Component
description: Learn here all about Export in Syncfusion ASP.NET Core Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Export
publishingplatform: chart-sdk
documentation: ug
---


# Export and print

## Export

The rendered Range Selector can be exported to **JPEG**, **PNG**, **SVG**, or **PDF** format by using the `export` method in the Range Selector. This method contains the following parameters:

* **Type** - To specify the export type. The component can be exported to **JPEG**, **PNG**, **SVG**, or **PDF** format.
* **File name** - To specify the file name to export.
* **Orientation** - To specify the orientation type. This is applicable only for PDF export type.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/print/export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/print/export/export.cs %}
{% endhighlight %}
{% endtabs %}



## Print

The rendered Range Selector can be printed directly from the browser by calling the public method `print`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/print/print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/print/print/print.cs %}
{% endhighlight %}
{% endtabs %}

