---
layout: post
title: Polygon in Syncfusion ASP.NET MVC Maps component
description: Learn here all about Polygon in Syncfusion ASP.NET MVC Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Polygon
publishingplatform: chart-sdk
documentation: ug
---

# Polygon shape in ASP.NET MVC Maps component

The Maps component allows you to add polygon shape to a geometry map or an online map by using the properties in the [Polygons](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygonSettings.html#Syncfusion_EJ2_Maps_MapsPolygonSettings_Polygons). This section describes how to add polygon shape to the map and customize them.

## Adding polygon shape

The polygon shape can be rendered over the map layer by defining the [Points](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_Points) property in the `Polygons` of the Maps component. The `Points` property uses a collection of latitude and longitude values to define the polygon shape.

The `Polygons` provides the following properties for customizing the polygon shape of the Maps component.

* [Fill](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_Fill) - It is used to change the color of the polygon shape.
* [Opacity](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_Opacity) - It is used to change the opacity of the polygon shape.
* [BorderColor](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_BorderColor) - It is used to change the color of the border in the polygon shape.
* [BorderWidth](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_BorderWidth) - It is used to change the width of the border in the polygon shape.
* [BorderOpacity](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_BorderOpacity) - It is used to change the opacity of the border in the polygon shape.

> You can also include “n” polygon shapes using the [Polygons](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygonSettings.html#Syncfusion_EJ2_Maps_MapsPolygonSettings_Polygons) property.

The following example shows how to customize the polygon shape over the geometry map.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/polygon/polygon-shape/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Polygon-shape.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/polygon/polygon-shape/polygon-shape.cs %}
{% endhighlight %}
{% endtabs %}


![Maps with polygon shape](./images/Polygon/PolygonShape.png)

## Tooltip

Tooltip is used to display more information about a polygon shape during a mouse or touch interaction. Tooltip and tooltip template can be enabled by setting the `Visible` property to **true** in the [TooltipSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygonSettings.html#Syncfusion_EJ2_Maps_MapsPolygonSettings_TooltipSettings). Additionally, you need to set the desired content as a value to the [TooltipText](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_TooltipText) property in the `Polygons` property to show the tooltip. If you add 'n' numbers of polygon shapes, you can add the `TooltipText` property to each polygon, which will display the tooltip for the associated polygon shape.

### Tooltip customization

The following properties are available in the [TooltipSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygonSettings.html#Syncfusion_EJ2_Maps_MapsPolygonSettings_TooltipSettings) to customize the appearance of the tooltip.

* `Border` - To change the color, width, and opacity of the border of the tooltip in the polygon shape.
* `Fill` - Applies the color of the tooltip in the polygon shape.
* `TextStyle` - To change the style of the text in the tooltip of the polygon shape.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/polygon/polygon-shape-tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Polygon-shape-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/polygon/polygon-shape-tooltip/polygon-shape-tooltip.cs %}
{% endhighlight %}
{% endtabs %}

![Maps with tooltip for polygon shape](./images/Polygon/polygon-shape-tooltip.png)

### Tooltip template

Any HTML element can be rendered in the tooltip of the polygon shapes using the [TooltipTemplate](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Maps.MapsPolygon.html#Syncfusion_EJ2_Maps_MapsPolygon_TooltipTemplate) property of the `Polygons`. If you add 'n' numbers of polygon shapes, you can add the `TooltipTemplate` property to each polygon, which will display the tooltip for the associated polygon shape.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/polygon/polygon-shape-tooltip-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Polygon-shape-tooltip-template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/maps/polygon/polygon-shape-tooltip-template/polygon-shape-tooltip-template.cs %}
{% endhighlight %}
{% endtabs %}

![Maps with tooltip template for polygon shape](./images/Polygon/polygon-shape-tooltip-template.png)
