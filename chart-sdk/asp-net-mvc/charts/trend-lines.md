---
layout: post
title: Trend Lines in ASP.NET MVC Chart Component
description: Learn here all about Trend Lines in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Trend Lines
publishingplatform: chart-sdk
documentation: ug
---


<!-- markdownlint-disable MD036 -->

# Trend Lines in ASP.NET MVC Chart Component

Trendlines are used to show the direction and speed of price.

Trendlines can be generated for Cartesian type series (Line, Column, Scatter, Area, Candle, Hilo etc.) except bar type series. You can add more than one trendline to a series.

Chart supports 6 types of trendlines.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets. To render a linear trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html) as `Linear`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/linear/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Linear.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/linear/linear.cs %}
{% endhighlight %}
{% endtabs %}



## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.

To render a exponential trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html) as `Exponential`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/exponential/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Exponential.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/exponential/exponential.cs %}
{% endhighlight %}
{% endtabs %}



## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out.

A logarithmic trendline can use negative and/or positive values.

To render a logarithmic trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html) as `Logarithmic`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/logarithmic/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Logarithmic.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/logarithmic/logarithmic.cs %}
{% endhighlight %}
{% endtabs %}



## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.

To render a polynomial trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html) as `Polynomial`.

`PolynomialOrder` used to define the polynomial value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/polynomial/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Polynomial.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/polynomial/polynomial.cs %}
{% endhighlight %}
{% endtabs %}



## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.

To render a power trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html) as `Power`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/power/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Power.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/power/power.cs %}
{% endhighlight %}
{% endtabs %}



## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.

To render a moving average trendline, use trendline [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html) as `MovingAverage`.

`Period` property defines the period to find the moving average.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/movingaverage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Movingaverage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/movingaverage/movingaverage.cs %}
{% endhighlight %}
{% endtabs %}



**Customization of Trendlines**

The [`Fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html#Syncfusion_EJ2_Charts_ChartTrendline_Fill) and [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTrendline.html#Syncfusion_EJ2_Charts_ChartTrendline_Width) properties are used to customize the appearance of the trendline.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/custom-trendline/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-trendline.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/custom-trendline/custom-trendline.cs %}
{% endhighlight %}
{% endtabs %}



## Forecasting

Trendlines forecasting is the prediction of future/past situations.

Forecasting can be classified into two types as follows

* Forward Forecasting
* Backward Forecasting

**Forward Forecasting**

The value set for forwardForecast is used to determine the distance moving towards the future trend.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/forward-forecast/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Forward-forecast.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/forward-forecast/forward-forecast.cs %}
{% endhighlight %}
{% endtabs %}



**Backward Forecasting**

The value set for the backwardForecast is used to determine the past trends.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/backward-forecast/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Backward-forecast.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/backward-forecast/backward-forecast.cs %}
{% endhighlight %}
{% endtabs %}


## Show or hide a trendline

You can show or hide the trendline by setting trendline `visible` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/hide/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hide.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/trendlines/hide/hide.cs %}
{% endhighlight %}
{% endtabs %}
