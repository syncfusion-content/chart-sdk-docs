---
layout: post
title: Accessibility in Blazor Charts | Syncfusion®
description: Learn how to configure Blazor Charts to align with WCAG accessibility criteria such as Use of Color, Non-text Contrast, and Dragging Movements.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Accessibility in Blazor Charts

The Blazor Charts component allows you to configure visual cues and interaction options to improve chart accessibility. These settings help users perceive, understand, and navigate chart content.

This topic lists techniques that help your charts align with WCAG criteria for **Use of Color**, **Non-text Contrast**, and **Dragging Movements**.

## Use of Color

The **Use of Color** criterion requires visual cues other than color, such as shapes or text, to convey meaning. Charts rely on visual presentation to convey information, so configure your chart to meet this criterion using the following techniques:

* Apply a different dash style to each line-based series, crosshair, and constant line.
* Customize point size, symbol, and image in area-, line-, and scatter-based series. You can declare a `ChartSeriesMarker` within a series or handle the `OnPointRender` event to apply customizations.
* Configure series labels to display arguments/categories and values. We recommend that you display both, as this meets the **Non-text Contrast** criterion. If you display only values, add a label connector to help users understand slice proportions.
* Use annotations (`ChartAnnotation`) to mark outliers, thresholds, events, or other important data directly on the chart plane. An annotation that explains meaningful categories or states supplies a visible text cue independent of color.
* Use chart titles and subtitles to explain chart-wide information.
* **Supplemental.** Add a legend to help users locate the series on a plane by its legend item and name using hover.
* **Supplemental.** Display a tooltip that contains information about series name, arguments, and values.
* **Supplemental.** Consider adding the main takeaways as text, as this satisfies the **Non-text Content** criterion without relying on visual presentation. This technique is useful in the following cases:
  * Dense charts with overlapping labels.
  * Pie Charts with many sectors.
  * Area and bar series (since fill patterns are unavailable in Blazor Charts).
  * Data that users might want to compare precisely.