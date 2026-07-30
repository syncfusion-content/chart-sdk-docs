---
layout: post
title: Linear gauge print and export in TypeScript Linear gauge control | Syncfusion
description: Learn here all about Linear gauge print and export in Syncfusion TypeScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Linear gauge print and export 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Linear gauge print and export in TypeScript Linear gauge control

## Print

The rendered Linear Gauge can be printed directly from the browser by calling the [`print`](../api/linear-gauge/#print) method. To use the print functionality, set the [`allowPrint`](../api/linear-gauge/#allowprint) property as **true** and inject the **Print** module in Linear Gauge.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-print-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-print-cs3" %}

## Export

### Image Export

To use the image export functionality, set the [`allowImageExport`](../api/linear-gauge/#allowimageexport) property as **true** and inject the **ImageExport** module in Linear Gauge. The rendered Linear Gauge can be exported as an image using the [`export`](../api/linear-gauge/#export) method. This method requires two parameters: export type and file name. The Linear Gauge can be exported as an image with the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs4" %}

### PDF Export

To use the PDF export functionality, set the [`allowPdfExport`](../api/linear-gauge/#allowpdfexport) property as **true** and inject the **PdfExport** module in Linear Gauge. The rendered Linear Gauge can be exported as PDF using the [`export`](../api/linear-gauge/#export) method. The [`export`](../api/linear-gauge/#export) method requires three parameters: file type, file name, and orientation of the PDF document. The orientation of the PDF document can be set as **Portrait** or **Landscape**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs5" %}

### Exporting Linear Gauge as base64 string of the file

The Linear Gauge can be exported as base64 string for the JPEG, PNG and PDF formats. The rendered Linear Gauge can be exported as base64 string of the exported image or PDF document used in the [`export`](../api/linear-gauge/#export) method. The arguments that are required for this method is export type, file name, orientation of the exported PDF document and **allowDownload** boolean value that is set as **false** to return base64 string. The value for the orientation of the exported PDF document is set as **null** for image export and **Portrait** or **Landscape** for the PDF document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/lineargauge-export-cs6" %}

>The exporting of the Linear Gauge as base64 string is not applicable for the SVG format.