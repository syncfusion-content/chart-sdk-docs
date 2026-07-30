---
layout: post
title: Dimensions in ASP.NET MVC 3D Chart Component
description: Learn here all about dimensions in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dimensions
publishingplatform: chart-sdk
documentation: ug
---

# Dimensions in ASP.NET MVC 3D Chart Component

## Size for container

The 3D chart can be rendered to its container size and it can be set via inline or CSS as demonstrated below.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/appearance/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/appearance/size/size.cs %}
{% endhighlight %}
{% endtabs %}



## Size for chart

<!-- markdownlint-disable MD036 -->

The size of the 3D chart can be set directly through [`Width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_Width) and [`Height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_Height) properties.

**In pixel**

The size of the 3D chart can be set in pixel as demonstrated below.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/appearance/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/appearance/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}



**In percentage**

By setting the value in percentage, 3D chart gets its dimension with respect to its container. For example, when the height is **50%**, chart renders to half of the container height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/appearance/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/appearance/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}



N> When you do not specify the size, it takes `450px` as the height and window size as its width.