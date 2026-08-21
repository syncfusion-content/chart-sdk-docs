---
layout: post
title: Print and Export in TypeScript 3D Chart | Syncfusion
description: Learn how to print and export the Syncfusion TypeScript 3D Chart from the browser using the built-in print method.
platform: chart-sdk
control: 3D Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Print and Export in TypeScript 3D Chart

## Print

The rendered 3D chart can be printed directly from the browser by calling the public method [`print`](../api/chart3d/printUtils#print). The ID of the 3D chart's div element must be passed as the input parameter to that method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/print-cs1" %}

## Export

The rendered 3D chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the [`export`](../api/chart3d/exportUtils#export) method. The input parameters for this method are: `type` for format and `fileName` for result.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/print-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/print-cs2" %}
