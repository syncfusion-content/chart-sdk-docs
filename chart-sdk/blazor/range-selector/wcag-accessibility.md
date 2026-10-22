---
layout: post
title: Blazor Range Selector WCAG Accessibility Techniques | Syncfusion®
description: Learn how to improve the WCAG accessibility of Syncfusion Blazor Range Selector using dash patterns, text cues, sufficient contrast, and non-drag range controls.
platform: chart-sdk
control: Range Selector
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Range Selector WCAG Accessibility Techniques

Accessible range selectors should communicate the plotted data and current selection through more than visual appearance alone. Blazor Range Selector provides configuration options for distinguishing series, displaying range values, improving the contrast of graphical elements, and reducing dependence on dragging.

This page explains techniques for addressing the [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), and [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) accessibility requirements.

## Use of Color

The [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) criterion requires information to be distinguishable without relying on color alone. In Blazor Range Selector, combine color with dash patterns, labels, period text, and persistent text that describes the selected range.

### Differentiate line-based series using dash patterns

When multiple line-based series are displayed, assign a distinct [`DashArray`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html#Syncfusion_Blazor_Charts_RangeNavigatorSeries_DashArray) value to each series. Dash patterns provide a visual cue that helps users distinguish series without relying only on color.

The `DashArray` property applies to line-based series. Refer to the [Range Navigator series API](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html) for the available series properties.

### Display range values using labels

Use [`LabelFormat`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_LabelFormat) to present range values in a readable format. For a `DateTime` range, enable grouping when an additional label level helps users understand the time scale.

Refer to the [labels](./labels) page for label formatting, positioning, grouping, and spacing options.

### Provide the selected range as text

Display the selected start and end values as persistent text near the Range Selector. Persistent text keeps the current selection available without depending on color, the plotted shape, or a pointer tooltip.

A short text summary is especially useful when labels are hidden to save space or when users need to compare exact values.

N> Do not use color as the only method of conveying the selected range or distinguishing plotted series. Combine color with dash patterns, meaningful labels, period text, or a persistent range summary.

## Non-Text Contrast

The [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) criterion requires meaningful graphical objects and visual indicators to have a contrast ratio of at least 3:1 against adjacent colors.

In Blazor Range Selector, verify the contrast of the plotted series, selection handles, and selected and unselected regions against the colors directly adjacent to them.

### Apply sufficient contrast to the plotted series

Configure the [`Fill`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html#Syncfusion_Blazor_Charts_RangeNavigatorSeries_Fill) property of `RangeNavigatorSeries` to set the series color. Verify the series against the Range Selector background and the region colors rendered behind it.

The Range Selector does not use the Chart palette collection. Set an explicit series color when the default color does not provide sufficient contrast in the selected theme.

### Distinguish selected and unselected regions

Configure [`SelectedRegionColor`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorStyleSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorStyleSettings_SelectedRegionColor) and [`UnselectedRegionColor`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorStyleSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorStyleSettings_UnselectedRegionColor) so that the selected range remains distinguishable from the surrounding regions.

```cshtml
@using Syncfusion.Blazor.Charts

<div class="range-selector-wrapper">
    <SfRangeNavigator ID="wcagRange"
                      Value="@SelectedRange"
                      ValueType="RangeValueType.Double"
                      Height="300">

        <RangeNavigatorStyleSettings SelectedRegionColor="#005A9C"
                                     UnselectedRegionColor="#595959">

            <RangeNavigatorThumbSettings Type="ThumbType.Circle"
                                         Fill="#FFFFFF"
                                         Height="18"
                                         Width="18">
                <RangeNavigatorThumbBorder Color="#1A1A1A"
                                           Width="2">
                </RangeNavigatorThumbBorder>
            </RangeNavigatorThumbSettings>
        </RangeNavigatorStyleSettings>

        <RangeNavigatorLabelStyle Color="#1A1A1A"
                                  Size="13px"
                                  FontWeight="600">
        </RangeNavigatorLabelStyle>

        <RangeNavigatorSeriesCollection>
            <RangeNavigatorSeries DataSource="@RangeDataSource"
                                  XName="Period"
                                  YName="OnlineSales"
                                  Type="RangeNavigatorType.Line"
                                  Fill="#8A2D3C"
                                  Width="3">
            </RangeNavigatorSeries>

            <RangeNavigatorSeries DataSource="@RangeDataSource"
                                  XName="Period"
                                  YName="RetailSales"
                                  Type="RangeNavigatorType.Line"
                                  Fill="#276738"
                                  Width="3"
                                  DashArray="6,4">
            </RangeNavigatorSeries>

            <RangeNavigatorSeries DataSource="@RangeDataSource"
                                  XName="Period"
                                  YName="WholesaleSales"
                                  Type="RangeNavigatorType.Line"
                                  Fill="#5B3FA3"
                                  Width="3"
                                  DashArray="2,3">
            </RangeNavigatorSeries>
        </RangeNavigatorSeriesCollection>
    </SfRangeNavigator>
</div>

<style>
    .range-selector-wrapper {
        width: 100%;
        max-width: 900px;
        padding: 16px;
        background-color: #ffffff;
    }

    #wcagRange [id*="_SelectedArea"] {
        opacity: 0.22;
    }

    #wcagRange [id*="_leftUnSelectedArea"],
    #wcagRange [id*="_rightUnSelectedArea"] {
        opacity: 0.18;
    }
</style>

@code {
    private double[] SelectedRange { get; set; } =
        new double[] { 22, 62 };

    private List<RangeData> RangeDataSource { get; set; } =
        new List<RangeData>
        {
            new RangeData
            {
                Period = 12,
                OnlineSales = 28,
                RetailSales = 22,
                WholesaleSales = 18
            },
            new RangeData
            {
                Period = 22,
                OnlineSales = 36,
                RetailSales = 30,
                WholesaleSales = 24
            },
            new RangeData
            {
                Period = 32,
                OnlineSales = 44,
                RetailSales = 38,
                WholesaleSales = 31
            },
            new RangeData
            {
                Period = 42,
                OnlineSales = 48,
                RetailSales = 43,
                WholesaleSales = 37
            },
            new RangeData
            {
                Period = 52,
                OnlineSales = 55,
                RetailSales = 49,
                WholesaleSales = 44
            },
            new RangeData
            {
                Period = 62,
                OnlineSales = 66,
                RetailSales = 57,
                WholesaleSales = 50
            },
            new RangeData
            {
                Period = 72,
                OnlineSales = 72,
                RetailSales = 64,
                WholesaleSales = 58
            },
            new RangeData
            {
                Period = 82,
                OnlineSales = 78,
                RetailSales = 70,
                WholesaleSales = 65
            }
        };

    private class RangeData
    {
        public double Period { get; set; }

        public double OnlineSales { get; set; }

        public double RetailSales { get; set; }

        public double WholesaleSales { get; set; }
    }
}
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/rNLHCXLVCNRmrjXj?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Blazor Range Selector with contrasting regions and line patterns](images/wcag-accessibility-images/blazor-range-selector-non-text-contrast.webp)" %}


Revalidate contrast whenever the theme, background, series color, or region colors change.

### Maintain readable labels

Configure [`RangeNavigatorLabelStyle`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorLabelStyle.html) so that label text remains readable against the Range Selector background and region fills. Verify label text against the applicable WCAG text-contrast requirement.

Refer to the [style and appearance](./style-appearance) page for the available visual customization options.

### Verify contrast for each configuration

Contrast depends on the colors directly adjacent to each meaningful graphical object. Test the rendered Range Selector with its actual theme, background, series type, selected region, unselected regions, and selection handles.

N> Do not assume that a predefined or color-vision-friendly color set automatically satisfies the Non-text Contrast criterion. Test each meaningful graphical object against its adjacent colors and maintain a contrast ratio of at least 3:1 where the criterion applies.

## Dragging Movements

The [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) criterion requires functionality that uses dragging to also be available through a single-pointer operation that does not require dragging, unless dragging is essential.

Range selection normally allows users to drag the selection handles. Provide another way to choose the required range when dragging is not essential.

### Provide predefined periods

Use the [period selector](./period-selector) to provide click-based access to commonly used ranges, such as one month, six months, or one year. Predefined periods reduce the need for dragging when the available options cover the ranges users need to select.

```cshtml
@page "/counter"

@using Syncfusion.Blazor.Charts

<SfRangeNavigator Value="@SelectedDates"
                  ValueType="RangeValueType.DateTime"
                  LabelFormat="MMM-yy"
                  EnableGrouping="true"
                  GroupBy="RangeIntervalType.Years"
                  IntervalType="RangeIntervalType.Months"
                  Interval="3">
    <RangeNavigatorPeriodSelectorSettings Position="PeriodSelectorPosition.Top">
        <RangeNavigatorPeriods>
            <RangeNavigatorPeriod Interval="1"
                                  IntervalType="RangeIntervalType.Months"
                                  Text="1M">
            </RangeNavigatorPeriod>
            <RangeNavigatorPeriod Interval="6"
                                  IntervalType="RangeIntervalType.Months"
                                  Text="6M">
            </RangeNavigatorPeriod>
            <RangeNavigatorPeriod Interval="12"
                                  IntervalType="RangeIntervalType.Months"
                                  Text="1Y"
                                  Selected="true">
            </RangeNavigatorPeriod>
        </RangeNavigatorPeriods>
    </RangeNavigatorPeriodSelectorSettings>

    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@DateDataSource"
                              XName="Date"
                              YName="Value"
                              Type="RangeNavigatorType.Area"
                              Fill="#276738">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

@code {
    private DateTime[] SelectedDates { get; set; } =
        new DateTime[]
        {
            new DateTime(2025, 1, 1),
            new DateTime(2025, 12, 1)
        };

    private List<DateRangeData> DateDataSource { get; set; } =
        new List<DateRangeData>
        {
            new DateRangeData { Date = new DateTime(2024, 1, 1), Value = 28 },
            new DateRangeData { Date = new DateTime(2024, 6, 1), Value = 44 },
            new DateRangeData { Date = new DateTime(2025, 1, 1), Value = 48 },
            new DateRangeData { Date = new DateTime(2025, 6, 1), Value = 50 },
            new DateRangeData { Date = new DateTime(2025, 12, 1), Value = 66 },
            new DateRangeData { Date = new DateTime(2026, 6, 1), Value = 78 }
        };

    private class DateRangeData
    {
        public DateTime Date { get; set; }

        public double Value { get; set; }
    }
}
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hXBdstLLMhKujCFQ?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Blazor Range Selector with contrasting regions and line patterns](images/wcag-accessibility-images/blazor-range-selector-predefined-periods.webp)" %}

N> Predefined periods are not an equivalent alternative when users must select arbitrary start and end values.

### Bind the selected range to external controls

Use the [`Value`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_Value) property with `@bind-Value` to connect the selected range to external controls.

When arbitrary range selection is required, provide keyboard- and pointer-operable start and end inputs. Update the bound Range Selector value after users apply the values. Refer to the [range](./range) page for one-way and two-way value binding.

### Provide persistent range information

Display the current start and end values as text next to the Range Selector and update the text whenever the bound value changes. This keeps the selected range available to users who do not operate the drag handles and to assistive technologies that do not interpret the plotted area.

N> The selection handles still require dragging. When arbitrary range selection is essential, provide external controls that allow users to set the start and end values without dragging.

## See also

* [Range Selector accessibility compliance](./accessibility)
* [Range Selector style and appearance](./style-appearance)
* [Range Selector range](./range)
* [Range Selector period selector](./period-selector)
* [Range Selector labels](./labels)
* [Range Selector tooltip](./tool-tip)
