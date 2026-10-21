---
layout: post
title: Blazor Charts WCAG Accessibility Techniques | Syncfusion®
description: Learn how to make Syncfusion Blazor Charts accessible by adding non-color visual cues such as dash patterns, marker shapes, data labels, and annotations.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Charts WCAG Accessibility Techniques

## Use of Color

The [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) criterion requires information to be distinguishable without relying on color alone. In Blazor Charts, combine color with visual cues such as dash patterns, marker shapes, data labels, and annotations to help users identify chart information.

### Differentiate line-based series using dash patterns

Assign a distinct [`DashArray`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartSeries.html#Syncfusion_Blazor_Charts_ChartSeries_DashArray) value to each line-based series. Combining solid, dashed, and dotted patterns allows users to distinguish series without relying only on color.

Dash patterns can also help distinguish crosshairs and striplines from plotted data.

### Identify data points using marker shapes

Enable [markers](./data-markers) and assign different [`Shape`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Shape) values to data series. Marker shapes provide an additional visual cue for identifying series and data points.

You can also customize the marker height, width, or image to improve visual identification. To customize individual data points, handle the [`OnPointRender`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartEvents.html#Syncfusion_Blazor_Charts_ChartEvents_OnPointRender) event.

### Display categories and values using data labels

Enable [data labels](./data-labels) to display the category and value associated with each data point. Displaying both details helps users understand the data without interpreting color alone.

### Highlight important information using annotations

Use [annotations](./chart-annotations) to identify thresholds, outliers, events, or other significant information directly in the chart area. Annotations provide an additional text cue that does not depend on color.

### Provide context using titles and axis titles

Add descriptive chart [title](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_Title)  and [subTitle](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_SubTitle) that explain the chart's subject, scope, or time period. Use axis titles to identify the categories, values, and measurement units represented by each axis.

### Keep the legend visible

Keep the [legend](./legend) visible when dash patterns, marker shapes, or other visual styles distinguish data series. The legend associates each visual indicator with its corresponding series name.

### Provide descriptive tooltips

Enable a [tooltip](./tool-tip) that displays the series name, category, and value. Tooltips provide additional details when users interact with data points.

### Provide a text summary

Include a short text summary or data table near the chart when its main information cannot be communicated clearly through visual cues. A text alternative is especially useful in the following cases:

* Data labels overlap or make the chart difficult to read.
* Area or bar series rely on fill colors because fill patterns are unavailable.
* Users need to compare exact values rather than estimate them from the chart.

N> Do not use color as the only method of conveying chart information. Combine color with dash patterns, marker shapes, data labels, annotations, or descriptive text.

## Non-Text Contrast

The [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) criterion requires meaningful graphical objects and visual indicators to have a contrast ratio of at least 3:1 against adjacent colors.

In Blazor Charts, ensure that data series, markers, axes, and other graphical elements required to understand the chart remain distinguishable from their surrounding colors.

### Apply sufficient contrast to data series

Configure the [`Palettes`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_Palettes) property of `SfChart` to apply custom colors to chart series. Refer to the [chart appearance](./chart-appearance) page for more customization options.

Verify that each series color has a contrast ratio of at least 3:1 against the chart background or any adjacent color that users must distinguish. The required contrast depends on the chart type, background, theme, and the colors surrounding each graphical object.

```cshtml
@using Syncfusion.Blazor.Charts

<SfChart Title="Monthly Sales"
         Palettes="@ChartPalettes"
         Background="#FFFFFF">

    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"
                       Title="Month">
        <ChartAxisLineStyle Color="#595959"
                            Width="2">
        </ChartAxisLineStyle>
    </ChartPrimaryXAxis>

    <ChartPrimaryYAxis Title="Sales">
        <ChartAxisLineStyle Color="#595959"
                            Width="2">
        </ChartAxisLineStyle>
    </ChartPrimaryYAxis>

    <ChartLegendSettings Visible="true">
    </ChartLegendSettings>

    <ChartSeriesCollection>
        <ChartSeries DataSource="@SalesData"
                     XName="Month"
                     YName="OnlineSales"
                     Name="Online Sales"
                     Type="ChartSeriesType.Column">
        </ChartSeries>

        <ChartSeries DataSource="@SalesData"
                     XName="Month"
                     YName="RetailSales"
                     Name="Retail Sales"
                     Type="ChartSeriesType.Column">
        </ChartSeries>

        <ChartSeries DataSource="@SalesData"
                     XName="Month"
                     YName="WholesaleSales"
                     Name="Wholesale Sales"
                     Type="ChartSeriesType.Column">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private string[] ChartPalettes { get; set; } =
        new string[]
        {
            "#005A9C",
            "#8A2D3C",
            "#276738"
        };

    private List<SalesRecord> SalesData { get; set; } =
        new List<SalesRecord>
        {
            new SalesRecord
            {
                Month = "January",
                OnlineSales = 45,
                RetailSales = 36,
                WholesaleSales = 25
            },
            new SalesRecord
            {
                Month = "February",
                OnlineSales = 62,
                RetailSales = 48,
                WholesaleSales = 31
            },
            new SalesRecord
            {
                Month = "March",
                OnlineSales = 58,
                RetailSales = 50,
                WholesaleSales = 35
            }
        };

    private class SalesRecord
    {
        public string Month { get; set; } = string.Empty;

        public double OnlineSales { get; set; }

        public double RetailSales { get; set; }

        public double WholesaleSales { get; set; }
    }
}
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/rZrdiNLCSNajuniX?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Column chart with high-contrast palette](images/wcag-accessibility-images/blazor-chart-high-contrast-palette.webp)" %}


The colors in this example provide at least 3:1 contrast against the white chart background. Revalidate the contrast whenever the chart background, theme, opacity, or surrounding colors change.

### Improve the visibility of lines and markers

Use series colors that contrast sufficiently with the plot-area background. Avoid thin lines when anti-aliasing could make them difficult to perceive.

Increase the series [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartSeries.html#Syncfusion_Blazor_Charts_ChartSeries_Width) and marker size when necessary. Marker [Fill](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Fill) and borders should also remain distinguishable from the background and the series line.

```cshtml
<ChartSeries DataSource="@SalesData"
             XName="Month"
             YName="OnlineSales"
             Name="Online Sales"
             Fill="#005A9C"
             Width="3"
             Type="ChartSeriesType.Line">

    <ChartMarker Visible="true"
                 Shape="ChartShape.Circle"
                 Height="12"
                 Width="12"
                 Fill="#005A9C">
        <ChartMarkerBorder Color="#FFFFFF"
                           Width="2">
        </ChartMarkerBorder>
    </ChartMarker>
</ChartSeries>
```

### Distinguish adjacent chart segments

For column, bar, stacking, and other charts containing adjacent filled areas, ensure that users can identify the boundaries between meaningful segments.

When adjacent colors do not provide sufficient contrast, apply a contrasting border around each data point or segment using the [ChartSeriesBorder](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartSeriesBorder.html) property.

```cshtml
<ChartSeries DataSource="@SalesData"
             XName="Month"
             YName="OnlineSales"
             Name="Online Sales"
             Fill="#005A9C"
             Type="ChartSeriesType.Column">
    <ChartSeriesBorder Color="#FFFFFF"
                       Width="2">
    </ChartSeriesBorder>
</ChartSeries>
```

### Provide sufficient contrast for data-label text

When data labels are displayed, configure the label text, background, and border so that the text satisfies the applicable text-contrast requirement. Refer to the [data labels](./data-labels) page for more customization options.

```cshtml
<ChartMarker>
    <ChartDataLabel Visible="true"
                    Fill="#FFFFFF">
        <ChartDataLabelFont Color="#1A1A1A"
                            FontWeight="600">
        </ChartDataLabelFont>

        <ChartDataLabelBorder Color="#595959"
                              Width="1">
        </ChartDataLabelBorder>
    </ChartDataLabel>
</ChartMarker>
```

Data labels provide additional textual information, but they do not remove the contrast requirement for meaningful graphical objects in the chart.

### Display series names using series labels

Enable [series labels](./series-label) to display each series name directly within the chart area. Series labels help users associate plotted data with the corresponding series without relying only on color or repeatedly referring to the legend.

Configure the series-label text and background colors so that the labels remain readable against the chart background and plotted data.

Series labels provide an additional text cue, but they do not remove the contrast requirement for meaningful graphical objects such as series lines, markers, axes, and segment boundaries.

```cshtml
<SeriesLabelSettings Visible="true"
                     Background="#FFFFFF"
                     ShowOverlapText="false">
    <SeriesLabelFont Color="#1A1A1A"
                     FontWeight="600">
    </SeriesLabelFont>

    <SeriesLabelBorder Color="#595959"
                       Width="1">
    </SeriesLabelBorder>
</SeriesLabelSettings>
```

### Verify contrast for each chart configuration

Contrast depends on the colors that are directly adjacent to each meaningful graphical object, so it must be verified against the actual background, theme, opacity, gradients, and neighboring segments of the rendered chart.

N> Do not assume that a predefined or color-vision-friendly palette automatically satisfies the Non-text Contrast criterion. Test each meaningful graphical object against its adjacent colors and maintain a contrast ratio of at least 3:1.

## Dragging Movements

The [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) criterion requires functionality that uses dragging to also be available through a single-pointer operation that does not require dragging.

Blazor Charts support selection zooming, panning, scrollbars, and touch gestures. When these interactions are enabled, provide click- or tap-based alternatives for the same essential functionality.

### Identify operations that require dragging

The following chart operations may require dragging or multipoint gestures:

* Selection zooming requires users to drag over a rectangular chart region.
* Panning requires users to drag the zoomed chart area.
* Chart scrollbars require users to drag the scrollbar thumb.
* Pinch zooming requires a multipoint gesture.

Mouse-wheel zooming does not require dragging, but it is not available to all pointer users. Refer to the [zooming and panning](./zooming) page for configuration details.

### Provide click-based zoom controls

Configure the built-in zoom toolbar with `ZoomIn`, `ZoomOut`, and `Reset` items. These controls allow users to change or reset the zoom level by clicking or tapping a toolbar button.

```cshtml
@using Syncfusion.Blazor.Charts

<SfChart Title="Stock Price Analysis">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.DateTime">
    </ChartPrimaryXAxis>

    <ChartZoomSettings EnableSelectionZooming="true"
                       EnableMouseWheelZooming="true"
                       EnablePan="true"
                       ToolbarItems="@ToolbarItem"
                       AccessibilityDescriptionFormat="Selected the ${value} option"
                       ToolbarDisplayMode="ToolbarMode.Always">
    </ChartZoomSettings>

    <ChartSeriesCollection>
        <ChartSeries DataSource="@StockReports"
                     XName="Date"
                     YName="Price"
                     Type="ChartSeriesType.Line">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private List<ToolbarItems> ToolbarItem { get; set; } =
        new List<ToolbarItems>
        {
            ToolbarItems.ZoomIn,
            ToolbarItems.ZoomOut,
            ToolbarItems.Reset,
            ToolbarItems.Zoom,
            ToolbarItems.Pan
        };

    private List<ChartData> StockReports { get; set; } =
        new List<ChartData>
        {
            new ChartData
            {
                Date = new DateTime(2024, 1, 1),
                Price = 152.30
            },
            new ChartData
            {
                Date = new DateTime(2024, 1, 8),
                Price = 148.75
            },
            new ChartData
            {
                Date = new DateTime(2024, 1, 15),
                Price = 156.20
            },
            new ChartData
            {
                Date = new DateTime(2024, 1, 22),
                Price = 160.45
            },
            new ChartData
            {
                Date = new DateTime(2024, 1, 29),
                Price = 158.90
            }
        };

    private class ChartData
    {
        public DateTime Date { get; set; }

        public double Price { get; set; }
    }
}
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/hXrdCNLiosQRgBod?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Line chart with the zoom toolbar](images/wcag-accessibility-images/blazor-chart-dragging-movements.webp)" %}


The `ZoomIn`, `ZoomOut`, and `Reset` toolbar items provide direct click-based operations. The `Zoom` toolbar item enables selection zooming, which requires users to hold the left mouse button and drag over a chart region. The `Pan` toolbar item switches the chart to panning mode, which requires users to hold the left mouse button and drag the zoomed chart area.

## See also

* [Blazor Charts accessibility compliance](./accessibility)
* [Advanced accessibility configuration](./advanced-accessibility-configuration)
* [Data markers](./data-markers)
* [Data labels](./data-labels)
* [Series labels](./series-label)
* [Chart annotations](./chart-annotations)
* [Legend](./legend)
* [Tooltip](./tool-tip)
* [Zooming and panning](./zooming)
* [Chart appearance](./chart-appearance)

