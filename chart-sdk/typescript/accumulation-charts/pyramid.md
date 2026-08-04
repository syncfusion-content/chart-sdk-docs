---
layout: post
title: Pyramid in TypeScript Accumulation chart control | Syncfusion
description: Learn here all about Pyramid in Syncfusion TypeScript Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pyramid 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Pyramid in TypeScript Accumulation chart control

To render a pyramid series, use the series [`type`](../api/accumulation-chart/accumulationSeriesModel/) as `Pyramid` and inject `PyramidSeries` module using the `AccumulationChart.Inject(PyramidSeries)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs56/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs56/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs56" %}

## Mode

The Pyramid chart supports linear and surface modes of rendering. The default type of the `pyramidMode` is `linear`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs57/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs57/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs57" %}

## Size

The size of the pyramid chart can be customized by using the  `width` and `height` properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs58/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs58/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs58" %}

## Gap between the segments

Pyramid chart provides options to customize the space between the segments by using the `gapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs59/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs59/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs59" %}

## Explode

Points can be exploded on mouse click by setting the `explode` property to true. You can also explode the point on load using `explodeIndex`. Explode distance can be set by using `explodeOffset` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs60/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs60/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs60" %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs61/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs61/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/accumulation-chart/chart-types-cs61" %}

## See also

* [Data label](./data-label/)
* [Grouping](./grouping/)
