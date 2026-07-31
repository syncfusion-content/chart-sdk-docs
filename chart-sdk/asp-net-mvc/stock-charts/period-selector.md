---
layout: post
title: Period Selector in ASP.NET MVC Stock Chart Component
description: Learn here all about Period Selector in Syncfusion ASP.NET MVC Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Period Selector
publishingplatform: chart-sdk
documentation: ug
---


# Period selector

The period selector allows to select a range with specified periods. By default the period selector is enabled in stock chart.

## Periods

<!-- markdownlint-disable MD034 -->

Periods is an array of objects that allows users to specify the range of [`Periods`] (https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChart.html#Syncfusion_EJ2_Charts_StockChart_Periods). The `Interval` property specifies the count value of the button, and the `Text` property specifies the text to be displayed on button. The `IntervalType` property allows users to customize the intervals of the buttons. The `IntervalType` property supports the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/period/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Period.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/period/period.cs %}
{% endhighlight %}
{% endtabs %}



## Visibility of period selector

The [`EnablePeriodSelector`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChart.html#Syncfusion_EJ2_Charts_StockChart_EnablePeriodSelector) property allows users to toggle the visibility of period selector.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/visiblityperiod/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Visiblityperiod.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/getting-started/visiblityperiod/visiblityperiod.cs %}
{% endhighlight %}
{% endtabs %}

