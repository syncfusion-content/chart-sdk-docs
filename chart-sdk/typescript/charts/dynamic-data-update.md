---
layout: post
title: Dynamic data update in TypeScript Charts | Syncfusion
description: Learn here all about dynamic data update in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Dynamic data update in TypeScript Charts

The TypeScript Chart control provides methods to dynamically modify data without requiring a full chart refresh. This enables real-time data visualization, interactive features, and responsive user experiences. Common scenarios include adding sensor readings, removing outdated data points, replacing entire datasets, and enabling click-based data manipulation.

## Adding a new data point

Use the [`addPoint`](https://ej2.syncfusion.com/documentation/api/chart/series#addpoint) method to dynamically append a new data point to a series. This is useful for real-time data streams, user interactions, or incremental data loading. The method accepts the following parameters:
 
* **Data point** (required): The new data object to append to the series (must match the dataSource structure)
* **Animation duration** (optional): Duration in milliseconds for the entry animation

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/add-point/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/add-point/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/add-point" %}

## Removing an existing data point

Use the [`removePoint`](https://ej2.syncfusion.com/documentation/api/chart/series#removepoint) method to dynamically delete a data point from a series by its index. This is useful for filtering data, removing outliers, or responding to user actions. The method accepts the following parameters:
 
* **Point index** (required): The zero-based index of the data point to remove
* **Animation duration** (optional): Duration in milliseconds for the exit animation

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/remove-point/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/remove-point/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/remove-point" %}

## Replacing the entire dataset

Use the [`setData`](https://ej2.syncfusion.com/documentation/api/chart/series#setdata) method to replace all data points in a series with a new dataset. This is useful for category switching, time range changes, or complete data refreshes. The method accepts the following parameters:
 
* **New data source** (required): The complete new dataset array to display
* **Animation duration** (optional): Duration in milliseconds for the transition animation

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/set-data/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/set-data/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/set-data" %}

## Click to add or remove a data point

Enable click-based data point management. Listen to the [`chartMouseClick`](https://ej2.syncfusion.com/documentation/api/chart#chartmouseclick) event to capture click coordinates and point information. Extract the `x` and `y` axis values from the event arguments when a user clicks. If the click location has no existing data point, use `addPoint` to add a new data point at those coordinates. If a user clicks on an existing data point, identify its index and use `removePoint` to delete it. This creates an intuitive interface for data exploration and editing.

**Event arguments:**

* `x` – The x-axis value at the click location
* `y` – The y-axis value at the click location
* `target` – Defines the ID of the element that is the target of the mouse event
* `axisData` - Defines a collection of axis data, where the key is the axis name and the value is the axis value at the mouse location

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/click-add-point/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/click-add-point/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/click-add-point" %}

> **Troubleshooting:** If `addPoint` does not append data, verify that the data point structure matches the series' `dataSource` field names. If `removePoint` throws an index error, ensure the index is within the valid range (0 to length-1). If the chart does not update after `setData`, call the `refresh` method to re-render the chart. For click events, ensure the chart is fully rendered before binding event handlers.

> **Performance:** For real-time data streams with frequent updates, use animation duration of 0 to minimize performance overhead. For large datasets, consider using `setData` with bulk updates rather than multiple `addPoint` calls.

## See also

* [Working with data in JavaScript Charts](https://ej2.syncfusion.com/documentation/chart/working-with-data/)
* [User interaction in JavaScript Charts](https://ej2.syncfusion.com/documentation/chart/user-interaction/)