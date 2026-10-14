---
layout: post
title: Synchronized Charts in TypeScript Charts | Syncfusion
description: Learn here all about Synchronized Charts in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Synchronized Charts in TypeScript Charts

Synchronized charts share interactions across multiple Chart instances. An interaction in one Chart, such as displaying a tooltip, moving a crosshair, zooming an axis, or selecting a point, is applied to the other synchronized Charts.

## Tooltip synchronization

Enable the tooltip in every synchronized Chart. Use the [`showTooltip`](https://ej2.syncfusion.com/documentation/api/chart/chart#showtooltip) method to display a tooltip in the target Charts and the [`hideTooltip`](https://ej2.syncfusion.com/documentation/api/chart/chart#hidetooltip) method to hide it when the pointer leaves the active Chart.

The `showTooltip` method accepts the following values:

- `x`: The data-point X value or the X-coordinate used to locate the tooltip.
- `y`: The data-point Y value or the Y-coordinate used to locate the tooltip.

When synchronized Charts use different axis ranges or dimensions, convert the source value or pointer position to the corresponding target-axis value before calling `showTooltip`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs45/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/user-interaction-cs45" %}

## Crosshair synchronization

Enable crosshair support in every synchronized Chart. Use the [`showCrosshair`](https://ej2.syncfusion.com/documentation/api/chart/chart#showcrosshair) method to display the crosshair in the target Charts and the [`hideCrosshair`](https://ej2.syncfusion.com/documentation/api/chart/chart#hidecrosshair) method when the pointer leaves the active Chart.

Convert pointer coordinates when the synchronized Charts have different plot-area dimensions. To display values beside the axes, enable the axis [`crosshairTooltip`](https://ej2.syncfusion.com/documentation/api/chart/axismodel#crosshairtooltip) setting separately.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs46/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs46/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/user-interaction-cs46" %}

## Zooming synchronization

Configure `zoomSettings` for every synchronized Chart. Handle the [`zoomComplete`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#zoomcomplete) event and read the current zoom values from [`IZoomCompleteEventArgs`](https://ej2.syncfusion.com/documentation/api/chart/izoomcompleteeventargs).

Apply the source axis `currentZoomFactor` and `currentZoomPosition` values to the corresponding target axis as `zoomFactor` and `zoomPosition`, and then refresh the target Chart. Use a synchronization guard while updating target Charts to prevent their zoom events from starting a recursive update loop.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs47/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs47/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/user-interaction-cs47" %}

## Selection synchronization

Configure a compatible `selectionMode` for every synchronized Chart. Handle the [`selectionComplete`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#selectioncomplete) event and retrieve the selected values from [`ISelectionCompleteEventArgs`](https://ej2.syncfusion.com/documentation/api/chart/iselectioncompleteeventargs).

Map the source series and point indexes to the corresponding target indexes, assign them through [`selectedDataIndexes`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#selecteddataindexes), and refresh the target Chart. The synchronized Charts must use compatible series and point ordering for direct index mapping.

Use the [`dragComplete`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#dragcomplete) event instead of `selectionComplete` when synchronizing rectangular or lasso region selection.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs48/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/user-interaction-cs48" %}

## Troubleshooting

- If a tooltip or crosshair is not displayed, verify that the corresponding feature is enabled in every target Chart.
- If synchronized positions do not align, map the source value or coordinate to the target Chart axis and plot area.
- If zooming causes repeated updates, add a guard that ignores events raised during programmatic synchronization.
- If selection targets the wrong point, verify that series and point indexes use the same ordering across all Charts.
- If an interaction remains visible after the pointer leaves, call `hideTooltip` or `hideCrosshair` from the corresponding leave event.

## See also

- [Synchronize hover between EJ2 JavaScript Charts](https://support.syncfusion.com/kb/article/21479/how-to-synchronized-hover-between-ej2-javascript-charts)
- [Tooltip in JavaScript Charts](./tool-tip)
- [Crosshair and trackball in JavaScript Charts](./cross-hair-and-track-ball)
- [Zooming in JavaScript Charts](./zooming)
- [Selection in JavaScript Charts](./selection)