---
layout: post
title: Print in TypeScript Maps component | Syncfusion
description: Learn here all about Print in Syncfusion TypeScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Print 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Print in TypeScript Maps component

## Print

The rendered map can be printed directly from the browser by calling the [`print`](../api/maps/print) method. To use the print functionality, the **Print** module must be injected into the Maps using the `Maps.Inject(Print)` method and the [`allowPrint`](../api/maps/allowprint) property must be set to **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/print-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/print-cs3" %}

## Export

### Image Export

To use the image export functionality in Maps, **ImageExport** module must be injected into the Maps using **Maps.Inject(ImageExport)** method and set the [`allowImageExport`](../api/maps/allowimageexport) property to **true**.

```ts
import { Maps, ImageExport } from '@syncfusion/ej2-maps';
Maps.Inject(ImageExport);
let map: Maps = new Maps({ });
```

The rendered Maps can be exported as an image using the [`export`](../api/maps/export) method. The method requires two parameters: image type and file name. The map can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/export-cs7" %}

### Exporting Maps as base 64 string of the file

The map can be exported as a base64 string for the JPEG and PNG formats. The rendered map can be exported as a base64 string using the [`export`](../api/maps/export) method. This method requires four parameters: image type, file name, orientation (set to **null** for image export), and **allowDownload** (set to **false** to return the base64 string).


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/export-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/export-cs8" %}

### PDF Export

To use the PDF export functionality, **PdfExport** module must be injected into the Maps using **Maps.Inject(PdfExport)** method and set the [`allowPdfExport`](../api/maps/allowpdfexport) property to **true**.

```ts
import { Maps, PdfExport } from '@syncfusion/ej2-maps';
Maps.Inject(PdfExport);
let map: Maps = new Maps({ });
```

The rendered map can be exported as a PDF using the [`export`](../api/maps/export) method. The [`export`](../api/maps/export) method requires three parameters: file type, file name, and orientation of the PDF document. The orientation setting is optional, where **0** indicates portrait orientation and **1** indicates landscape orientation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/export-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/export-cs9" %}

>The exporting of the Maps as base64 string is not supported for the PDF export.

<!-- markdownlint-disable MD010 -->

### Export the tile Maps

The rendered map with providers such as OSM, Bing and Google static Maps can be exported using the [`export`](../api/maps/export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/OSMPrintExport-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/OSMPrintExport-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/OSMPrintExport-cs3" %}