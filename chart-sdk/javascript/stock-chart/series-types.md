---
layout: post
title: Series types in JavaScript Stock chart control | Syncfusion
description: Learn here all about Series types in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Series types 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Series types in JavaScript Stock chart control

Essential JS 2 StockChart supports 6 major types of series namely `Line`, `Spline`, `Hilo`, `HiloOpenClose`, `Hollow Candle` and `Candle` . By using the series dropdown button you can navigate between the above listed series types.

<!-- markdownlint-disable MD036 -->

## Line

To render a line series, use series [`type`](../api/stock-chart/stockSeriesModel/#type-string) as `Line` and inject `LineSeries` module using `StockChart.Inject(LineSeries)` method.

## Spline

To render a spline series, use series [`type`](../api/stock-chart/stockSeriesModel/#type-string) as `Spline` and inject `SplineSeries` module using `StockChart.Inject(SplineSeries)` method.

## Hilo

To render a hilo series, use series [`type`](../api/stock-chart/stockSeriesModel/#type) as `Hilo` and inject `HiloSeries` module using `StockChart.Inject(HiloSeries)` method.

## HiloOpenClose

To render a hiloOpenClose series, use series [`type`](../api/stock-chart/stockSeriesModel/#type) as `HiloOpenClose` and inject `HiloOpenCloseSeries` module using `StockChart.Inject(HiloOpenCloseSeries)` method.

## HollowCandle

To render a hollowcandle series, use series [`type`](../api/stock-chart/stockSeriesModel/#type) as `Candle` and set `enableSolidCandle` as false. Now inject `CandleSeries` module using `StockChart.Inject(CandleSeries)` method.

## Candle

To render a candle series, use series [`type`](../api/stock-chart/stockSeriesModel/#type) as `Candle` and inject `CandleSeries` module using `StockChart.Inject(CandleSeries)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs24" %}
