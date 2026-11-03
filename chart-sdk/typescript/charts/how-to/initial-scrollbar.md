---
layout: post
title: How to enable an initial scrollbar in TypeScript Charts | Syncfusion
description: Learn here all about Initial scrollbar in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to enable an initial scrollbar in TypeScript Charts

To display the zooming scrollbar when the Chart first renders, set an axis `zoomFactor` below `1`, set `zoomSettings.enableScrollbar` to `true`, and mark the Chart zoom module as zoomed in the [`load`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#load) event. A `zoomFactor` of `0.3` displays approximately 30% of the complete axis range.

## Configure the initial visible range

Set `primaryXAxis.zoomFactor` to the fraction of the complete X-axis range that should be visible.

```javascript
primaryXAxis: {
    valueType: 'DateTime',
    zoomFactor: 0.3,
}
```

`zoomFactor` supports values from `0` to `1`; `1` displays the complete range.

## Enable the scrollbar and zoom state

Set `zoomSettings.enableScrollbar` to `true`. In the `load` event, verify that the zoom module exists and set its `isZoomed` state to `true`.

```javascript
zoomSettings: {
    enableScrollbar: true,
    mode: 'X'
},
load: function (args) {
    if (args.chart.zoomModule) {
        args.chart.zoomModule.isZoomed = true;
    }
}
```
## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs10" %}

## Initial range and scrollbar behavior

- `zoomFactor: 0.3` initially shows about 30% of the X-axis range.
- `mode: 'X'` limits zooming and the scrollbar to the horizontal axis.
- `enableScrollbar: true` enables the zoom scrollbar, while axis `scrollbarSettings` controls its appearance and behavior.
- `zoomModule.isZoomed` is an internal module state used by the documented workaround; verify this behavior when upgrading EJ2 versions.

## Troubleshooting

- If the scrollbar is missing, verify `enableScrollbar` is `true`, and `zoomModule.isZoomed` is set during `load`.
- If the full range is still visible, verify that `zoomFactor` is assigned to the correct axis before the Chart loads.
- If the scrollbar appears on the wrong axis, verify `zoomSettings.mode` and the axis configuration.

## See also

- [Zooming](../zooming)
- [ScrollbarSettings API](https://ej2.syncfusion.com/documentation/api/chart/scrollbarsettings)
- [DateTime axis](../date-time-axis)
- [Exact date range](./exact-date)
- [Getting started](../es5-getting-started)