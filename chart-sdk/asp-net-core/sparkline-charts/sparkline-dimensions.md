---
layout: post
title: Dimensions in ASP.NET Core Sparkline Charts | Syncfusion
description: Learn here all about Dimensions in Syncfusion ASP.NET Core Sparkline Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Sparkline Charts Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Dimensions in ASP.NET Core Sparkline Charts

## Size for container

Sparkline Charts can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/Sparkline Charts-charts/Sparkline Charts-dimensions/size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/Sparkline Charts-charts/Sparkline Charts-dimensions/size/size.cs %}
{% endhighlight %}
{% endtabs %}


<!-- markdownlint-disable MD036 -->

## Size for Sparkline Charts

<!-- markdownlint-disable MD036 -->

You can also set the size for Sparkline Charts directly using the [`width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~Width.html) and [`height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~Height.html) properties.

**In pixel**

You can set the size for Sparkline Charts in pixel as demonstrated in the following code.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/Sparkline Charts-charts/Sparkline Charts-dimensions/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/Sparkline Charts-charts/Sparkline Charts-dimensions/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}


**In percentage**

By setting values in percentage, Sparkline Charts gets its dimension with respect to its container. For example, when the height is set to â€˜50%â€™, Sparkline Charts is rendered to half of its container height.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/Sparkline Charts-charts/Sparkline Charts-dimensions/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/Sparkline Charts-charts/Sparkline Charts-dimensions/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}
