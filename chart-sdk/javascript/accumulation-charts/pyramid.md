---
layout: post
title: Pyramid in JavaScript Accumulation Charts | Syncfusion
description: Learn how to render a pyramid series in the Syncfusion JavaScript Accumulation Charts using the PyramidSeries module.
platform: chart-sdk
control: Accumulation Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Pyramid in JavaScript Accumulation Charts

To render a pyramid series, use the series [`type`](../api/accumulation-chart/accumulationSeriesModel) as `Pyramid` and inject `PyramidSeries` module using the `AccumulationChart.Inject(PyramidSeries)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs56/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs56/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs56" %}

## Mode

The Pyramid chart supports linear and surface modes of rendering. The default type of the `pyramidMode` is `linear`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs57/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs57/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs57" %}

## Size

The size of the pyramid chart can be customized by using the  `width` and `height` properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs58/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs58/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs58" %}

## Gap between the segments

Pyramid chart provides options to customize the space between the segments by using the `gapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs59/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs59/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs59" %}

## Explode

Points can be exploded on mouse click by setting the `explode` property to true. You can also explode the point on load using `explodeIndex`. Explode distance can be set by using `explodeOffset` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs60/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs60/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs60" %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs61/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs61/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs61" %}

## See also

* [Data label](./data-label)
* [Grouping](./grouping)
