---
layout: post
title: Dotted Line in ASP.NET MVC Chart Component
description: Learn here all about Dotted Line in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dotted Line
publishingplatform: chart-sdk
documentation: ug
---


# To add dotted line using annotation

By using `annotation`, you can add dotted lines in the chart.

To add dotted lines in the chart, follow the given steps:

**Step 1**: Initialize the custom elements by using the `annotation` property.

By setting `coordinateUnits` value as `point` in annotation object, you can place dotted lines in the chart based on point x and y values.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/column/dotted-annotation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dotted-annotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/column/dotted-annotation/dotted-annotation.cs %}
{% endhighlight %}
{% endtabs %}

