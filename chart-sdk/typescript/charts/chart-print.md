---
layout: post
title: Print and export in TypeScript Charts | Syncfusion
description: Learn here all about Chart print in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Chart print in TypeScript Charts

The chart supports printing directly from the browser and exporting to various file formats including images (JPEG, PNG, SVG), PDF, and Excel (XLSX/CSV). This guide covers all print and export options available.

## Print

The rendered chart can be printed directly from the browser by calling the public [`print`](https://ej2.syncfusion.com/documentation/api/chart#print) method. This method accepts an array of element IDs or element references to print; by default it prints the chart element itself. When invoked, the browser's print dialog opens with the specified elements ready to print.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/print-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/print-cs2" %}

## Export

Export the rendered chart to `JPEG`, `PNG`, `SVG`, or `PDF` using the chart [`export`](https://ej2.syncfusion.com/documentation/api/chart#export) method. To export chart data into `XLSX` or `CSV`, use the Excel/CSV export options (see the [Excel export](#excel-export) section below). The primary parameters for `export` are `type` (format) and `fileName` (output file name).

Optional parameters include:

- [`orientation`](https://ej2.syncfusion.com/documentation/api/chart/exportType#orientation) — `portrait` or `landscape` for PDF export
- `controls` — a collection of controls for multi-control export
- `width` — exported width in pixels
- `height` — exported height in pixels

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/export-cs2" %}

### Adding header and footer to PDF export

In the export method, specify the following parameters to add a header and footer text to the exported PDF document:

* `header` - Specify the text that should appear at the top of the exported PDF document.
* `footer` - Specify the text that should appear at the bottom of the exported PDF document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/export-cs4" %}

### Exporting charts to separate pages during PDF export

During PDF export, set the `exportToMultiplePage` parameter to **true** to export each chart as a separate page.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/export-cs5" %}

## Multiple chart export

You can export multiple charts in a single page by passing multiple chart objects to the export method. To export multiple charts in a single page, follow these steps:

1. Initially, render more than one chart to export.
2. Add a button to export the multiple charts.
3. On button click, call the export method in charts, and then pass the multiple chart objects in the export method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/export-cs3" %}

## Exporting chart using base64 string

The chart can be exported as an image in the form of a base64 string by utilizing HTML canvas. This process involves rendering the chart onto a canvas element and then converting the canvas content to a base64 string.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/export-cs6" %}

## Excel export

You can export the rendered chart data to Excel in either `XLSX` or `CSV` format. The [`excelProperties`](https://ej2.syncfusion.com/documentation/api/chart/iExportEventArgs#excelproperties) property in the [`beforeExport`](https://ej2.syncfusion.com/documentation/api/chart/iExportEventArgs#beforeexport) event allows users to customize the exported Excel sheet by modifying row, column, and cell properties before the file is generated. You can customize row titles, column titles, cell values, as well as row and column widths.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/export-cs7" %}

## See Also

* [Change Axis Label Color During Chart Export](https://support.syncfusion.com/kb/article/21484/how-to-change-axis-label-color-during-javascript-chart-export)