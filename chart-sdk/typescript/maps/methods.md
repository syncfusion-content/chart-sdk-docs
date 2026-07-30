---
layout: post
title: Methods in TypeScript Maps component | Syncfusion
description: Learn here all about the methods in the Syncfusion TypeScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Maps 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Methods in TypeScript Maps component

The Maps component provides several public methods that enable programmatic control and interaction with map controls. These methods allow developers to perform operations such as retrieving geographic coordinates, manipulating layers, refreshing content, and exporting map visualizations. This section documents the available methods and their usage.

## getMinMaxLatitudeLongitude

The [`getMinMaxLatitudeLongitude`](../api/maps/getminmaxlatitudelongitude) method retrieves the geographic boundary coordinates of the currently visible map area. This method returns an [IMinMaxLatitudeLongitude](https://ej2.syncfusion.com/javascript/documentation/api/maps/iMinMaxLatitudeLongitude) object containing the minimum and maximum latitude and longitude values that define the map's visible bounds.

**Use cases:**

This method is particularly useful when thre is a need to:
- Determine which geographic area is currently displayed to users
- Implement custom zoom or pan controls with boundary validation
- Synchronize multiple map instances to show the same geographic region
- Calculate distances or perform spatial queries within the visible area
- Log or save the current map view state for later restoration

**Return value:**

The method returns an object with the following structure:
- `minLatitude` - The minimum latitude value of the visible area
- `maxLatitude` - The maximum latitude value of the visible area
- `minLongitude` - The minimum longitude value of the visible area
- `maxLongitude` - The maximum longitude value of the visible area

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/maps/method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/maps/method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/maps/method-cs1" %}
