---
layout: post
title: Axis customization in JavaScript Stock chart control | Syncfusion
description: Learn here all about Axis customization in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Axis customization in JavaScript Stock chart control

## Axis Crossing

An axis can be positioned in the Stock Chart area using [`crossesAt`](../api/stock-chart/stockChartAxisModel/#crossesat) and [`crossesInAxis`] (../api/stock-chart/stockChartAxisModel/#crossesinaxis) properties. The [`crossesAt`](../api/stock-chart/stockChartAxisModel/#crossesat) property specifies the values (datetime, numeric, or logarithmic) at which the axis line has to be intersected with the vertical axis or vice-versa, and the [`crossesInAxis`](../api/stock-chart/stockChartAxisModel/#crossesinaxis) property specifies the axis name with which the axis line has to be crossed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs3" %}

## Title

You can add a title to the axis using [`title`](../api/stock-chart/stockChartAxisModel/#title) property to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](../api/stock-chart/stockChartAxisModel/#titlestyle) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs4" %}

## Tick Lines Customization

You can customize the  `width`, `color` and `size` of the minor and major tick lines, using [`majorTickLines`](../api/stock-chart/stockChartAxisModel/#majorticklines) and [`minorTickLines`](../api/stock-chart/stockChartAxisModel/#minorticklines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs5" %}

## Grid Lines Customization

You can customize the `width`, `color` and `dashArray` of the minor and major grid lines, using [`majorGridLines`](../api/stock-chart/stockChartAxisModel/#majorgridlines) and [`minorGridLines`](../api/stock-chart/stockChartAxisModel/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs6" %}

## Multiple Axis

In addition to primary X and Y axis, we can add n number of axis to the Stock Chart. Series can be associated with this [`axis`](../api/stock-chart/stockChartAxisModel), by mapping with axis's unique name.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs7" %}

## Inversed Axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property
[`isInversed`](../api/stock-chart/stockChartAxisModel/#isinversed) to true.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs8" %}

## Opposed Position

To place an axis opposite from its original position, set [`opposedPosition`](../api/stock-chart/stockChartAxisModel/#opposedposition) property of the axis to true.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs9" %}