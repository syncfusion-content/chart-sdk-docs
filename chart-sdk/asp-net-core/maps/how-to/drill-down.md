---
layout: post
title: How to enable drill-down in Syncfusion ASP.NET Core Maps | Syncfusion
description: Learn here all about Drill Down in Syncfusion ASP.NET Core Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Drill Down
publishingplatform: chart-sdk
documentation: ug
---

# How to enable drill-down in ASP.NET Core Maps

By clicking a continent, all the countries available in that continent can be viewed using the drill-down feature. For example, the countries in the `Africa` continent have been showcased here. To showcase all the countries in `Africa` continent by clicking the `ShapeSelected` event as mentioned in the following example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/drilldown/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Drilldown.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/drilldown/drilldown.cs %}
{% endhighlight %}
{% endtabs %}

Note: Refer the data values for WorldMap(https://www.syncfusion.com/downloads/support/directtrac/general/ze/WorldMap-1118251150) and Africa(https://www.syncfusion.com/downloads/support/directtrac/general/ze/Africa1913669070) shapes here.

![Drill-down](../images/How-to/drilldown.gif)