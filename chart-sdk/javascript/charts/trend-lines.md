---
layout: post
title: Trend lines in JavaScript Chart control | Syncfusion
description: Learn here all about Trend lines in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Trend lines 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Trend lines in JavaScript Chart control

Trendlines help identify patterns, direction, and overall trends in numerical data. They project the general movement of data values and are widely used in analytics, forecasting, and financial charts. Trendlines can be added to Cartesian series types such as Line, Column, Scatter, Area, Candle, and Hilo (excluding bar series). Multiple trendlines can be added to a single series based on the analysis needs.

Charts support six types of trendlines: **Linear**, **Exponential**, **Logarithmic**, **Polynomial**, **Power**, and **Moving Average**.

## Linear

A linear trendline is a straight, best‑fit line used to describe data with a constant rate of increase or decrease. Set the trendline [`type`](../api/chart/trendlineModel) to `Linear` and inject the `Trendlines` module using `Chart.Inject(Trendlines)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs1" %}

## Exponential

An exponential trendline displays a curved pattern useful when data rises or falls at increasing rates. Exponential trendlines cannot be generated if the dataset includes zero or negative values.

Set the trendline [`type`](../api/chart/trendlineModel) to `Exponential` and inject the `Trendlines` module using `Chart.Inject(Trendlines)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs2" %}

## Logarithmic

A logarithmic trendline is a best‑fit curved line suitable when the data increases or decreases quickly and then stabilizes. It supports both positive and negative values.

Set [`type`](../api/chart/trendlineModel) to `Logarithmic` and inject the `Trendlines` module using `Chart.Inject(Trendlines)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs3" %}

## Polynomial

A polynomial trendline is useful when data fluctuates. It uses a curved line that can model more complex datasets.

Set [`type`](../api/chart/trendlineModel) to `Polynomial` and inject the `Trendlines` module using `Chart.Inject(Trendlines)` method. Use [`polynomialOrder`](../api/chart/trendlinemodel#polynomialorder) to define the degree of the polynomial.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs4" %}

## Power

A power trendline is ideal for datasets where measurements increase at a constant rate. It displays a curved line that best fits exponential growth or decay patterns.

Set [`type`](../api/chart/trendlineModel) to `Power` and inject the `Trendlines` module using `Chart.Inject(Trendlines)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs5" %}

## Moving average

A moving average trendline smooths fluctuations to reveal overall trends more clearly. The [`period`](../api/chart/trendlinemodel#period) property specifies the number of data points used to calculate each average.

Set [`type`](../api/chart/trendlineModel) to `MovingAverage` and inject the `Trendlines` module using `Chart.Inject(Trendlines)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs6" %}

**Customization of trendline**

Customize trendline appearance using the [`fill`](../api/chart/trendlineModel#fill-string) property for color and the [`width`](../api/chart/trendlineModel#width-number) property for line thickness.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs7" %}

## Forecasting

Trendline forecasting extends the existing trendline to estimate future and past values.

**Forward forecasting**

Use the [`forwardForecast`](../api/chart/trendlinemodel#forwardforecast) property to extend the trendline into the future.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs8" %}

**Backward forecasting**

Use the [`backwardForecast`](../api/chart/trendlinemodel#backwardforecast) property to extend the trendline into past data points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs9" %}

## Show or hide a trendline

Control visibility using the [`visible`](../api/chart/trendlinemodel#visible) property of the trendline.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs10" %}
