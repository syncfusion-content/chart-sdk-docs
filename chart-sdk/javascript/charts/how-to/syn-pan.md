---
layout: post
title: How to synchronize panning in JavaScript Charts | Syncfusion
description: Learn how to use synchronized panning in Syncfusion JavaScript Charts to navigate multiple charts together and compare data efficiently.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to synchronize panning in JavaScript Charts

Synchronize multiple Charts by copying the source Chart axis `zoomFactor` and `zoomPosition` values to the corresponding axes of the other Charts. Trigger the synchronization from the source Chart interaction events and refresh only the target Charts.

## Configure matching axes and zoom settings

Use compatible axis types and ranges across all synchronized Charts. Set the same zoom mode and enable the required zooming and panning features on each Chart.

```javascript
zoomSettings: {
    mode: 'X',
    enableSelectionZooming: true,
    enableMouseWheelZooming: true,
    enablePinchZooming: true,
    enableScrollbar: true
}
```

Pan becomes available after the Chart is zoomed. Users can select **Pan** from the zoom toolbar and drag the plot area, or use the scrollbar when enabled.

## Copy the visible range

Copy `zoomFactor` and `zoomPosition` from the source X-axis to the target X-axis. Use a synchronization guard to prevent target refreshes from starting another synchronization cycle.

```javascript
function synchronizeXAxis(sourceChart, targetChart) {
    targetChart.primaryXAxis.zoomFactor =
        sourceChart.primaryXAxis.zoomFactor;
    targetChart.primaryXAxis.zoomPosition =
        sourceChart.primaryXAxis.zoomPosition;
    targetChart.refresh();
}
```

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs20" %}

## Synchronization behavior

- `zoomFactor` defines the fraction of the complete axis range that is visible.
- `zoomPosition` defines where the visible range starts within the complete axis range.
- Copy both values so the target Chart shows the same horizontal viewport.
- Synchronize both directions only when users must be able to pan either Chart.
- Use the same axis type, data domain, and zoom mode for predictable alignment.
- For `mode: 'XY'`, copy the corresponding Y-axis `zoomFactor` and `zoomPosition` values as well.

## Troubleshooting

- If the target Chart does not move, verify that both Charts use compatible axes and that both `zoomFactor` and `zoomPosition` are copied.
- If panning is unavailable, zoom the Chart first and select Pan from the zoom toolbar.
- If synchronization loops or flickers, use a guard and refresh only the target Chart.
- If the Charts become misaligned, verify that both axes use the same minimum, maximum, type, and zoom mode.
- If scrolling is slow, throttle synchronization and reduce unnecessary target refreshes.

## See also

- [Zooming and panning](../zooming)
- [Synchronized Charts](../synchronized-chart)
- [ChartMouseMove API](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#chartmousemove)
- [Getting started](../es5-getting-started)
