---
layout: post
title: Internationalization in ASP.NET Core Chart Component
description: Learn here all about Internationalization in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization
publishingplatform: chart-sdk
documentation: ug
---


# Internationalization

Chart provides supports for internationalization for the following chart elements.

* Datalabel.
* Axis label.
* Tooltip.

For more information about number and date formatter, you can refer [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, time values in Chart component using `labelFormat` property in axis.

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

