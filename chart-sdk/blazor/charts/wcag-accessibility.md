---
layout: post
title: Blazor Charts Accessibility Best Practices and Examples | Syncfusion®
description: Learn accessibility best practices for Syncfusion Blazor Charts. Configure shapes, labels, annotations, and high-contrast palettes to align with WCAG criteria.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Charts Accessibility Best Practices

The [Blazor Charts](https://www.syncfusion.com/blazor-components/blazor-charts) component lets you add visual cues and configure interaction options that help users perceive, understand, and navigate chart content. Because charts convey information visually, configuring these options is important for users who rely on non-color cues, assistive technologies, or keyboard navigation.

This topic describes techniques that help Blazor Charts align with the following [WCAG](https://www.w3.org/TR/WCAG22/) criteria:

* **Use of Color**
* **Non-text Contrast**
* **Dragging Movements**

## Use of Color

The **Use of Color** criterion requires that you convey meaning with cues other than color, such as shapes or text. The following techniques help your Blazor Charts meet this criterion.

### Use distinct dash styles for line-based series

Apply a different [DashArray](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartSeries.html#Syncfusion_Blazor_Charts_ChartSeries_DashArray) value to each line-based series so that series can be distinguished without relying on color alone.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart Title="Sales by Region">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>

    <ChartSeriesCollection>
        <ChartSeries DataSource="@Sales" XName="Region" YName="North" Type="ChartSeriesType.Line"
                     DashArray="5,5" Width="2" Name="North">
            <ChartMarker Visible="true" Shape="ChartShape.Circle" Width="8" Height="8"></ChartMarker>
        </ChartSeries>
        <ChartSeries DataSource="@Sales" XName="Region" YName="South" Type="ChartSeriesType.Line"
                     DashArray="10,5" Width="2" Name="South">
            <ChartMarker Visible="true" Shape="ChartShape.Diamond" Width="8" Height="8"></ChartMarker>
        </ChartSeries>
        <ChartSeries DataSource="@Sales" XName="Region" YName="East" Type="ChartSeriesType.Line"
                     DashArray="2,2" Width="2" Name="East">
            <ChartMarker Visible="true" Shape="ChartShape.Triangle" Width="8" Height="8"></ChartMarker>
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    public class SalesInfo
    {
        public string Region { get; set; }
        public double North { get; set; }
        public double South { get; set; }
        public double East { get; set; }
    }

    public List<SalesInfo> Sales = new List<SalesInfo>
    {
        new SalesInfo { Region = "Q1", North = 35, South = 28, East = 34 },
        new SalesInfo { Region = "Q2", North = 28, South = 25, East = 30 },
        new SalesInfo { Region = "Q3", North = 33, South = 27, East = 32 },
        new SalesInfo { Region = "Q4", North = 42, South = 36, East = 40 }
    };
}

```

![Blazor Line Chart with Different Marker Shapes](images/marker/blazor-line-chart-with-different-marker.webp)

### Customize point size, shape, and image

Customize the size, [Shape](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Shape), and [ImageUrl](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_ImageUrl) of markers in area-, line-, and scatter-based series. Set [ChartMarker.Visible](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartCommonMarker.html#Syncfusion_Blazor_Charts_ChartCommonMarker_Visible) to **true** and choose a shape (Rectangle, Circle, Diamond, Triangle, and so on) or use the **Image** shape to apply a custom image. Refer to the [Blazor Charts Data Markers](./data-markers) page for the full list of supported shapes and configuration options.

### Show arguments and values in data labels

Enable [ChartDataLabel.Visible](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartDataLabel.html#Syncfusion_Blazor_Charts_ChartDataLabel_Visible) to display both the argument and the value for each point. Showing both values meets the Non-text Contrast criterion and removes the need to rely on color alone. For pie and doughnut series, add a [ConnectorStyle](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartDataLabel.html#Syncfusion_Blazor_Charts_ChartDataLabel_ConnectorStyle) when only the value is shown so users can match each label to the corresponding slice.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart Title="Olympic Medals">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>

    <ChartSeriesCollection>
        <ChartSeries DataSource="@MedalDetails" XName="Country" YName="Gold" Type="ChartSeriesType.Column">
            <ChartMarker>
                <ChartDataLabel Visible="true" Name="Country"></ChartDataLabel>
            </ChartMarker>
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    public class MedalInfo
    {
        public string Country { get; set; }
        public double Gold { get; set; }
    }

    public List<MedalInfo> MedalDetails = new List<MedalInfo>
    {
        new MedalInfo { Country = "USA", Gold = 50 },
        new MedalInfo { Country = "China", Gold = 40 },
        new MedalInfo { Country = "Japan", Gold = 70 },
        new MedalInfo { Country = "Australia", Gold = 60 },
        new MedalInfo { Country = "France", Gold = 50 }
    };
}

```

### Add annotations for context

Use [ChartAnnotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.ChartAnnotation.html) to mark outliers, thresholds, or events directly on the chart plane. Because annotations are text, they provide a non-color cue that explains meaningful categories or states.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart Title="Olympic Medals">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>

    <ChartAnnotations>
        <ChartAnnotation X="@Highest" Y="70" CoordinateUnits="Units.Point">
            <ContentTemplate>
                <div style="color: firebrick; font-size: medium; font-style: italic">Highest medal count</div>
            </ContentTemplate>
        </ChartAnnotation>
    </ChartAnnotations>

    <ChartSeriesCollection>
        <ChartSeries DataSource="@MedalDetails" XName="Country" YName="Gold" Type="ChartSeriesType.Column">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    string Highest = "Japan";

    public class MedalInfo
    {
        public string Country { get; set; }
        public double Gold { get; set; }
    }

    public List<MedalInfo> MedalDetails = new List<MedalInfo>
    {
        new MedalInfo { Country = "USA", Gold = 50 },
        new MedalInfo { Country = "China", Gold = 40 },
        new MedalInfo { Country = "Japan", Gold = 70 },
        new MedalInfo { Country = "Australia", Gold = 60 },
        new MedalInfo { Country = "France", Gold = 50 }
    };
}

```

![Annotation in Blazor Column Chart](images/annotation/blazor-column-chart-annotation.webp)

### Add descriptive titles and subtitles

Set [Title](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_Title) and [SubTitle](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.SfChart.html#Syncfusion_Blazor_Charts_SfChart_SubTitle) on the chart to convey chart-wide information that helps users interpret the visualization. Refer to the [Blazor Charts Appearance](./chart-appearance) page for more options.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart Title="Browser Statistics in 2024" SubTitle="In percentage">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>

    <ChartSeriesCollection>
        <ChartSeries DataSource="@BrowserStats" XName="Browser" YName="Share" Type="ChartSeriesType.Column">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    public class BrowserInfo
    {
        public string Browser { get; set; }
        public double Share { get; set; }
    }

    public List<BrowserInfo> BrowserStats = new List<BrowserInfo>
    {
        new BrowserInfo { Browser = "Chrome", Share = 65 },
        new BrowserInfo { Browser = "Edge", Share = 12 },
        new BrowserInfo { Browser = "Firefox", Share = 8 },
        new BrowserInfo { Browser = "Safari", Share = 15 }
    };
}

```

### Supplemental techniques

The following techniques are recommended but not required to meet the Use of Color criterion.

* **Legend.** Enable a legend so users can locate the series on a plane by hovering over the corresponding legend item. Refer to the [Blazor Charts Legend](./legend) page for configuration options.
* **Tooltip.** Display a tooltip that includes the series name, argument, and value so users can identify each point without relying on color. Refer to the [Blazor Charts Tooltip](./tool-tip) page for configuration options.
* **Text summary.** Add a written summary of the main takeaways. Text summaries are especially useful for dense charts with overlapping labels, pie and doughnut charts with many sectors, area and bar series (since fill patterns are not available in Blazor Charts), and data that users want to compare precisely.