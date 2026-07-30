---
layout: post
title: Bubble in TypeScript Maps Component | Syncfusion
description: Learn here all about Bubble in Syncfusion TypeScript Maps Component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bubble 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Bubble in TypeScript Maps Component

Bubbles in the Maps Component provide a visual representation of data values across geographical regions. They appear as circular or square shapes scattered over map areas, with their size proportional to the underlying data values. To enable bubbles, set the [`visible`](../api/maps/bubbleSettingsModel#visible) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **true**. Then, bind the data source to the [`dataSource`](../api/maps/bubbleSettingsModel#datasource) property and specify the field containing numerical data using the [`valuePath`](../api/maps/bubbleSettingsModel#valuepath) property.

Maps using **Maps.Inject(Bubble)** method.

```ts
import { Maps, Bubble } from '@syncfusion/ej2-maps';
Maps.Inject(Bubble);
let map: Maps = new Maps({ });
```
```ts
export let world_map = // paste the World map from WorldMap.json Geo json file.
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs144/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs144/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs144" %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles render as **Circle**. To display square-shaped bubbles, set the [`bubbleType`](../api/maps/bubbleSettingsModel#bubbletype) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **Square**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs145/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs145/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs145" %}

## Customization

The [`bubbleSettings`](../api/maps/bubbleSettingsModel) provides the following properties to customize the appearance of bubbles in the Maps Component:

* [`border`](../api/maps/bubbleSettingsModel#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](../api/maps/bubbleSettingsModel#fill) – To apply the color for bubbles in Maps.
* [`opacity`](../api/maps/bubbleSettingsModel#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](../api/maps/bubbleSettingsModel#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](../api/maps/bubbleSettingsModel#animationduration) - To change the time duration of animation for bubbles.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs146/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs146/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs146" %}

## Setting color to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) which contains the color code values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs147/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs147/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs147" %}

## Bubble Sizing

The size of the bubbles is calculated from the values got from the [`valuePath`](../api/maps/bubbleSettingsModel#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](../api/maps/bubbleSettingsModel#minradius) and [`maxRadius`](../api/maps/bubbleSettingsModel#maxradius) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs148/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs148/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs148" %}

## Multiple bubble groups

Multiple bubble groups can be added to the Maps Component by defining an array of bubble configuration objects in the [`bubbleSettings`](../api/maps/bubbleSettingsModel) property. Each bubble group can be customized independently. The following example demonstrates gender-wise population ratio using two different bubble groups.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs149/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs149/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs149" %}

## Enable tooltip for bubble

To enable tooltips for bubbles, set the [`visible`](../api/maps/tooltipSettingsModel#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel) to **true**. The tooltip content is specified using the [`valuePath`](../api/maps/tooltipSettingsModel#valuepath) property, which should be set to the field name from the data source that contains the tooltip values. Additionally, custom HTML content can be displayed in the tooltip using the [`template`](../api/maps/tooltipSettingsModel#template) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs150/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/default-map-cs150/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/default-map-cs150" %}