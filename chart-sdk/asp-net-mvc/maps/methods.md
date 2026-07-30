---
layout: post
title: Methods in Syncfusion ASP.NET MVC Maps Component
description: Learn here all about the methods in the Syncfusion ASP.NET MVC Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Maps
publishingplatform: chart-sdk
documentation: ug
---

# Methods in ASP.NET MVC Maps component

## Methods

This section explains the methods used in the Maps component.

## getMinMaxLatitudeLongitude

The `getMinMaxLatitudeLongitude` method returns the minimum and maximum latitude and longitude values of the Maps visible area. This method returns a `IMinMaxLatitudeLongitude` object that contains the Maps minimum and maximum latitude and longitude coordinates.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/methods/getMinMaxLatitudeLongitude/razor %}
{% endhighlight %}
{% highlight c# tabtitle="GetMinMax.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/methods/getMinMaxLatitudeLongitude/getMinMaxLatitudeLongitude.cs %}
{% endhighlight %}
{% endtabs %}


![getMinMaxLatitudeLongitude method](./images/Methods/getMinMaxLatitudeLongitude-method.PNG)
