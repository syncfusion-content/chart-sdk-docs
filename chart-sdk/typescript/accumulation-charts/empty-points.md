---
layout: post
title: Empty Points in TypeScript Accumulation Chart | Syncfusion
description: Learn how to handle and customize empty data points in the Syncfusion TypeScript Accumulation Chart.
platform: TypeScript
control:  Accumulation Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Empty Points in TypeScript Accumulation Chart

The data points those uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and not plotted in the chart. You can customize those points, using the `emptyPointSettings` property in series. The default mode of the empty point is `Gap`. Other supported modes are `Average` and `Zero`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs16" %}

## Customization

Specific color for an empty point can be set by using the `fill` property in `emptyPointSettings` and the border for an empty point can be set by using the `border` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs17" %}

## Handling No Data

When no data is available to render in the accumulation chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs497/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs497/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs497" %}