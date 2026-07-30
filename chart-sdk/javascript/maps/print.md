---
layout: post
title: Print in JavaScript Maps component | Syncfusion
description: Learn here all about Print in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Print 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Print in JavaScript Maps component

## Print

The rendered map can be printed directly from the browser by calling the [`print`](../api/maps/print) method. To use the print functionality in Maps, set the [`allowPrint`](../api/maps/allowprint) property must be set to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/print-cs1" %}

## Export

### Image Export

To use the image export functionality, set the [`allowImageExport`](../api/maps/allowimageexport) property to **true**. The rendered Maps can be exported as an image using the [`export`](../api/maps/export) method. The method requires two parameters: image type and file name. The map can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/export-cs1" %}

### Exporting Maps as base 64 string of the file

The map can be exported as a base64 string for the JPEG and PNG formats. The rendered map can be exported as a base64 string using the [`export`](../api/maps/export) method. This method requires four parameters: image type, file name, orientation (set to **null** for image export), and **allowDownload** (set to **false** to return the base64 string).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/export-cs2" %}

### PDF Export

The rendered map can be exported as a PDF using the [`export`](../api/maps/export) method. The [`export`](../api/maps/export) method requires three parameters: file type, file name, and orientation of the PDF document. The orientation setting is optional, where **0** indicates portrait orientation and **1** indicates landscape orientation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/export-cs3" %}

>The exporting of the Maps as base64 string is not supported for the PDF export.

<!-- markdownlint-disable MD010 -->

### Export the tile Maps

The rendered map with providers such as OSM, Bing and Google static Maps can be exported using the [`export`](../api/maps/export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/OSMPrintExport-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/OSMPrintExport-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/OSMPrintExport-cs1" %}