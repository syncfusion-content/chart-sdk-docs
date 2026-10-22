---
layout: post
title: Blazor Sankey Diagram Accessibility | Syncfusion®
description: Learn how the Blazor Sankey Diagram supports WCAG 2.2, Section 508, screen readers, RTL, color contrast, and full keyboard navigation.
platform: chart-sdk
control: Sankey
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Sankey Diagram Accessibility

The Blazor Sankey component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Blazor Sankey component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
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

The Blazor Sankey Diagram uses WAI-ARIA roles and attributes to expose the diagram, nodes, links, and legend items to assistive technologies.

| Sankey element | Attribute | Usage |
|---|---|---|
| Sankey root (`.e-sankeychart`) | `role="graphics-document"` | Identifies the Sankey Diagram as a graphical document. |
|  | `aria-label` | Exposes the description configured through `AccessibilityDescription`. When the description is unavailable, the Sankey title or a default description is used. |
|  | `aria-roledescription="Sankey diagram"` | Provides a human-readable description of the Sankey Diagram role. |
|  | `tabindex="0"` | Makes the Sankey Diagram keyboard-focusable. |
| Node | `role="graphics-symbol"` | Identifies a Sankey node as a graphical symbol. |
|  | `aria-label` | Exposes the node name and its associated value. |
|  | `aria-roledescription="Node"` | Provides a human-readable description of the node role. |
|  | `aria-hidden` | Indicates whether the node is exposed to assistive technologies. |
|  | `tabindex` | Supports keyboard navigation between Sankey nodes using a roving tab index. |
| Link | `role="graphics-symbol"` | Identifies a Sankey link as a graphical symbol. |
|  | `aria-label` | Exposes the source node, target node, and their associated values. |
|  | `aria-roledescription="Link"` | Provides a human-readable description of the link role. |
|  | `aria-hidden` | Indicates whether the link is exposed to assistive technologies. |
|  | `tabindex` | Supports keyboard navigation between Sankey links using a roving tab index. |
| Legend item | `role="button"` | Identifies an interactive Sankey legend item. |
|  | `aria-label` | Exposes the legend action and associated node name, such as `Highlight Solar`. |
|  | `aria-roledescription="Legend item"` | Provides a human-readable description of the legend item role. |
|  | `tabindex` | Supports keyboard navigation between legend items using a roving tab index. |
| Decorative or duplicated visual element | `aria-hidden="true"` | Removes non-informative or duplicated visual content from the accessibility tree. |

N> The rendered roles and attributes can vary based on the enabled Sankey features, accessibility configuration, and package version. Inspect the generated DOM and browser accessibility tree when validating an application.

## Keyboard navigation

The Blazor Sankey component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Blazor Sankey component.

| Windows | Mac | Description |
|-----|-----|---|
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves focus to the next focusable element in the Sankey. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | Moves focus to the data point below the selected node. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | Moves focus to the data point above the selected node. |
| <kbd>←</kbd> | <kbd>←</kbd> | Moves focus to the data point to the left of the selected node. |
| <kbd>→</kbd> | <kbd>→</kbd> | Moves focus to the data point to the right of the selected node. |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>P</kbd> | Prints the Sankey. |


## Ensuring accessibility

The Blazor Sankey component's accessibility levels are ensured through an [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) with playwright tests.

The accessibility compliance of the Blazor Sankey component is shown in the following sample. Open the sample in a new window to evaluate the accessibility of the Blazor Sankey component with accessibility tools.

## See also

* [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)

* [Accessibility Customization in Blazor components](./advanced-accessibility-configuration)