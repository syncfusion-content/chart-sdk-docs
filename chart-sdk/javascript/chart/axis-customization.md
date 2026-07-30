---
layout: post
title: Axis customization in JavaScript Chart control | Syncfusion
description: Learn here all about Axis customization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Axis customization in JavaScript Chart control

## Axis Crossing

An axis can be positioned dynamically within the chart area using the `crossesAt` and `crossesInAxis` properties. The `crossesAt` property specifies the value (date-time, numeric, or logarithmic) at which the axis line intersects another axis, while the `crossesInAxis` property defines the name of the axis with which the current axis should intersect. This customization is useful for emphasizing specific reference points or thresholds in the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs16" %}

## Title

A title can be added to an axis using the [`title`](../api/chart/axis) property. Axis titles provide context and help users quickly understand the data represented along the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs17" %}

## Title Rotation

The orientation of the axis title can be adjusted using the [`titleRotation`](../api/chart/axis#titlerotation) property. This property supports rotation values from 0 to 360 degrees, allowing better alignment based on the chart layout and available space.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs18" %}

## Tick Lines Customization

The appearance of both major and minor tick lines can be customized using the [`majorTickLines`](../api/chart/axis) and [`minorTickLines`](../api/chart/axis) properties. These properties allow customization of the `width`, `color`, and `size` of tick lines to enhance chart readability.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs19" %}

## Grid Lines Customization

Grid lines can be styled using the [`majorGridLines`](../api/chart/axis) and [`minorGridLines`](../api/chart/axis) properties. These options support customization of `width`, `color`, and `dashArray`, helping users distinguish data points and scales more effectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs20" %}

## Multiple Axis

In addition to the primary X and Y axes, multiple additional axes can be added to a chart. Each series can be associated with a specific axis by mapping it to the axis using a unique axis name. This is useful for visualizing datasets with different units or scales within the same chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs21" %}

## Inversed Axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, the highest value is displayed closer to the origin, and the lowest value appears farther away. This behavior can be enabled by setting the [`isInversed`](../api/chart/axis) property to `true`. Inversed axes are commonly used in scenarios such as ranking or inverted value representations.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs22" %}

## Opposed Position

An axis can be placed on the opposite side of its default position by setting the [`opposedPosition`](../api/chart/axis) property to `true`. This option is useful when displaying multiple axes or when optimizing space usage in complex chart layouts.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs23/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs23" %}