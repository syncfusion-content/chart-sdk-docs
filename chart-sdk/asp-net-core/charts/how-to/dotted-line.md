---
layout: post
title: How to add a dotted line in ASP.NET Core Charts | Syncfusion
description: Learn here all about Dotted Line in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dotted Line
publishingplatform: chart-sdk
documentation: ug
---


# How to add a dotted line using Annotation in ASP.NET Core Charts

By using `annotation`, you can add dotted lines in the chart.

To add dotted lines in the chart, follow the given steps:

**Step 1**: Initialize the custom elements by using the `annotation` property.

By setting `coordinateUnits` value as `point` in annotation object, you can place dotted lines in the chart based on point x and y values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/dotted-annotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dotted-annotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/dotted-annotation/dotted-annotation.cs %}
{% endhighlight %}
{% endtabs %}


