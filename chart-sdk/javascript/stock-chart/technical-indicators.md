---
layout: post
title: Technical indicators in JavaScript Stock chart control | Syncfusion
description: Learn here all about Technical indicators in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Technical indicators 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Technical indicators in JavaScript Stock chart control

A technical indicator is a mathematical calculation based on historic price, volume or open interest information that aims to forecast financial market direction.

StockChart supports 10 types of technical indicators namely `Accumulation Distribution`, `ATR`, `EMA`,`SMA`,`TMA`,`Momentum`,`MACD`,`RSI`,`Stochastic`,`Bollinger Band`. By using indicator dropdown box you can add an remove the required indicators types.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of stock. To render a Accumulation Distribution Indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `AccumulationDistribution` and inject
`AccumulationDistributionIndicator` module using `StockChart.Inject(AccumulationDistributionIndicator)`. To calculate the signal line [`volume`](../api/stock-chart/stockChartIndicator/#volume) field is additionally added with `dataSource`.

## Average True Range (ATR)

ATR measures the stock volatility by comparing the current value with the previous value. To render a Average True Range (ATR) Indicator,
use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Atr` and inject `AtrIndicator` module using `StockChart.Inject(AtrIndicator)`.

## Exponential Moving Average (EMA)

Moving average Indicators are used to define the direction of the trend. To render a EMA Indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Ema` and inject `EmaIndicator` module using `StockChart.Inject(EmaIndicator)`.

## Momentum

Momentum shows the speed at which the price of the stock is changing. To render a Momentum indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Momentum`and inject `MomentumIndicator` module using `StockChart.Inject(MomentumIndicator)` method. Momentum indicator will be represented by two lines (upperLine, signalLine).In momentum indicator the upperBand value is always renders at the value 100.

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD Indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Macd` and inject `MacdIndicator` module using `StockChart.Inject(MacdIndicator)`.MACD indicator will be represented by MACD line,signal line, MACD histogram. MACD histogram is used to differentiate MACD line and signal line.

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render a RSI Indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Rsi` and inject `RsiIndicator` module using `StockChart.Inject(Rsindicator)`.RSI indicator will be represented
by three lines (upperBand, lowerBand, signalLine). The upperBand and lowerBand values are customized by [`overBought`](../api/stock-chart/stockChartIndicator/#overbought) and [`overSold`](../api/stock-chart/stockChartIndicator/#oversold) properties of indicator and the signalLine is calculated by RSI formula.

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA Indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Sma` and inject `SmaIndicator` module using `StockChart.Inject(SmaIndicator)`.

## Stochastic

It shows how a stock is, when compared to previous state. To render a Stochastic indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Stochastic` and inject `StochasticIndicator` module using `StockChart.Inject(StochasticIndicator)` method.
stochastic indicator will be represented by four lines (upperLine, lowerLine, periodLine, signalLine). In stochastic indicator the upperBand value and lowerBand value is customized by [`overBought`](../api/stock-chart/stockChartIndicator/#overbought) and [`overSold`](../api/stock-chart/stockChartIndicator/#oversold) properties of indicators and the periodLine and signalLine is render based on stochastic formula.

## Triangular Moving Average (TMA)

Moving average Indicators are used to define the direction of the trend. To render a TMA Indicator, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `Tma` and inject `TmaIndicator` module using `StockChart.Inject(TmaIndicator)`.

## Bollinger Band

A StockChart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](../api/stock-chart/stockChartIndicator/#type) as `BollingerBand` and inject `BollingerBands` module using `StockChart.Inject(BollingerBands)` method. Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine).
The default values of the Bollinger Band [`period`](../api/stock-chart/stockChartIndicator/#period) is 14 and [`standardDeviations`](../api/stock-chart/stockChartIndicator/#standarddeviation) is 2.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs27/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs27" %}

## Indicator Events

The StockChart component supports **indicator lifecycle events**, allowing you to monitor and control indicator add and remove operations triggered through the built-in toolbar indicator dropdown. These events are useful for validating user actions, restricting specific indicators, tracking indicator changes, and integrating indicator interactions with application logic.

The following indicator events are supported by the StockChart component:

- **`beforeIndicatorChange`** – Fired before an indicator is added or removed. This event allows you to review the requested action in advance and cancel it by setting `cancel` to `true`.

- **`indicatorChanged`** – Fired after an indicator has been added or removed successfully. This event occurs only if the action was not canceled and can be used to handle the updated state in your application.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs40" %}