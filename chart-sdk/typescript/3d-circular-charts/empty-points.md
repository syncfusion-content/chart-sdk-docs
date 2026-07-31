---
layout: post
title: Empty points in TypeScript 3D Circular Chart control | Syncfusion
description: Learn here all about empty points in Syncfusion TypeScript 3D Circular Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Empty points 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Empty points in TypeScript 3D Circular Chart control

Data points containing `null` or `undefined` values are considered empty points. These empty data points are ignored and not plotted in the 3D Circular Chart. You can customize the handling of empty points using the `emptyPointSettings` property in the series. The default mode for empty points is `Gap`. Other supported modes include `Average`, `Drop`, and `Zero`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-circular-charts/pie-donut/empty-points/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-circular-charts/pie-donut/empty-points/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-circular-charts/pie-donut/empty-points" %}

## Customization

A specific color for an empty point can be set by using the `fill` property in `emptyPointSettings`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-circular-charts/pie-donut/empty-point-custom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-circular-charts/pie-donut/empty-point-custom/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-circular-charts/pie-donut/empty-point-custom" %}
