---
layout: post
title: Title And Sub Title in ASP.NET Core Accumulation Chart Component | Syncfusion
description: Learn here all about Title And Sub Title in Syncfusion ASP.NET Core Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Title And Sub Title
publishingplatform: chart-sdk
documentation: ug
---

<!-- markdownlint-disable MD036 -->

# Title in ASP.NET Core Accumulation Chart Component

Accumulation Chart can be given a title using [`title`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_Title) property, to show the information about the data plotted.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



## Title customization

Accumulation Chart can be customized a title using [`titleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_TitleStyle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/title-cus/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



### Position

The [`Position`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChartTitleStyleSettings.html#Syncfusion_EJ2_Charts_AccumulationChartTitleStyleSettings_Position) property customizes the placement of the accumulation chart title. It supports the following options: `Right`, `Left`, `Bottom`, `Top`, and `Custom`. The custom option allows you to position the title anywhere on the chart using x and y coordinates, providing flexible title alignment based on layout requirements.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/title-position/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title-position.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/title-position/title-position.cs %}
{% endhighlight %}
{% endtabs %}



## SubTitle

Accumulation Chart can be given a subtitle using [`subTitle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_SubTitle) property, to show the information about the data plotted.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/sub-title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



## SubTitle customization

Accumulation Chart can be customized a subtitle using [`subTitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_SubTitleStyle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/sub-title-cus/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



### Position

The [`Position`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChartTitleStyleSettings.html#Syncfusion_EJ2_Charts_AccumulationChartTitleStyleSettings_Position) property customizes the placement of the accumulation chart subtitle. It supports the following options: `Right`, `Left`, `Bottom`, `Top`, and `Custom`. The custom option allows you to position the subtitle anywhere on the chart using x and y coordinates, providing flexible subtitle alignment based on layout requirements.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/title-position/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title-position.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pie-doughnut/title-position/title-position.cs %}
{% endhighlight %}
{% endtabs %}

