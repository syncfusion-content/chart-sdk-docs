---
layout: post
title: Trend Lines in ASP.NET MVC Stock Chart Component
description: Learn here all about Trend Lines in Syncfusion ASP.NET MVC Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Trend Lines
publishingplatform: chart-sdk
documentation: ug
---


# Trendlines

Trendlines are used to show the direction and speed of price.

Stock Chart supports 6 types of trendlines namely `Linear`,`Exponential`,`Logarithmic`,`Polynomial`,`Power`,`Moving Average`. By using trendline dropdown button you can add or remove the required trendline type.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets.To render a linear trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Type) as `Linear`.

## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.
To render a exponential trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Type) as `Exponential`.

## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out. A logarithmic trendline can use negative and/or positive values.
To render a logarithmic trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Type) as `Logarithmic`.

## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.
To render a polynomial trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Type) as `Polynomial`.
`PolynomialOrder` used to define the polynomial value.

## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.
To render a power trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Type) as `Power`.

## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.
To render a moving average trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Type) as `MovingAverage`.

`Period` property defines the period to find the moving average.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/trendlines/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Trendlines.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/trendlines/trendlines.cs %}
{% endhighlight %}
{% endtabs %}



## Customization of Trendline

The [`Fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Fill) and [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartTrendlines.html#Syncfusion_EJ2_Charts_StockChartTrendlines_Width) properties are used to customize the appearance of the trendline.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/customtrendlines/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Customtrendlines.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/customtrendlines/customtrendlines.cs %}
{% endhighlight %}
{% endtabs %}


