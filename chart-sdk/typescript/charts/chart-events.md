---
layout: post
title: Chart events in TypeScript Charts | Syncfusion
description: Learn here all about Chart events in Syncfusion TypeScript Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart events 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Chart events in TypeScript Charts Component

Chart events are callback functions that the Syncfusion EJ2 Chart component triggers at different stages of its life cycle. They allow developers to respond to user interactions, customize rendering, control behavior, and extend chart functionality without modifying the core component. These events enable developers to implement custom logic, enhance interactivity, and tailor the chart's behavior to specific requirements, thereby providing a more dynamic and responsive user experience.

For a full list of supported TypeScript and Syncfusion package versions, see the [Getting Started](./getting-started) page. Every event documented here requires the relevant module to be injected using `Chart.Inject` (for example, `Category`, `LineSeries`, `Tooltip`, `Selection`, `DataEditing`, `Zoom`, `ScrollBar`, `Export`).

**Available events**

| Group | Events |
| --- | --- |
| Animation | `animationComplete` |
| Labels and Axes | `axisLabelRender`, `axisLabelClick`, `axisRangeCalculated`, `axisMultiLabelRender`, `multiLevelLabelClick` |
| Series and Points | `seriesRender`, `pointClick`, `pointDoubleClick`, `pointMove`, `pointRender`, `textRender` |
| Data Editing (Drag) | `dragStart`, `drag`, `dragEnd` |
| Tooltip | `tooltipRender`, `sharedTooltipRender` |
| Legend | `legendRender`, `legendClick` |
| Annotations | `annotationRender` |
| Zooming and Scrolling | `onZooming`, `zoomComplete`, `scrollChanged`, `scrollStart`, `scrollEnd` |
| Selection and Drag | `dragComplete`, `selectionComplete` |
| Mouse Events | `chartMouseDown`, `chartMouseMove`, `chartMouseUp`, `chartMouseLeave`, `chartMouseClick`, `chartDoubleClick` |
| Life cycle and Layout | `load`, `loaded`, `beforeResize`, `resized`, `beforePrint`, `beforeExport`, `afterExport` |


## Animation

### animationComplete
Triggered after a series animation completes. Use this event to chain additional UI work, run custom transitions, or release a loading indicator. The series must have `animation.enable = true` for this event to fire. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ianimationcompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/animationComplete/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/animationComplete/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/animationComplete" %}


## Labels and Axes

### axisLabelRender
Triggered before an axis label is rendered so you can customize its text and style. Set `args.cancel = true` to hide an individual label. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iaxislabelrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisLabelRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisLabelRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/axisLabelRender" %}

### axisLabelClick
Triggered when an axis label is clicked. Use it to drill into a category, toggle an axis-level filter, or open a side panel for the clicked label. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iaxislabelclickeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisLabelClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisLabelClick/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/axisLabelClick" %}

### axisRangeCalculated
Triggered after the axis range (minimum, maximum, and interval) is calculated, allowing you to override the values. For category axes, `minimum` and `maximum` apply to category index positions rather than labels. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iaxisrangecalculatedeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisRangeCalculated/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisRangeCalculated/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/axisRangeCalculated" %}

### axisMultiLabelRender
Triggered before multi-level axis labels are rendered so you can customize their text and style. Multi-level labels must be configured on the axis via the `multiLevelLabels` property; the `MultiLevelLabel` module must also be injected using `Chart.Inject`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iaxismultilabelrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisMultiLabelRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/axisMultiLabelRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/axisMultiLabelRender" %}

### multiLevelLabelClick
Triggered when a multi-level axis label segment is clicked. Requires the `MultiLevelLabel` module to be injected using `Chart.Inject` and `multiLevelLabels` to be configured on the axis. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imultilevellabelclickeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/multiLevelLabelClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/multiLevelLabelClick/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/multiLevelLabelClick" %}

## Series and Points

### seriesRender
Triggered before a series is rendered so you can customize its appearance and properties (for example, fill, opacity, border, width, or `columnWidth`). To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iseriesrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/seriesRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/seriesRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/seriesRender" %}

### pointClick
Triggered when a data point or its symbol is clicked. Use this event to perform actions such as highlighting, drilling down, or showing custom details for the selected point. Inspect `args.point`, `args.series`, `args.pointIndex`, and `args.seriesIndex` for details. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ipointeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointClick/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/pointClick" %}

### pointDoubleClick
Triggered when a data point or its symbol is double-clicked. Use this event for quick-edit workflows, navigation, or toggling detailed views for the target point. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ipointeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointDoubleClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointDoubleClick/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/pointDoubleClick" %}

### pointMove
Triggered when the pointer moves over a data point. Use this event to show contextual UI, update external indicators, or track the hovered point dynamically. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ipointeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointMove/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointMove/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/pointMove" %}

### pointRender
Triggered before an individual data point is rendered so you can customize its visual properties such as `fill`, `border`, `shape`, size, and corner radius. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ipointrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/pointRender/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/pointRender" %}

### textRender (Data Labels)
Triggered before a data label is rendered so you can customize label text, style, template, or position. You can also set `args.font` and `args.color` to format the label. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/itextrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/textRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/textRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/textRender" %}

## Data Editing (Drag)

### dragStart

Triggered when a data point drag operation begins on a series with dragging enabled (via `dragSettings`). Requires the `DataEditing` module to be injected using `Chart.Inject` and the series to have `dragSettings.enable = true`. Use this event to validate the drag action, apply constraints, or cancel the drag before it proceeds. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/idataeditingeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/dragStart/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/dragStart/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/dragStart" %}

### drag

Triggered continuously while a data point is being dragged. Use this event to provide live feedback, enforce boundaries, or update the UI as the point’s position changes. Requires the `DataEditing` module to be injected using `Chart.Inject`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/idataeditingeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/drag/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/drag/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/drag" %}

### dragEnd

Triggered when a data point drag operation completes (pointer released) and the new value is committed. Use this event to persist changes, refresh related UI, or perform post-edit actions. Requires the `DataEditing` module to be injected using `Chart.Inject`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/idataeditingeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/dragEnd/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/dragEnd/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/dragEnd" %}

## Tooltip

### tooltipRender
Triggered before a tooltip for a point in a single-series tooltip is shown so you can customize content and style. Requires the `Tooltip` module to be injected using `Chart.Inject` and `tooltip.enable = true`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/itooltiprendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/tooltipRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/tooltipRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/tooltipRender" %}

### sharedTooltipRender
Triggered before a shared tooltip is shown (aggregating multiple series at the same x-value) so you can customize the aggregated content. Requires the `Tooltip` module to be injected using `Chart.Inject` and `tooltip.shared = true`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/isharedtooltiprendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/sharedTooltipRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/sharedTooltipRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/sharedTooltipRender" %}

## Legend

### legendRender
Triggered before a legend item is rendered so you can customize the legend text, shape, and fill. The `shape` value must be a valid `LegendShape` enum value (for example, `Circle`, `Rectangle`, `Diamond`). To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ilegendrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/legendRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/legendRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/legendRender" %}

### legendClick
Triggered when a legend item is clicked. Use this event to filter, isolate, or highlight related data in response to the selection. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ilegendclickeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/legendClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/legendClick/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/legendClick" %}

## Annotations

### annotationRender
Triggered before each chart annotation is rendered so you can customize or cancel it. Requires the `ChartAnnotation` module to be injected using `Chart.Inject` and an `annotations` configuration on the chart. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iannotationrendereventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/annotationRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/annotationRender/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/annotationRender" %}

## Zooming and Scrolling

### onZooming
Triggered during zoom or pan interactions, providing per-axis zoom information that can be modified or canceled. Requires the `Zoom` module to be injected using `Chart.Inject` and `zoomSettings` to be configured on the chart. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/izoomingeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/zooming/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/zooming/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/zooming" %}

### zoomComplete
Triggered after a zoom or pan action completes for an axis. Requires the `Zoom` module to be injected using `Chart.Inject` and `zoomSettings` to be configured on the chart. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/izoomcompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/zoomComplete/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/zoomComplete/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/zoomComplete" %}

### scrollChanged
Triggered during scrollbar interactions to indicate visible range or zoom changes. Requires the `ScrollBar` module to be injected using `Chart.Inject` and `scrollbarSettings.enable = true` on the axis. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iscrolleventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/scrollChanged/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/scrollChanged/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/scrollChanged" %}

### scrollStart
Triggered when a scrollbar interaction begins. Use this event to capture the previous range before the user changes the viewport, or to apply initial constraints when scrolling starts. Requires the `ScrollBar` module to be injected using `Chart.Inject` and `scrollbarSettings.enable = true` on the axis. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iscrolleventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/scrollStart/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/scrollStart/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/scrollStart" %}

### scrollEnd
Triggered when a scrollbar interaction ends and the new viewport range is committed. Use this event to persist the visible range or to refresh related UI. Requires the `ScrollBar` module to be injected using `Chart.Inject` and `scrollbarSettings.enable = true` on the axis. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iscrolleventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/scrollEnd/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/scrollEnd/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/scrollEnd" %}

## Selection and Drag

### dragComplete
Triggered after a drag-selection area or zoom region is completed. Requires the `Selection` module to be injected using `Chart.Inject` and `selectionMode` to be set to a drag-based value (for example, `DragXY`, `DragX`, or `DragY`). To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/idragcompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/dragComplete/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/dragComplete/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/dragComplete" %}

### selectionComplete
Triggered after a selection action (by click or drag) completes. Requires the `Selection` module to be injected using `Chart.Inject` and `selectionMode` to be set to a value that enables selection (for example, `Point`, `Series`, `Cluster`, `DragXY`). To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iselectioncompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/selectionComplete/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/selectionComplete/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/selectionComplete" %}

## Mouse Events

### chartMouseDown
Triggered when a mouse down action occurs over the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseDown/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseDown/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseDown" %}

### chartMouseMove
Triggered when the mouse moves over the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseMove/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseMove/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseMove" %}

### chartMouseUp
Triggered when a mouse up action occurs over the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseUp/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseUp/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseUp" %}

### chartMouseLeave
Triggered when the mouse leaves the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseLeave/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseLeave/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseLeave" %}

### chartMouseClick
Triggered when a mouse click occurs within the chart area (axes, series, legend, tooltip, etc.). To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseClick/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/chartMouseClick" %}

### chartDoubleClick
Triggered when a double-click occurs within the chart area. Use this event to reset zoom, toggle modes, or open detailed panels based on the double-click location. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartDoubleClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/chartDoubleClick/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/chartDoubleClick" %}

## Life cycle and Layout

### load
Triggered before the chart starts initial rendering. Use this event to set themes, localization, palettes, or modify chart/series properties programmatically prior to rendering. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iloadedeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/load/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/load/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/load" %}

### loaded
Triggered after the chart is fully loaded and initial rendering is complete. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iloadedeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/loaded/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/loaded/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/loaded" %}

### beforeResize
Triggered before a resize is performed; you can cancel the subsequent resize by setting `args.cancel = true`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/ibeforeresizeeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/beforeResize/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/beforeResize/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/beforeResize" %}

### resized
Triggered after the chart has been resized. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iresizeeventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/resized/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/resized/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/resized" %}

### beforePrint
Triggered before the chart is printed, providing access to the HTML content being printed via `args.htmlContent`. Use this to add watermarks, headers/footers, or to modify the cloned chart element before printing. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iprinteventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/beforePrint/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/beforePrint/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/beforePrint" %}

### beforeExport
Triggered before a chart export operation begins (such as exporting to PNG, JPEG, SVG, or PDF), allowing you to customize `fileName`, export type, page settings, theme, or cancel the export. Requires the `Export` module to be injected using `Chart.Inject`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart/iexporteventargs).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/beforeExport/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/beforeExport/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/beforeExport" %}

### afterExport
Triggered after a chart export operation completes. Use this event to perform post-export actions such as notifications, logging, or initiating downloads in custom flows. Requires the `Export` module to be injected using `Chart.Inject`. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/documentation/api/chart#afterexport).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/afterExport/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-events/afterExport/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-events/afterExport" %}

## Common event arguments

Most event argument objects share a common shape. The table below lists the properties you are most likely to use.

| Property | Type | Description |
| --- | --- | --- |
| `args.chart` | `Chart` | The chart instance that raised the event. |
| `args.series` | `Series` | The series associated with the event (point, render, and selection events). |
| `args.point` | `Points` | The data point associated with the event (point, text render, and tooltip events). |
| `args.pointIndex` | `number` | Index of the data point in its series. |
| `args.seriesIndex` | `number` | Index of the series in the series collection. |
| `args.cancel` | `boolean` | Set to `true` to cancel the default action of the event. |
| `args.x`, `args.y` | `number` | Mouse coordinates in the chart's local coordinate system (mouse events). |
| `args.target` | `HTMLElement` | The DOM element under the pointer (mouse events). |

For complete properties of a specific event, follow the API link in each section above.

## Troubleshooting

- **Event does not fire** — Make sure the relevant module is injected using `Chart.Inject` (for example, `Tooltip` for tooltip events, `Zoom` for zoom events, `Selection` for selection events, `DataEditing` for drag-to-edit events).
- **`args.cancel` has no effect** — Only events that explicitly mention cancellation in the API reference support `args.cancel`. For example, `beforeResize` supports cancellation, but `loaded` does not.
- **`tooltipRender` does not fire** — Tooltip events only fire when `tooltip.enable = true`. `sharedTooltipRender` additionally requires `tooltip.shared = true`.
- **`onZooming` / `zoomComplete` do not fire** — Configure `zoomSettings` and ensure `enableSelectionZooming`, `enableMouseWheelZooming`, or `enablePinchZooming` is set to `true`.
- **`selectionComplete` / `dragComplete` do not fire** — Set `selectionMode` to a value other than `None` (for example, `Point`, `Series`, `Cluster`, `DragXY`).
- **`dragStart` / `drag` / `dragEnd` do not fire** — The series must have `dragSettings.enable = true` and the `DataEditing` module must be injected using `Chart.Inject`.
- **`scrollChanged` / `scrollStart` / `scrollEnd` do not fire** — Enable the scrollbar on the axis (`scrollbarSettings.enable = true`) and inject the `ScrollBar` module using `Chart.Inject`.