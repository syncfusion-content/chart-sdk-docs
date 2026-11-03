---
layout: post
title: Selection in JavaScript Charts | Syncfusion
description: Learn how to select points, series, clusters, and regions and customize selection behavior in the Syncfusion JavaScript Chart control.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Selection in JavaScript Charts

The Chart supports point, series, cluster, rectangular, and lasso selection through click, tap, or drag interactions. When `Series` or `Cluster` selection is enabled, selecting a data point also selects the corresponding legend item.

## Selection modes

Set the [`selectionMode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#selectionmode) property to one of the following values:

| Mode | Description |
|---|---|
| `None` | Disables selection. This is the default value. |
| `Point` | Selects an individual data point. |
| `Series` | Selects an entire series. |
| `Cluster` | Selects data points that share the same index across all series. |
| `DragXY` | Selects data points within a rectangular region along both axes. |
| `DragX` | Selects data points within a rectangular region along the horizontal axis. |
| `DragY` | Selects data points within a rectangular region along the vertical axis. |
| `Lasso` | Selects data points within a freehand-drawn region. |

## Point

Set `selectionMode` to `Point` to select an individual data point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs10" %}

## Series

Set `selectionMode` to `Series` to select an entire series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs11" %}

## Cluster

Set `selectionMode` to `Cluster` to select data points that share the same index across all series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs12" %}

## Rectangular selection

Use `DragXY`, `DragX`, or `DragY` to select data points within a rectangular region. On touch devices, double-tap and drag to perform rectangular selection.

- `DragXY`: Selects data points along both axes.
- `DragX`: Selects data points along the horizontal axis.
- `DragY`: Selects data points along the vertical axis.

Handle the [`dragComplete`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#dragcomplete) event to process the values selected by a drag operation. Refer to the [`IDragCompleteEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/chart/idragcompleteeventargs) API for the event-argument properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs13" %}

## Lasso selection

Set `selectionMode` to `Lasso` to select data points inside a freehand-drawn region. Lasso selection is useful when the required points cannot be enclosed efficiently by a rectangular region.

## Multiple selection

Set the [`isMultiSelect`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#ismultiselect) property to `true` to retain more than one point, series, or cluster selection. The default value is `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs14" %}

## Selection on load

Use the [`selectedDataIndexes`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#selecteddataindexes) property to select points or series when the Chart loads. Each item contains a zero-based `series` index and `point` index.

```javascript
selectedDataIndexes: [
    { series: 0, point: 2 }
]
```

Use this property with `Point`, `Series`, or `Cluster` selection modes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs15" %}

## Legend selection

By default, clicking a legend item toggles the visibility of its series. To select a series through the legend without hiding it, set `selectionMode` to `Series` and set [`legendSettings.toggleVisibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#togglevisibility) to `false`.

Use [`legendSettings.enableHighlight`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#enablehighlight) only when hover highlighting is also required.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs16" %}

## Selection customization

Custom styles can be applied to selected points or series by using the [`selectionStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#selectionstyle) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs17" %}

## Selection events

Use the [`selectionComplete`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#selectioncomplete) event to retrieve the selected values after point, series, or cluster selection. Use the `dragComplete` event to retrieve values selected through rectangular or lasso selection.

## See also

- [Legend](./legend)
- [Highlight](./highlight)
- [Selection mode API](https://ej2.syncfusion.com/javascript/documentation/api/chart/selectionmode)
- [Selection pattern API](https://ej2.syncfusion.com/javascript/documentation/api/chart/selectionpattern)
