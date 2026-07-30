---
layout: post
title: Chart Dimensions in ASP.NET MVC Chart Component
description: Learn here all about Chart Dimensions in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Chart Dimensions

## Size for Container

Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/size/size.cs %}
{% endhighlight %}
{% endtabs %}



## Size for Chart

You can also set size for chart directly through [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Width) and [`Height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Height) properties.

<!-- markdownlint-disable MD036 -->
**In Pixel**
<!-- markdownlint-disable MD036 -->

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}



**In Percentage**

By setting value in percentage, chart gets its dimension with respect to its container. For example, when the height is ‘50%’, chart renders to half of the container height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}



N> When you do not specify the size, it takes `450px` as the height and window size as its width.