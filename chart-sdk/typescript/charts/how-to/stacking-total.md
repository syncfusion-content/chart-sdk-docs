---
layout: post
title: How to display stacking series total in TypeScript Charts | Syncfusion
description: Learn here all about Stacking totals in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to display stacking series totals in TypeScript Charts

Use one point-based annotation for each X-axis category and set its content to the total of all stacked values in that category. Position each annotation slightly above the corresponding stack.

## Calculate the stack totals

Calculate totals from the source data instead of relying on internal series state. This keeps the displayed totals synchronized when the data changes.

```javascript
function getTotal(point) {
    return point.apple + point.orange + point.grapes;
}
```

## Create one annotation per category

Map the source data to annotation objects. Set `coordinateUnits` to `Point`, use the category as `x`, and place `y` slightly above the calculated total.

```javascript
var annotations = fruitData.map(function (point) {
    var total = getTotal(point);

    return {
        content: '<span class="stack-total">' + total + '</span>',
        x: point.person,
        y: total + 0.5,
        coordinateUnits: 'Point',
        region: 'Series',
        horizontalAlignment: 'Center',
        verticalAlignment: 'Bottom'
    };
});
```

`coordinateUnits: 'Point'` positions the annotation with axis values, and `region: 'Series'` positions it relative to the series area.

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs17" %}

## Dynamic data updates

When the source data changes, recalculate the annotations before refreshing the Chart.

```javascript
chart.annotations = createAnnotations(fruitData);
chart.refresh();
```

If the number or order of categories changes, recreating the annotation collection prevents totals from being assigned to the wrong category.

## Troubleshooting

- If totals appear above the wrong category, verify that annotation `x` values exactly match the X-axis category values.
- If totals are clipped, increase the Y-axis maximum or Chart top margin.
- If totals are stale after a data change, rebuild `chart.annotations` before calling `refresh()`.
- If a total is incorrect, verify that every stacked field is numeric and included in `getTotal()`.

## See also

- [Chart annotations](../chart-annotations)
- [Stacked Column Chart](../chart-types/stack-column)
- [Data labels](../data-labels)
- [ChartAnnotationSettings API](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings)
- [Getting started](../getting-started)