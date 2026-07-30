---
layout: post
title: Multiple Layer in Syncfusion ASP.NET MVC Maps Component
description: Learn here all about Multiple Layer in Syncfusion ASP.NET MVC Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Multiple Layer
publishingplatform: chart-sdk
documentation: ug
---

# Adding multiple layers in the Map

The multilayer support allows loading multiple shape files in a single container and enables Maps to display more information. The shape layer is the main layer of the Maps. Multiple layers can be added in a shape layer as **SubLayer** using the `Type` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/multilayer/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Multilayer.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/multilayer/multilayer.cs %}
{% endhighlight %}
{% endtabs %}



![Adding multiple layers in the Map](../images/How-to/multilayer.PNG)
