---
layout: post
title: Blazor 3D Circular Chart Selection and Highlighting Examples | Syncfusion®
description: Learn how to enable point selection, multi-selection, initial selection, hover highlighting, and tactile patterns in the Syncfusion Blazor 3D Circular Chart.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
keywords: Blazor 3D Circular Chart, SfCircularChart3D, selection, highlight, SelectionMode, SelectionPattern, HighlightMode, HighlightPattern, SelectedDataIndex, Syncfusion Blazor Charts
appliesto: UI Component Suite, Chart SDK
---

# Blazor 3D Circular Chart Selection and Highlighting

Selection and highlighting let users focus on individual slices of the `Blazor 3D Circular Chart`. Selection marks a slice when it is clicked or tapped, whereas highlighting emphasizes a slice while the pointer hovers over it. Both features can use a fill color or a tactile pattern so that the emphasized slice remains distinguishable without relying on color alone.

Selection and highlighting are configured through properties on `SfCircularChart3D`. Slices that must be selected when the chart loads are defined with the `CircularChart3DSelectedDataIndexes` child component.

N> **Default values:** `SelectionMode` is `SelectionMode.None`, `SelectionPattern` is `SelectionPattern.None`, `AllowMultiSelection` is `false`, `HighlightMode` is `SelectionMode.None`, `HighlightPattern` is `SelectionPattern.None`, and `HighlightColor` is empty, which keeps the series color.

## Point selection

Set the `SelectionMode` property of `SfCircularChart3D` to `SelectionMode.Point` to select a slice by clicking or tapping it. Clicking the selected slice again clears the selection.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point">
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

### Multiple selection

Set the `AllowMultiSelection` property to `true` to select more than one slice. Each click toggles the selection state of the clicked slice and leaves the other selected slices unchanged.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point" AllowMultiSelection="true">
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

### Selection pattern

The `SelectionPattern` property fills the selected slices with a tactile SVG pattern, which helps users who cannot distinguish the selected state by color. The available patterns are `None`, `Chessboard`, `Dots`, `DiagonalForward`, `Crosshatch`, `Pacman`, `DiagonalBackward`, `Grid`, `Turquoise`, `Star`, `Triangle`, `Circle`, `Tile`, `HorizontalDash`, `VerticalDash`, `Rectangle`, `Box`, `VerticalStripe`, and `Cluster`.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point" SelectionPattern="SelectionPattern.Dots">
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

## Initial selection

Use the `CircularChart3DSelectedDataIndexes` component to select slices when the chart is rendered. Add one `CircularChart3DSelectedDataIndex` for each slice. Its `Series` property is the zero-based index of the series and its `Point` property is the zero-based index of the data point. Set `AllowMultiSelection` to `true` to pre-select more than one slice.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" SelectionMode="SelectionMode.Point" AllowMultiSelection="true" SelectionPattern="SelectionPattern.DiagonalForward">
    <CircularChart3DSelectedDataIndexes>
        <CircularChart3DSelectedDataIndex Series="0" Point="1"></CircularChart3DSelectedDataIndex>
        <CircularChart3DSelectedDataIndex Series="0" Point="3"></CircularChart3DSelectedDataIndex>
    </CircularChart3DSelectedDataIndexes>
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

## Hover highlighting

Set the `HighlightMode` property to `SelectionMode.Point` to emphasize the slice under the pointer. Use the `HighlightColor` property to change the fill color of the highlighted slice, or the `HighlightPattern` property to fill it with a tactile pattern. When neither is set, the series color is kept.

### Highlight color

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" HighlightMode="SelectionMode.Point" HighlightColor="#ff6b6b">
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

### Highlight pattern

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Mobile Browser Statistics" HighlightMode="SelectionMode.Point" HighlightPattern="SelectionPattern.Crosshatch">
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

### Selection and highlighting together

Selection and highlighting can be combined. Use different patterns for them so that users can tell a selected slice from a hovered slice.

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

N> Use the `SelectionChanged` event to respond when the selection changes. Refer to the [Events](./events#selectionchanged) page for details.

## See also

* [Appearance](./appearance)
* [Legend](./legend)
* [Tooltip](./tooltip)
* [Accessibility and localization](./accessibility-and-localization)
* [Events](./events)
* [Getting started with Blazor Web App](./getting-started/blazor-web-app)
