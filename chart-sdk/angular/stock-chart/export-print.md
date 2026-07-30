---
layout: post
title: Export print in Angular Stock chart component | Syncfusion
description: Learn here all about Export print in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Export print 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Export print in Angular Stock chart component

The rendered stock chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the export dropdown button in the period selector toolbar. You can choose the required format using the export dropdown button in stock-chart.

The rendered stock chart can be printed directly using print button in period selector toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/export-print-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/export-print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/stock-chart/export-print-cs1" %}

## Disable Export and print

To empty the value of `exportType` for to disable the Export button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/export-print-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/export-print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/stock-chart/export-print-cs2" %}