---
layout: post
title: Strip line in JavaScript Chart control | Syncfusion
description: Learn here all about Strip line in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Strip line 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Strip line in JavaScript Chart control

<!-- markdownlint-disable MD036 -->

The JavaScript Chart control supports horizontal and vertical strip lines, providing visual guides to highlight specific ranges in the chart area. Strip lines can be added to both axes and fully customized based on visual and functional requirements. To use strip line features, inject the `StripLine` module using `Chart.Inject(StripLine)` method.

## Horizontal Strip lines

Horizontal strip lines are created by adding the `stripline` configuration to the vertical axis and setting the `visible` property to `true`. They highlight horizontal ranges in the chart, and multiple strip lines can be added to the same axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs92/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs92/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs92" %}

## Vertical Striplines

Vertical strip lines are created by adding the `stripline` configuration to the horizontal axis and enabling the `visible` property. They highlight vertical regions in the chart and support multiple entries for an axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs93/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs93/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs93" %}

## Customize the strip line

Strip lines can be customized to highlight specific regions more effectively:

- Use `start` to set the beginning value of the strip line.
- Use `end` to define the ending value.
- Use `startFromOrigin` to begin the strip line from the axis origin.
- Use `size` to specify the strip line height or width (based on orientation).
- Use `border` to customize border appearance.
- Use `zIndex` to control whether the strip line appears behind or above chart series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs94/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs94/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs94" %}

## Customize the stripline text

Strip line text labels can be customized for readability and visual presentation:

- Use `textStyle` to set text appearance.
- Use `rotation` to rotate the strip line text.
- Use `horizontalAlignment` and `verticalAlignment` to adjust label placement.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs95/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs95/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs95" %}

## See Also

* [Mark the threshold in chart](./how-to/threshold)