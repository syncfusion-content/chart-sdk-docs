---
layout: post
title: Blazor Charts Accessibility Best Practices and Examples | Syncfusion®
description: Learn accessibility best practices for Syncfusion Blazor Charts. Configure shapes, labels, annotations, and high-contrast palettes to align with WCAG criteria.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Charts Accessibility Best Practices

The [Blazor Charts](https://www.syncfusion.com/blazor-components/blazor-charts) component lets you add visual cues and configure interaction options that help users perceive, understand, and navigate chart content. Because charts convey information visually, configuring these options is important for users who rely on non-color cues, assistive technologies, or keyboard navigation.

This topic describes techniques that help Blazor Charts align with the following [WCAG](https://www.w3.org/TR/WCAG22/) criteria:

* **Use of Color**
* **Non-text Contrast**
* **Dragging Movements**

## Use of Color

The **Use of Color** criterion requires visual cues other than color, such as shapes or text, to convey meaning. Charts rely on visual presentation to convey information, so configure your chart to meet this criterion using the following techniques:

* Apply a different dash style to each line-based series, crosshair, and constant line.
* Customize point size, symbol, and image in area-, line-, and scatter-based series. You can declare a [ChartMarker](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartMarker.html) within a series or handle the [OnPointRender](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartEvents.html#Syncfusion_Blazor_Charts_ChartEvents_OnPointRender) event to apply customizations.
* Configure series labels to display arguments/categories and values. We recommend that you display both, as this meets the **Non-text Contrast** criterion. If you display only values, add a label connector to help users understand slice proportions.
* Use annotations ([ChartAnnotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAnnotation.html)) to mark outliers, thresholds, events, or other important data directly on the chart plane. An annotation that explains meaningful categories or states supplies a visible text cue independent of color.
* Use chart titles and subtitles to explain chart-wide information.
* **Supplemental.** Add a legend to help users locate the series on a plane by its legend item and name using hover.
* **Supplemental.** Display a tooltip that contains information about series name, arguments, and values.
* **Supplemental.** Consider adding the main takeaways as text, as this satisfies the **Non-text Content** criterion without relying on visual presentation. This technique is useful in the following cases:
  * Dense charts with overlapping labels.
  * Pie Charts with many sectors.
  * Area and bar series (since fill patterns are unavailable in Blazor Charts).
  * Data that users might want to compare precisely.