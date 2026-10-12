---
layout: post
title: Category Axis in ASP.NET Core Charts | Syncfusion
description: Learn here all about Category Axis in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Category Axis
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Category Axis in ASP.NET Core Charts

Category axes are used to represent string values instead of numbers.

To quickly get started with the ASP.NET Core Category Axis, see the following video:

{% youtube "https://www.youtube.com/watch?v=l3M5ZvM1Ozs" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/column/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Column.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/column/column.cs %}
{% endhighlight %}
{% endtabs %}

## Label placement

By default, category labels are placed between the ticks on an axis. To place the labels on the ticks, use [`labelPlacement`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_LabelPlacement) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/placement/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Placement.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/placement/placement.cs %}
{% endhighlight %}
{% endtabs %}

## Range

The range of the category axis can be customized using the [`minimum`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_Minimum), [`maximum`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_Maximum), and [`interval`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_Interval) properties of the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/range/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Range.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/range/range.cs %}
{% endhighlight %}
{% endtabs %}

## Indexed category axis

A category axis can also be rendered based on the index values of the data source. To do this, set the `isIndexed` property to `true` in the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/index/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/category/index/index.cs %}
{% endhighlight %}
{% endtabs %}

