---
layout: post
title: Trend lines in JavaScript Stock chart control | Syncfusion
description: Learn here all about Trend lines in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Trend lines 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Trend lines in JavaScript Stock chart control

Trendlines are used to show the direction and speed of price.

StockChart supports 6 types of trendlines namely `Linear`,`Exponential`,`Logarithmic`,`Polynomial`,`Power`,`Moving Average`. By using trendline dropdown button you can add or remove the required trendline type.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets. To render a linear trendline, use trendline [`type`](../api/stock-chart/stockChartTrendlineModel/#type) as `Linear` and inject `Trendlines` module using `StockChart.Inject(Trendlines)`.

## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.

To render a exponential trendline, use trendline [`type`](../api/stock-chart/stockChartTrendlineModel/#type) as `Exponential` and inject
`Trendlines` module using `StockChart.Inject(Trendlines)`.

## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out. A logarithmic trendline can use negative and/or positive values.

To render a logarithmic trendline, use trendline [`type`](../api/stock-chart/stockChartTrendlineModel/#type) as `Logarithmic` and inject
`Trendlines` module using `StockChart.Inject(Trendlines)`.

## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.

To render a polynomial trendline, use trendline [`type`](../api/stock-chart/stockChartTrendlineModel/#type) as `Polynomial` and inject
`Trendlines` module using `StockChart.Inject(Trendlines)`.

`polynomialOrder` used to define the polynomial value.

## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.

To render a power trendline, use trendline [`type`](../api/stock-chart/stockChartTrendlineModel/#type) as `Power` and inject `Trendlines` module using `StockChart.Inject(Trendlines)`.

## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.

To render a moving average trendline, use trendline [`type`](../api/stock-chart/stockChartTrendlineModel/#type) as `MovingAverage` and inject
`Trendlines` module using `StockChart.Inject(Trendlines)`.

`period` property defines the period to find the moving average.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs31/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs31" %}

**Customization of Trendline**

The [`fill`](../api/stock-chart/stockChartTrendlineModel/#fill) and [`width`](../api/stock-chart/stockChartTrendlineModel/#width) properties are used to customize the appearance of the trendline.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs32/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs32/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs32" %}