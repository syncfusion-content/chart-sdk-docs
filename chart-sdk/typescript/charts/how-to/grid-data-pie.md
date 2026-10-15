---
layout: post
title: How to visualize Grid records in a TypeScript Charts | Syncfusion
description: Learn here all about Grid data pie in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accumulation Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to visualize Grid records in a TypeScript Charts

Use the Grid `getCurrentViewRecords()` method to retrieve the records in the current view and assign the records to an Accumulation Chart Pie series. Update the Pie Chart after paging, filtering, sorting, or searching so both controls display equivalent data.

## Configure the Grid

Enable paging and filtering through `allowPaging` and `allowFiltering`. The sample uses `filterSettings.type: 'Menu'` and maps the following fields:

- `CustomerName`: Supplies each Pie Chart category.
- `Freight`: Supplies the numeric value for each category.
- `OrderID`: Provides a stable primary key for Grid records.
- `OrderDate`: Displays the order date in the Grid.

## Synchronize the Pie Chart

Create the Accumulation Chart once, and use a shared update function to replace the Pie series data after Grid actions. `getCurrentViewRecords()` returns the records currently displayed by the Grid.

```javascript
function updatePieFromGrid() {
    var currentRecords = grid.getCurrentViewRecords();
    chart.series[0].dataSource = aggregateFreight(currentRecords);
    chart.refresh();
}
```

The sample aggregates records by `CustomerName` so repeated customers appear as one Pie slice with a combined Freight value.

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/grid-visual-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/grid-visual-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/grid-visual-cs3" %}

## Grid action behavior

- `dataBound` synchronizes the initial Grid view with the Pie Chart.
- `actionComplete` synchronizes completed paging, filtering, sorting, searching, and refresh operations.
- `getCurrentViewRecords()` returns the records in the current Grid view, not necessarily the complete filtered dataset across every page.
- If the Pie Chart must represent all filtered records rather than only the current page, obtain the complete filtered result from the Grid data source or back end instead of relying only on `getCurrentViewRecords()`.

## Data and lifecycle considerations

- Create the Accumulation Chart once and update its series rather than creating a new instance during every `dataBound` event.
- Aggregate repeated category values before creating Pie slices when one slice per category is required.
- Validate that `Freight` contains finite numeric values before aggregation.
- Display an empty-state message when filtering produces no records.
- For remote data, update the Pie Chart after the Grid request succeeds and current-view records are available.
- Call `destroy()` on the Grid and Accumulation Chart before dynamically removing their host elements.

## Troubleshooting

- If the Pie Chart is empty, verify that `getCurrentViewRecords()` returns records and that `CustomerName` and `Freight` match the data-source fields.
- If filtering changes the Grid but not the Pie Chart, verify that `actionComplete` handles `requestType: 'filtering'`.
- If duplicate customers produce multiple slices, aggregate records by `CustomerName` before assigning the series data source.
- If Freight values are ignored, convert the values to numbers and reject `NaN` or infinite values.
- If the Chart is recreated repeatedly, move Accumulation Chart initialization outside `dataBound` and update only the existing series.

## See also

- [Visualize Grid records in a Cartesian Chart](./grid-data-chart)
- [Grid API](https://ej2.syncfusion.com/documentation/api/grid)
- [Pie Chart](../chart-types/pie)
- [Working with data](../working-with-data)
- [Getting started](../getting-started)