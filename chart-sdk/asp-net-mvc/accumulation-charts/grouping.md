---
layout: post
title: Grouping in ASP.NET MVC Accumulation Chart Component
description: Learn here all about Grouping in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Grouping
publishingplatform: chart-sdk
documentation: ug
---

<!-- markdownlint-disable MD036 -->

# Grouping

You can club/group few points of the series based on [`GroupTo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_GroupTo) property. For example, if the club value is 11, then the points with value less than 11 is grouped together and will be showed as a single point with label `others`. The property also takes value in percentage (percentage of total data points value).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/group/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/group/group.cs %}
{% endhighlight %}
{% endtabs %}



## Pie Grouping

**Broken Slice**

You can visualize all points available in club/group points by clicking on the grouped point. For example, if 5 points are grouped together it will be showed as a single slice with label `others`. If we click on `others` slice it will explode and broke into 5 seperate slices.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/slice/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Slice.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/slice/slice.cs %}
{% endhighlight %}
{% endtabs %}



**Group Mode**

Slice can also be grouped based on number of points by specifying the [`GroupMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_GroupMode) to Point. For example, if the group to value is 11, accumulation chart will show 1st 11 points and will group remaining entries in the collection as a single point.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/groupmode/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Groupmode.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/groupmode/groupmode.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

You can customize the grouped point and its data label using `PointRender` and `TextRender` event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/grouping/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

