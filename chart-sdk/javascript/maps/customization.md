---
layout: post
title: Customization in JavaScript Maps component | Syncfusion
description: Explore here all about Customization in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Customization in the JavaScript Maps component

The Maps component provides various options to customize its appearance, including size, title, theme, container styling, shape properties, and projection type. This section explains how to configure these customization options.

## Setting the size for Maps

The width and height of the Maps can be set using the [width](../api/maps/mapsModel/width) and [height](../api/maps/mapsModel/height) properties in the Maps component. Percentage or pixel values can be used for the height and width values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs18" %}

## Maps title

The [titleSettings](../api/maps/titleSettingsModel) property configures the title displayed on the Maps component. The title can be customized using the following properties:

* [alignment](../api/maps/titleSettingsModel/alignment) - To customize the alignment for the text in the title for the Maps. The possible values are **Center**, **Near** and **Far**.
* [description](../api/maps/titleSettingsModel/description) - To set the description of the title in Maps.
* [text](../api/maps/titleSettingsModel/text) - To set the text for the title in Maps.
* [textStyle](../api/maps/titleSettingsModel/textstyle) - To customize the text of the title in Maps.
* [subtitleSettings](../api/maps/titleSettingsModel/subtitlesettings) - To customize the subtitle for the Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs19" %}

## Setting theme

The Maps component supports the following themes:

* Material
* Fabric
* Bootstrap
* Highcontrast
* MaterialDark
* FabricDark
* BootstrapDark
* Bootstrap4
* HighContrastLight
* Tailwind

By default, the Maps are rendered by the **Material** theme. The theme of the Maps component is changed using the [theme](../api/maps/theme) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/map-theme-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/map-theme-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/map-theme-cs1" %}

## Customizing Maps container

The following properties are available to customize the container in the Maps.

* [background](../api/maps/mapsModel/background) - To apply the background color to the container in the Maps.
* [border](../api/maps/mapsModel/border) - To customize the color, width and opacity of the border of the Maps.
* [margin](../api/maps/mapsModel/margin) - To customize the margins of the Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs20" %}

## Customizing Maps area

The Maps area has a default background color of **white**. To change the background color, use the [background](../api/maps/mapsAreaSettingsModel/background) property in [mapsArea](../api/maps/mapsAreaSettingsModel). The [border](../api/maps/mapsAreaSettingsModel/border) property in [mapsArea](../api/maps/mapsAreaSettingsModel) customizes the border around the Maps area.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs21" %}

## Customizing the shapes

The following properties are available in [shapeSettings](../api/maps/shapeSettingsModel) to customize the shapes of the Maps.

* [fill](../api/maps/shapeSettingsModel/fill) - To apply the fill color to the all the shapes.
* [autofill](../api/maps/shapeSettingsModel/autofill) - To apply the palette colors to the shapes if it is set as true.
* [palette](../api/maps/shapeSettingsModel/palette) - To set the custom palette for the shapes.
* [border](../api/maps/shapeSettingsModel/border) - To customize the color, width and opacity of the border of the shapes.
* [dashArray](../api/maps/shapeSettingsModel/dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the shapes.
* [opacity](../api/maps/shapeSettingsModel/opacity) - To customize the transparency for the shapes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs22" %}

## Setting color to the shapes from the data source

The color for each shape in the Maps can be set using the [colorValuePath](../api/maps/shapeSettingsModel/colorvaluepath) property of [shapeSettings](../api/maps/shapeSettingsModel). The value for the [colorValuePath](../api/maps/shapeSettingsModel/colorvaluepath) property is the field name from the data source of the [shapeSettings](../api/maps/shapeSettingsModel) which contains the color values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs23/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs23" %}

## Applying border to individual shapes

The border of each shape in the Maps can be customized using the [borderColorValuePath](../api/maps/shapeSettingsModel/bordercolorvaluepath) and [borderWidthValuePath](../api/maps/shapeSettingsModel/borderwidthvaluepath) properties to modify the color and the width of the border respectively. The field name in the data source of the layer which contains the color and the width values must be set in the [borderColorValuePath](../api/maps/shapeSettingsModel/bordercolorvaluepath) and [borderWidthValuePath](../api/maps/shapeSettingsModel/borderwidthvaluepath) properties respectively. If the values of [borderWidthValuePath](../api/maps/shapeSettingsModel/borderwidthvaluepath) and [borderColorValuePath](../api/maps/shapeSettingsModel/bordercolorvaluepath) do not match with the field name from the data source, then the color and width of the border will be applied to the shapes using the [border](../api/maps/shapeSettingsModel/border) property in the [shapeSettings](../api/maps/shapeSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs24" %}

## Projection type

The Maps component supports the following projection types:

* Mercator
* Equirectangular
* Miller
* Eckert3
* Eckert5
* Eckert6
* Winkel3
* AitOff

The default projection is **Mercator**, which renders the map based on coordinates without stretching. Each projection type represents the Earth's surface differently, affecting how shapes and distances appear on the map. To change the projection, use the [projectionType](../api/maps/projectionType) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/projection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/projection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/projection-cs1" %}