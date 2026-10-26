---
layout: post
title: Blazor Charts Accessibility | Syncfusion®
description: Learn about WAI-ARIA support, accessible descriptions, keyboard interactions, and accessibility validation in Syncfusion Blazor Charts.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Charts Accessibility

Syncfusion Blazor Charts provide accessibility features that help users perceive and interact with chart content. The component exposes meaningful chart information through WAI-ARIA attributes, accessible descriptions, keyboard interactions, and visible focus indicators.

Application developers can configure chart and series descriptions, manage keyboard focus, and validate the generated accessibility information based on their application requirements.

## WAI-ARIA support

Blazor Charts use WAI-ARIA roles, states, and properties to expose chart content and interactive elements to assistive technologies. The following table describes representative accessibility information generated for chart elements.

| Chart element | Attribute | Usage |
|---|---|---|
| Chart root (`.e-chart`) | `role="img"` | Identifies the chart as a graphical object when `AccessibilityRole` is set to `img`. |
|  | `aria-label` | Exposes the description configured through `AccessibilityDescription`. |
|  | `tabindex="0"` | Makes the chart keyboard-focusable when `Focusable` is enabled. |
| Chart title and subtitle | `role="text"` | Identifies the chart title or subtitle as text. |
|  | `aria-label` | Exposes the configured title or subtitle. |
| Axis title | `role="text"` | Identifies the axis title as text. |
|  | `aria-label` | Exposes the configured axis title. |
| Series | `role="region"` | Identifies a series as a navigable chart region. |
|  | `aria-label` | Exposes the description configured through the series `AccessibilityDescription` property. |
| Data-point marker | `role="img"` | Identifies a rendered data point as a graphical object. |
|  | `aria-label` | Exposes point information generated from the series `AccessibilityDescriptionFormat`. |
| Legend item | `role="button"` | Identifies an interactive legend item. |
|  | `aria-label` | Exposes the action and associated series name. |
|  | `aria-pressed` | Indicates the visibility state of the associated series. |
| Zoom-toolbar item | `role="button"` | Identifies an interactive zoom-toolbar command. |
|  | `aria-label` | Exposes the toolbar description generated from `AccessibilityDescriptionFormat`. |
| Decorative element | `aria-hidden="true"` | Removes non-informative chart elements from the accessibility tree. |

N> The rendered attributes can vary based on the chart type, enabled features, and package version. Inspect the generated DOM and browser accessibility tree when validating an application.

## Customize accessible descriptions

Use `AccessibilityDescription` to provide a meaningful description of the chart. Use `AccessibilityRole` to specify how assistive technologies identify the chart, and enable `Focusable` when the chart must receive keyboard focus.

For individual series, use `AccessibilityDescription` to describe the series and `AccessibilityDescriptionFormat` to define the information exposed for each data point.

Refer to the [advanced accessibility configuration](./advanced-accessibility-configuration) page for additional configuration options.

## Keyboard interactions

Blazor Charts support keyboard navigation for supported chart elements, data points, series, legend items, zooming, and panning.

Users can move focus to the chart, navigate between supported chart elements, toggle legend items, select data points, and operate supported zoom and pan commands using the keyboard.

Refer to the [Blazor Charts accessibility compliance](./accessibility) page for the supported keyboard shortcuts.

## Accessibility validation

Validate the completed chart within the context of the application. Check the rendered roles and accessible names, keyboard focus order, focus visibility, color contrast, and screen-reader output.

Use browser accessibility tools to inspect the generated accessibility tree. Test keyboard interactions manually and use automated accessibility tools to identify common accessibility issues.

Custom templates, descriptions, colors, interactions, and surrounding page content can affect the accessibility of the final application.

N> Accessibility depends on the complete application. Configure meaningful descriptions and validate the rendered page instead of relying only on component defaults.

## Related accessibility resources

* [Blazor Charts accessibility compliance](./accessibility)
* [Advanced accessibility configuration](./advanced-accessibility-configuration)
* [WCAG accessibility techniques](./wcag-accessibility-techniques)
* [Data labels](./data-labels)
* [Series labels](./series-label)
* [Legend](./legend)
* [Zooming and panning](./zooming)
