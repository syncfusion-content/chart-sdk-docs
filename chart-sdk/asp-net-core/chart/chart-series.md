---
layout: post
title: Chart Series in ASP.NET Core Chart Component
description: Learn here all about Chart Series in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Series
publishingplatform: chart-sdk
documentation: ug
---

# Chart Series in Chart Component

## Multiple Series

You can add multiple series to the chart by using [`Series`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html) property. The series are rendered in the order as it is added to the series array.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/multiple-series/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multiple-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/multiple-series/multiple-series.cs %}
{% endhighlight %}
{% endtabs %}

## Combination Series

Combination of different types like Line, column etc, can be rendered in a chart.

N>Bar series cannot be combined with any other series as the axis orientation is different from other series.

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