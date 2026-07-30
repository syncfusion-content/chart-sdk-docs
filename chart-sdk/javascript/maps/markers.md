---
layout: post
title: Markers in JavaScript Maps component | Syncfusion
description: Learn here all about Markers in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Markers 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Markers in JavaScript Maps component

Markers are visual indicators used to pinpoint specific locations on the Maps. They can display desired symbols to highlight points of interest or important geographic positions. Markers can be enabled by setting the [`visible`](../api/maps/markerSettingsModel#visible) property of the [`markerSettings`](../api/maps/markerSettingsModel) to **true**.

## Adding marker

The [`dataSource`](../api/maps/markerSettingsModel#datasource) property of the [`markerSettings`](../api/maps/markerSettingsModel) has a list of objects that contains the data for Markers. Using this property, any number of markers can be added to the shape layers. By default, it displays the markers based on the specified latitude and longitude in the given data source. Each data source object contains the following list of properties.

* label - Text that displays some information about the marker in text format.
* latitude - The latitude value that determines the vertical (Y) position of the marker.
* longitude - The longitude value that determines the horizontal (X) position of the marker.

>markerSettings is an Array property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs76/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs76/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs76" %}

## Adding marker template

The Marker can be added as a template in the Maps component. The [`template`](../api/maps/markerSettingsModel#template) property of the [`markerSettings`](../api/maps/markerSettingsModel) is used to set the Marker as a template. HTML element or id of an element can be added as the template in Markers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs77/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs77/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs77" %}

## Customization

The following properties are available in [`markerSettings`](../api/maps/markerSettingsModel) to customize the Markers of the Maps component.

* [`border`](../api/maps/markerSettingsModel#border) - To customize the color, width and opacity of the border for the markers in Maps.
* [`fill`](../api/maps/markerSettingsModel#fill) - To apply the color for markers in Maps.
* [`dashArray`](../api/maps/markerSettingsModel#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the markers in Maps.
* [`height`](../api/maps/markerSettingsModel#height) - To customize the height of the markers in Maps.
* [`width`](../api/maps/markerSettingsModel#width) - To customize the width of the markers in Maps.
* [`offset`](../api/maps/markerSettingsModel#offset) - To customize the position of the markers in Maps.
* [`opacity`](../api/maps/markerSettingsModel#opacity) - To customize the transparency of the markers in Maps.
* [`animationDelay`](../api/maps/markerSettingsModel#animationdelay) - To change the time delay in the transition for markers.
* [`animationDuration`](../api/maps/markerSettingsModel#animationduration) - To change the time duration of animation for markers.
* [`highlightSettings`](../api/maps/markerSettingsModel#highlightsettings) - To customize the highlight settings for the marker in Maps.
* [`selectionSettings`](../api/maps/markerSettingsModel#selectionsettings) - To customize the selection settings for the marker in Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs78/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs78/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs78" %}

## Marker shapes

The Maps component supports the following marker shapes. To set the shape of the marker, the [`shape`](../api/maps/markerSettingsModel#shape) property in [`markerSettings`](../api/maps/markerSettingsModel) is used.

* Balloon
* Circle
* Cross
* Diamond
* Image
* Rectangle
* Star
* Triangle
* VerticalLine
* HorizontalLine

## Rendering Marker shape as image

To render a marker as an image in Maps, set the [`shape`](../api/maps/markerSettingsModel#shape) property of [`markerSettings`](../api/maps/markerSettingsModel) as **Image** and specify the path of the image to [`imageUrl`](../api/maps/markerSettingsModel#imageurl) property. There is another way to render a marker as an image using the [`imageUrlValuePath`](../api/maps/markerSettingsModel#imageurlvaluepath) property of the [`markerSettings`](../api/maps/markerSettingsModel). Bind the field name that contains the path of the image in the data source to the [`imageUrlValuePath`](../api/maps/markerSettingsModel#imageurlvaluepath) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs79/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs79/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs79" %}

## Multiple marker groups

Multiple groups of markers can be added to the Maps by providing an array of marker configurations to the [`markerSettings`](../api/maps/markerSettingsModel) property. Each marker group can have its own customization options defined within the [`markerSettings`](../api/maps/markerSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs80/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs80/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs80" %}

## Customize marker shapes from data source

### Bind different colors and shapes to the marker from data source

Using the [`shapeValuePath`](../api/maps/markerSettingsModel#shapevaluepath) and [`colorValuePath`](../api/maps/markerSettingsModel#colorvaluepath) properties, apply the color and shape of the marker from the given data source. Bind the data source to the [`dataSource`](../api/maps/markerSettingsModel#datasource) property of the [`markerSettings`](../api/maps/markerSettingsModel) and set the field names that contains the shape and color values in the data source to the [`shapeValuePath`](../api/maps/markerSettingsModel#shapevaluepath) and [`colorValuePath`](../api/maps/markerSettingsModel#colorvaluepath) properties. A default marker object is represented by a **balloon** shape. To set various shapes to the marker object by using the [`shape`](../api/maps/markerSettingsModel#shape) property in [`markerSettings`](../api/maps/markerSettingsModel).

The following shapes are used for the marker object.

* Circle
* Rectangle
* Balloon
* Cross
* Polyline
* Diamond
* Star
* Triangle
* HorizontalLine
* VerticalLine
* pentagon

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs81/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs81/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs81" %}

### Setting value path from the data source

The latitude and longitude values are used to determine the location of each marker in the Maps. The [`latitudeValuePath`](../api/maps/markerSettingsModel#latitudevaluepath) and [`longitudeValuePath`](../api/maps/markerSettingsModel#longitudevaluepath) properties are used to specify the value path that presents in the data source of the marker. In the following example, the field name from the data source is set to the [`latitudeValuePath`](../api/maps/markerSettingsModel#latitudevaluepath) and [`longitudeValuePath`](../api/maps/markerSettingsModel#longitudevaluepath) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs82/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs82/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs82" %}

### Setting different sizes for markers individually

The size of the markers in a marker group can be customized using the `widthValuePath` and `heightValuePath` properties, which allow the user to change the width and height of the markers based on values from the given data source. Bind the data source to the [dataSource](../api/maps/markerSettingsModel#datasource) property of the `markerSettings`, and specify the field names containing the width and height values in the data source for the `widthValuePath` and `heightValuePath` properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/marker-size-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/marker-size-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/marker-size-customization-cs1" %}

## Repositioning the marker using drag and drop

The markers on the map can be dragged and dropped to change their position. To enable marker drag and drop, set the [enableDrag](../api/maps/markerSettingsModel#enabledrag) property to **true** in the [markerSettings](../api/maps/markerSettingsModel) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs83/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs83/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs83" %}

The data of the drag and dropped marker in the marker data source can be customized using the [markerDragStart](../api/maps/markerdragstart) and [markerDragEnd](../api/maps/markerdragend) events. When you change the appropriate marker data, the tooltip and legend item text of that marker are automatically updated. The following properties are available in the event argument of the marker drag events.

|   Argument Name      |   Description                               |
|----------------------| --------------------------------------------|
|   dataIndex          |   It represents the index of the data of the dragged marker in the marker data source.                          |
|   latitude           |   It represents the latitude coordinate point of the dragged marker.                                            |
|   longitude          |   It represents the longitude coordinate point for the dragged marker.                                          |
|   markerIndex        |   It represents the index of the marker setting.                                                                |
|   layerIndex         |   It represents the index of the layer in which the marker belongs.                                             |
|   name               |   It represents the name of the event.                                                                          |
|   x                  |   It represents the horizontal location of the mouse pointer on the map when the drag action is performed.      |
|   y                  |   It represents the vertical location of the mouse pointer on the map when the drag action is performed.        |

The following example shows how to use marker drag events to customize the data of the drag and dropped marker in the marker data source.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs84/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs84/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs84" %}

## Marker zooming

The Maps can be initially scaled to fit all markers within the visible area. This can be achieved by setting the [`shouldZoomInitially`](../api/maps/zoomSettingsModel#shouldzoominitially) property in [`zoomSettings`](../api/maps/zoomSettingsModel) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs85/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs85/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs85" %}

## Marker clustering

The Maps component provides support to cluster markers when they overlap each other. The number displayed on a cluster indicates how many overlapping markers it contains. When zooming in on a cluster location, the cluster count decreases as individual markers become visible. When zooming out, overlapping markers are grouped again, increasing the cluster count.

To enable clustering for markers within a layer, set the [allowClustering](../api/maps/markerClusterSettingsModel#allowclustering) property of [markerClusterSettings](../api/maps/markerClusterSettingsModel) in the [layers](../api/maps/layers) to **true**. Customization of clustering can be done using the `markerClusterSettings` property. 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs86/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs86/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs86" %}

### Customization of marker cluster

The following properties are available to customize the marker clustering in the Maps component.

* [`border`](../api/maps/markerClusterSettingsModel#border) - To customize the color, width and opacity of the border of cluster in Maps.
* [`connectorLineSettings`](../api/maps/connectorLineSettingsModel) - To customize the connector line in cluster separating the markers.
* [`dashArray`](../api/maps/markerClusterSettingsModel#dasharray) - To customize the dash array for the marker cluster in Maps.
* [`fill`](../api/maps/markerClusterSettingsModel#fill) - Applies the color of the cluster in Maps.
* [`height`](../api/maps/markerClusterSettingsModel#height) - To customize the height of the marker cluster in Maps.
* [`imageUrl`](../api/maps/markerClusterSettingsModel#imageurl) - To customize the URL path for the marker cluster when the cluster shape is set as image in Maps.
* [`labelStyle`](../api/maps/markerClusterSettingsModel#labelstyle) - To customize the text in marker cluster.
* [`offset`](../api/maps/markerClusterSettingsModel#offset) - To customize the offset position for the marker cluster in Maps.
* [`opacity`](../api/maps/markerClusterSettingsModel#opacity) - To customize the opacity of the marker cluster.
* [`shape`](../api/maps/markerClusterSettingsModel#shape) - To customize the shape for the cluster of markers.
* [`width`](../api/maps/markerClusterSettingsModel#width) - To customize the width of the marker cluster in Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs87/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs87/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs87" %}

### Marker cluster expand

The cluster is formed by grouping an identical and non-identical marker from the surrounding area. By clicking on the cluster and setting the [`allowClusterExpand`](../api/maps/markerClusterSettingsModel#allowclusterexpand) property in [`markerClusterSettings`](../api/maps/markerClusterSettingsModel) as **true** to expand the identical markers. If zoom in any of the locations of the cluster, the number on the cluster will decrease and the overlapping marker will be split into an individual marker on the map. When performing zoom out, it will increase the marker count and then cluster it again.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs88/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs88/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs88" %}

### Clustering markers within each marker group

Marker clustering can be enabled for each marker group in the map by using the `clusterSettings` property within the `markerSettings` property in the [layers](../api/maps/layers). This allows for individual customization of clusters for each marker group which group markers that are located near each other to reduce clutter and improve readability. When the `allowClustering` property is set to **true**, the markers within each group are clustered and visually represented as separate clusters. As users zoom in, the clusters expand to reveal individual markers, enabling more detailed exploration. Clusters can also be expanded manually by setting the `allowClusterExpand` property to **true**. The appearance of the clusters and their expansion behavior can be customized using the `clusterSettings` property, similar to the `markerClusterSettings` property, as explained in the sections above.

>When the `clusterSettings` property is enabled for an individual marker group, the `markerClusterSettings` property within the layers becomes ineffective.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/marker-clusters-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/marker-clusters-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/marker-clusters-cs1" %}

## Tooltip for marker

Tooltips are used to display additional information about a marker on mouse hover or touch end events. This can be enabled for markers by setting the [`visible`](../api/maps/tooltipSettingsModel#visible) property or [`tooltipSettings`](../api/maps/tooltipSettingsModel) to **true**. The [`valuePath`](../api/maps/tooltipSettingsModel#valuepath) property in the [`tooltipSettings`](../api/maps/tooltipSettingsModel) specifies the field name from the data source whose value will be displayed as the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs89/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs89/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs89" %}

## Add different types of markers

Different marker objects can be added to the Maps component using the marker settings. To update different marker settings in Maps, please follow the given steps:

**Step 1**:

Initialize the Maps component with marker settings. Here, a marker has been added with specified latitude and longitude of California by using the [`dataSource`](../../api/maps/markerSettingsModel#datasource) property. To customize the shape of the marker using the [`shape`](../../api/maps/markerSettingsModel#shape) property and change the border color and width of the marker using the [`border`](../../api/maps/markerSettingsModel#border) property as mentioned in the following example.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs27/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs27" %}

**Step 2**:

Customize the above option for n number of markers as mentioned in the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs28/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs28" %}

