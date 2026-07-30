---
layout: post
title: Range in ASP.NET MVC Range Navigator Component
description: Learn here all about Range in Syncfusion ASP.NET MVC Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range
publishingplatform: chart-sdk
documentation: ug
---


# Selecting Range

The Range Selector's left and right thumbs are used to indicate the selected range in the large collection of data. A range can be selected in the following ways:

* By dragging the thumbs.
* By tapping on the labels.
* By setting the start and the end through the `value` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/range/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Range.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/range/range.cs %}
{% endhighlight %}
{% endtabs %}



![Selecting range](images/range.png)