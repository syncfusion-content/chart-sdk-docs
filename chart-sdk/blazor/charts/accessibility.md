---
layout: post
title: Blazor Charts Accessibility Compliance and Examples | Syncfusion®
description: Learn about Syncfusion Blazor Charts accessibility compliance. Review WCAG 2.2, Section 508, screen reader, and keyboard navigation support.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Charts Accessibility Compliance

The [Blazor Chart](https://www.syncfusion.com/blazor-components/blazor-charts) component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the  Blazor Chart component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | AA |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">  |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications) defines roles, states, and properties that improve the accessibility of dynamic web content and user interface components. These semantics help assistive technologies understand the purpose, state, and behavior of chart elements.

The Blazor Chart component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Blazor Chart component:

| Chart element | Attribute | Usage |
|---|---|---|
| Chart root (`.e-chart`) | `role="img"` | Identifies the chart as a graphical object when `AccessibilityRole` is set to `img`. |
|  | `aria-label` | Exposes the description configured through `AccessibilityDescription`. |
|  | `aria-roledescription="Chart"` | Provides a human-readable description of the chart role. |
|  | `tabindex="0"` | Makes the chart keyboard-focusable when `Focusable` is enabled. |
| Chart title and subtitle | `role="text"` | Identifies the chart title or subtitle as text. |
|  | `aria-label` | Exposes the configured title or subtitle. |
| Axis title | `role="text"` | Identifies the axis title as text. |
|  | `aria-label` | Exposes the configured axis title. |
| Series | `role="region"` | Identifies a series as a navigable chart region. |
|  | `aria-label` | Exposes the description configured through the series `AccessibilityDescription` property. |
| Marker-based data point | `role="img"` | Identifies a rendered marker-based data point as a graphical object. |
|  | `aria-label` | Exposes point information generated from the series `AccessibilityDescriptionFormat`. |
| Legend item | `role="button"` | Identifies an interactive legend item. |
|  | `aria-label` | Exposes the action and associated series name. |
|  | `aria-pressed` | Indicates the visibility state of the associated series. |
| Zoom-toolbar item | `role="button"` | Identifies an interactive zoom-toolbar command. |
|  | `aria-label` | Exposes the toolbar description generated from `AccessibilityDescriptionFormat`. |
| Non-informative chart element | `aria-hidden="true"` | Removes non-informative chart elements from the accessibility tree. |

N> The rendered roles and attributes can vary based on the chart type, enabled features, accessibility configuration, and package version. Inspect the generated DOM and browser accessibility tree when validating an application.

## Keyboard navigation

The Blazor Chart component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Blazor Chart component.

| Windows | Mac | Description |
|-----|-----|---|
|<kbd>Alt + J</kbd> | <kbd>⌥</kbd> + <kbd>J</kbd> | Moves the focus to the Blazor Chart element.|
|<kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves the focus to the next element in the Blazor Chart.|
|<kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves the focus to the previous element in the Blazor Chart.|
| <kbd>↓</kbd> | <kbd>↓</kbd> | Moves the focus to the data point right side from the selected point.|
| <kbd>↑</kbd> | <kbd>↑</kbd> | Moves the focus to the data point right side from the selected point.|
| <kbd>←</kbd> | <kbd>←</kbd> | Moves the focus to the next series in the Blazor Chart.|
| <kbd>→</kbd> | <kbd>→</kbd> | Moves the focus to the previous series in the Blazor Chart.|
|<kbd>Enter</kbd> / <kbd>Space</kbd> | <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the data point in the series|
| <kbd>↓</kbd> , <kbd>←</kbd> | <kbd>↓</kbd> / <kbd>←</kbd> | Moves the focus to the legend left side from the selected legend.|
| <kbd>↑</kbd> , <kbd>→</kbd> | <kbd>↑</kbd> / <kbd>→</kbd> | Moves the focus to the legend right side from the selected legend.|
| <kbd>Enter</kbd> / <kbd>Space</kbd> | <kbd>Enter</kbd> / <kbd>Space</kbd> |Toggles the visibility of the corresponding series.|
| <kbd>Ctrl</kbd> + <kbd>+</kbd> | <kbd>⌘</kbd> + <kbd>+</kbd> | Zoom in the Blazor Chart.|
| <kbd>Ctrl</kbd> + <kbd>-</kbd> | <kbd>⌘</kbd> + <kbd>-</kbd> | Zoom out the Blazor Chart.|
| <kbd>↓</kbd> / <kbd>↑</kbd> | <kbd>↓</kbd> / <kbd>↑</kbd> | Pans the Blazor Chart vertically.|
| <kbd>←</kbd> / <kbd>→</kbd> | <kbd>←</kbd> / <kbd>→</kbd> | Pans the Blazor Chart horizontally.|
|<kbd>R</kbd> | <kbd>R</kbd> | Reset the zoomed Blazor Chart.|
|<kbd>Ctrl + P</kbd> | <kbd>⌘</kbd> + <kbd>P</kbd> | Prints the Blazor Chart.|

## Ensuring accessibility

The Blazor Chart component's accessibility levels are ensured through an [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) with playwright tests.

The accessibility compliance of the Blazor Chart component is shown in the following sample. Open the [sample](https://blazor.syncfusion.com/accessibility/chart) in a new window to evaluate the accessibility of the Blazor Chart component with accessibility tools.

## See also

* [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)

* [Accessibility Customization in Blazor components](./advanced-accessibility-configuration)

