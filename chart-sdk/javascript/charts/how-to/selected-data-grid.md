---
layout: post
title: How to display selected data in JavaScript Charts | Syncfusion
description: Learn how to display data points selected by dragging over a Syncfusion JavaScript Chart in a Grid control.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to display selected data in a Grid in JavaScript Charts

Use the Chart `dragComplete` event to retrieve points selected through drag selection and display them in a Grid. Set `selectionMode` to `DragX`, `DragY`, or `DragXY` to enable range selection.

## Enable drag selection

Set `selectionMode` according to the range users must select:

- `DragX`: Selects points within the dragged X-axis range.
- `DragY`: Selects points within the dragged Y-axis range.
- `DragXY`: Selects points within both dragged axis ranges.

```javascript
selectionMode: 'DragXY'
```

Set `legendSettings.toggleVisibility` to `false` when clicking a legend item should not hide the series or interfere with the current range-selection workflow.

## Read the selected points

The `dragComplete` event provides `selectedDataValues` as an array of arrays. Each outer-array entry corresponds to a series, and each inner array contains the selected point objects for that series.

For a single series, use the first inner array:

```javascript
dragComplete: function (args) {
    var selectedPoints = args.selectedDataValues[0] || [];

    grid.dataSource = selectedPoints;
    grid.refresh();
}
```

For multiple series, combine all inner arrays before assigning the Grid data source.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs16" %}

## Troubleshooting

- If dragging does not create a selection rectangle, verify that `selectionMode` is a `DragX`, `DragY`, or `DragXY` value and that Selection support is available in the EJ2 ES5 bundle.
- If the Grid remains empty, inspect `args.selectedDataValues` and verify that the Grid field names are `x` and `y`, matching the objects returned in `selectedDataValues`.
- If only the first series appears, combine all inner arrays instead of reading only `selectedDataValues[0]`.
- If the Grid does not update, assign the new array to `grid.dataSource` and call `grid.refresh()`.
- If clicking the legend clears or changes the workflow, set `legendSettings.toggleVisibility` to `false`.

## See also

- [Selection](../selection)
- [Grid API](https://ej2.syncfusion.com/javascript/documentation/api/grid)
- [DragComplete API](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#dragcomplete)
- [Scatter Chart](../chart-types/scatter)
- [Getting started](../es5-getting-started)
