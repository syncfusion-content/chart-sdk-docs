---
layout: post
title: How to hide or show an axis on legend click in JavaScript Charts | Syncfusion
description: Learn how to hide or show a Chart axis when a legend item is selected in the Syncfusion JavaScript Chart control.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to hide or show an axis on legend click in JavaScript Charts

Use the [`legendClick`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#legendclick) event to update the visibility of the axis associated with the selected series. The event provides the clicked series directly, so the implementation does not need to parse generated legend-element IDs.

## Configure the axes and series

Define each additional Y-axis in the `axes` collection and assign its `name` to the corresponding series through `yAxisName`. A series without `yAxisName` uses `primaryYAxis`.

In the following example:

- `England - Primary` uses `primaryYAxis`.
- `England - Secondary` uses `yAxis1`.
- `West Indies` uses `yAxis2`.

## Update axis visibility

When a legend item is selected, the handler predicts the clicked series' next visibility state and checks every series associated with the same axis. The axis remains visible while at least one associated series is visible and is hidden only when all associated series are hidden.

The legend's default visibility toggle remains enabled through `legendSettings.toggleVisibility: true`. Selecting the legend item again restores the series and its associated axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs16" %}

## Behavior notes

- The `legendClick` event provides the selected series through `args.series` and the Chart through `args.chart`.
- An empty or missing `yAxisName` maps the series to `primaryYAxis`.
- Additional axes are matched by comparing `series.yAxisName` with each axis `name`.
- Axis visibility is changed only after considering all series mapped to that axis.
- The custom handler updates axis visibility while the built-in legend behavior updates series visibility.

## Troubleshooting

- If the wrong axis is hidden, verify that each series `yAxisName` exactly matches an axis `name`.
- If the primary Y-axis is not updated, verify that the series has no `yAxisName` or explicitly maps to the primary axis logic.
- If an axis disappears while another associated series remains visible, verify that all series mapped to the axis are included in the shared-axis check.
- If series visibility does not toggle, verify that `legendSettings.toggleVisibility` is `true`.
- If `legendClick` does not run, verify that the Legend feature is available in the loaded EJ2 ES5 bundle.

## See also

- [Legend](../legend)
- [Multiple axes](../axis-customization#multiple-axis)
- [Axis API](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis)
- [Series visibility](./series-visible)
- [Getting started](../es5-getting-started)