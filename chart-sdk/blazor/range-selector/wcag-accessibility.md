---
layout: post
title: WCAG Accessibility in Blazor Range Selector | Syncfusion®
description: Learn how to make Syncfusion Blazor Range Selector accessible using dash patterns, high-contrast regions, label styles, and a bound range.
platform: chart-sdk
control: Range Selector
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# WCAG Accessibility in Blazor Range Selector

Accessible charts should communicate information through more than visual appearance alone. The Blazor Range Selector provides configuration options for distinguishing the plotted series, differentiating the selected range from the unselected regions, and applying the range without a pointer drag.

This page explains techniques for addressing the [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), and [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) accessibility requirements.

## Use of Color

The [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) criterion requires information to be distinguishable without relying on color alone. In the Blazor Range Selector, combine color with visual cues such as dash patterns, axis label text, and period text.

### Differentiate line-based series using dash patterns

When multiple line-based series are displayed, assign a distinct [DashArray](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html#Syncfusion_Blazor_Charts_RangeNavigatorSeries_DashArray) value to each series. Dash patterns provide an additional cue that helps users distinguish series without relying only on color.

The [DashArray](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html#Syncfusion_Blazor_Charts_RangeNavigatorSeries_DashArray) property applies to [Line](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorType.html#Syncfusion_Blazor_Charts_RangeNavigatorType_Line) type series. Dash patterns can also help separate a line series visually from the gridlines and the axis baseline.

```cshtml

@using Syncfusion.Blazor.Charts

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.Double">
    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Line" DashArray="5,3" Fill="#005A9C" Width="2">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

@code{
    public class StockDetails
    {
        public double Date { get; set; }
        public double Close { get; set; }
    }

    public object Value = new double[] { 20, 60 };

    public List<StockDetails> StockInfo = new List<StockDetails>
    {
        new StockDetails { Date = 12, Close = 28 },
        new StockDetails { Date = 34, Close = 44 },
        new StockDetails { Date = 45, Close = 48 },
        new StockDetails { Date = 56, Close = 50 },
        new StockDetails { Date = 67, Close = 66 },
        new StockDetails { Date = 78, Close = 78 }
    };
}

```

N> The DashArray property has no effect on [Area](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorType.html#Syncfusion_Blazor_Charts_RangeNavigatorType_Area) and [StepLine](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorType.html#Syncfusion_Blazor_Charts_RangeNavigatorType_StepLine) series. For an area series, rely on the region contrast described in the Non-text Contrast section.

### Provide readable axis labels

Axis labels state the range values directly, so they remain readable when the plotted color cannot be perceived. Set [LabelFormat](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_LabelFormat) to display the values in a readable format, and use [LabelPosition](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_LabelPosition) to place the labels inside the Range Selector when they would otherwise fall outside the visible area.

Enable multi-level labels for a [DateTime](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeValueType.html) range by setting the [EnableGrouping](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_EnableGrouping) property to **true**, and group them with [GroupBy](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_GroupBy).

Refer to the [labels](./labels) page for the complete configuration options.

### Show the selected values as persistent text

The axis labels describe the range boundaries, but they do not state the values plotted inside the selected range. Render the selected values as text next to the Range Selector so that the selection is communicated without depending on the plotted shape or on a pointer hover.

```cshtml

@using Syncfusion.Blazor.Charts

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.Double"
                  LabelFormat="0" Interval="1">
    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Area" Fill="#276738">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

<p role="status">Selected units: @SelectedSummary</p>

@code{
    public class StockDetails
    {
        public double Date { get; set; }
        public double Close { get; set; }
    }

    public object Value = new double[] { 20, 60 };

    public List<StockDetails> StockInfo = new List<StockDetails>
    {
        new StockDetails { Date = 12, Close = 28 },
        new StockDetails { Date = 34, Close = 44 },
        new StockDetails { Date = 45, Close = 48 },
        new StockDetails { Date = 56, Close = 50 },
        new StockDetails { Date = 67, Close = 66 },
        new StockDetails { Date = 78, Close = 78 }
    };

    public string SelectedSummary => string.Join(", ",
        StockInfo.Where(item => item.Date >= 20 && item.Date <= 60)
                 .Select(item => $"{item.Date}: {item.Close}"));

}

```

### Provide a text summary

Include a short text summary near the Range Selector that states the selected range and the values it covers. This is useful when the plotted area is small, when the axis labels are suppressed to save space, or when users need to compare exact values rather than estimate them from the plotted shape.

## Non-Text Contrast

The [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) criterion requires meaningful graphical objects and visual indicators to have a contrast ratio of at least 3:1 against adjacent colors.

In the Blazor Range Selector, the meaningful graphical objects are the plotted series, the selected range region, the unselected regions, and the selection handles. Verify that each remains distinguishable from the colors directly adjacent to it.

### Apply sufficient contrast to the series

Configure the [Fill](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html#Syncfusion_Blazor_Charts_RangeNavigatorSeries_Fill) property of [RangeNavigatorSeries](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorSeries.html) to set the series color, and verify that it has a contrast ratio of at least 3:1 against the Range Selector background and against the region fills that sit behind it.

The Range Selector does not expose a palette collection. When the default series color does not meet the required contrast against the surrounding regions, set an explicit color.

### Distinguish the selected and unselected regions

Because the selected and unselected regions are adjacent, their fills must be distinguishable from each other. Configure [SelectedRegionColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorStyleSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorStyleSettings_SelectedRegionColor) and [UnselectedRegionColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorStyleSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorStyleSettings_UnselectedRegionColor) so that the selected range is identifiable without depending on the series color.

The selected region color `#005A9C` provides more than 3:1 contrast against both `#D6D6D6` and the white background. However, `#D6D6D6` does not provide 3:1 contrast against white. Verify whether the unselected-region boundary is required to understand the control, and choose a darker unselected-region color when that boundary must meet the Non-text Contrast criterion.

```cshtml

@using Syncfusion.Blazor.Charts

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.Double" Background="#FFFFFF">
    <RangeNavigatorStyleSettings SelectedRegionColor="#005A9C"
                                 UnselectedRegionColor="#595959">
    </RangeNavigatorStyleSettings>

    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Line" Fill="#8A2D3C" Width="2">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

```

Revalidate the contrast whenever the theme, background, or region colors change.

### Maintain readable axis labels

Configure [RangeNavigatorLabelStyle](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorLabelStyle.html) so that the label text remains readable against the Range Selector background and the region fills. Verify the label colors against the applicable WCAG text-contrast requirement.

```cshtml

@using Syncfusion.Blazor.Charts

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.Double"
                  LabelPosition="AxisPosition.Inside">
    <RangeNavigatorLabelStyle Color="#1A1A1A" Size="14px" FontWeight="600">
    </RangeNavigatorLabelStyle>

    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Area" Fill="#276738">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

```

### Verify contrast for each configuration

Contrast depends on the colors that are directly adjacent to each meaningful graphical object, so verify the rendered Range Selector against its actual background, theme, and the region colors that sit behind the plotted series.

N> Do not assume that a predefined or color-vision-friendly palette automatically satisfies the Non-text Contrast criterion. Test each meaningful graphical object against its adjacent colors and maintain a contrast ratio of at least 3:1.

N> The Range Navigator applies its colors through SVG presentation attributes. Overriding the region or label colors through custom CSS may require `!important`. Refer to the [style and appearance](./style-appearance) page for the CSS selectors.

## Dragging Movements

The [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) criterion requires functionality that uses dragging to also be available through a single-pointer operation that does not require dragging.

Selecting a range in the Blazor Range Selector requires users to drag the selection handles across the plotted area.

### Enlarge the selection handles

The selection handles are the primary drag target, so they must be large enough to see and to acquire. Configure the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorThumbSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorThumbSettings_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorThumbSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorThumbSettings_Width) properties of [RangeNavigatorThumbSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorThumbSettings.html), and select the [Rectangle](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ThumbType.html#Syncfusion_Blazor_Charts_ThumbType_Rectangle) type to present a larger target than the default circle.

Set the [Fill](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorThumbSettings.html#Syncfusion_Blazor_Charts_RangeNavigatorThumbSettings_Fill) property so that the handles contrast with both the selected region and the unselected regions.

```cshtml

@using Syncfusion.Blazor.Charts

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.Double">
    <RangeNavigatorStyleSettings>
        <RangeNavigatorThumbSettings Type="ThumbType.Rectangle" Height="22" Width="16" Fill="#FFFFFF">
            <RangeNavigatorThumbBorder Width="2" Color="#1A1A1A"></RangeNavigatorThumbBorder>
        </RangeNavigatorThumbSettings>
    </RangeNavigatorStyleSettings>

    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Area" Fill="#276738">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

```

### Provide predefined periods

The period selector provides click-based access to predefined ranges such as one month, six months, or one year. It can reduce the need for dragging when the available preset periods cover the ranges users need to select.

Define the periods using the [Interval](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorPeriod.html#Syncfusion_Blazor_Charts_RangeNavigatorPeriod_Interval), [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorPeriod.html#Syncfusion_Blazor_Charts_RangeNavigatorPeriod_Text), and [IntervalType](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorPeriod.html#Syncfusion_Blazor_Charts_RangeNavigatorPeriod_IntervalType) properties of [RangeNavigatorPeriod](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorPeriod.html), and set [Selected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.RangeNavigatorPeriod.html#Syncfusion_Blazor_Charts_RangeNavigatorPeriod_Selected) to **true** to apply a period initially.

```cshtml

@using Syncfusion.Blazor.Charts

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.DateTime"
                  LabelFormat="MMM-yy" IntervalType="RangeIntervalType.Months" Interval="1">
    <RangeNavigatorPeriodSelectorSettings Position="PeriodSelectorPosition.Top">
        <RangeNavigatorPeriods>
            <RangeNavigatorPeriod Interval="1" IntervalType="RangeIntervalType.Months" Text="1M"></RangeNavigatorPeriod>
            <RangeNavigatorPeriod Interval="6" IntervalType="RangeIntervalType.Months" Text="6M"></RangeNavigatorPeriod>
            <RangeNavigatorPeriod Interval="12" IntervalType="RangeIntervalType.Months" Text="1Y" Selected="true"></RangeNavigatorPeriod>
        </RangeNavigatorPeriods>
    </RangeNavigatorPeriodSelectorSettings>

    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Area" Fill="#276738">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

```

N> Predefined periods are not an equivalent alternative when users must select arbitrary start and end values.

### Bind the selected range to external controls

Bind the [Value](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfRangeNavigator.html#Syncfusion_Blazor_Charts_SfRangeNavigator_Value) property with `@bind-Value` so that the selected range can also be set from external controls. The Range Navigator does not provide date input controls of its own, so pair it with a [DatePicker](https://ej2.syncfusion.com/blazor/documentation/datepicker/getting-started) or an equivalent control to give users a pointer- and keyboard-operable alternative to dragging the handles.

```cshtml

@using Syncfusion.Blazor.Charts
@using Syncfusion.Blazor.Calendars
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.Buttons

<div class="e-flex">
    <label for="rangeStart">Start date</label>
    <SfDatePicker TValue="SelectedRange[0]" @bind-Value="SelectedRange[0]" TValue="DateTime" Placeholder="Start date">
    </SfDatePicker>

    <label for="rangeEnd">End date</label>
    <SfDatePicker TValue="SelectedRange[1]" @bind-Value="SelectedRange[1]" TValue="DateTime" Placeholder="End date">
    </SfDatePicker>

    <SfButton OnClick="ApplyRange">Apply range</SfButton>
</div>

<SfRangeNavigator @bind-Value="@Value" ValueType="RangeValueType.DateTime" LabelFormat="MMM-yy">
    <RangeNavigatorSeriesCollection>
        <RangeNavigatorSeries DataSource="@StockInfo" XName="Date" YName="Close"
                              Type="RangeNavigatorType.Area" Fill="#276738">
        </RangeNavigatorSeries>
    </RangeNavigatorSeriesCollection>
</SfRangeNavigator>

<p role="status">Range: @RangeText</p>

@code{
    public class StockDetails
    {
        public DateTime Date { get; set; }
        public double Close { get; set; }
    }

    public DateTime[] SelectedRange = new DateTime[] { new DateTime(2009, 01, 01), new DateTime(2010, 01, 01) };

    public object Value { get; set; }

    public List<StockDetails> StockInfo = new List<StockDetails>
    {
        new StockDetails { Date = new DateTime(2005, 01, 01), Close = 21 },
        new StockDetails { Date = new DateTime(2006, 01, 01), Close = 24 },
        new StockDetails { Date = new DateTime(2007, 01, 01), Close = 36 },
        new StockDetails { Date = new DateTime(2008, 01, 01), Close = 38 },
        new StockDetails { Date = new DateTime(2009, 01, 01), Close = 54 },
        new StockDetails { Date = new DateTime(2010, 01, 01), Close = 57 },
        new StockDetails { Date = new DateTime(2011, 01, 01), Close = 70 }
    };

    public string RangeText => SelectedRange == null
        ? string.Empty
        : $"{SelectedRange[0]:MMM yyyy} to {SelectedRange[1]:MMM yyyy}";

    public void ApplyRange()
    {
        Value = SelectedRange;
    }
}

```

Refer to the [range](./range) page for one-way and two-way value binding.

### Provide persistent range information

State the selected range as text next to the Range Selector, and update it whenever the selection changes. Persisting the range as text ensures that the current selection remains available to users who do not drag the handles, and to assistive technologies that do not read the plotted area.

N> Do not describe the selection handles as a non-drag alternative. Provide the period selector or a bound range control so that the same selection is available without dragging.

## See also

* [Range Selector accessibility compliance](./accessibility)
* [Range Selector style and appearance](./style-appearance)
* [Range Selector range](./range)
* [Range Selector period selector](./period-selector)
* [Range Selector labels](./labels)
* [Range Selector tooltip](./tool-tip)
* [Range Selector custom](./custom)