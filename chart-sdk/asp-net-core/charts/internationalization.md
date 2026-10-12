---
layout: post
title: Internationalization in ASP.NET Core Charts | Syncfusion
description: Learn here all about Internationalization in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Internationalization in ASP.NET Core Charts

The chart provides support for internationalization for the following chart elements:

* Datalabel.
* Axis label.
* Tooltip.

For more information about number and date formatter, you can refer [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales. The internationalization library is used to globalize number, date, and time values in the chart component using the `labelFormat` property in the axis.

**Numeric Format**

In the following example axis, point and tooltip labels are globalized to EUR.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/number-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Number-format.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/number-format/number-format.cs %}
{% endhighlight %}
{% endtabs %}

