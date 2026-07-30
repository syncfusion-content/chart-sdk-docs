---
layout: post
title: Grouping in ASP.NET Core Accumulation Chart Component | Syncfusion
description: Learn here all about Grouping in Syncfusion ASP.NET Core Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Grouping
publishingplatform: chart-sdk
documentation: ug
---

<!-- markdownlint-disable MD036 -->

# Grouping in ASP.NET Core Accumulation Chart Component

You can club or group few points of the series based on [`groupTo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_GroupTo) property. For example, if the club value is 11, then the points with value less than 11 is grouped together and will be showed as a single point with label `others`. The property also takes value in percentage (percentage of total data points value).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/grouping/group/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class GroupingChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



## Pie Grouping

**Broken Slice**

You can visualize all points available in club or group points by clicking on the grouped point. For example, if 5 points are grouped together it will be showed as a single slice with label `others`. If the `others` slice is clicked, it will explode and break into 5 seperate slices.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/grouping/slice/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class GroupingChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



**Group Mode**

Slice can also be grouped based on the number of points by specifying the [`groupMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_GroupMode) to Point. For example, if the group to value is 11, accumulation chart will show 1st 11 points and will group remaining entries in the collection as a single point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/grouping/groupmode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class GroupingChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



## Customization

You can customize the grouped point and its data label using `pointRender` and `textRender` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/grouping/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class GroupingChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}

