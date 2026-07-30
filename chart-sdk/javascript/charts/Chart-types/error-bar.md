---
layout: post
title: Error Bar Chart in JavaScript Charts | Syncfusion
description: Learn here all about Error Bar in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Error Bar 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# Error Bar Chart in JavaScript Charts

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

To render error bars for the series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set visibility**: Set the [`visible`](../../api/chart/errorBarSettings#visible) property to **true** for the error bars to be displayed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs93/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs93/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs93" %}

## Customizing error bar

To customize the error bar type, set the error bar [`type`](../../api/chart/errorBarSettings#type) to `Custom`, and then change the horizontal or vertical positive and negative error values for the error bar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs94/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs94/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs94" %}

## Error bar mode

The error bar mode is used to define whether the error bar line is drawn horizontally, vertically or on both sides. To change the error bar mode, use the [`mode`](../../api/chart/errorBarSettings#mode) option.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs95/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs95/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs95" %}

## Error bar direction

To change the direction of the error bars to plus, minus, or both sides, use the [`direction`](../../api/chart/errorBarSettings#direction) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs96/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs96/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs96" %}

## Customizing error bar cap

To customize the length, width, opacity, and fill color of the error bar caps, you can use the [`errorBarCap`](../../api/chart/errorBarSettings#errorbarcap) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs97/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs97/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs97" %}

## Customizing error bar color

To customise the error bar color for individual errors, use the [`errorBarColorMapping`](../../api/chart/errorBarSettings#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error, and vertical negative and positive error for an individual point using the [`verticalError`](../../api/chart/errorBarSettings#verticalerror), [`horizontalError`](../../api/chart/errorBarSettings#horizontalerror), [`horizontalNegativeError`](../../api/chart/errorBarSettings#horizontalnegativeerror), [`horizontalPositiveError`](../../api/chart/errorBarSettings#horizontalpositiveerror), [`verticalNegativeError`](../../api/chart/errorBarSettings#verticalnegativeerror), and [`verticalPositiveError`](../../api/chart/errorBarSettings#verticalpositiveerror) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs98/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs98/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs98" %}

## Events

### Series render

The [`seriesRender`](../../api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs461/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs461/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs461" %}

### Point render

The [`pointRender`](../../api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs462/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs462/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs462" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
