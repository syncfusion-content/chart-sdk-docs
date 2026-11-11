---
layout: post
title: Chart Dimensions in ASP.NET Core Charts | Syncfusion
description: Learn here all about Chart Dimensions in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Dimensions
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Chart Dimensions in ASP.NET Core Charts

## Size for Container

A chart can render to its container size. You can set the size via inline style or CSS as demonstrated below.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/size/size.cs %}
{% endhighlight %}
{% endtabs %}

## Size for Chart

You can also set the size for the chart directly through the [`width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Width) and [`height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Height) properties.

### In pixel

You can set the size of the chart in pixels as demonstrated below.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}

### In percentage

By setting a value as a percentage, the chart gets its dimensions with respect to its container. For example, when the height is `50%`, the chart renders to half of the container height.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}

> When you do not specify the size, the chart takes `450px` as the height and the window size as its width by default.
