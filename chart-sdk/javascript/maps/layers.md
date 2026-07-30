---
layout: post
title: Layers in JavaScript Maps component | Syncfusion
description: Learn here all about Layers in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Layers 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Layers in JavaScript Maps component

Layers are the fundamental building blocks of the Maps component. Each layer can display shape data from GeoJSON files or map providers. The Maps component renders content through the [`layers`](../api/maps/layers) property, and multiple layers can be added to create rich, layered map visualizations.

## Multilayer

The Multilayer support allows loading multiple shape files and map providers in a single container, enabling Maps to display more information. The shape layer or map providers are the main layers of the Maps. Multiple layers can be added as **SubLayer** over the main layers using the [`type`](../api/maps/layerSettingsModel#type) property of [`layers`](../api/maps/layers).



{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs29/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs29" %}


## SubLayer

A sublayer is an overlay layer that renders on top of the main layer. It allows displaying multiple shape files in a single map view. For example, a sublayer can highlight specific states, display rivers, valleys, or cities over a country map. Similar to the main layer, sub layers support markers, bubbles, color mapping, and legends.

In the following example, the United States map shape from the **usa.ts** file serves as the main layer, while **texas.ts** and **california.ts** files are rendered as sub layers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs61/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs61/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs61" %}

## Displaying a different layer in the view

Multiple shape files and map providers can be loaded simultaneously in Maps. The [`baseLayerIndex`](../api/maps/mapsModel#baselayerindex) property is used to determine which layer on the user interface should be displayed. This property is used for the Maps drill-down feature, so when the [`baseLayerIndex`](../api/maps/mapsModel#baselayerindex) value is changed, the corresponding shape is loaded. In this example, two layers can be loaded with the World map and the United States map. Based on the given [`baseLayerIndex`](../api/maps/mapsModel#baselayerindex) value the corresponding shape will be loaded in the user interface. If the [`baseLayerIndex`](../api/maps/mapsModel#baselayerindex) value is set to **0**, then the world map will be loaded.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs62/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs62/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs62" %}

## See Also

* [Custom path map](../maps/how-to/custom-path)