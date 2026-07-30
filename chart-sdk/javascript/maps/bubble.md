---
layout: post
title: Bubble in JavaScript Maps component | Syncfusion
description: Learn here all about Bubble in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bubble 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Bubble in JavaScript Maps component

Bubbles in the Maps component provide a visual representation of data values across geographical regions. They appear as circular or square shapes scattered over map areas, with their size proportional to the underlying data values. To enable bubbles, set the [`visible`](../api/maps/bubbleSettingsModel#visible) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **true**. Then, bind the data source to the [`dataSource`](../api/maps/bubbleSettingsModel#datasource) property and specify the field containing numerical data using the [`valuePath`](../api/maps/bubbleSettingsModel#valuepath) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs35" %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles render as **Circle**. To display square-shaped bubbles, set the [`bubbleType`](../api/maps/bubbleSettingsModel#bubbletype) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **Square**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs36" %}

## Customization

The [`bubbleSettings`](../api/maps/bubbleSettingsModel) provides the following properties to customize the appearance of bubbles in the Maps component:

* [`border`](../api/maps/bubbleSettingsModel#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](../api/maps/bubbleSettingsModel#fill) – To apply the color for bubbles in Maps.
* [`opacity`](../api/maps/bubbleSettingsModel#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](../api/maps/bubbleSettingsModel#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](../api/maps/bubbleSettingsModel#animationduration) - To change the time duration of animation for bubbles.
* [`highlightSettings`](../api/maps/bubbleSettingsModel#highlightsettings) - To customize the highlight settings for the bubbles in Maps.
* [`selectionSettings`](../api/maps/bubbleSettingsModel#selectionsettings) - To customize the selection settings for the bubbles in Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs37" %}

## Setting color to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) which contains the color values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs38/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs38" %}

## Bubble sizing

The size of the bubbles is calculated from the values got from the [`valuePath`](../api/maps/bubbleSettingsModel#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](../api/maps/bubbleSettingsModel#minradius) and [`maxRadius`](../api/maps/bubbleSettingsModel#maxradius) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs39" %}

## Multiple bubble groups

Multiple bubble groups can be added to the Maps component by defining an array of bubble configuration objects in the [`bubbleSettings`](../api/maps/bubbleSettingsModel) property. Each bubble group can be customized independently. The following example demonstrates gender-wise population ratio using two different bubble groups.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs40" %}

## Enable tooltip for bubble

To enable tooltips for bubbles, set the [`visible`](../api/maps/tooltipSettingsModel#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel) to **true**. The tooltip content is specified using the [`valuePath`](../api/maps/tooltipSettingsModel#valuepath) property, which should be set to the field name from the data source that contains the tooltip values. Additionally, custom HTML content can be displayed in the tooltip using the [`template`](../api/maps/tooltipSettingsModel#template) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs41" %}