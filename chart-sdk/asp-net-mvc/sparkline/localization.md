---
layout: post
title: Localization in ASP.NET MVC Sparkline Component
description: Learn here all about Localization in Syncfusion ASP.NET MVC Sparkline component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Localization
publishingplatform: chart-sdk
documentation: ug
---


# Localization

The sparkline control supports localization. The default culture for localization is `en-US`. You can change the culture using the `setCulture` method.

## Tooltip format

Sparkline tooltip supports localization. The following code sample shows tooltip text with currency format based on culture.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/localization/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/localization/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}

