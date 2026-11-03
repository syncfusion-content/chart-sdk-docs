---
layout: post
title: How to visualize Grid records in JavaScript Charts | Syncfusion
description: Learn how to visualize the current page of Syncfusion JavaScript Grid records in a Chart and keep the Chart synchronized during paging.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to visualize Grid records in JavaScript Charts

Use the Grid [`getCurrentViewRecords`](https://ej2.syncfusion.com/javascript/documentation/api/grid#getcurrentviewrecords) method to retrieve the records in the current Grid view and assign them to the Chart series `dataSource`. Update the Chart after Grid paging so both controls display the same records

## Initialize the Grid and Chart

Create the Grid with paging enabled and create the Chart only once. The Grid fields mapped to the Chart must have compatible values:

- `OrderDate` maps to the Chart X-axis through `xName` and must contain valid `Date` values.
- `Freight` maps to the Chart Y-axis through `yName` and must contain numeric values.

## Synchronize the current Grid view

Use a shared function to copy the current Grid records to the Chart. Call the function from `dataBound` for the initial view and from `actionComplete` after paging.

```javascript
function updateChartFromGrid() {
    chart.series[0].dataSource = grid.getCurrentViewRecords();
    chart.refresh();
}
```

The `dataBound` event runs after the Grid binds its data. The `actionComplete` event identifies completed actions through `args.requestType`; the paging request type is `paging`.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/grid-visual-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/grid-visual-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/grid-visual-cs2" %}

## Filtering, sorting, and other Grid actions

`getCurrentViewRecords()` returns records from the current Grid view. If the Chart must also update after filtering, sorting, searching, grouping, adding, editing, or deleting records, call `updateChartFromGrid()` for the corresponding `actionComplete` request types or after `dataBound` completes. The related pie-chart example uses the same method for filtered Grid records.

For remote Grid data, update the Chart only after the Grid request succeeds and the current view is available. Display an empty state when no records remain after paging or filtering.

## Data and lifecycle considerations

- Create the Chart once and update its series instead of creating a new Chart in every `dataBound` call.
- Copy the current records when needed so later Grid mutations do not unexpectedly change the Chart data reference.
- Ensure the date and numeric fields are parsed before binding them to DateTime and numeric axes.
- Call `destroy()` on Grid and Chart instances before dynamically removing their host elements.
- Set a primary-key Grid column when editing or deleting records so record identity remains stable.

## Troubleshooting

- If the Chart is empty, verify that `getCurrentViewRecords()` returns records and that `xName` and `yName` match the Grid field names.
- If dates do not render, convert `OrderDate` values to JavaScript `Date` objects before assigning them to the DateTime axis.
- If paging changes the Grid but not the Chart, verify that `actionComplete` receives `requestType: 'paging'` and calls the update function.
- If multiple Charts overlap, verify that the Chart is initialized only once rather than during every Grid `dataBound` event.
- If values appear as strings, parse the Y field as a number before assigning it to the Chart.

## See also

- [Visualize filtered Grid records in a Pie Chart](./grid-data-pie)
- [Grid API](https://ej2.syncfusion.com/javascript/documentation/api/grid)
- [Working with Chart data](../working-with-data)
- [Dynamic data update](../dynamic-data-update)
- [Getting started](../es5-getting-started)
