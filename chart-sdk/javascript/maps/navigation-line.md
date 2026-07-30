---
layout: post
title: Navigation line in JavaScript Maps component | Syncfusion
description: Learn here all about Navigation line in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Navigation line 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Navigation line in JavaScript Maps component

Navigation lines are curved paths used to denote the route between two locations on the Maps. This feature is commonly used to draw flight routes, sea routes, or any path connecting two geographic points. Navigation lines are enabled by setting the [`visible`](../api/maps/navigationLineSettingsModel#visible) property of the [`navigationLineSettings`](../api/maps/navigationLineSettingsModel) to **true**.

## Customization

The following properties are available in [`navigationLineSettings`](../api/maps/navigationLineSettingsModel) to customize the navigation line of the Maps component.

* [`color`](../api/maps/navigationLineSettingsModel#color) - To apply the color for navigation lines in Maps.
* [`dashArray`](../api/maps/navigationLineSettingsModel#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the navigation lines.
* [`width`](../api/maps/navigationLineSettingsModel#width) - To customize the width of the navigation lines.
* [`angle`](../api/maps/navigationLineSettingsModel#angle) - To customize the angle of the navigation lines.
* [`highlightSettings`](../api/maps/navigationLineSettingsModel#highlightsettings) - To customize the highlight settings of the navigation line.
* [`selectionSettings`](../api/maps/navigationLineSettingsModel#selectionsettings) - To customize the selection settings of the navigation line.

To draw a navigation line between two cities on the world map, the [`latitude`](../api/maps/navigationLineSettingsModel#latitude) and [`longitude`](../api/maps/navigationLineSettingsModel#longitude) properties are used to specify the start and end points of the navigation line.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs90/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs90/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs90" %}

## Enabling the arrows

To enable the arrow in the navigation line, set the [`showArrow`](../api/maps/arrowModel#showarrow) property of [`arrowSettings`](../api/maps/navigationLineSettingsModel#arrowsettings) to **true**. The following properties are available in [`arrowSettings`](../api/maps/navigationLineSettingsModel#arrowsettings) to customize the arrow in the navigation line.

* [`color`](../api/maps/arrowModel#color) - To apply the color for the arrow in the navigation line.
* [`offset`](../api/maps/arrowModel#offset) - To customize the offset position of the arrow in the navigation line.
* [`position`](../api/maps/arrowModel#position) - To customize the position of the arrow in the navigation line. The possible values are **Start** and **End**.
* [`size`](../api/maps/arrowModel#size) - To customize the size of the arrow in pixels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs91/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs91/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs91" %}