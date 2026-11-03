---
layout: post
title: Accessibility in TypeScript Charts | Syncfusion
description: Learn here all about Accessibility in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Accessibility in TypeScript Charts

The Chart component supports accessibility features based on [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22), and relevant [WAI-ARIA](https://www.w3.org/TR/wai-aria) specifications.

Accessibility support can vary based on the chart configuration, enabled modules, browser, operating system, screen reader, and component version. Supplement automated validation with keyboard and screen reader testing.

## Accessibility support

### Standards

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The control does not meet the requirement.</div>


## WAI-ARIA roles and attributes

The rendered chart uses WAI-ARIA roles and attributes to expose its structure and interactive elements to assistive technologies. The exact output depends on the enabled chart features.

| Role or attribute | Usage |
| --- | --- |
| `role="img"` | Identifies non-interactive chart graphics exposed as images. |
| `role="button"` | Identifies interactive chart elements, such as actionable legend items or controls. |
| `role="region"` | Identifies a chart area that users can navigate to as a distinct region. |
| `aria-label` | Provides an accessible name or description for the chart and its interactive elements. |
| `aria-hidden` | Hides decorative or duplicate content from assistive technologies. |
| `aria-pressed` | Communicates the current state of a toggleable interactive element. |

Use the component's accessibility-related configuration options to provide meaningful labels where available. Verify generated names, roles, states, and values by inspecting the rendered output and testing with a screen reader.

## Keyboard interaction

Keyboard commands work when focus is within the chart and the related feature is enabled. Browser or operating system shortcuts can override some key combinations.

### Move focus to and within the chart

| Press | Action | Context |
| --- | --- | --- |
| <kbd>Alt + J</kbd> | Moves focus to the chart element. | The chart is available on the page. |
| <kbd>Tab</kbd> | Moves focus to the next focusable chart element. | Focus is within the chart. |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable chart element. | Focus is within the chart. |

### Navigate data points and series

| Press | Action | Context |
| --- | --- | --- |
| <kbd>Down Arrow</kbd> | Moves focus to the previous data point. | A data point is focused. |
| <kbd>Up Arrow</kbd> | Moves focus to the next data point. | A data point is focused. |
| <kbd>Left Arrow</kbd> | Moves focus to the next series. | A data point or series is focused. |
| <kbd>Right Arrow</kbd> | Moves focus to the previous series. | A data point or series is focused. |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Selects the focused data point. | Selection is enabled and a data point is focused. |
| <kbd>Esc</kbd> | Closes the data point tooltip. | A tooltip is open. |

### Navigate legend items

| Press | Action | Context |
| --- | --- | --- |
| <kbd>Down Arrow</kbd> or <kbd>Left Arrow</kbd> | Moves focus to the legend item to the left of the selected item. | A legend item is focused. |
| <kbd>Up Arrow</kbd> or <kbd>Right Arrow</kbd> | Moves focus to the legend item to the right of the selected item. | A legend item is focused. |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Toggles the visibility of the corresponding series. | A legend item is focused. |

### Zoom, pan, and reset

| Press | Action | Context |
| --- | --- | --- |
| <kbd>Ctrl + Plus (+)</kbd> | Zooms in on the chart. | Zooming is enabled and focus is within the chart. |
| <kbd>Ctrl + Minus (-)</kbd> | Zooms out of the chart. | Zooming is enabled and focus is within the chart. |
| <kbd>Down Arrow</kbd> or <kbd>Up Arrow</kbd> | Pans the chart vertically. | Panning is enabled and active. |
| <kbd>Left Arrow</kbd> or <kbd>Right Arrow</kbd> | Pans the chart horizontally. | Panning is enabled and active. |
| <kbd>R</kbd> | Resets the zoomed chart. | The chart is zoomed and focus is within the chart. |
| <kbd>Ctrl + P</kbd> | Opens the browser print dialog for the chart or page. | Printing is supported; browser behavior can vary. |

> Some arrow keys have different actions depending on whether focus is on a data point, series, legend item, or the zoomed plot area.

## Ensuring accessibility

The Chart component is evaluated during automated testing with [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core). Automated tools help identify common accessibility issues, but they do not establish complete accessibility conformance. Also perform manual keyboard, focus, color contrast, zoom, and screen reader testing.

Open the [accessibility sample](https://ej2.syncfusion.com/accessibility/chart.html) in a new window to evaluate the Chart component with automated accessibility tools and supported assistive technologies.

{% previewsample "https://ej2.syncfusion.com/accessibility/chart.html" %}

### Troubleshooting

- **The chart does not receive focus:** Ensure the chart is rendered, visible, and not inside an inactive or hidden container. Then use <kbd>Tab</kbd> or <kbd>Alt + J</kbd> to move focus to it.
- **A keyboard command does not work:** Confirm that focus is within the chart and that the related feature or module is enabled.
- **Arrow keys perform an unexpected action:** Check which chart element currently has focus because data points, legends, and the zoomed plot area use arrow keys differently.
- **A shortcut triggers browser behavior:** Use an alternative supported interaction when the browser or operating system reserves the shortcut.
- **The screen reader announces an unclear label:** Inspect the rendered WAI-ARIA output and configure a meaningful accessible label where the component API supports it.
- **Automated testing reports no violations:** Complete manual keyboard, focus, zoom, contrast, and screen reader testing because automated tools cannot identify every accessibility issue.

## See also

- [Accessibility in Syncfusion ##Platform_Name## controls](../common/accessibility)
- [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA specification](https://www.w3.org/TR/wai-aria/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
