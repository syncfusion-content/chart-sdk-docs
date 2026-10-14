---
layout: post
title: How to show pie percentages in tooltips in TypeScript Charts | Syncfusion
description: Learn here all about Percentage tool tip in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accumulation Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to show pie percentages in tooltips in TypeScript Charts

Use the Accumulation Chart [`tooltipRender`](https://ej2.syncfusion.com/documentation/api/accumulation-chart/accumulationchartmodel#tooltiprender) event to calculate each Pie Chart point as a percentage of the series total. Read the point value from `args.point.y`, read the total from `args.series.sumOfPoints`, and assign the formatted result to `args.text`.

## Enable the tooltip

Set `tooltip.enable` to `true`. The tooltip is not displayed unless it is enabled.

```javascript
tooltip: {
    enable: true
}
```

## Calculate the percentage

Use the following formula:

```text
percentage = point value / series total * 100
```

```javascript
tooltipRender: function(args) {
    var value  = args.point.y / args.series.sumOfPoints * 100;
    args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
},
```

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs14" %}

## Troubleshooting

- If no tooltip appears, verify that `tooltip.enable` is `true` and Accumulation Tooltip support is available in the loaded EJ2 ES5 bundle.
- If the percentage is `NaN` or `Infinity`, verify that `args.point.y` and `args.series.sumOfPoints` are finite numbers and that the total is not zero.
- If the tooltip text does not change, assign the formatted value to `args.text` in `tooltipRender`.
- If the percentage is incorrect, verify that `yName` maps to the intended numeric field and that the Pie series contains the expected points.

## See also

- [Accumulation Chart tooltip](../tool-tip)
- [Pie Chart](../chart-types/pie)
- [AccumulationChartModel API](https://ej2.syncfusion.com/documentation/api/accumulation-chart/accumulationchartmodel)
- [Getting started](../getting-started)