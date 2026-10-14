---
layout: post
title: Technical indicators in TypeScript Charts | Syncfusion
description: Learn here all about Technical indicators in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Technical indicators in TypeScript Charts

A technical indicator is a mathematical calculation based on historical price, volume, or open interest information that aims to forecast financial market direction.

The Chart supports 10 built-in technical-indicator types: Accumulation Distribution, ATR, Bollinger Bands, EMA, Momentum, MACD, RSI, SMA, Stochastic, and TMA.

## Common configuration

Technical indicators can analyze a named financial series through `seriesName` or use a separate `dataSource`. When an indicator uses its own data source, configure `xName` and the required financial field mappings.

| Mapping | Purpose |
|---|---|
| `xName` | Maps the X value, such as a date or category. |
| `open` | Maps the opening price. |
| `high` | Maps the highest price. |
| `low` | Maps the lowest price. |
| `close` | Maps the closing price. |
| `volume` | Maps the traded volume; required by Accumulation Distribution. |

The fields required by an indicator depend on its calculation. Indicators based on OHLC values require valid `high`, `low`, and `close` mappings; volume-based indicators also require `volume`.

## Accumulation distribution

The Accumulation Distribution indicator combines price and volume to show how money may be flowing into or out of a stock. To render an Accumulation Distribution indicator, set the indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) to `AccumulationDistribution`. The [`volume`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#volume) field is required in the `dataSource` together with valid high, low, and close field mappings.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs1" %}

## Average true range (ATR)

ATR measures stock volatility by comparing the current value with the previous value. To render an Average True Range (ATR) indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalIndicatorModel) as `Atr` and inject `AtrIndicator` into services.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs2" %}

## Bollinger band

Bollinger Bands are a chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, set the indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) to `BollingerBand` and inject the `BollingerBands` module and `RangeAreaSeries` into services. Bollinger Band is represented by three lines (`upperLine`, `lowerLine`, `signalLine`). The default Bollinger Bands [`period`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#period) is `14`, and [`standardDeviation`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#standarddeviation) is `2`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs3" %}

### Customize Bollinger Bands

The color, width, and dash pattern of `upperLine` can be customized using [`upperLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#upperline), and the `lowerLine` can be customized using [`lowerLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#lowerline) properties of the indicator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs4" %}

## Exponential moving average (EMA)

Moving average indicators are used to define the direction of the trend. To render an EMA indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) as `Ema` and inject `EmaIndicator` module using `Chart.Inject(EmaIndicator)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs5" %}

## Momentum

Momentum shows the speed at which the stock price is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) as `Momentum` and inject the `MomentumIndicator` module into services. The Momentum indicator is represented by two lines (`upperLine`, `signalLine`). In the Momentum indicator, the `upperBand` value is always rendered at 100.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs6" %}

### Customize the Momentum indicator

The color, width, and dash pattern of `upperLine` can be customized using the [`upperLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#upperline) property of the indicator

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs7" %}

## Moving average convergence divergence (MACD)

MACD is based on the difference between two EMAs. To render a MACD indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) as `Macd` and inject the `MacdIndicator` module into services. The MACD indicator is represented by the MACD line, signal line, and MACD histogram. The MACD histogram highlights the difference between the MACD line and the signal line.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs8" %}

**Customization of MACD**

The color, width, and dash pattern of `macdLine` can be customized using the [`macdLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#macdline) property of the indicator. The positive and negative changes of the histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#macdnegativecolor) properties. The [`macdType`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#macdtype) is used to define the type of MACD indicator. Customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#fastperiod) properties.

By default, `macdType` is `Both`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs9" %}

## Relative strength index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render an RSI indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) as `Rsi` and inject the `RsiIndicator` module using `Chart.Inject(Rsindicator)` method. The RSI indicator is represented by three lines (`upperBand`, `lowerBand`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#overbought) and [`overSold`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#oversold) properties of the indicator, and the `signalLine` is calculated using the RSI formula.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs10" %}

## Simple moving average (SMA)

Moving average indicators are used to define the direction of the trend. To render an SMA indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) as `Sma` and inject the `SmaIndicator` module using `Chart.Inject(SmaIndicator)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs11" %}

## Stochastic

Stochastic shows how a stock compares to its previous price levels. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#type) as `Stochastic` and inject the `StochasticIndicator` module using `Chart.Inject(StochasticIndicator)` method. The Stochastic indicator is represented by four lines (`upperLine`, `lowerLine`, `periodLine`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/documentation/api/chart/technicalIndicatorModel) and [`overSold`](https://ej2.syncfusion.com/documentation/api/chart/technicalIndicatorModel) properties of the indicator, and the `periodLine` and `signalLine` are rendered based on the stochastic formula.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs12" %}

### Customize the Stochastic indicator

The color, width, and dash pattern of `upperLine` can be customized using [`upperLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#upperline), the `lowerLine` can be customized using [`lowerLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#lowerline), and the `periodLine` can be customized using [`periodLine`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#periodline) properties of the indicator. Customize the period used to find the average price using [`kPeriod`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#kperiod) and [`dPeriod`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#dperiod) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs13" %}

## Triangular moving average (TMA)

Moving average indicators are used to define the direction of the trend. To render a TMA indicator, use indicator [`type`](https://ej2.syncfusion.com/documentation/api/chart/technicalIndicatorModel) as `Tma` and inject the `TmaIndicator` module using `Chart.Inject(TmaIndicator)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs14" %}

## Technical-indicator customization

The color, width, and dash pattern of the signal line can be customized using [`fill`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#fill), [`width`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#width), and [`dashArray`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#dasharray) properties. The [`period`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#period) property defines the number of data points used for calculations. The [`field`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#field) property selects the financial data field used by applicable indicators. It is applicable to Bollinger Bands and moving averages. The [`showZones`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#showzones) property shows or hides the overbought and oversold regions. It is applicable for RSI and Stochastic indicators.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs15" %}

## Data source

Usually, technical indicators are added along with a financial series. The [`seriesName`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#seriesname) property identifies the named series whose data is analyzed by the indicator.

Technical indicators can also be added without a series by using the [`dataSource`](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator#datasource) property of the indicator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/technical-indicators-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/technical-indicators-cs16" %}

## Troubleshooting

- If an indicator is not displayed, verify that its `type`, field mappings, and source data are valid.
- If an indicator references a series, confirm that `seriesName` exactly matches the source series name.
- If an indicator uses a separate `dataSource`, configure `xName` and every required OHLC or volume mapping.
- If the indicator starts later than the source series, confirm that enough data points are available for the configured `period`.
- If Accumulation Distribution is not rendered, verify that the `volume`, `high`, `low`, and `close` mappings contain numeric values.
- If nested fields are used, set `enableComplexProperty` to `true` and use dot notation in the field mappings.

## See also

- [TechnicalIndicator API](https://ej2.syncfusion.com/documentation/api/chart/technicalindicator)
- [Tooltip](./tool-tip)