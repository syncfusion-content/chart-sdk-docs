---
layout: post
title: Range Band in ASP.NET Core Sparkline Charts | Syncfusion
description: Learn here all about Range Band in Syncfusion ASP.NET Core Sparkline Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range Band
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


# Range Band in ASP.NET Core Sparkline Charts

This section explains how to customize the sparkline with multiple range bands.

## Range band customization

The range band feature is used to highlight a particular range along with the y-axis using the [`startRange`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineRangeBandSetting.html#Syncfusion_EJ2_Charts_SparklineRangeBandSetting_StartRange) and [`endRange`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineRangeBandSetting.html#Syncfusion_EJ2_Charts_SparklineRangeBandSetting_EndRange) properties. You can also customize the [`color`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineRangeBandSetting.html#Syncfusion_EJ2_Charts_SparklineRangeBandSetting_Color) and [`opacity`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineRangeBandSetting.html#Syncfusion_EJ2_Charts_SparklineRangeBandSetting_Opacity) of the range band.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/rangeband/range/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Range.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/rangeband/range/range.cs %}
{% endhighlight %}
{% endtabs %}


## Multiple range band customization

You can define multiple range bands to a sparkline as shown in the following code sample.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/rangeband/multi-range/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multi_range.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/rangeband/multi-range/multi-range.cs %}
{% endhighlight %}
{% endtabs %}
