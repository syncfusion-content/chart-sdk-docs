---
layout: post
title: Axis Customization in ASP.NET Core Sparkline Charts | Syncfusion
description: Learn here all about Axis Customization in Syncfusion ASP.NET Core Sparkline Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis Customization
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


# Axis Customization in ASP.NET Core Sparkline Charts

You can customize axis value types and min and max values of the sparkline.

## Change value type of the sparkline

You can change the sparkline value type by setting the [`valueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Sparkline.html#Syncfusion_EJ2_Charts_Sparkline_ValueType) property to `Numeric`, `Category`, or `DateTime`.
<!-- markdownlint-disable MD036 -->

**DateTime**

You can assign date-time values to the sparkline by setting the [`valueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Sparkline.html#Syncfusion_EJ2_Charts_Sparkline_ValueType) property to `DateTime`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/datetime/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datetime.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/datetime/datetime.cs %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD036 -->

**Category**

You can assign category values to the sparkline by setting [`valueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Sparkline.html#Syncfusion_EJ2_Charts_Sparkline_ValueType) to `Category`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/category/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Category.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/category/category.cs %}
{% endhighlight %}
{% endtabs %}


**Numeric**

You can assign numeric values to the sparkline by setting [`valueType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Sparkline.html#Syncfusion_EJ2_Charts_Sparkline_ValueType) to `Numeric`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/numeric/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Numeric.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/numeric/numeric.cs %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD036 -->

## Change min and max values of axis

You can change the min and max values of x-axis by setting the [`minX`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html#Syncfusion_EJ2_Charts_SparklineAxisSettings_MinX) and [`maxX`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html#Syncfusion_EJ2_Charts_SparklineAxisSettings_MaxX) values to the [`axisSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html) property. You can also change the min and max values of y-axis by setting the [`minY`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html#Syncfusion_EJ2_Charts_SparklineAxisSettings_MinY) and [`maxY`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html#Syncfusion_EJ2_Charts_SparklineAxisSettings_MaxY) values to the [`axisSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/minmax/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Minmax.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/minmax/minmax.cs %}
{% endhighlight %}
{% endtabs %}



## Change value of axis

You can set horizontal axis line value of the sparkline by setting [`value`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html#Syncfusion_EJ2_Charts_SparklineAxisSettings_Value) to the [`axisSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineAxisSettings.html) property. The following code example shows this.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/value/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Value.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/value/value.cs %}
{% endhighlight %}
{% endtabs %}



## Axis line customization

Axis of the sparkline can be collapsed using the [`visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineLineSettings.html#Syncfusion_EJ2_Charts_SparklineLineSettings_Visible) property in [`lineSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineLineSettings.html); this is not applicable for win-loss. You can customize the [`color`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineLineSettings.html#Syncfusion_EJ2_Charts_SparklineLineSettings_Color), [`width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineLineSettings.html#Syncfusion_EJ2_Charts_SparklineLineSettings_Width), [`opacity`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineLineSettings.html#Syncfusion_EJ2_Charts_SparklineLineSettings_Opacity), and [`dashArray`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.SparklineLineSettings.html#Syncfusion_EJ2_Charts_SparklineLineSettings_DashArray) of axis line.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/axis-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Axis_line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/sparkline-charts/axis/axis-line/axis_line.cs %}
{% endhighlight %}
{% endtabs %}

