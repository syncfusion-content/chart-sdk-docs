---
layout: post
title: Axis Types in ASP.NET Core Stock Chart Component
description: Learn here all about Axis Types in Syncfusion ASP.NET Core Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis types
publishingplatform: chart-sdk
documentation: ug
---


# Axis types

## DateTime axis

DateTime axis uses date time scale and displays the date time values as axis labels in the specified format. To use DateTime axis, set the [`ValueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartAxis.html#Syncfusion_EJ2_Charts_StockChartStockChartAxis_ValueType) of axis to `DateTime`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/datetime/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datetime.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/datetime/datetime.cs %}
{% endhighlight %}
{% endtabs %}



## DateTimeCategory axis

DateTimeCategory axis in the stock chart is used to display only business days. To use DateTimeCategory axis, set the [`ValueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartAxis.html#Syncfusion_EJ2_Charts_StockChartStockChartAxis_ValueType) of axis to `DateTimeCategory`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/datetimecategory/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datetimecategory.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/datetimecategory/datetimecategory.cs %}
{% endhighlight %}
{% endtabs %}



## Logarithmic axis

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>). To use Logarithmic axis, set the[`ValueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartStockChartAxis.html#Syncfusion_EJ2_Charts_StockChartStockChartAxis_ValueType) of axis to `Logarithmic`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/log/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Log.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/log/log.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Axis Customization](./axis-customization/)