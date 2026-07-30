---
layout: post
title: Other Maps in Syncfusion ASP.NET Core Maps Component
description: Learn here all about other Maps in Syncfusion ASP.NET Core Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Other Maps
publishingplatform: chart-sdk
documentation: ug
---

# Other Maps providers

Apart from OpenStreetMap and Bing Maps, you can also render Maps from other online map service providers by specifying the URL provided by those providers in the [UrlTemplate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Maps.MapsLayer.html#Syncfusion_EJ2_Maps_MapsLayer_UrlTemplate) property. The URL template concept has been implemented in such a way that any online map service providers using the following template can benefit from previewing their Map in the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Maps component.

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.PNG

* "${z}" - It represents zoom factor (level).
* "${x}" - It indicates tile image x-position (tileX).
* "${y}" - It indicates tile image y-position (tileY).

In this case, the key generated for those online map service providers can also be appended to the URL. This allows to create personalized Maps with your own content and imagery.

Following is an example of how to add a TomTom map. You can generate an API key by following the steps in this [link](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction) and then adding the key to the URL.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermap/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OtherMap.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermap/othermap.cs %}
{% endhighlight %}
{% endtabs %}

![TomTom Maps](../images/MapProviders/tomtom-maps.PNG)

## Enabling zooming and panning

Tile Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermapzoom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OtherZoom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermapzoom/otherzoom.cs %}
{% endhighlight %}
{% endtabs %}

![TomTom Maps with Zooming and Panning](../images/MapProviders/tomtom-maps-zooming.PNG)

## Adding markers and navigation line

Markers can be added to the layers of tile Maps by setting the corresponding location's coordinates of latitude and longitude using [MarkerSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Maps.MapsLayer.html#Syncfusion_EJ2_Maps_MapsLayer_MarkerSettings). Navigation lines can be added on top of an tile Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [NavigationLineSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Maps.MapsLayer.html#Syncfusion_EJ2_Maps_MapsLayer_NavigationLineSettings).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermapmarker/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OtherMarker.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermapmarker/othermarker.cs %}
{% endhighlight %}
{% endtabs %}

![TomTom Maps with Markers and Navigation Line](../images/MapProviders/tomtom-maps-marker-and-line.PNG)

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the tile Maps layer for highlighting a particular continent or country in tile Maps by adding another layer and specifying the [Type](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Maps.MapsLayer.html#Syncfusion_EJ2_Maps_MapsLayer_Type) property of Maps layer to **SubLayer**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othersublayer/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OtherSubLayer.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othersublayer/othersublayer.cs %}
{% endhighlight %}
{% endtabs %}

![TomTom Maps with Sublayer](../images/MapProviders/tomtom-map-sublayer.PNG)

## Enabling legend

The legend can be added to the tile Maps by setting the [Visible](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Maps.MapsLegendSettings.html#Syncfusion_EJ2_Maps_MapsLegendSettings_Visible) property of [LegendSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Maps.Maps.html#Syncfusion_EJ2_Maps_Maps_LegendSettings) to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermaplegend/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OtherLegend.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/map-providers/othermaplegend/othermaplegend.cs %}
{% endhighlight %}
{% endtabs %}

![TomTom Maps with Legend](../images/MapProviders/tomtom-map-legend.PNG)