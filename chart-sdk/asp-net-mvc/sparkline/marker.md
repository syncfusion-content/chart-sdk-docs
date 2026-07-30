---
layout: post
title: Marker in ASP.NET MVC Sparkline Component
description: Learn here all about Marker in Syncfusion ASP.NET MVC Sparkline component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Marker
publishingplatform: chart-sdk
documentation: ug
---


# Markers

This section explains how to add markers to the sparklines.

## Adding marker to the sparkline

To add marker to the sparkline, specify the [`visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.SparklineSparklineMarkerSettings~Visible.html) of [`markerSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.SparklineSparklineMarkerSettings.html) as following values. The [`visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.SparklineSparklineMarkerSettings~Visible.html) will accept multiple values too.

* All - Enables markers for all points.
* Start - Enables marker for the start point.
* End - Enables marker for the end point.
* High - Enables marker for the high point.
* Low - Enables marker for the low point.
* Negative - Enables markers for the negative points.

The following code example shows enabling markers for all points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/marker/allpoint/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Allpoint.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/marker/allpoint/allpoint.cs %}
{% endhighlight %}
{% endtabs %}



## Adding marker to special point

In sparkline, markers can be enabled for particular points such as the start, end, low, high, or negative. The following code examples shows enabling markers for the high and low points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/marker/specialpoint/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Specialpoint.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/marker/specialpoint/specialpoint.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing markers

Sparkline markers can be customized in terms of fill color, border color, width, opacity, and size. The following code example shows customizing marker's fill, border, and size.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/marker/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/marker/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

