---
layout: post
title: Print And Export in ASP.NET Core Circular Gauge Component | Syncfusion
description: Learn here all about Print And Export in Syncfusion ASP.NET Core Circular Gauge component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Print And Export
publishingplatform: chart-sdk
documentation: ug
---

# Print and Export in Circular Gauge Control

## Print

To use the print functionality, set the [`allowPrint`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#allowprint) property to **true**. The rendered circular gauge can be printed directly from the browser by calling the method [`print`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#print).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/print-and-export/print/tagHelper %}
{% endhighlight %}
{% endtabs %}



## Export

### Image Export

To use the image export functionality, set the [`allowImageExport`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#allowimageexport) property to **true**. The rendered circular gauge can be exported as an image using the [`export`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#export) method. The method requires two parameters: image type and file name. The circular gauge can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/print-and-export/export/tagHelper %}
{% endhighlight %}
{% endtabs %}



The image file is got as base64 string for the JPEG and PNG formats. The circular gauge can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/print-and-export/base64/tagHelper %}
{% endhighlight %}
{% endtabs %}



### PDF Export

To use the PDF export functionality, the [`allowPdfExport`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#allowpdfexport) property should be set to **true**. The rendered circular gauge can be exported as PDF using the [`export`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#export) method. The [`export`](https://ej2.syncfusion.com/documentation/api/circular-gauge/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and "0" indicates portrait and "1" indicates landscape.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/circular-gauge/print-and-export/exportPdf/tagHelper %}
{% endhighlight %}
{% endtabs %}



N> The exporting of the circular gauge as base64 string is not supported in the PDF export.