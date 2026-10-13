---
layout: post
title: Error Bar Chart in JavaScript Charts | Syncfusion
description: Learn here all about Error Bar in Syncfusion JavaScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# Error Bar Chart in JavaScript Charts

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

The error bar configuration is set on the [`errorBar`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#errorbar) property of each series. To render error bars, configure the chart as follows:
 
* **Set visibility**: Set the [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#visible) property of the series `errorBar` configuration to `true` for the error bars to be displayed.

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

Set the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#type) property to choose how the error bar value is calculated. Available types are `Fixed`, `Percentage`, `StandardDeviation`, `StandardError`, and `Custom`. For custom values, also configure the horizontal and vertical positive and negative error values (`verticalError`, `horizontalError`, `verticalPositiveError`, `verticalNegativeError`, `horizontalPositiveError`, `horizontalNegativeError`).

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

The error bar [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#mode) defines the direction in which the error bar line is drawn. Set this property to draw error bars horizontally, vertically, or on both sides. Available modes are `Vertical`, `Horizontal`, and `Both`. The default mode is `Vertical`.

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

Set the [`direction`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#direction) property to indicate which side of the data point the error bar is drawn on. Available directions are `Plus`, `Minus`, and `Both`. The default direction is `Both`.   

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

Use the [`errorBarCap`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#errorbarcap) property to customize the length, width, and color of the error bar caps. Sub-properties include `length`, `width`, `opacity` and `color`.

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

Set the [`errorBarColorMapping`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#errorbarcolormapping) property to the name of the data field whose values determine the error bar color for each point. You can also set per-point positive and negative error values using the [`verticalPositiveError`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#verticalpositiveerror), [`verticalNegativeError`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#verticalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#horizontalpositiveerror), and [`horizontalNegativeError`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#horizontalNegativeError) properties. Use [`verticalError`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#verticalerror) or [`horizontalError`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#horizontalError) when you want a single value applied to both directions per point.

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

The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

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

The [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs462/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs462/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs462" %}

## Troubleshooting

The following list describes common issues you may encounter when working with Error Bars and how to resolve them.

**Error bars do not render:** Confirm the [`errorBar`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#errorbar) property is configured on each series and that its [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#visible) property is set to `true`. In JavaScript, the `ErrorBar` and series modules are loaded through the script bundle; no explicit `Chart.Inject(...)` call is required.

**Custom error values do not change:** Set the error bar [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/errorBarSettings#type) to `Custom` to enable per-point positive/negative overrides; otherwise the value is calculated from a fixed percentage or standard deviation.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args` object (for example, `args.fill`) inside the handler; setting properties on the series object directly is overwritten during rendering.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Box and Whisker chart](./box-whisker)
* [Candle chart](./candle)
