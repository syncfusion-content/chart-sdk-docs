---
layout: post
title: Marker Type in Syncfusion ASP.NET Core Maps Component
description: Learn here all about Marker Type in Syncfusion ASP.NET Core Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Marker Type
publishingplatform: chart-sdk
documentation: ug
---

# Marker types in ASP.NET Core Maps Component

## Add different types of markers

Different marker objects can be added to the Maps component using the marker settings. To update different marker settings in Maps, follow the given steps.

**Step 1**:

Initialize the Maps component with marker settings. Here, a marker has been added with specified latitude and longitude of California by using the `DataSource` property. To customize the shape of the marker using the `Shape` property and change the border color and width of the marker using the `Border` property as mentioned in the following example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/marker-type/marker1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Marker1.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/marker-type/marker1/marker1.cs %}
{% endhighlight %}
{% endtabs %}



![Marker type](../images/How-to/marker.PNG)

**Step 2**:

Customize the above option for n number of markers as mentioned in the following example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/marker-type/marker2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Marker2.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/marker-type/marker2/marker2.cs %}
{% endhighlight %}
{% endtabs %}



![Marker type](../images/How-to/marker-type.PNG)