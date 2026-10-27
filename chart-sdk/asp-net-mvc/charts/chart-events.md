---
layout: post
title: Chart events in ASP.NET MVC Charts | Syncfusion
description: Learn here all about Chart events in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart events 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Chart events in ASP.NET MVC Charts Component

Chart events are callback functions that the Syncfusion EJ2 Chart component triggers at different stages of its life cycle. They allow developers to respond to user interactions, customize rendering, control behavior, and extend chart functionality without modifying the core component. These events enable developers to implement custom logic, enhance interactivity, and tailor the chart's behavior to specific requirements, thereby providing a more dynamic and responsive user experience.

For a full list of supported ASP.NET MVC and Syncfusion package versions, see the [Getting Started](./getting-started) page. In the Razor views, every event is configured fluently on `Html.EJS().Chart(...)` (for example, `.PointClick("pointClick")`, `.TooltipRender("tooltipRender")`) and points to a JavaScript handler function defined in a `<script>` block on the same page.

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
| Zooming and Scrolling | `zooming` (exposed as `OnZooming`), `zoomComplete`, `scrollChanged`, `scrollStart`, `scrollEnd` |
| Selection and Drag | `dragComplete`, `selectionComplete` |
| Mouse Events | `chartMouseDown`, `chartMouseMove`, `chartMouseUp`, `chartMouseLeave`, `chartMouseClick`, `chartDoubleClick` |
| Life cycle and Layout | `load`, `loaded`, `beforeResize`, `resized`, `beforePrint`, `beforeExport`, `afterExport` |


## Animation

### animationComplete
Triggered after a series animation completes. Use this event to chain additional UI work, run custom transitions, or release a loading indicator. The series must have `animation.enable = true` for this event to fire. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AnimationComplete).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/animationComplete/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/animationComplete/animationComplete.cs %}
{% endhighlight %}
{% endtabs %}
  


## Labels and Axes

### axisLabelRender
Triggered before an axis label is rendered so you can customize its text and style. Set `args.cancel = true` to hide an individual label. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AxisLabelRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisLabelRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisLabelRender/axisLabelRender.cs %}
{% endhighlight %}
{% endtabs %}
  

### axisLabelClick
Triggered when an axis label is clicked. Use it to drill into a category, toggle an axis-level filter, or open a side panel for the clicked label. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AxisLabelClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisLabelClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisLabelClick/axisLabelClick.cs %}
{% endhighlight %}
{% endtabs %}
  

### axisRangeCalculated
Triggered after the axis range (minimum, maximum, and interval) is calculated, allowing you to override the values. For category axes, `minimum` and `maximum` apply to category index positions rather than labels. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AxisRangeCalculated).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisRangeCalculated/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisRangeCalculated/axisRangeCalculated.cs %}
{% endhighlight %}
{% endtabs %}
  

### axisMultiLabelRender
Triggered before multi-level axis labels are rendered so you can customize their text and style. Multi-level labels must be configured on the axis via the `MultiLevelLabels` property. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AxisMultiLabelRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisMultiLabelRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/axisMultiLabelRender/axisMultiLabelRender.cs %}
{% endhighlight %}
{% endtabs %}
  

### multiLevelLabelClick
Triggered when a multi-level axis label segment is clicked. Requires `MultiLevelLabels` to be configured on the axis. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_MultiLevelLabelClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/multiLevelLabelClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/multiLevelLabelClick/multiLevelLabelClick.cs %}
{% endhighlight %}
{% endtabs %}
  

## Series and Points

### seriesRender
Triggered before a series is rendered so you can customize its appearance and properties (for example, fill, opacity, border, width, or `columnWidth`). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SeriesRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/seriesRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/seriesRender/seriesRender.cs %}
{% endhighlight %}
{% endtabs %}
  

### pointClick
Triggered when a data point or its symbol is clicked. Use this event to perform actions such as highlighting, drilling down, or showing custom details for the selected point. Inspect `args.point`, `args.series`, `args.pointIndex`, and `args.seriesIndex` for details. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointClick/pointClick.cs %}
{% endhighlight %}
{% endtabs %}


### pointDoubleClick
Triggered when a data point or its symbol is double-clicked. Use this event for quick-edit workflows, navigation, or toggling detailed views for the target point. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointDoubleClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointDoubleClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointDoubleClick/pointDoubleClick.cs %}
{% endhighlight %}
{% endtabs %}


### pointMove
Triggered when the pointer moves over a data point. Use this event to show contextual UI, update external indicators, or track the hovered point dynamically. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointMove).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointMove/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointMove/pointMove.cs %}
{% endhighlight %}
{% endtabs %}


### pointRender
Triggered before an individual data point is rendered so you can customize its visual properties such as `fill`, `border`, `shape`, size, and corner radius. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/pointRender/pointRender.cs %}
{% endhighlight %}
{% endtabs %}


### textRender (Data Labels)
Triggered before a data label is rendered so you can customize label text, style, template, or position. You can also set `args.font` and `args.color` to format the label. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TextRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/textRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/textRender/textRender.cs %}
{% endhighlight %}
{% endtabs %}
  

## Data Editing (Drag)

### dragStart

Triggered when a data point drag operation begins on a series with dragging enabled (via `dragSettings`). Requires the series to have `DragSettings.Enable = true`. Use this event to validate the drag action, apply constraints, or cancel the drag before it proceeds. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_DragStart).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/dragStart/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/dragStart/dragStart.cs %}
{% endhighlight %}
{% endtabs %}
  

### drag

Triggered continuously while a data point is being dragged. Use this event to provide live feedback, enforce boundaries, or update the UI as the point’s position changes. Requires the series to have `DragSettings.Enable = true`. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Drag).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/drag/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/drag/drag.cs %}
{% endhighlight %}
{% endtabs %}
  

### dragEnd

Triggered when a data point drag operation completes (pointer released) and the new value is committed. Use this event to persist changes, refresh related UI, or perform post-edit actions. Requires the series to have `DragSettings.Enable = true`. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_DragEnd).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/dragEnd/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/dragEnd/dragEnd.cs %}
{% endhighlight %}
{% endtabs %}
  

## Tooltip

### tooltipRender
Triggered before a tooltip for a point in a single-series tooltip is shown so you can customize content and style. Requires `Tooltip.Enable = true`. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TooltipRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/tooltipRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/tooltipRender/tooltipRender.cs %}
{% endhighlight %}
{% endtabs %}
  

### sharedTooltipRender
Triggered before a shared tooltip is shown (aggregating multiple series at the same x-value) so you can customize the aggregated content. Requires `Tooltip.Enable = true` and `Tooltip.Shared = true`. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SharedTooltipRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/sharedTooltipRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/sharedTooltipRender/sharedTooltipRender.cs %}
{% endhighlight %}
{% endtabs %}
  

## Legend

### legendRender
Triggered before a legend item is rendered so you can customize the legend text, shape, and fill. The `shape` value must be a valid `LegendShape` enum value (for example, `Circle`, `Rectangle`, `Diamond`). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/legendRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/legendRender/legendRender.cs %}
{% endhighlight %}
{% endtabs %}
  

### legendClick
Triggered when a legend item is clicked. Use this event to filter, isolate, or highlight related data in response to the selection. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/legendClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/legendClick/legendClick.cs %}
{% endhighlight %}
{% endtabs %}
  

## Annotations

### annotationRender
Triggered before each chart annotation is rendered so you can customize or cancel it. Requires an `Annotations` configuration on the chart. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AnnotationRender).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/annotationRender/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/annotationRender/annotationRender.cs %}
{% endhighlight %}
{% endtabs %}
  

## Zooming and Scrolling

### onZooming
Triggered during zoom or pan interactions, providing per-axis zoom information that can be modified or canceled. Requires `ZoomSettings` to be configured on the chart (for example, `EnableSelectionZooming = true`). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_OnZooming).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/zooming/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/zooming/zooming.cs %}
{% endhighlight %}
{% endtabs %}
  

### zoomComplete
Triggered after a zoom or pan action completes for an axis. Requires `ZoomSettings` to be configured on the chart (for example, `EnableSelectionZooming = true`). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ZoomComplete).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/zoomComplete/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/zoomComplete/zoomComplete.cs %}
{% endhighlight %}
{% endtabs %}
  

### scrollChanged
Triggered during scrollbar interactions to indicate visible range or zoom changes. Requires `ScrollbarSettings.Enable = true` on the axis. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ScrollChanged).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/scrollChanged/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/scrollChanged/scrollChanged.cs %}
{% endhighlight %}
{% endtabs %}
  

### scrollStart
Triggered when a scrollbar interaction begins. Use this event to capture the previous range before the user changes the viewport, or to apply initial constraints when scrolling starts. Requires `ScrollbarSettings.Enable = true` on the axis. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ScrollStart).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/scrollStart/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/scrollStart/scrollStart.cs %}
{% endhighlight %}
{% endtabs %}


### scrollEnd
Triggered when a scrollbar interaction ends and the new viewport range is committed. Use this event to persist the visible range or to refresh related UI. Requires `ScrollbarSettings.Enable = true` on the axis. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ScrollEnd).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/scrollEnd/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/scrollEnd/scrollEnd.cs %}
{% endhighlight %}
{% endtabs %}


## Selection and Drag

### dragComplete
Triggered after a drag-selection area or zoom region is completed. Requires `SelectionMode` to be set to a drag-based value (for example, `DragXY`, `DragX`, or `DragY`). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_DragComplete).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/dragComplete/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/dragComplete/dragComplete.cs %}
{% endhighlight %}
{% endtabs %}
  

### selectionComplete
Triggered after a selection action (by click or drag) completes. Requires `SelectionMode` to be set to a value that enables selection (for example, `Point`, `Series`, `Cluster`, `DragXY`). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SelectionComplete).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/selectionComplete/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/selectionComplete/selectionComplete.cs %}
{% endhighlight %}
{% endtabs %}
  

## Mouse Events

### chartMouseDown
Triggered when a mouse down action occurs over the chart area. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ChartMouseDown).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseDown/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseDown/chartMouseDown.cs %}
{% endhighlight %}
{% endtabs %}
  

### chartMouseMove
Triggered when the mouse moves over the chart area. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ChartMouseMove).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseMove/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseMove/chartMouseMove.cs %}
{% endhighlight %}
{% endtabs %}
  

### chartMouseUp
Triggered when a mouse up action occurs over the chart area. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ChartMouseUp).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseUp/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseUp/chartMouseUp.cs %}
{% endhighlight %}
{% endtabs %}
  

### chartMouseLeave
Triggered when the mouse leaves the chart area. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ChartMouseLeave).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseLeave/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseLeave/chartMouseLeave.cs %}
{% endhighlight %}
{% endtabs %}
  

### chartMouseClick
Triggered when a mouse click occurs within the chart area (axes, series, legend, tooltip, etc.). To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ChartMouseClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartMouseClick/chartMouseClick.cs %}
{% endhighlight %}
{% endtabs %}
  

### chartDoubleClick
Triggered when a double-click occurs within the chart area. Use this event to reset zoom, toggle modes, or open detailed panels based on the double-click location. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ChartDoubleClick).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartDoubleClick/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/chartDoubleClick/chartDoubleClick.cs %}
{% endhighlight %}
{% endtabs %}


## Life cycle and Layout

### load
Triggered before the chart starts initial rendering. Use this event to set themes, localization, palettes, or modify chart/series properties programmatically prior to rendering. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Load).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/load/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/load/load.cs %}
{% endhighlight %}
{% endtabs %}


### loaded
Triggered after the chart is fully loaded and initial rendering is complete. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Loaded).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/loaded/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/loaded/loaded.cs %}
{% endhighlight %}
{% endtabs %}
  

### beforeResize
Triggered before a resize is performed; you can cancel the subsequent resize by setting `args.cancel = true`. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_BeforeResize).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/beforeResize/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/beforeResize/beforeResize.cs %}
{% endhighlight %}
{% endtabs %}
  

### resized
Triggered after the chart has been resized. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Resized).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/resized/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/resized/resized.cs %}
{% endhighlight %}
{% endtabs %}
  

### beforePrint
Triggered before the chart is printed, providing access to the HTML content being printed via `args.htmlContent`. Use this to add watermarks, headers/footers, or to modify the cloned chart element before printing. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_BeforePrint).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/beforePrint/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/beforePrint/beforePrint.cs %}
{% endhighlight %}
{% endtabs %}
  

### beforeExport
Triggered before a chart export operation begins (such as exporting to PNG, JPEG, SVG, or PDF), allowing you to customize `fileName`, export type, page settings, theme, or cancel the export. Requires the chart export functionality to be enabled. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_BeforeExport).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/beforeExport/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/beforeExport/beforeExport.cs %}
{% endhighlight %}
{% endtabs %}


### afterExport
Triggered after a chart export operation completes. Use this event to perform post-export actions such as notifications, logging, or initiating downloads in custom flows. Requires the chart export functionality to be enabled. To know more about the arguments of this event, refer [`here`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_AfterExport).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/afterExport/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/chart-events/afterExport/afterExport.cs %}
{% endhighlight %}
{% endtabs %}


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

- **Event does not fire** — Make sure the event attribute/Fluent method name in the view matches exactly the JavaScript handler function defined in the `<script>` block of the same page.
- **`args.cancel` has no effect** — Only events that explicitly mention cancellation in the API reference support `args.cancel`. For example, `beforeResize` supports cancellation, but `loaded` does not.
- **`tooltipRender` does not fire** — Tooltip events only fire when `tooltip.enable = true`. `sharedTooltipRender` additionally requires `tooltip.shared = true`.
- **`onZooming` / `zoomComplete` do not fire** — Configure `zoomSettings` and ensure `enableSelectionZooming`, `enableMouseWheelZooming`, or `enablePinchZooming` is set to `true`.
- **`selectionComplete` / `dragComplete` do not fire** — Set `selectionMode` to a value other than `None` (for example, `Point`, `Series`, `Cluster`, `DragXY`).
- **`dragStart` / `drag` / `dragEnd` do not fire** — The series must have `DragSettings.Enable = true`.
- **`scrollChanged` / `scrollStart` / `scrollEnd` do not fire** — Enable the scrollbar on the axis (`ScrollbarSettings.Enable = true`).