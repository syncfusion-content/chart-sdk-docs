---
layout: post
title: Blazor 3D Circular Chart Accessibility | Syncfusion®
description: Learn about Syncfusion Blazor 3D Circular Chart accessibility compliance. Review WCAG 2.2, Section 508, screen reader, and keyboard navigation support.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
keywords: Blazor 3D Circular Chart accessibility, 3D Circular Chart WCAG, 3D Circular Chart keyboard navigation, 3D Circular Chart ARIA, 3D Circular Chart screen reader
appliesto: UI Component Suite, Chart SDK
---

# Blazor 3D Circular Chart Accessibility

The `Blazor 3D Circular Chart` component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Blazor 3D Circular Chart component is outlined below.

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

WAI-ARIA (Accessibility Initiative - Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with AJAX, HTML, JavaScript, and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web components.

| Element | Default description |
|---|---|
| Slice | Reads the category, value, and percentage of the focused slice. |
| Legend | Reads the category name and is activated to show or hide the corresponding slice. |
| Title | Reads the 3D Circular Chart title. |
| Subtitle | Reads the 3D Circular Chart subtitle. |
| Data Label | Reads the point value and custom text. |
| Tooltip | Reads the category, value, and percentage of the hovered or focused slice. |

The Blazor 3D Circular Chart component follows the WAI-ARIA pattern for interactive SVG graphics to meet accessibility requirements. The following ARIA attributes and roles are used in the Blazor 3D Circular Chart component:

* img (role)
* button (role)
* region (role)
* aria-label (attribute)
* aria-hidden (attribute)
* aria-pressed (attribute)
* aria-describedby (attribute)

In addition to standard ARIA attributes, the Blazor 3D Circular Chart component exposes the following accessibility-aware properties, which let you customize how the chart and legend are announced by assistive technologies:

* `AccessibilityDescription` on `<SfCircularChart3D>` - Provides an accessible description for the chart container, injected into the container's `aria-label` and SVG `<desc>` tag to enhance screen reader support.
* `AccessibilityDescription` on `<CircularChart3DLegendSettings>` - Provides an accessible description for the legend container announced by screen readers.
* `TabIndex` on `<CircularChart3DLegendSettings>` - Specifies the keyboard navigation tab index for the legend container.
* `SelectionPattern` and `HighlightPattern` - Applies tactile SVG fill patterns (`Dots`, `DiagonalForward`, `Crosshatch`, etc.) to selected and hovered slices to ensure non-color distinction.
* `EnableRtl` - Enables right-to-left layout for title, subtitle, and legend elements to support RTL reading directions.
* `UseGroupingSeparator` - Formats numeric values in data labels and tooltips with culture-aware thousand grouping separators.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" AccessibilityDescription="3D circular chart illustrating mobile browser market shares for fiscal year 2026.">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true" AccessibilityDescription="Interactive legend: select items to toggle corresponding 3D pie slices." />
</SfCircularChart3D>

@code {
    public class Statistics
    {
        public string Browser { get; set; }
        public double Users { get; set; }
    }

    public List<Statistics> StatisticsDetails = new List<Statistics>
    {
        new Statistics { Browser = "Chrome", Users = 37 },
        new Statistics { Browser = "UC Browser", Users = 17 },
        new Statistics { Browser = "iPhone", Users = 19 },
        new Statistics { Browser = "Others", Users = 4 },
        new Statistics { Browser = "Opera", Users = 11 },
        new Statistics { Browser = "Android", Users = 12 },
    };
}

```

![Blazor 3D Circular Chart - WAI-ARIA attributes](images/accessibility/blazor-3d-circular-chart-wai-aria-attributes.webp)

## Keyboard navigation

The Blazor 3D Circular Chart component follows keyboard interaction guidelines, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation.

Each slice polygon in the 3D Circular Chart is keyboard focusable (`tabindex="0"`) and exposes an `aria-label` describing its category, value, and percentage. Once focus is inside the 3D Circular Chart, the following keyboard shortcuts let users navigate between slices, operate the legend, and select slices without using a pointer.

| Windows | Mac | Description |
|-----|-----|-----|
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves focus to the next focusable element in the 3D Circular Chart, such as slices and legend items. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element in the 3D Circular Chart. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> (slice) | <kbd>Enter</kbd> / <kbd>Space</kbd> (slice) | Selects or toggles selection for the focused slice when `SelectionMode` is enabled. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> (legend) | <kbd>Enter</kbd> / <kbd>Space</kbd> (legend) | Toggles the visibility of the slice represented by the focused legend item when `ToggleVisibility` is enabled. |

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true" TabIndex="0" ToggleVisibility="true" />
</SfCircularChart3D>

@code {
    public class Statistics
    {
        public string Browser { get; set; }
        public double Users { get; set; }
    }

    public List<Statistics> StatisticsDetails = new List<Statistics>
    {
        new Statistics { Browser = "Chrome", Users = 37 },
        new Statistics { Browser = "UC Browser", Users = 17 },
        new Statistics { Browser = "iPhone", Users = 19 },
        new Statistics { Browser = "Others", Users = 4 },
        new Statistics { Browser = "Opera", Users = 11 },
        new Statistics { Browser = "Android", Users = 12 },
    };
}

```

![Blazor 3D Circular Chart - Keyboard navigation](images/accessibility/blazor-3d-circular-chart-keyboard-navigation.webp)

## Accessibility-aware behavior

Beyond ARIA attributes and keyboard navigation, the Blazor 3D Circular Chart component provides the following accessibility-aware behaviors so the visualization is usable in real-world scenarios:

* **WCAG 2.2 AA target** - The component targets the WCAG 2.2 AA criteria used to evaluate charts, including color contrast, non-color state indicators, and focus visibility.
* **Semantic roles** - The root SVG container carries `role="region"` and an accessible name matching `Title` or `AccessibilityDescription` so screen readers identify the chart landmark properly.
* **Keyboard-focusable slices** - Each 3D slice polygon is keyboard focusable with `tabindex="0"`, allowing keyboard users to systematically explore each slice in sequence.
* **Accessible slice names** - Every slice polygon exposes a descriptive `aria-label` containing its category name, numeric value, and percentage share.
* **Keyboard-accessible legend** - Legend items are focusable and can be toggled using <kbd>Enter</kbd> or <kbd>Space</kbd> with full angular re-flow of remaining active slices.
* **Reduced motion support** - Animations automatically honor the user's CSS `prefers-reduced-motion` media query by bypassing sweep transitions for users sensitive to motion.
* **Non-color state indicators** - Complies with WCAG non-color distinction guidelines via `SelectionPattern` and `HighlightPattern` (`Dots`, `DiagonalForward`, `Crosshatch`, etc.) so selected and hovered slices are distinguishable without relying on color perception alone.
* **Right-to-left layout** - Full RTL support via `EnableRtl="true"` mirrors titles, subtitles, and legend elements to respect right-to-left reading order.
* **Culture-aware formatting** - When `UseGroupingSeparator="true"`, large numeric values in data labels and tooltips are formatted with localized grouping separators.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics"
                    AccessibilityDescription="3D circular chart showing mobile browser distribution."
                    SelectionMode="SelectionMode.Point"
                    SelectionPattern="SelectionPattern.Dots"
                    HighlightMode="SelectionMode.Point"
                    HighlightPattern="SelectionPattern.Crosshatch">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true" TabIndex="0" />
</SfCircularChart3D>

@code {
    public class Statistics
    {
        public string Browser { get; set; }
        public double Users { get; set; }
    }

    public List<Statistics> StatisticsDetails = new List<Statistics>
    {
        new Statistics { Browser = "Chrome", Users = 37 },
        new Statistics { Browser = "UC Browser", Users = 17 },
        new Statistics { Browser = "iPhone", Users = 19 },
        new Statistics { Browser = "Others", Users = 4 },
        new Statistics { Browser = "Opera", Users = 11 },
        new Statistics { Browser = "Android", Users = 12 },
    };
}

```

![Blazor 3D Circular Chart - Accessibility-aware behavior](images/accessibility/blazor-3d-circular-chart-accessibility-aware-behavior.webp)

## Ensuring accessibility

The Blazor 3D Circular Chart component's accessibility levels are ensured through automated [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) checks combined with manual keyboard and screen reader testing. The automated accessibility gate verifies zero critical or serious WCAG accessibility violations, WCAG 2.2 AA target compliance, keyboard focusability (`tabindex="0"`), accessible ARIA labels, non-color tactile pattern distinction, reduced motion honoring, and high-contrast theme compatibility.


## See also

* [Selection and highlighting](./selection-and-highlighting)
* [Legend](./legend)
* [Tooltip](./tooltip)
* [Data label](./data-label)
* [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)
