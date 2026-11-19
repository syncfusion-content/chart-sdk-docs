---
layout: post
title: Print and Export in ASP.NET Core Charts | Syncfusion
description: Learn here all about Chart Print in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart print
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Print and Export in ASP.NET Core Charts

## Print

The rendered chart can be printed directly from the browser by calling the public `print` method. You can pass an array of element IDs or a single element to this method. By default, it uses the chart element.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/print/print.cs %}
{% endhighlight %}
{% endtabs %}

## Export

The rendered chart can be exported to `JPEG`, `PNG`, `SVG`, `PDF`, `XLSX`, or `CSV` format using the `export` method on the chart. The required input parameters for this method are `type` for the format and `fileName` for the result.

The optional parameters for this method are:
* `orientation` - either portrait or landscape mode during PDF export,
* `controls` - pass a collection of controls for multiple exports,
* `width` - width of the chart export,
* `height` - height of the chart export,
* `isVertical` - decides whether the chart is exported in a vertical or horizontal direction,
* `header` - header for the exported chart,
* `footer` - footer for the exported chart, and
* `exportToMultiplePages` - decides whether to export multiple charts on separate pages for PDF export.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/export/export.cs %}
{% endhighlight %}
{% endtabs %}

### Adding header and footer in PDF export

In the export method, specify the following parameters to add a header and footer text to the exported PDF document:

* `Header` - Specify the text that should appear at the top of the exported PDF document.
* `Footer` - Specify the text that should appear at the bottom of the exported PDF document.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/header-footer/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Header-footer.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/header-footer/header-footer.cs %}
{% endhighlight %}
{% endtabs %}

### Positioning the header and footer in PDF export

The headers and footers can be positioned anywhere on the PDF page using the `x` and `y` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/header-footerPosition/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Header-footerPosition.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/header-footerPosition/header-footerPosition.cs %}
{% endhighlight %}
{% endtabs %}

### Exporting charts into separate page during the PDF export

During PDF export, set the `ExportToMultiplePages` parameter to **true** to export each chart as a separate page.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/multi-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multi-page.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/multi-page/multi-page.cs %}
{% endhighlight %}
{% endtabs %}

### Export with optional parameters

The rendered chart can be exported to a specific orientation, width, and height by passing them as optional parameters in the `export` method of the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/export-optionalParameter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/export-optionalParameter/export.cs %}
{% endhighlight %}
{% endtabs %}

## Multiple chart export

You can export multiple charts on a single page by passing the multiple chart objects in the `export` method of the chart. To export multiple charts in a single page, follow these steps:

First, render more than one chart to export, and then add a button to export the multiple charts. On the button click, call the `export` method on the charts, and then pass the multiple chart objects to the method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/multi-export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multi-export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/multi-export/multi-export.cs %}
{% endhighlight %}
{% endtabs %}

## Exporting chart using base64 string

The chart can be exported as an image in the form of a base64 string using an HTML canvas. This process involves rendering the chart onto a canvas element and then converting the canvas content to a base64 string.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/base64-export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Base64-export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/base64-export/base64-export.cs %}
{% endhighlight %}
{% endtabs %}

## Excel export

You can export the rendered chart data to Excel in either `XLSX` or `CSV` format. The `ExcelProperties` property in the [`BeforeExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_BeforeExport) event allows users to customize the exported Excel sheet by modifying row, column, and cell properties before the file is generated. You can customize row titles, column titles, cell values, as well as row and column widths.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/excel-export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Excel-export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/excel-export/excel-export.cs %}
{% endhighlight %}
{% endtabs %}

