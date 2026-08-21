---
layout: post
title: Data Editing in ASP.NET Core Charts | Syncfusion
description: Learn here all about Data Editing in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Editing
documentation: ug
---


# Data Editing in ASP.NET Core Charts

## Enable Data Editing

It provides drag and drop support to the rendered points. Now, the location or value of the point based on its `y` value can be changed. To enable the data editing, set the `enable` property to true in the drag settings of the series. Also, the color can be set using `fill` property and set the data editing minimum and maximum range using `minY` and `maxY` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/data-editing/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/data-editing/default/default.cs %}
{% endhighlight %}
{% endtabs %}


