---
layout: post
title: Trendlines in JavaScript Charts | Syncfusion
description: Learn here all about Trend lines in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Trendlines in JavaScript Charts

Trendlines help identify patterns, direction, and overall trends in numerical data. They project the general movement of data values and are widely used in analytics, forecasting, and financial charts. Trendlines can be added to Cartesian series types such as Line, Column, Scatter, Area, Candle, and Hilo (excluding bar series). Multiple trendlines can be added to a single series based on the analysis requirements.

The Chart supports six trendline types: **Linear**, **Exponential**, **Logarithmic**, **Polynomial**, **Power**, and **Moving Average**.

## Trendline types

- `Linear`: Displays a straight best-fit line for data with a constant rate of change.
- `Exponential`: Displays accelerating growth or decay and requires positive Y values.
- `Logarithmic`: Displays rapid early change that gradually levels out and requires positive X values.
- `Polynomial`: Displays a curved fit for data with multiple changes in direction.
- `Power`: Displays a power-law relationship and requires positive X and Y values.
- `MovingAverage`: Smooths short-term fluctuations using a configurable period.

Add trendline objects to the `trendlines` collection of a supported Cartesian series. Supported series include Line, Column, Scatter, Area, Candle, and Hilo; bar series are not supported. Multiple trendlines can be configured for a single series.

## Linear

A linear trendline is a straight, best-fit line used to describe data with a constant rate of increase or decrease. Set the trendline [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#type) to `Linear`.

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

Set the trendline [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#type) to `Exponential`.

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

A logarithmic trendline is a best-fit curved line suitable when the data increases or decreases quickly and then stabilizes. The X values used by the logarithmic calculation must be greater than zero; Y values can be positive or negative.

Set the trendline [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#type) to `Logarithmic`.

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

Set the trendline [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#type) to `Polynomial`. Use [`polynomialOrder`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#polynomialorder) to define the degree of the polynomial. Verify the supported order range and default value against the installed Chart version before changing this property.

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

Set the trendline [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#type) to `Power`.

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

A moving average trendline smooths short-term fluctuations to reveal the underlying trend. The [`period`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#period) property specifies the number of data points used to calculate each average.

Set the trendline [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#type) to `MovingAverage`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs6" %}

## Customize a trendline

Customize trendline appearance using [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#fill) for color, [`width`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#width) for line thickness, and [`dashArray`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#dasharray) for the dash pattern.

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

Use [`forwardForecast`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#forwardforecast) and [`backwardForecast`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#backwardforecast) with supported regression trendline types. Forecast lengths are interpreted in X-axis interval units. Moving-average forecasting support should be verified against the installed Chart version.


Trendline forecasting extends the rendered trendline beyond the existing data range. Forecast values use the interval units of the series X-axis.

### Forward forecasting

Use the [`forwardForecast`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#forwardforecast) property to extend the trendline into the future.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs8" %}

### Backward forecasting

Use the [`backwardForecast`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#backwardforecast) property to extend the trendline before the existing data range.

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

Use the [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel#visible) property to show or hide the trendline. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/trendlines-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/trendlines-cs10" %}

## Troubleshooting

- If a trendline is not displayed, verify that it is configured inside a supported series and that `visible` is not `false`.
- If an Exponential trendline is missing, verify that all mapped Y values are greater than zero.
- If a Logarithmic trendline is missing, verify that all mapped X values are greater than zero.
- If a Power trendline is missing, verify that all mapped X and Y values are greater than zero.
- If a Moving Average trendline starts later than expected, verify that enough source points exist for the configured `period`.
- If forecasting appears misaligned, verify the X-axis interval and the values assigned to `forwardForecast` and `backwardForecast`.
- If a trendline legend item or tooltip is missing, verify `name`, `legendShape`, and `enableTooltip`.

## See also

- [Trendline API](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlinemodel)
- [Series in JavaScript Charts](./chart-series)
- [Tooltip in JavaScript Charts](./tool-tip)
- [Legend in JavaScript Charts](./legend)
- [Technical indicators in JavaScript Charts](./technical-indicators)
