---
layout: post
title: Blazor 3D Circular Chart Accessibility and Localization Examples | Syncfusion®
description: Learn how to make the Syncfusion Blazor 3D Circular Chart accessible with WCAG 2.2 AA support, keyboard navigation, tactile patterns, and reduced motion, and how to enable RTL and number grouping.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
keywords: Blazor 3D Circular Chart, SfCircularChart3D, accessibility, WCAG 2.2, keyboard navigation, screen reader, RTL, EnableRtl, UseGroupingSeparator, localization, Syncfusion Blazor Charts
appliesto: UI Component Suite, Chart SDK
---

# Blazor 3D Circular Chart Accessibility and Localization

The `Blazor 3D Circular Chart` follows the [WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA guidelines and the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) roles so that the chart can be used with screen readers, the keyboard, and other assistive technologies. The chart also supports a right-to-left layout and culture-aware number formatting for localized applications.

N> **Default values:** `AccessibilityDescription` is empty, `TabIndex` of `CircularChart3DLegendSettings` is `0`, `SelectionPattern` and `HighlightPattern` are `SelectionPattern.None`, `EnableRtl` is `false`, and `UseGroupingSeparator` is `false`.

## Accessibility

### Accessibility compliance

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | AA |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

### WAI-ARIA attributes

The root SVG element of the chart has the `region` role, and its `aria-label` is taken from the `AccessibilityDescription` property, or from the `Title` when no description is given. Each slice has an `aria-label` that describes its category, value, and percentage, so that a screen reader announces each point meaningfully.

### Accessibility description

Set the `AccessibilityDescription` property of `SfCircularChart3D` to provide the text announced by screen readers for the chart. The `CircularChart3DLegendSettings` component has its own `AccessibilityDescription` property to describe the legend.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" AccessibilityDescription="3D circular chart showing the market share of mobile browsers">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true" AccessibilityDescription="Legend of mobile browsers. Select an item to show or hide the slice."></CircularChart3DLegendSettings>
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

### Keyboard navigation

Every slice of the chart is focusable and has `tabindex="0"`, so users can move through the slices by using the <kbd>Tab</kbd> key. The `TabIndex` property of `CircularChart3DLegendSettings` sets the tab order of the legend, which lets you control where the legend appears in the keyboard focus sequence of the page.

| Windows | Mac | Description |
|-----|-----|---|
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves the focus to the next focusable element in the chart. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves the focus to the previous focusable element in the chart. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the focused slice when `SelectionMode` is `Point`, or toggles the slice when a legend item is focused. |

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true" TabIndex="1"></CircularChart3DLegendSettings>
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

### Non-color distinction with tactile patterns

To meet the WCAG requirement that information is not conveyed by color alone, use the `SelectionPattern` and `HighlightPattern` properties. They apply patterns such as `Dots`, `DiagonalForward`, and `Crosshatch` to the selected and hovered slices. Refer to the [Selection and highlighting](./selection-and-highlighting) page for the complete list of patterns.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point" SelectionPattern="SelectionPattern.Dots" HighlightMode="SelectionMode.Point" HighlightPattern="SelectionPattern.Crosshatch">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
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

### Reduced motion

The chart honors the `prefers-reduced-motion` setting of the operating system. When the user has requested reduced motion, the chart skips the sweep animation and renders the slices immediately. No additional configuration is required.

## Localization and RTL

### Right-to-left

Set the `EnableRtl` property of `SfCircularChart3D` to `true` to render the title, subtitle, and legend from right to left. This is useful for languages such as Arabic and Hebrew.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" EnableRtl="true">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
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

### Number formatting

Set the `UseGroupingSeparator` property to `true` to display numeric text, such as data label and tooltip values, with the thousands group separator of the current culture of the application.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" UseGroupingSeparator="true">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
            <CircularChart3DDataLabelSettings Visible="true" Position="CircularChart3DLabelPosition.Outside"></CircularChart3DDataLabelSettings>
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DTooltipSettings Enable="true"></CircularChart3DTooltipSettings>
</SfCircularChart3D>

@code {
    public class Statistics
    {
        public string Browser { get; set; }
        public double Users { get; set; }
    }

    public List<Statistics> StatisticsDetails = new List<Statistics>
    {
        new Statistics { Browser = "Chrome", Users = 37000 },
        new Statistics { Browser = "UC Browser", Users = 17000 },
        new Statistics { Browser = "iPhone", Users = 19000 },
        new Statistics { Browser = "Others", Users = 4000 },
        new Statistics { Browser = "Opera", Users = 11000 },
        new Statistics { Browser = "Android", Users = 12000 },
    };
}

```

## See also

* [Selection and highlighting](./selection-and-highlighting)
* [Legend](./legend)
* [Tooltip](./tooltip)
* [Data label](./data-label)
* [Events](./events)
* [Getting started with Blazor Web App](./getting-started/blazor-web-app)
