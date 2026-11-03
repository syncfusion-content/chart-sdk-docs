---
layout: post
title: How to get clicked pie clicked data in TypeScript Charts | Syncfusion
description: Learn here all about Clicked data in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accumulation Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to get clicked pie clicked data in TypeScript Charts

Use the [`pointClick`](https://ej2.syncfusion.com/documentation/api/accumulation-chart/accumulationchartmodel#pointclick) event to retrieve information about a clicked pie slice. The event provides [`IPointEventArgs`](https://ej2.syncfusion.com/documentation/api/chart/ipointeventargs), including the clicked point and series information.

## Retrieve the clicked category and value

Read `args.point.x` to get the category mapped through `xName` and `args.point.y` to get the numeric value mapped through `yName`.

```javascript
pointClick: function(args){
    document.getElementById("lbl").innerText = "X : "+ args.point.x + "\nY : "+ args.point.y;
}
```

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs8" %}


## Event data

- `args.point.x`: Contains the clicked slice category.
- `args.point.y`: Contains the clicked slice value.
- `args.series`: Contains the accumulation-series configuration associated with the point.
- `args.point.index`: Contains the zero-based point index when available in the current Chart version.

The values returned through `x` and `y` correspond to the fields configured through the series `xName` and `yName` properties.

## Troubleshooting

- If `pointClick` does not run, verify that the handler is configured on `AccumulationChart` and that the click occurs on a rendered slice.
- If `args.point.x` or `args.point.y` is empty, verify that `xName` and `yName` match fields in the series data source.
- If the output is not displayed, verify that the target element ID exists before the Chart event runs.

## See also

- [Pie series](../pie)
- [AccumulationChartModel API](https://ej2.syncfusion.com/documentation/api/accumulation-chart/accumulationchartmodel)
- [Point event arguments](https://ej2.syncfusion.com/documentation/api/chart/ipointeventargs)
- [Tooltip](../tool-tip)
- [Getting started](../getting-started)