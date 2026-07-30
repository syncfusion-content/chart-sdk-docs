---
layout: post
title: Internationalization in ASP.NET MVC Treemap Component
description: Learn here all about Internationalization in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization
publishingplatform: chart-sdk
documentation: ug
---

# Internationalization

The TreeMap control supports internationalization for the following elements:

* Data label
* Tooltip

For more information about number and date formatter, refer to [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, and time values in the tree map control using the `format` property in the Treemap.

**Numeric format**

In the following code example, tooltip is globalized to Deutsch culture.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/internationalization/internationalization/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Internationlization.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/internationalization/internationalization/internationalization.cs %}
{% endhighlight %}
{% endtabs %}

