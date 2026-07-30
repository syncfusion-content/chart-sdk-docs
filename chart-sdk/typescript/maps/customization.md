---
layout: post
title: Customization in the TypeScript Maps component | Syncfusion
description: Learn here all about Customization in Syncfusion TypeScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Customization in TypeScript Maps component

The Maps component provides extensive customization options to control its appearance, layout, and visual presentation. This includes configuring dimensions, titles, themes, colors, shapes, and projection types to create tailored map visualizations that meet specific application requirements.

## Setting the size for Maps

The width and height of the Maps can be set using the [width](../api/maps/mapsModel#width) and [height](../api/maps/mapsModel#height) properties in [Maps](../api/maps/mapsModel). Both percentage and pixel values are supported for the height and width values. Percentage values enable responsive sizing relative to the parent container, while pixel values provide fixed dimensions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs157/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs157/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs157" %}

## Configuring Maps title

The title for the Maps can be set using the [titleSettings](../api/maps/titleSettingsModel). The title helps provide context and description for the map visualization. It can be customized using the following properties.

* [alignment](../api/maps/titleSettingsModel#alignment) - To customize the alignment for the text in the title for the Maps. The possible values can be **Center**, **Near** and **Far**.
* [description](../api/maps/titleSettingsModel#description) - To set the description of the title in Maps.
* [text](../api/maps/titleSettingsModel#text) - To set the text for the title in Maps.
* [textStyle](../api/maps/titleSettingsModel#textstyle) - To customize the text of the title in Maps.
* [subtitleSettings](../api/maps/titleSettingsModel#subtitlesettings) - To customize the subtitle for the Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs158/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs158/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs158" %}

## Setting theme

The Maps component supports the following themes to match different application design systems and accessibility requirements.

* Material
* Fabric
* Bootstrap
* HighContrast
* MaterialDark
* FabricDark
* BootstrapDark
* Bootstrap4
* HighContrastLight

By default, the Maps are rendered with the **Material** theme. The theme of the Maps component can be changed using the [theme](../api/maps/theme) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/map-theme-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/map-theme-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/map-theme-cs2" %}

## Customizing Maps container

The following properties are available to customize the container in the Maps.

* [background](../api/maps/mapsModel#background) - To apply the background color to the container in the Maps.
* [border](../api/maps/mapsModel#border) - To customize the color, width and opacity of the border of the Maps.
* [margin](../api/maps/mapsModel#margin) - To customize the margins of the Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs159/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs159/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs159" %}

## Customizing Maps area

By default, the background color of the shape maps is set as **white**. To modify the background color of the Maps area, use the [background](../api/maps/mapsAreaSettingsModel#background) property in the [mapsArea](../api/maps/mapsAreaSettingsModel). The border of the Maps area can be customized using the [border](../api/maps/mapsAreaSettingsModel#border) property in the [mapsArea](../api/maps/mapsAreaSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs160/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs160/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs160" %}

## Customizing the shapes

The following properties are available in the [shapeSettings](../api/maps/shapeSettingsModel) to customize the appearance of shapes in the Maps component.

* [fill](../api/maps/shapeSettingsModel#fill) - To apply the color to the shapes.
* [autofill](../api/maps/shapeSettingsModel#autofill) - To apply the palette colors to the shapes if it is set as true.
* [palette](../api/maps/shapeSettingsModel#palette) - To set the custom palette for the shapes.
* [border](../api/maps/shapeSettingsModel#border) - To customize the color, width and opacity of the border of the shapes.
* [dashArray](../api/maps/shapeSettingsModel#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the shapes.
* [opacity](../api/maps/shapeSettingsModel#opacity) - To customize the transparency for the shapes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs161/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs161/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs161" %}

## Setting color to the shapes from the data source

Individual colors can be assigned to each shape based on data source values, enabling dynamic color coding of map regions. The color for each shape in the Maps can be set using the [colorValuePath](../api/maps/shapeSettingsModel#colorvaluepath) property of [shapeSettings](../api/maps/shapeSettingsModel). The value for the [colorValuePath](../api/maps/shapeSettingsModel#colorvaluepath) property is the field name from the data source of the [shapeSettings](../api/maps/shapeSettingsModel) which contains the color values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs162/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs162/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs162" %}

## Applying border to individual shapes

The border of each shape in the Maps can be customized using the [borderColorValuePath](../api/maps/shapeSettingsModel#bordercolorvaluepath) and [borderWidthValuePath](../api/maps/shapeSettingsModel#borderwidthvaluepath) properties to modify the color and width of the border respectively. The field name in the data source of the layer which contains the color and width values must be set in the [borderColorValuePath](../api/maps/shapeSettingsModel#bordercolorvaluepath) and [borderWidthValuePath](../api/maps/shapeSettingsModel#borderwidthvaluepath) properties. If the values of [borderWidthValuePath](../api/maps/shapeSettingsModel#borderwidthvaluepath) and [borderColorValuePath](../api/maps/shapeSettingsModel#bordercolorvaluepath) do not match with the field name from the data source, then the color and width of the border will be applied to the shapes using the [border](../api/maps/shapeSettingsModel#border) property in the [shapeSettings](../api/maps/shapeSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs163/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs163/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs163" %}

## Projection type

The Maps component supports the following projection types to display geographic data in different coordinate systems:

* Mercator
* Equirectangular
* Miller
* Eckert3
* Eckert5
* Eckert6
* Winkel3
* AitOff

By default, the Maps are rendered with the **Mercator** projection type in which the Maps are rendered based on geographic coordinates without distortion in shape. To change the type of projection in the Maps, use the [projectionType](../api/maps/projectionType) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/projection-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/projection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/projection-cs2" %}