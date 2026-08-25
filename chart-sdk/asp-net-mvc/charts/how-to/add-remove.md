---
layout: post
title: Add or remove series in ASP.NET MVC Charts | Syncfusion
description: Learn here all about Add or Remove series in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Add or Remove
documentation: ug
---


<!-- markdownlint-disable MD036 -->

# How to add or remove a series dynamically in ASP.NET MVC Charts

You can add or remove the chart series dynamically by using the `addSeries` or `removeSeries` method.

To add or remove the series dynamically, follow the given steps:

**Step 1**:

To add a new series to chart dynamically, pass the series value to the `addSeries` method.

To remove the new series from chart dynamically, pass the series index to the `removeSeries` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/how-to/add-remove/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Add-remove.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/how-to/add-remove/add-remove.cs %}
{% endhighlight %}
{% endtabs %}

