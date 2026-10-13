---
layout: post
title: How to add or remove series in JavaScript Charts | Syncfusion
description: Learn how to add and remove series dynamically in the Syncfusion JavaScript Chart control.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to add or remove series in JavaScript Charts

Use the Chart [`addSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chart#addseries) and [`removeSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chart#removeseries) methods to update the series collection dynamically.

## Add a series

Pass an array of series configuration objects to `addSeries`. Each configuration must include the properties required by its series type, such as `type`, `dataSource`, `xName`, and `yName`.

```javascript
chart.addSeries([{
    type: 'Column',
    dataSource: [{ x: 'John', y: 11000 }, { x: 'Jake', y: 16000 }, { x: 'Peter', y: 19000 },
    { x: 'James', y: 12000 }, { x: 'Mary', y: 10700 }],
    xName: 'x',
    yName: 'y'
}]);
```

Multiple series can be added in one call by including multiple objects in the array. Series are rendered in collection order.

## Remove a series

Pass a zero-based series index to `removeSeries`. Removing a series changes the indexes of the series that follow it, so validate the index before removal.

```javascript
if (chart.series.length > 1) {
    chart.removeSeries(1);
}
```

## Complete example

The Add button appends one additional series. The Remove button removes that series. The event handlers use ES5-compatible `function` expressions and prevent duplicate additions or invalid removals.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/add-series-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/add-series-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/add-series-cs2" %}

## Troubleshooting

- If a newly added series is not displayed, verify that its `dataSource`, `xName`, `yName`, and `type` values are valid.
- If an Add or Remove action does nothing, verify that the button IDs match the IDs used by the JavaScript event handlers.
- If removal targets the wrong series, recalculate the zero-based index after every addition or removal.
- If duplicate series appear, disable Add after insertion or check the current series collection before calling `addSeries`.

## See also

- [Series API](https://ej2.syncfusion.com/javascript/documentation/api/chart/series)
- [Multiple series](./chart-series)
- [Working with data](./working-with-data)
- [Getting started](./getting-started)