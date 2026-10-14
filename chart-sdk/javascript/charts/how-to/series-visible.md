---
layout: post
title: How to show series on legend click in JavaScript Charts | Syncfusion
description: Learn here all about Series visible in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to show or hide a series on legend click in JavaScript Charts

Use the `legendClick` event to identify the clicked legend item and control the visibility of its associated series. The event provides the Chart instance and series directly, so the implementation does not need to parse internal legend element IDs.

## Configure legend interaction

Set `legendSettings.toggleVisibility` to `false` when the `legendClick` handler will manage visibility. This prevents the built-in legend toggle from running in addition to the custom logic.

```javascript
legendSettings: {
    visible: true,
    toggleVisibility: false
}
```

## Toggle the clicked series

The `legendClick` event provides the associated series through `args.series`. Toggle its `visible` property, cancel the default legend action, and refresh the Chart.

```javascript
legendClick: function (args) {
    if (!args.series) {
        return;
    }

    args.cancel = true;
    args.series.visible = !args.series.visible;
    args.chart.refresh();
}
```

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs19" %}

## Troubleshooting

- If clicking a legend item has no effect, verify that the Legend feature is available and `legendClick` is configured on the Chart.
- If the series toggles twice, set `legendSettings.toggleVisibility` to `false` and keep `args.cancel = true` in the custom handler.
- If `args.series` is undefined, verify that the event came from a series legend item.
- If the legend is missing, set `legendSettings.visible` to `true` and give each series a `name`.
- If the Chart does not update, call `args.chart.refresh()` after changing `series.visible`.

## See also

- [Legend](../legend)
- [LegendClick event arguments](https://ej2.syncfusion.com/javascript/documentation/api/chart/ilegendclickeventargs)
- [Series API](https://ej2.syncfusion.com/javascript/documentation/api/chart/series)
- [Getting started](../es5-getting-started)
