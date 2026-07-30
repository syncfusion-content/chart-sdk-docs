---
layout: post
title: Legend in TypeScript Maps component | Syncfusion
description: Learn here all about Legend in Syncfusion TypeScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Legend in TypeScript Maps component

A Legend is a key on a Maps that contains descriptions for swatches of symbols. It can be represented in various colors, shapes or other identifiers based on the data and provides valuable information for interpreting what the Maps are displaying. It explains what each symbol in the Maps represents. Legends are enabled by setting the [`visible`](../api/maps/legendSettingsModel/visible) property of [`legendSettings`](../api/maps/legendSettingsModel) to **true**. To render Legend in Maps, the **Legend** module must be injected into the Maps using the **Maps.Inject(Legend)** method. Refer to the below code snippet to inject the Legend module into the Maps component.

```ts
import { Maps, Legend } from '@syncfusion/ej2-maps';
Maps.Inject(Legend);
let map: Maps = new Maps({ });
```

## Legend modes

Legends support two display modes: **Default** mode and **Interactive** mode.

### Default mode

Default mode legends display symbols with corresponding labels to identify shape, bubble, or marker colors. Enable this mode by setting the [`mode`](../api/maps/legendSettingsModel/mode) property of [`legendSettings`](../api/maps/legendSettingsModel) to **Default**.

#### Interactive mode

Interactive mode enhances user experience by displaying an arrow pointer that indicates the exact range color in the legend when hovering over corresponding map shapes. Enable this mode by setting the [`mode`](../api/maps/legendSettingsModel/mode) property of [`legendSettings`](../api/maps/legendSettingsModel) to **Interactive**. The [`invertedPointer`](../api/maps/legendSettingsModel/invertedpointer) property controls the visibility of the inverted pointer in the interactive legend.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs180/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs180/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs180" %}

## Positioning of the legend

The legend can be positioned in the following two ways:

* Absolute position.

* Dock position.

**Absolute position**

The legend of the Maps can be positioned using the [`location`](../api/maps/legendSettingsModel/location) property in the [`legendSettings`](../api/maps/legendSettingsModel), which is based on the margin values of the X and Y axes. For positioning the legend based on margins corresponding to a Maps, the [`position`](../api/maps/legendSettingsModel/position) property is set as **Float**.

**Dock position**

Legends can be docked to specific locations within the map container. The [`position`](../api/maps/legendSettingsModel/position) property in [`legendSettings`](../api/maps/legendSettingsModel) is used to set these options.

* Top

* Left

* Bottom

* Right

Each of these four positions can be further aligned using **Near**, **Center**, or **Far** through the [`alignment`](../api/maps/legendSettingsModel/alignment) property in [`legendSettings`](../api/maps/legendSettingsModel). This provides 12 possible alignment combinations for precise legend placement.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs179/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs179/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs179" %}

## Legend for shapes

Legends for map shapes can be generated from various color mapping types, including equal color mapping, range color mapping, and desaturation color mapping. The following data source demonstrates permanent and non-permanent member countries in the UN Security Council.

```ts
export let unCountries: object[] = [
{ Country: 'China', Membership: 'Permanent' },
{ Country: 'France', Membership: 'Permanent' },
{ Country: 'Russia', Membership: 'Permanent' },
{ Country: 'United Kingdom', Membership: 'Permanent' },
{ Country: 'United States', Membership: 'Permanent' },
{ Country: 'Bolivia', Membership: 'Non-Permanent' },
{ Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
{ Country: 'Ethiopia', Membership: 'Non-Permanent' },
{ Country: "Côte d'Ivoire", Membership: 'Permanent' },
{ Country: 'Kazakhstan', Membership: 'Non-Permanent' },
{ Country: 'Kuwait', Membership: 'Non-Permanent' },
{ Country: 'Netherlands', Membership: 'Non-Permanent' },
{ Country: 'Peru', Membership: 'Non-Permanent' },
{ Country: 'Poland', Membership: 'Non-Permanent' },
{ Country: 'Sweden', Membership: 'Non-Permanent' },
];
```

The following code snippet demonstrates how to configure equal color mapping legends for shapes. Bind the data source to the [`dataSource`](../api/maps/layerSettingsModel/datasource) property of [`layerSettings`](../api/maps/layerSettingsModel). Set the [`shapePropertyPath`](../api/maps/layerSettingsModel/shapepropertypath) to **name** and [`shapeDataPath`](../api/maps/layerSettingsModel/shapedatapath) to **Country**. Configure equal color mapping by setting the [`colorMapping`](../api/maps/colorMappingSettingsModel) as an array in [`shapeSettings`](../api/maps/shapeSettingsModel). Finally, enable the legend by setting the [`visible`](../api/maps/legendSettingsModel/visible) property of [`legendSettings`](../api/maps/legendSettingsModel) to **true**. The [`label`](../api/maps/colorMappingSettingsModel/label) property in [`colorMapping`](../api/maps/colorMappingSettingsModel) is used to define the text displayed in the legend.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs181/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs181/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs181" %}

## Legend shape

The Maps component supports various legend shape types to match different visualization needs. Use the [`shape`](../api/maps/legendSettingsModel/shape) property in the [`legendSettings`](../api/maps/legendSettingsModel) to specify the desired shape.

	
Available legend shapes:

* Circle
* Rectangle
* Triangle
* Diamond
* Cross
* Star
* HorizontalLine
* VerticalLine
* Pentagon
* InvertedTriangle

Customize legend shape dimensions and appearance using the [`shapeWidth`](../api/maps/legendSettingsModel/shapewidth), [`shapeHeight`](../api/maps/legendSettingsModel/shapeheight), [`shapeBorder`](../api/maps/legendSettingsModel/shapeborder), and [`shapePadding`](../api/maps/legendSettingsModel/shapepadding) properties.

## Customization

The legend appearance and behavior can be extensively customized using the following properties in [`legendSettings`](../api/maps/legendSettingsModel).
**Appearance properties:**

* [`background`](../api/maps/legendSettingsModel/background) - To customize the background color of the Legend.
* [`border`](../api/maps/legendSettingsModel/border) - To customize the color, width and opacity of the border for the Legend.
* [`fill`](../api/maps/legendSettingsModel/fill) - To apply the color for the Legend.
* [`labelDisplayMode`](../api/maps/legendSettingsModel/labeldisplaymode) - To customize the display mode for the Legend text.
* [`labelPosition`](../api/maps/legendSettingsModel/labelposition) - To customize the position of the Legend text.
* [`orientation`](../api/maps/legendSettingsModel/orientation) - To customize the orientation of the Legend.
* [`textStyle`](../api/maps/legendSettingsModel/textstyle) - To customize the text style for Legend.
* [`title`](../api/maps/legendSettingsModel/title) - To apply the title for the Legend.
* [`titleStyle`](../api/maps/legendSettingsModel/titlestyle)- To customize the style of the title for the Legend.
* [`height`](../api/maps/legendSettingsModel/height) - To customize the height of the Legend.
* [`width`](../api/maps/legendSettingsModel/width) - To customize the width of the Legend.
* [`opacity`](../api/maps/legendSettingsModel/opacity) - To apply the opacity to the Legend.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs182/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs182/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs182" %}

## Legend for items excluded from color mapping

Legends can display items that fall outside the defined color mapping ranges. This is useful when the data contains values that do not match any specified color mapping criteria. Use the [`color`](../api/maps/colorMappingSettingsModel/color) property in [`colorMapping`](../api/maps/colorMappingSettingsModel) to assign colors to these excluded items. The following example uses **population_density** data that demonstrates the population density of various countries.

```ts
export let population_density = [
    ...
    {
        'code': 'AE',
        'value': 90,
        'name': 'United Arab Emirates',
        'population': 8264070,
        'density': 99
    },
    {
        'code': 'GB',
        'value': 257,
        'name': 'United Kingdom',
        'population': 62041708,
        'density': 255
    },
    {
        'code': 'US',
        'value': 34,
        'name': 'United States',
        'population': 325020000,
        'density': 33
    }
    ...
    ];
```

The following example demonstrates how to display legends for items excluded from color mapping. In this example, color mapping is configured for density values ranging from 0 to 200. Any records with values outside this range will not match the defined color mappings. To assign a color to these excluded items, set only the [`color`](../api/maps/colorMappingSettingsModel/color) property in the [`colorMapping`](../api/maps/colorMappingSettingsModel) without specifying range values. Enable the legend by setting the [`visible`](../api/maps/legendSettingsModel/visible) property of [`legendSettings`](../api/maps/legendSettingsModel) to **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs183/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs183/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs183" %}

## Hide desired legend items

Control the visibility of individual legend items using the [`showLegend`](../api/maps/colorMappingSettingsModel/showlegend) property in the [`colorMapping`](../api/maps/colorMappingSettingsModel). Setting this property to **false** hides the corresponding legend item, while **true** keeps it visible. This is useful for simplifying legends by removing unnecessary or redundant entries.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs184/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs184/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs184" %}

## Hide legend items based on data source value

Legend item visibility can be controlled dynamically based on values in the data source. This allows data-driven control over which legend items appear. Bind the data source field that contains the visibility state to the [`showLegendPath`](../api/maps/legendSettingsModel/showlegendpath) property of the [`legendSettings`](../api/maps/legendSettingsModel) to enable this functionality.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs185/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs185/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs185" %}

## Bind legend item text from data source

Display dynamic legend text based on data source values using the [`valuePath`](../api/maps/legendSettingsModel/valuepath) property in the [`legendSettings`](../api/maps/legendSettingsModel). This property binds a field from the data source to the legend text, allowing for data-driven legend labels.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs186/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs186/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs186" %}

## Hide duplicate legend items

To hide the duplicate legend items in Maps, set the [`removeDuplicateLegend`](../api/maps/legendSettingsModel/removeduplicatelegend) property to **true** in the [`legendSettings`](../api/maps/legendSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs187/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs187/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs187" %}

## Toggle option in legend

The toggle feature allows users to interactively show or hide map elements by clicking legend items. When a legend item is toggled, the corresponding map shapes change appearance to indicate their toggled state. Enable legend toggling by setting the [`enable`](../api/maps/toggleLegendSettingsModel/enable) property of the [`toggleLegendSettings`](../api/maps/toggleLegendSettingsModel) to **true**.
The following properties are available to customize the toggle option in legend.

The following properties customize the appearance of toggled map elements:

* [`applyShapeSettings`](../api/maps/toggleLegendSettingsModel/applyshapesettings) – To apply the [`fill`](../api/maps/shapeSettingsModel/fill) property value to the shape of the Maps when it is set to **true**.
* [`fill`](../api/maps/toggleLegendSettingsModel/fill)- To apply the color to the shape of the Maps for which legend item is toggled.
* [`opacity`](../api/maps/toggleLegendSettingsModel/opacity) – To customize the transparency for the shapes for which legend item is toggled.
* [`border`](../api/maps/toggleLegendSettingsModel/border) – To customize the color, width and opacity of the border of the shapes in Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs188/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs188/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs188" %}

## Enable legend for bubble

Display a legend for bubble visualizations by setting the [`visible`](../api/maps/legendSettingsModel/visible) property of [`legendSettings`](../api/maps/legendSettingsModel) to **true** and the [`type`](../api/maps/legendSettingsModel/type) property to **Bubbles**. This creates legend entries that represent the bubble data categories or value ranges.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs189/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs189/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs189" %}

## Enable legend for markers

Enable marker legends by setting the [`visible`](../api/maps/legendSettingsModel/visible) property of [`legendSettings`](../api/maps/legendSettingsModel) to **true** and the [`type`](../api/maps/legendSettingsModel/type) property to **Markers**. Use the [`legendText`](../api/maps/markerSettingsModel/legendtext) property in the [`markerSettings`](../api/maps/markerSettingsModel) to define legend text based on data source values, providing clear identification for different marker categories.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs190/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs190/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs190" %}

### Map marker shape to legend shape

To imitate or map the marker shape with its legend item shape, set the [`useMarkerShape`](../api/maps/legendSettingsModel/usemarkershape) property to **true** in the [`legendSettings`](../api/maps/legendSettingsModel) property.		Match the legend item shape with the actual marker shape displayed on the map by setting the [`useMarkerShape`](../api/maps/legendSettingsModel/usemarkershape) property to **true** in the [`legendSettings`](../api/maps/legendSettingsModel). This creates a consistent visual relationship between markers and their legend representations, improving map readability.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs191/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs191/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs191" %}