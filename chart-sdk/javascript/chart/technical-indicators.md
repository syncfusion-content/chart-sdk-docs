---
layout: post
title: Technical indicators in JavaScript Chart control | Syncfusion
description: Learn here all about Technical indicators in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Technical indicators 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Technical indicators in JavaScript Chart control

A technical indicator is a mathematical calculation based on historical price, volume, or open‑interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of a stock. To render an Accumulation Distribution indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into services. To calculate the signal line, the [`volume`](../api/chart/technicalIndicatorModel) field must be included in the `dataSource`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs1" %}

## Average true range (ATR)

ATR measures stock volatility by comparing the current value with the previous value. To render an Average True Range (ATR) indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Atr` and inject `AtrIndicator` into services.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs2" %}

## Bollinger band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](../api/chart/technicalIndicatorModel) as `BollingerBand` and inject the `BollingerBands` module and `RangeAreaSeries` into services. Bollinger Band is represented by three lines (`upperLine`, `lowerLine`, `signalLine`). The default values of the Bollinger Band [`period`](../api/chart/technicalIndicatorModel) is 14 and [`standardDeviations`](../api/chart/technicalIndicatorModel) is 2.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs3" %}

**Customization of BollingerBand**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](../api/chart/technicalIndicatorModel), and the `lowerLine` can be customized by using [`lowerLine`](../api/chart/technicalIndicatorModel) properties of the indicator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs4" %}

## Exponential moving average (EMA)

Moving average indicators are used to define the direction of the trend. To render an EMA indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Ema` and inject `EmaIndicator` module using `Chart.Inject(EmaIndicator)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs5" %}

## Momentum

Momentum shows the speed at which the stock price is changing. To render a Momentum indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Momentum` and inject the `MomentumIndicator` module into services. The Momentum indicator is represented by two lines (`upperLine`, `signalLine`). In the Momentum indicator, the `upperBand` value is always rendered at 100.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs6" %}

**Customization of MomentumIndicator**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using the [`upperLine`](../api/chart/technicalIndicatorModel) property of the indicator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs7" %}

## Moving average convergence divergence (MACD)

MACD is based on the difference between two EMAs. To render a MACD indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Macd` and inject the `MacdIndicator` module into services. The MACD indicator is represented by the MACD line, signal line, and MACD histogram. The MACD histogram highlights the difference between the MACD line and the signal line.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs8" %}

**Customization of MACD**

`stroke`, `stroke-width`, and `color` of `macdLine` can be customized by using the [`macdLine`](../api/chart/technicalIndicatorModel) property of the indicator. The positive and negative changes of the histogram can be customized by [`macdPositiveColor`](../api/chart/technicalIndicatorModel) and [`macdNegativeColor`](../api/chart/technicalIndicatorModel) properties. The [`macdType`](../api/chart/technicalIndicatorModel) is used to define the type of MACD indicator. Customize the MACD period using [`slowPeriod`](../api/chart/technicalIndicatorModel) and [`fastPeriod`](../api/chart/technicalIndicatorModel) properties.

By default, `macdType` is `Both`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs9" %}

## Relative strength index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render an RSI indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Rsi` and inject the `RsiIndicator` module using `Chart.Inject(Rsindicator)` method. The RSI indicator is represented by three lines (`upperBand`, `lowerBand`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](../api/chart/technicalIndicatorModel) and [`overSold`](../api/chart/technicalIndicatorModel) properties of the indicator, and the `signalLine` is calculated using the RSI formula.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs10" %}

## Simple moving average (SMA)

Moving average indicators are used to define the direction of the trend. To render an SMA indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Sma` and inject the `SmaIndicator` module using `Chart.Inject(SmaIndicator)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs11" %}

## Stochastic

Stochastic shows how a stock compares to its previous price levels. To render a Stochastic indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Stochastic` and inject the `StochasticIndicator` module using `Chart.Inject(StochasticIndicator)` method. The Stochastic indicator is represented by four lines (`upperLine`, `lowerLine`, `periodLine`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](../api/chart/technicalIndicatorModel) and [`overSold`](../api/chart/technicalIndicatorModel) properties of the indicator, and the `periodLine` and `signalLine` are rendered based on the stochastic formula.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs12" %}

**Customization of StochasticIndicator**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](../api/chart/technicalIndicatorModel), the `lowerLine` can be customized by using [`lowerLine`](../api/chart/technicalIndicatorModel), and the `periodLine` can be customized by using [`periodLine`](../api/chart/technicalIndicatorModel) properties of the indicator. Customize the period used to find the average price using [`kPeriod`](../api/chart/technicalIndicatorModel) and [`dPeriod`](../api/chart/technicalIndicatorModel) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs13" %}

## Triangular moving average (TMA)

Moving average indicators are used to define the direction of the trend. To render a TMA indicator, use indicator [`type`](../api/chart/technicalIndicatorModel) as `Tma` and inject the `TmaIndicator` module using `Chart.Inject(TmaIndicator)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs14" %}

**Customization of Technical Indicators**

`stroke`, `stroke-width`, and `color` of `signalLine` can be customized by using [`fill`](../api/chart/technicalIndicatorModel), [`width`](../api/chart/technicalIndicatorModel), and [`dashArray`](../api/chart/technicalIndicatorModel) properties. The [`period`](../api/chart/technicalIndicatorModel) property defines the number of data points used for calculations. The [`field`](../api/chart/technicalIndicatorModel) value determines which price value to compare with the previous price. It is applicable to Bollinger Bands and moving averages. The [`showZones`](../api/chart/technicalIndicatorModel#showzones) property shows or hides the overbought and oversold regions. It is applicable for RSI and Stochastic indicators.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs15" %}

**Data source**

Usually, technical indicators are added along with a financial series. The [`seriesName`](../api/chart/technicalIndicatorModel) represents the series whose data has to be analyzed through indicators.

Technical indicators can also be added without a series by using the [`dataSource`](../api/chart/technicalIndicatorModel) property of the indicator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/technical-indicators-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/technical-indicators-cs16" %}
