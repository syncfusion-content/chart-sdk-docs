---
layout: post
title: Zooming in Syncfusion ASP.NET Core Maps Component
description: Learn here all about Zooming in Syncfusion ASP.NET Core Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Zooming
publishingplatform: chart-sdk
documentation: ug
---

# Center position zooming

The center position zooming can be achieved by using the `MapsCenterPosition` class and `ZoomFactor` property as mentioned in the following example. The center position is used to configure the zoom level of Maps, and the zoom factor is used to specify the center position where the Maps should be displayed.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/centerposition/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Centerposition.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/centerposition/centerposition.cs %}
{% endhighlight %}
{% endtabs %}



![Annotation zindex](../images/How-to/centerposition.PNG)