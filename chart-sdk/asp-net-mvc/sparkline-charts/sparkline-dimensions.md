---
layout: post
title: Sparkline Dimensions in ASP.NET MVC Sparkline Component
description: Learn here all about Sparkline Dimensions in Syncfusion ASP.NET MVC Sparkline component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Sparkline Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Sparkline Dimensions

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/sparkline-dimensions/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/sparkline-dimensions/size/size.cs %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD036 -->

## Size for sparkline

<!-- markdownlint-disable MD036 -->

You can also set the size for sparkline directly using the [`width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline~Width.html) and [`height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline~Height.html) properties.

**In pixel**

You can set the size for sparkline in pixel as demonstrated in the following code.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/sparkline-dimensions/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/sparkline-dimensions/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}



**In percentage**

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/sparkline-dimensions/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/sparkline-dimensions/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}

