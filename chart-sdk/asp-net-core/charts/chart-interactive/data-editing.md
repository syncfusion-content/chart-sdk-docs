---
layout: post
title: Data Editing in ASP.NET Core Charts | Syncfusion
description: Learn here all about Data Editing in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Editing
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Data Editing in ASP.NET Core Charts

## Enable data editing

The chart provides drag-and-drop support for the rendered points. The location and value of a point can be changed based on its y-value. To enable data editing, set the `enable` property to `true` in the `dragSettings` of the series. You can also set the color of the dragged point using the `fill` property and configure the minimum and maximum y-range using the `minY` and `maxY` properties of `dragSettings`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/data-editing/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/data-editing/default/default.cs %}
{% endhighlight %}
{% endtabs %}

