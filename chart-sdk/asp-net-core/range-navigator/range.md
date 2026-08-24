---
layout: post
title: Selecting Range in ASP.NET Core Range Navigator | Syncfusion
description: Learn here all about Range in Syncfusion ASP.NET Core Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range
documentation: ug
---


# Selecting Range in ASP.NET Core Range Navigator

The Range Selector's left and right thumbs are used to indicate the selected range in the large collection of data. A range can be selected in the following ways:

* By dragging the thumbs.
* By tapping on the labels.
* By setting the start and the end through the `value` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/range/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Range.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/range/range.cs %}
{% endhighlight %}
{% endtabs %}




![Selecting range](images/range.png)