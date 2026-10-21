---
layout: post
title: Blazor Charts WCAG Accessibility Techniques | Syncfusion®
description: Learn how to make Syncfusion Blazor Charts accessible by adding non-color visual cues such as dash styles, marker shapes, data labels, and annotations.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD036 -->

# Blazor Charts WCAG Accessibility Techniques

<!-- markdownlint-disable MD036 -->

Charts convey information through visual presentation alone, so a chart that relies only on color to separate series becomes unreadable for users with color vision deficiency, for anyone viewing a grayscale printout, and for screen reader users who cannot perceive color at all. The Blazor Chart lets you add redundant cues - line patterns, marker shapes, and text labels - so that every series remains distinguishable without color.

The following techniques help your Blazor Charts meet the [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) success criterion, which requires that color is not the only visual means of conveying information.

## Dash styles for line-based series

A dashed line reads differently from a solid line even when both are drawn in the same color, so varying the [DashArray](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartSeries.html#Syncfusion_Blazor_Charts_ChartSeries_DashArray) value of each line-based series is an effective way to tell them apart. Leave the property unset on one series so that it stays solid, then assign a distinct pattern such as `5,5` and `2,3` to the remaining series.

The same reasoning applies to the crosshair and to constant lines. The [DashArray](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCrosshairSettings.html#Syncfusion_Blazor_Charts_ChartCrosshairSettings_DashArray) property of [ChartCrosshairSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCrosshairSettings.html) controls the crosshair pattern, and a [ChartStripline](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartStripline.html) accepts a pattern as well, which distinguishes a threshold line from a data series that crosses it.

For an overview of the dash options, refer to the [Dash styles for line-based series](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartSeries.html#Syncfusion_Blazor_Charts_ChartSeries_DashArray) API reference.

## Marker shape, size, and image

Markers are the most direct non-color cue available in a chart, because a circle, a diamond, and a triangle remain identifiable in a grayscale printout. Set the [Shape](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Shape) property of [ChartMarker](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html) to give each series a different shape, and adjust the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Width) properties when points overlap and need more visual separation.

For area, line, and scatter series, you can also change the marker size, symbol, or image for an individual point rather than for a whole series, either by handling the [OnPointRender](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartEvents.html#Syncfusion_Blazor_Charts_ChartEvents_OnPointRender) event of [ChartEvents](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartEvents.html) or by declaring a [ChartMarker](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartMarker.html) in the series. To use an image instead of a shape, set the [Shape](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Shape) property to **Image** and specify the image location with the [ImageUrl](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_ImageUrl) property.

Refer to the [Blazor Charts Data markers](./data-markers) page for the complete list of supported marker shapes and their configuration.

## Data labels

A text label is the strongest non-color cue you can add, because it conveys the actual value rather than a visual category. Set the [Visible](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartDataLabel.html#Syncfusion_Blazor_Charts_ChartDataLabel_Visible) property of [ChartDataLabel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartDataLabel.html) to **true**, and use the [Format](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartDataLabel.html#Syncfusion_Blazor_Charts_ChartDataLabel_Format) property to render the argument and the value together, as in `${point.x}: ${point.y}`. Displaying both is recommended, since a value on its own does not identify which category it belongs to.

In a pie or doughnut chart, displaying the value alone leaves the reader unable to tell how a slice relates to the whole. Placing the label in the [Outside](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationLabelPosition.html#Syncfusion_Blazor_Charts_AccumulationLabelPosition_Outside) position draws a connector line back to its slice, which preserves that relationship visually. Customize the connector with [AccumulationChartConnector](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartConnector.html).

Refer to the [Blazor Charts Data labels](./data-labels) page for details on label positioning, formatting, and appearance.

## Annotations

An annotation places explanatory text directly on the chart plane, so a reader does not have to hold a legend or axis label in memory to interpret a point. Use [ChartAnnotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAnnotation.html) to call out an outlier, a threshold crossing, or a notable event, and to state the category or state it represents. The [ContentTemplate](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAnnotation.html#Syncfusion_Blazor_Charts_ChartAnnotation_ContentTemplate) property renders the annotation text, and the [X](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAnnotation.html#Syncfusion_Blazor_Charts_ChartAnnotation_X) and [Y](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAnnotation.html#Syncfusion_Blazor_Charts_ChartAnnotation_Y) properties position it relative to the data.

Refer to the [Blazor Charts Annotation](./chart-annotations) page for the supported annotation regions and content types.

## Titles and subtitles

Use the [Title](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_Title) and [SubTitle](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_SubTitle) properties of [SfChart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html) to state what the chart shows and the time frame or conditions it covers. A title such as "Average Response Time by Support Tier, Q3 2025" tells a reader what the chart is about before they examine any individual point, which no color choice can achieve.

Applying a descriptive title to both the chart and each axis gives the same benefit at every level of detail. The [Title](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAxis.html#Syncfusion_Blazor_Charts_ChartAxis_Title) property of [ChartPrimaryXAxis](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartPrimaryXAxis.html) and [ChartPrimaryYAxis](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartPrimaryYAxis.html) identifies what each dimension measures and in which unit.

## Legend

Add a [ChartLegendSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartLegendSettings.html) so that each series has a visible name that pairs with its dash style or marker shape. A legend item combines the series name with the series color and marker, which lets a reader confirm that the solid line with circular markers is the series named in the legend. Hiding the legend removes that pairing, so keep it visible whenever line styles or marker shapes carry meaning.

Set the [Visible](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartLegendSettings.html#Syncfusion_Blazor_Charts_ChartLegendSettings_Visible) property to **true** and use the [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartLegendSettings.html#Syncfusion_Blazor_Charts_ChartLegendSettings_Position) property to place the legend where it does not overlap the plotted series.

Refer to the [Blazor Charts Legend](./legend) page for the available legend layouts and customizations.

## Tooltip

A tooltip that reports the series name, the argument, and the value gives a screen reader user and a keyboard user the same detail that a sighted user gets from hovering over a point. Set the [Format](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartTooltipSettings.html#Syncfusion_Blazor_Charts_ChartTooltipSettings_Format) property of [ChartTooltipSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartTooltipSettings.html) to include all three, and set the [Shared](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartTooltipSettings.html#Syncfusion_Blazor_Charts_ChartTooltipSettings_Shared) property to **true** so that every series at an argument is reported at once.

Refer to the [Blazor Charts Tooltip](./tool-tip) page for the supported tooltip templates and formatting options.

## Provide the summary as text

Charts are the least reliable format for a reader who needs an exact figure. Presenting the main findings as ordinary text alongside the chart satisfies the [Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) criterion without depending on visual presentation at all. This is worth doing in particular when:

* Labels are dense enough to overlap, so the reader cannot tell which label belongs to which point.
* A pie or doughnut chart has many slices, making the boundaries between segments hard to follow.
* Area and bar series are used, because fill patterns are unavailable in Blazor Charts and the segments are distinguished by fill color alone.
* Values need to be compared precisely, since reading a difference off an axis is slower and less accurate than reading two numbers.

## See also

* [Blazor Charts Accessibility Compliance](./accessibility)
* [Data markers](./data-markers)
* [Data labels](./data-labels)
* [Chart annotations](./chart-annotations)
* [Legend](./legend)
* [Tool tip](./tool-tip)