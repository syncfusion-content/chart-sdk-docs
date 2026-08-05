---
layout: post
title: Series Types in ASP.NET MVC Stock Chart Component
description: Learn here all about Series Types in Syncfusion ASP.NET MVC Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Series Types
publishingplatform: chart-sdk
documentation: ug
---


# Stock Chart Series Types

Essential<sup style="font-size:70%">&reg;</sup> JS 2 StockChart  Stock Chart supports 6 major types of series namely `Line`, `Spline`, `Hilo`, `HiloOpenClose`, `Hollow Candle` and `Candle` . By using the series dropdown button you can navigate between the above listed series types.

<!-- markdownlint-disable MD036 -->

**Line**

To render a line series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartSeries.html#Syncfusion_EJ2_Charts_StockChartStockChartSeries_Type) as `Line`.

**Candle**

To render a candle series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartSeries.html#Syncfusion_EJ2_Charts_StockChartStockChartSeries_Type) as `Candle` .

**HollowCandle**

To render a hollowcandle series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartSeries.html#Syncfusion_EJ2_Charts_StockChartStockChartSeries_Type) as `Candle` and set `EnableSolidCandle` as false.

**Spline**

To render a spline series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartSeries.html#Syncfusion_EJ2_Charts_StockChartStockChartSeries_Type) as `Spline`.

**Hilo**

To render a hilo series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartSeries.html#Syncfusion_EJ2_Charts_StockChartStockChartSeries_Type) as `Hilo` .

**HiloOpenClose**

To render a hiloOpenClose series, use series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartSeries.html#Syncfusion_EJ2_Charts_StockChartStockChartSeries_Type) as `HiloOpenClose`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/candle/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Candle.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/candle/candle.cs %}
{% endhighlight %}
{% endtabs %}


