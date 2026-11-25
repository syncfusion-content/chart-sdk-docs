---
layout: post
title: Blazor 3D Circular Chart Events Examples and Reference | Syncfusion®
description: Learn how to handle the lifecycle, rendering, interaction, and export events of the Syncfusion Blazor 3D Circular Chart.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
keywords: Blazor 3D Circular Chart, SfCircularChart3D, events, Created, SizeChanged, PointRendering, DataLabelRendering, TooltipRendering, LegendItemRendering, PointClick, LegendClick, SelectionChanged, ExportCompleted, Syncfusion Blazor Charts
appliesto: UI Component Suite, Chart SDK
---

# Blazor 3D Circular Chart Events

This section lists the events of the `Blazor 3D Circular Chart` and shows how to handle them. The events are available as parameters of the `SfCircularChart3D` component, and each handler receives an argument object that describes the action.

Event Name | Argument Type
-----|-----
[Created](#created) | `CircularChart3DLoadedEventArgs`
[SizeChanged](#sizechanged) | `CircularChart3DResizeEventArgs`
[SeriesRendering](#seriesrendering) | `CircularChart3DSeriesRenderEventArgs`
[PointRendering](#pointrendering) | `CircularChart3DPointRenderEventArgs`
[DataLabelRendering](#datalabelrendering) | `CircularChart3DTextRenderEventArgs`
[TooltipRendering](#tooltiprendering) | `CircularChart3DTooltipRenderEventArgs`
[LegendItemRendering](#legenditemrendering) | `CircularChart3DLegendRenderEventArgs`
[PointClick](#pointclick) | `CircularChart3DPointEventArgs`
[LegendClick](#legendclick) | `CircularChart3DLegendClickEventArgs`
[SelectionChanged](#selectionchanged) | `CircularChart3DSelectionCompleteEventArgs`
[MouseClick, MouseDown, MouseUp, and MouseMove](#mouse-events) | `CircularChart3DMouseEventArgs`
[ExportCompleted](#exportcompleted) | `CircularChart3DExportEventArgs`
[PrintCompleted](#printcompleted) | No arguments

## Lifecycle and layout events

### Created

The `Created` event is raised after the chart completes its initial rendering. Use it to run logic that depends on the chart being available.

The `CircularChart3DLoadedEventArgs` provides the following properties:

* `Chart`: The `SfCircularChart3D` instance.
* `Theme`: The theme applied to the chart.
* `Name`: The name of the event.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" Created="@OnCreated">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnCreated(CircularChart3DLoadedEventArgs args)
    {
        // The chart is rendered and ready to use.
    }

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

### SizeChanged

The `SizeChanged` event is raised when the size of the chart element changes, for example when the browser window is resized.

The `CircularChart3DResizeEventArgs` provides the following properties:

* `Chart`: The `SfCircularChart3D` instance.
* `PreviousSize`: The size of the chart before the change.
* `CurrentSize`: The size of the chart after the change.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SizeChanged="@OnSizeChanged">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnSizeChanged(CircularChart3DResizeEventArgs args)
    {
        // Compare args.PreviousSize and args.CurrentSize to adapt the layout.
    }

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

## Rendering customization events

The rendering events are raised before an element is drawn. Their argument types derive from a cancelable base class, so each one provides a `Cancel` property. Set `Cancel` to `true` to skip the default rendering of that element, or change the style properties of the argument to override how it is drawn.

### SeriesRendering

The `SeriesRendering` event is raised before a series is rendered. Use it to inspect or change the data, or to cancel the rendering of the series.

The `CircularChart3DSeriesRenderEventArgs` provides the following properties:

* `Series`: The series that is being rendered.
* `Data`: The data of the series, which can be modified.
* `Cancel`: Set to `true` to cancel the rendering of the series.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SeriesRendering="@OnSeriesRendering">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnSeriesRendering(CircularChart3DSeriesRenderEventArgs args)
    {
        // args.Data can be modified before the series is drawn.
        args.Cancel = false;
    }

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

### PointRendering

The `PointRendering` event is raised before each slice is rendered. Use it to apply conditional styling to individual points.

The `CircularChart3DPointRenderEventArgs` provides the following properties:

* `Point`: The point that is being rendered.
* `Series`: The series the point belongs to.
* `SeriesIndex`: The index of the series.
* `Fill`: The fill color of the slice, which can be changed.
* `BorderColor`: The border color of the slice, which can be changed.
* `BorderWidth`: The border width of the slice, which can be changed.
* `Cancel`: Set to `true` to cancel the rendering of the slice.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" PointRendering="@OnPointRendering">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnPointRendering(CircularChart3DPointRenderEventArgs args)
    {
        if (args.Point.Y < 15)
        {
            args.Fill = "#ff6b6b";
            args.BorderColor = "#ffffff";
            args.BorderWidth = 2;
        }
    }

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

### DataLabelRendering

The `DataLabelRendering` event is raised before each data label is rendered. Use it to change the label text and its style, or to cancel the label.

The `CircularChart3DTextRenderEventArgs` provides the following properties:

* `Point`: The point of the data label.
* `Series`: The series the point belongs to.
* `SeriesIndex`: The index of the series.
* `Text`: The text of the label, which can be changed.
* `Color`: The text color, which can be changed.
* `BorderColor and BorderWidth`: The border of the label, which can be changed.
* `FontSize, FontFamily, FontWeight, and FontStyle`: The font of the label, which can be changed.
* `HasTemplate`: Indicates whether the label is rendered by a template.
* `Cancel`: Set to `true` to cancel the rendering of the label.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" DataLabelRendering="@OnDataLabelRendering">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
            <CircularChart3DDataLabelSettings Visible="true"></CircularChart3DDataLabelSettings>
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnDataLabelRendering(CircularChart3DTextRenderEventArgs args)
    {
        args.Text = args.Point.X + " - " + args.Point.Y + "%";
        args.Color = "#ffffff";
    }

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

### TooltipRendering

The `TooltipRendering` event is raised before the tooltip is displayed. Use it to change the header and text of the tooltip or its text style.

The `CircularChart3DTooltipRenderEventArgs` provides the following properties:

* `Point`: The point for which the tooltip is shown.
* `Series`: The series the point belongs to.
* `SeriesIndex`: The index of the series.
* `HeaderText`: The header of the tooltip, which can be changed.
* `Text`: The text of the tooltip, which can be changed.
* `Data`: The data object of the point.
* `TextStyle`: The text style of the tooltip.
* `Template`: The tooltip template.
* `Cancel`: Set to `true` to prevent the tooltip from being shown.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" TooltipRendering="@OnTooltipRendering">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DTooltipSettings Enable="true"></CircularChart3DTooltipSettings>
</SfCircularChart3D>

@code {
    public void OnTooltipRendering(CircularChart3DTooltipRenderEventArgs args)
    {
        args.HeaderText = "Browser share";
        args.Text = args.Point.X + ": " + args.Point.Y + "%";
    }

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

### LegendItemRendering

The `LegendItemRendering` event is raised before each legend item is rendered. Use it to change the text, color, or shape of a legend item, or to cancel it.

The `CircularChart3DLegendRenderEventArgs` provides the following properties:

* `Series`: The series of the legend item.
* `PointIndex`: The index of the point that the legend item represents.
* `Text`: The text of the legend item, which can be changed.
* `Fill`: The color of the legend shape, which can be changed.
* `Shape`: The shape of the legend item, which can be changed.
* `Cancel`: Set to `true` to cancel the rendering of the legend item.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" LegendItemRendering="@OnLegendItemRendering">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

@code {
    public void OnLegendItemRendering(CircularChart3DLegendRenderEventArgs args)
    {
        if (args.PointIndex == 3)
        {
            args.Cancel = true;
        }
        else
        {
            args.Shape = LegendShape.Diamond;
        }
    }

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

## Interaction and export events

### PointClick

The `PointClick` event is raised when a slice is clicked.

The `CircularChart3DPointEventArgs` provides the following properties:

* `Point`: The clicked point.
* `Series`: The series the point belongs to.
* `Chart`: The `SfCircularChart3D` instance.
* `SeriesIndex and PointIndex`: The indexes of the series and the point.
* `X and Y`: The x and y values of the point.
* `PageX and PageY`: The page coordinates of the click.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" PointClick="@OnPointClick">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnPointClick(CircularChart3DPointEventArgs args)
    {
        // args.PointIndex identifies the clicked slice.
    }

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

### LegendClick

The `LegendClick` event is raised when a legend item is clicked.

The `CircularChart3DLegendClickEventArgs` provides the following properties:

* `Chart`: The `SfCircularChart3D` instance.
* `Series`: The series of the legend item.
* `Point`: The point that the legend item represents.
* `PointIndex`: The index of the point.
* `Text`: The text of the legend item.
* `IsPointVisible`: Indicates whether the point is visible.
* `LegendShape`: The shape of the legend item.
* `Cancel`: Set to `true` to cancel the default toggle of the slice.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" LegendClick="@OnLegendClick">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

@code {
    public void OnLegendClick(CircularChart3DLegendClickEventArgs args)
    {
        // Set args.Cancel to true to keep the slice visible.
    }

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

### SelectionChanged

The `SelectionChanged` event is raised after the selection of slices changes.

The `CircularChart3DSelectionCompleteEventArgs` provides the following properties:

* `SelectedDataIndexes`: The series and point indexes of the selected slices.
* `SelectedDataValues`: The values of the selected slices.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionChanged="@OnSelectionChanged" SelectionMode="SelectionMode.Point">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnSelectionChanged(CircularChart3DSelectionCompleteEventArgs args)
    {
        // args.SelectedDataIndexes lists the selected slices.
    }

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

### Mouse events

The `MouseClick`, `MouseDown`, `MouseUp`, and `MouseMove` events are raised when the pointer interacts with the chart surface. They share the `CircularChart3DMouseEventArgs` argument type, which provides the following properties:

* `Target`: The name of the element under the pointer.
* `X` and `Y`: The coordinates of the pointer relative to the chart.
* `Cancel`: Set to `true` to cancel the default action.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" MouseClick="@OnMouseClick" MouseMove="@OnMouseMove">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

@code {
    public void OnMouseClick(CircularChart3DMouseEventArgs args)
    {
        // args.Target, args.X, and args.Y describe the click.
    }

    public void OnMouseMove(CircularChart3DMouseEventArgs args)
    {
        // Runs while the pointer moves over the chart.
    }

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

### ExportCompleted

The `ExportCompleted` event is raised after the chart is exported by the `ExportAsync` method. The `CircularChart3DExportEventArgs` provides the `Type`, `FileName`, `DataUrl`, and `Base64` properties.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons

<SfCircularChart3D @ref="Chart" Title="Mobile Browser Statistics" ExportCompleted="@OnExportCompleted">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

<SfButton Content="Export" IsPrimary="true" CssClass="e-flat" @onclick="ExportChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task ExportChart()
    {
        await Chart.ExportAsync(ExportType.PNG, "BrowserStatistics");
    }

    public void OnExportCompleted(CircularChart3DExportEventArgs args)
    {
        // args.FileName and args.Type describe the exported file.
    }

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

### PrintCompleted

The `PrintCompleted` event is raised after the chart is printed by the `PrintAsync` method. It has no arguments.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons

<SfCircularChart3D @ref="Chart" Title="Mobile Browser Statistics" PrintCompleted="@OnPrintCompleted">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
</SfCircularChart3D>

<SfButton Content="Print" IsPrimary="true" CssClass="e-flat" @onclick="PrintChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task PrintChart()
    {
        await Chart.PrintAsync();
    }

    public void OnPrintCompleted()
    {
        // Runs after printing completes.
    }

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

## See also

* [Selection and highlighting](./selection-and-highlighting)
* [Print and export](./print-and-export)
* [Data label](./data-label)
* [Legend](./legend)
* [Tooltip](./tooltip)
* [Getting started with Blazor Web App](./getting-started/blazor-web-app)
