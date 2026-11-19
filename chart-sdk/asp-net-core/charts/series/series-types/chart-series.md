---
layout: post
title: Series in ASP.NET Core Charts | Syncfusion
description: Learn here all about Series in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Series
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Series in ASP.NET Core Charts

A series in the chart represents a set of related data points. Use the [`Series`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html) collection to define one or more series in the chart configuration.

## Multiple Series

You can add multiple series to the chart by using the [`Series`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html) property. The series are rendered in the order they are added to the series array.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/multiple-series/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multiple-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/multiple-series/multiple-series.cs %}
{% endhighlight %}
{% endtabs %}

## Combination Series

Combinations of different types, such as Line and Column, can be rendered in a chart.

> Bar series cannot be combined with any other series because the axis orientation is different from that of other series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/combination/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Combination.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/combination/combination.cs %}
{% endhighlight %}
{% endtabs %}

## Enable Complex Property in Series

By setting [`EnableComplexProperty`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_EnableComplexProperty) value as **true** in series you can bind complex data to the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/complex/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Complex.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/complex/complex.cs %}
{% endhighlight %}
{% endtabs %}