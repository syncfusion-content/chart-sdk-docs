---
layout: post
title: Color mapping in JavaScript Maps component | Syncfusion
description: Learn here all about Color mapping in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Color mapping 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Color mapping in JavaScript Maps component

Color mapping customizes shape colors based on data values. It supports three primary types: range, equal, and desaturation. To apply color mapping, bind data to the [`dataSource`](../api/maps/layerSettingsModel#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel) and set the [`colorValuePath`](../api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](../api/maps/shapeSettingsModel) to specify which field controls the color value.

## Range color mapping

Range color mapping assigns colors to shapes based on numeric value ranges. Use the [`from`](../api/maps/colorMappingSettingsModel#from) and [`to`](../api/maps/colorMappingSettingsModel#to) properties in [`colorMapping`](../api/maps/colorMappingSettingsModel) to define the ranges and their corresponding colors.

```ts
export var Population_Density = [
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

Set the **Population_Density** data as the [`dataSource`](../api/maps/layerSettingsModel#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel) and set the [`colorValuePath`](../api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel) to **density**. Create color mappings by specifying [`from`](../api/maps/colorMappingSettingsModel#from) and [`to`](../api/maps/colorMappingSettingsModel#to) value ranges in [`colorMapping`](../api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs42/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs42/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs42" %}

## Equal color mapping

Equal color mapping assigns colors to shapes when a data value matches a specified [`value`](../api/maps/colorMappingSettingsModel#value) property in [`colorMapping`](../api/maps/colorMappingSettingsModel). This approach is useful for categorical or discrete data. The following example demonstrates equal color mapping with the **unCountries** dataset, which categorizes UN Security Council members as permanent or non-permanent.

```ts
export var unCountries: object[] = [
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

Set **unCountries** as the [`dataSource`](../api/maps/layerSettingsModel#datasource) and  set the [`colorValuePath`](../api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel) to **Membership**. In [`colorMapping`](../api/maps/colorMappingSettingsModel), specify [`value`](../api/maps/colorMappingSettingsModel#value) entries for **Permanent** and **Non-Permanent**, each with an assigned color. When a shape's field value matches a [`value`](../api/maps/colorMappingSettingsModel#value) entry, the corresponding color is applied.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs43/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs43/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs43" %}

## Desaturation color mapping

Desaturation color mapping varies opacity across a numeric range, similar to range color mapping. The [`minOpacity`](../api/maps/colorMappingSettingsModel#minopacity) and [`maxOpacity`](../api/maps/colorMappingSettingsModel#maxopacity) properties in [`colorMapping`](../api/maps/colorMappingSettingsModel) control the opacity gradient.

The following example shows how to apply desaturation color mapping to the shapes with the data source  **Population_Density** that is available in the [Range color mapping](#range-color-mapping) section. Bind the **Population_Density** data to the [`dataSource`](../api/maps/layerSettingsModel#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel) and set the [`colorValuePath`](../api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel) as **density**. The range values can be set using the [`from`](../api/maps/colorMappingSettingsModel#from) and [`to`](../api/maps/colorMappingSettingsModel#to) properties of [`colorMapping`](../api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs44/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs44/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs44" %}

## Multiple colors for a single shape

Multiple colors create a gradient effect across a range. Use the [`color`](../api/maps/colorMappingSettingsModel#color) property in [`colorMapping`](../api/maps/colorMappingSettingsModel) to specify multiple color stops for a smooth gradient transition.

The following example demonstrates how to use multiple colors in color mapping with the data source  **Population_Density** that is available in the [Range color mapping](#range-color-mapping) section. Bind the **Population_Density** data to the [`dataSource`](../api/maps/layerSettingsModel#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel) and set the [`colorValuePath`](../api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel) as **density**. The range values can be set using the [`from`](../api/maps/colorMappingSettingsModel#from) and [`to`](../api/maps/colorMappingSettingsModel#to) properties of [`colorMapping`](../api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs45/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs45" %}

## Color for items excluded from color mapping

Color mapping can be applied to the shapes in the Maps which does not match color mapping criteria such as range or equal values using the [`color`](../api/maps/colorMappingSettingsModel#color) property of [`colorMapping`](../api/maps/colorMappingSettingsModel).

The following example shows how to set the color for items excluded from the color mapping with the data source **Population_Density** that is available in the [Range color mapping](#range-color-mapping) section. In the following example, color mapping is added for the ranges from 0 to 200. If there are any records in the data source that are outside of this range, the color mapping will not be applied. To apply the color for these excluded items, set the [`color`](../api/maps/colorMappingSettingsModel#color) property alone in the [`colorMapping`](../api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs46/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs46/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs46" %}

## Color mapping for bubbles

Range, equal, and desaturation color mapping apply to bubble layers as well. Configure bubble color mapping by setting the [`dataSource`](../api/maps/bubbleSettingsModel#datasource) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) and specifying the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) field. Apply [`colorMapping`](../api/maps/colorMappingSettingsModel) within [`bubbleSettings`](../api/maps/bubbleSettingsModel) to control bubble colors. Gradient and fallback colors work identically for bubbles as for shapes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs47/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs47/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs47" %}