---
layout: post
title: How to hide tooltips for unselected series in JavaScript Charts | Syncfusion
description: Learn how to cancel tooltip rendering for unselected series in the Syncfusion JavaScript Chart control.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to hide tooltips for unselected series in JavaScript Charts

Use the Chart [`tooltipRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#tooltiprender) event to cancel tooltip rendering for an unselected series. Enable series selection and tooltips before applying the conditional logic.

## Configure selection and tooltips

Set `selectionMode` to `Series` so selecting one series visually distinguishes it from the other series. Set `tooltip.enable` to `true` so the Chart raises `tooltipRender` before displaying a tooltip.

```javascript
selectionMode: 'Series',
tooltip: {
    enable: true
}
```

By default, Chart tooltips are disabled and must be enabled explicitly.

## Cancel the tooltip for a deselected series

The `tooltipRender` event provides the related series through `args.series`. Inspect the series element for the EJ2 deselection CSS class and set `args.cancel` to `true` when the series is deselected.

```javascript
tooltipRender: function(args) {
        var series = args.series;
        if (series.seriesElement.classList[0] === 'element_ej2_deselected') {
            args.cancel = true;
        }
},
```

The current JavaScript example uses `tooltipRender` with the series element's deselected CSS class to suppress tooltips for unselected series.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs9" %}

## Troubleshooting

- If no tooltip appears, verify that `tooltip.enable` is `true` and Tooltip support is available in the loaded EJ2 ES5 bundle.
- If every series continues to show tooltips, verify that `selectionMode` is `Series` and select a series before testing.
- If `seriesElement` is undefined, verify that the event belongs to a Cartesian Chart series rather than an Accumulation Chart series.
- If the handler does not detect deselection, inspect the rendered series element and update the supported deselection class for the installed EJ2 version.
- If shared tooltips show values from multiple series, set `tooltip.shared` to `false` for this selection-specific behavior.

## See also

- [Tooltip](../tool-tip)
- [Selection](../selection)
- [TooltipRender API](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#tooltiprender)
- [Series API](https://ej2.syncfusion.com/javascript/documentation/api/chart/series)
- [Getting started](../es5-getting-started)