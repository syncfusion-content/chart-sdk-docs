---
layout: post
title: Blazor Accumulation Chart Center Label Examples | Syncfusion®
description: Learn how to use center labels in Syncfusion Blazor Accumulation Chart. Display custom text, totals, or percentages at the center of pie and donut charts.
platform: chart-sdk
control: Accumulation Chart
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Blazor Pie and Donut Chart Center Label

The center label feature allows you to place custom text in the middle of pie and donut charts using the [AccumulationChartCenterLabel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabel.html). This is especially useful for displaying the chart's title, percentage distribution, or other key metrics pertinent to the visualized data.

You can configure the text that appears in the center using the [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabel.html#Syncfusion_Blazor_Charts_AccumulationChartCenterLabel_Text) property within the `AccumulationChartCenterLabel`.

```cshtml
@using Syncfusion.Blazor.Charts

<SfAccumulationChart>
    <AccumulationChartSeriesCollection>
        <AccumulationChartSeries DataSource="@DonutChartPoints" XName="Browser" YName="Users" InnerRadius="60%">
        </AccumulationChartSeries>
    </AccumulationChartSeriesCollection>
    <AccumulationChartCenterLabel Text="Mobile Browser<br>Statistics 2024">
    </AccumulationChartCenterLabel>
    <AccumulationChartLegendSettings Visible="false"></AccumulationChartLegendSettings>
</SfAccumulationChart>

@code {
    public List<DonutData> DonutChartPoints { get; set; } = new List<DonutData>
    {
        new DonutData { Browser = "Chrome", Users = 63.5, DataLabelMappingName = "Chrome: 63.5%"},
        new DonutData { Browser = "Safari", Users = 25.0, DataLabelMappingName = "Safari: 25.0%"},
        new DonutData { Browser = "Samsung Internet", Users = 6.0, DataLabelMappingName = "Samsung Internet: 6.0%"},
        new DonutData { Browser = "UC Browser", Users = 2.5, DataLabelMappingName = "UC Browser: 2.5%"},
        new DonutData { Browser = "Opera", Users = 1.5, DataLabelMappingName = "Opera: 1.5%"},
        new DonutData { Browser = "Others", Users = 1.5, DataLabelMappingName = "Others: 1.5%"}
    };
    public class DonutData
    {
        public string Browser { get; set; }
        public double Users { get; set; }
        public string DataLabelMappingName { get; set; }
    }
}
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/htVRXmBNzZUaifGk?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Blazor Accumulation Chart with Center Label](./images/center-label/blazor-accumulation-chart-with-center-label.webp)" %}

## Hover Text

The center label text can be dynamically updated when hovering over pie or donut chart slices using the [HoverTextFormat](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabel.html#Syncfusion_Blazor_Charts_AccumulationChartCenterLabel_HoverTextFormat) property. This interactive feature enhances user engagement by offering relevant information about specific segments during the exploration of the visualization.

N> Line breaks can be provided to texts in the `HoverTextFormat` property using the `<br>` tag.

```cshtml
@using Syncfusion.Blazor.Charts

<SfAccumulationChart>
    <AccumulationChartSeriesCollection>
        <AccumulationChartSeries DataSource="@DonutChartPoints" XName="Browser" YName="Users" InnerRadius="60%">
        </AccumulationChartSeries>
    </AccumulationChartSeriesCollection>
    <AccumulationChartCenterLabel Text="Mobile Browser<br>Statistics 2024" HoverTextFormat="${point.x} <br> Browser Share <br> ${point.y}%">
    </AccumulationChartCenterLabel>
    <AccumulationChartLegendSettings Visible="false"></AccumulationChartLegendSettings>
</SfAccumulationChart>

@code {
    public List<DonutData> DonutChartPoints { get; set; } = new List<DonutData>
    {
        new DonutData { Browser = "Chrome", Users = 63.5, DataLabelMappingName = "Chrome: 63.5%"},
        new DonutData { Browser = "Safari", Users = 25.0, DataLabelMappingName = "Safari: 25.0%"},
        new DonutData { Browser = "Samsung Internet", Users = 6.0, DataLabelMappingName = "Samsung Internet: 6.0%"},
        new DonutData { Browser = "UC Browser", Users = 2.5, DataLabelMappingName = "UC Browser: 2.5%"},
        new DonutData { Browser = "Opera", Users = 1.5, DataLabelMappingName = "Opera: 1.5%"},
        new DonutData { Browser = "Others", Users = 1.5, DataLabelMappingName = "Others: 1.5%"}
    };
    public class DonutData
    {
        public string Browser { get; set; }
        public double Users { get; set; }
        public string DataLabelMappingName { get; set; }
    }
}
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LNhRjGrZpXdgJBwK?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Blazor Accumulation Chart with Center Label Dynamic Text](./images/center-label/blazor-accumulation-chart-with-center-label-hover-text.webp)" %}

## Format center label values

The `Format` property formats the total value displayed in the center label. It supports .NET numeric formats such as `C0` and `N2`, or a pattern containing the `{value}` placeholder.

The `HoverFormat` property applies a .NET numeric format to the active data point's Y value. It formats the `${point.y}` token in [HoverTextFormat](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabel.html#Syncfusion_Blazor_Charts_AccumulationChartCenterLabel_HoverTextFormat) or displays the formatted value directly when `HoverTextFormat` is not specified.

```cshtml
@using Syncfusion.Blazor.Charts
<SfAccumulationChart Title="Quarterly Sales">
    <AccumulationChartSeriesCollection>
        <AccumulationChartSeries DataSource="@SalesData"
                                 XName="Quarter"
                                 YName="Sales"
                                 InnerRadius="65%">
        </AccumulationChartSeries>
    </AccumulationChartSeriesCollection>

    <AccumulationChartCenterLabel
        Format="Total Sales<br>{value}"
        HoverTextFormat="${point.x}<br>${point.y}"
        HoverFormat="C2">
    </AccumulationChartCenterLabel>
</SfAccumulationChart>

@code {
    public List<SalesInfo> SalesData { get; set; } = new()
    {
        new SalesInfo { Quarter = "Q1", Sales = 1250.5 },
        new SalesInfo { Quarter = "Q2", Sales = 1800.75 },
        new SalesInfo { Quarter = "Q3", Sales = 1450.25 },
        new SalesInfo { Quarter = "Q4", Sales = 2100.5 }
    };

    public class SalesInfo
    {
        public string Quarter { get; set; } = string.Empty;

        public double Sales { get; set; }
    }
}
```

![Blazor Accumulation Chart with formatted center label](./images/center-label/blazor-accumulation-chart-formatted-center-label.webp)

## Customization

The appearance of the center label can be customized by using the [AccumulationChartCenterLabelFont](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabelFont.html), which allows you to modify font properties such as size, font-family, font-style, font-weight, and color to enhance the visual presentation of the text displayed in the center of the chart.

The position of the center label can be adjusted using the [XOffset](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabel.html#Syncfusion_Blazor_Charts_AccumulationChartCenterLabel_XOffset) and [YOffset](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartCenterLabel.html#Syncfusion_Blazor_Charts_AccumulationChartCenterLabel_YOffset) properties in the `AccumulationChartCenterLabel`.

```cshtml
@using Syncfusion.Blazor.Charts

<SfAccumulationChart>
    <AccumulationChartSeriesCollection>
        <AccumulationChartSeries DataSource="@DonutChartPoints" XName="Browser" YName="Users" InnerRadius="60%">
        </AccumulationChartSeries>
    </AccumulationChartSeriesCollection>
    <AccumulationChartCenterLabel Text="Mobile Browser<br>Statistics 2024">
        <AccumulationChartCenterLabelFont Size="15px" FontWeight="600" FontFamily="Roboto" fontStyle="Italic" Color="Blue" ></AccumulationChartCenterLabelFont>
    </AccumulationChartCenterLabel>
    <AccumulationChartLegendSettings Visible="false"></AccumulationChartLegendSettings>
</SfAccumulationChart>

@code {
    public List<DonutData> DonutChartPoints { get; set; } = new List<DonutData>
    {
        new DonutData { Browser = "Chrome", Users = 63.5, DataLabelMappingName = "Chrome: 63.5%"},
        new DonutData { Browser = "Safari", Users = 25.0, DataLabelMappingName = "Safari: 25.0%"},
        new DonutData { Browser = "Samsung Internet", Users = 6.0, DataLabelMappingName = "Samsung Internet: 6.0%"},
        new DonutData { Browser = "UC Browser", Users = 2.5, DataLabelMappingName = "UC Browser: 2.5%"},
        new DonutData { Browser = "Opera", Users = 1.5, DataLabelMappingName = "Opera: 1.5%"},
        new DonutData { Browser = "Others", Users = 1.5, DataLabelMappingName = "Others: 1.5%"}
    };
    public class DonutData
    {
        public string Browser { get; set; }
        public double Users { get; set; }
        public string DataLabelMappingName { get; set; }
    }
}
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/rZVdNQBtpjwhfBMg?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Blazor Accumulation Chart with Center Label Customization](./images/center-label/blazor-accumulation-chart-with-center-label-customization.webp)" %}

N> Refer to the [Blazor Charts](https://www.syncfusion.com/blazor-components/blazor-charts) feature tour page for its groundbreaking feature representations and also explore the [Blazor Accumulation Chart Example](https://blazor.syncfusion.com/demos/chart/pie?theme=fluent2) to know about the various features of accumulation charts and how it is used to represent numeric proportional data.

## Center label template

The center label supports custom Razor content using the `Template` and `HoverTemplate` properties. The `Template` property displays custom content in the default state, while the `HoverTemplate` property displays custom content when a data point is active.

The template context is of type [AccumulationChartDataPointInfo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Charts.AccumulationChartDataPointInfo.html). In the default template, the `Y` property contains the total value of the visible data points. In the hover template, the context contains information about the active data point.

```cshtml
@using Syncfusion.Blazor.Charts

<SfAccumulationChart Title="Mobile Browser Statistics">
    <AccumulationChartSeriesCollection>
        <AccumulationChartSeries DataSource="@StatisticsDetails"
                                 XName="Browser"
                                 YName="Users"
                                 PointColorMapping="Color"
                                 InnerRadius="65%">
        </AccumulationChartSeries>
    </AccumulationChartSeriesCollection>

    <AccumulationChartLegendSettings Visible="false">
    </AccumulationChartLegendSettings>

    <AccumulationChartCenterLabel>
        <Template>
            @{
                var total = StatisticsDetails.Sum(item => item.Users);
            }

            <div style="display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                line-height:1.2;">
                <span style="font-size:13px; color:#666;">
                    Total users
                </span>

                <span style="font-size:24px; font-weight:700; color:#4f46e5;">
                    @total million
                </span>

                <span style="font-size:11px; color:#777;">
                    All browsers
                </span>
            </div>
        </Template>

        <HoverTemplate>
            @{
                var pointInfo = context as AccumulationChartDataPointInfo;
                var browser = pointInfo?.X?.ToString() ?? string.Empty;
                var users = pointInfo?.Y is null
                    ? 0
                    : Convert.ToDouble(pointInfo.Y);
            }

            <div style="display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                line-height:1.2;">
                <span style="font-size:14px; font-weight:700; color:#4f46e5;">
                    @browser
                </span>

                <span style="font-size:22px; font-weight:800;">
                    @users million
                </span>

                <span style="font-size:11px; color:#777;">
                    Browser users
                </span>
            </div>
        </HoverTemplate>
    </AccumulationChartCenterLabel>
</SfAccumulationChart>

@code {
    public class Statistics
    {
        public string Browser { get; set; } = string.Empty;

        public double Users { get; set; }

        public string Color { get; set; } = string.Empty;
    }

    public List<Statistics> StatisticsDetails { get; set; } = new()
    {
        new Statistics
        {
            Browser = "Chrome",
            Users = 37,
            Color = "#a16ee5"
        },
        new Statistics
        {
            Browser = "UC Browser",
            Users = 17,
            Color = "#f7ce69"
        },
        new Statistics
        {
            Browser = "iPhone",
            Users = 19,
            Color = "#55a5c2"
        },
        new Statistics
        {
            Browser = "Others",
            Users = 4,
            Color = "#7ddf1e"
        },
        new Statistics
        {
            Browser = "Opera",
            Users = 11,
            Color = "#ff6ea6"
        },
        new Statistics
        {
            Browser = "Android",
            Users = 12,
            Color = "#7953ac"
        }
    };
}
```

![Blazor Accumulation Chart with center label template](./images/center-label/blazor-accumulation-chart-center-label-template.webp)

## See also

* [Data Label](./data-label)
* [Title and Subtitle](./title-and-sub-title)
* [Annotation](./annotation)
