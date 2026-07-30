---
layout: post
title: Accessibility in TypeScript Dashboard Layout control | Syncfusion
description: Learn here all about Accessibility in Syncfusion TypeScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accessibility 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Accessibility in TypeScript Dashboard Layout control

The Dashboard Layout control follows accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Dashboard Layout control is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | Not applicable |
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

## WAI-ARIA attributes

The Dashboard Layout control follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg) patterns to meet the accessibility. The ARIA attributes applied by the control include:

| **Attributes** | **Purpose** |
| --- | --- |
| `role=list` | Indicates the role as a list for the Dashboard Layout element. |
| `role=listitem` | Indicates the role as a listitem for the Dashboard panels. |
| `role=presentation` | Indicates the role as a presentation for the table when the [`showGridLines`](../api/dashboard-layout#showgridlines) property is enabled. |
| `aria-grabbed` | When a panel is selected for dragging, the aria-grabbed attribute is set to "true". If it's set to "false", the element can be grabbed for drag-and-drop, but it won't be actively held. |

## Keyboard interaction

Keyboard support is not applicable for the Dashboard Layout.

## Ensuring accessibility

Accessibility validation for the Dashboard Layout control is performed using automated tools such as the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during testing.

The accessibility compliance of the Dashboard Layout control is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/dashboard-layout.html) in a new window to evaluate the accessibility of the Dashboard Layout control with accessibility tools.

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/dashboard-layout/accessibility-cs1" %}

## See also     

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls](../common/accessibility)
