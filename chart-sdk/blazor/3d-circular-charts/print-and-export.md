---
layout: post
title: Blazor 3D Circular Chart Print and Export Examples | Syncfusion®
description: Learn how to print and export the Syncfusion Blazor 3D Circular Chart to PNG, JPEG, SVG, PDF, XLSX, and CSV by using the PrintAsync and ExportAsync methods.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
keywords: Blazor 3D Circular Chart, SfCircularChart3D, print, export, PrintAsync, ExportAsync, ExportType, PDF, PNG, JPEG, SVG, XLSX, CSV, Syncfusion Blazor Charts
appliesto: UI Component Suite, Chart SDK
---

# Blazor 3D Circular Chart Print and Export

The `Blazor 3D Circular Chart` can be printed directly from the browser and exported to image, document, and data formats. Both operations are available as methods on the `SfCircularChart3D` component, which you call through a component reference created with `@ref`.

N> **Default values:** The `fileName` parameter of `ExportAsync` is `CircularChart3D`, `orientation` is `null`, `allowDownload` is `true`, and `isBase64` is `false`.

## Print

The `PrintAsync` method opens the browser print dialog for the rendered chart. Create a reference to the chart with `@ref` and call the method from an event handler such as a button click. The `PrintCompleted` event is raised after printing completes.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons

<SfCircularChart3D @ref="Chart" Title="Mobile Browser Statistics">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

<SfButton Content="Print" IsPrimary="true" CssClass="e-flat" @onclick="PrintChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task PrintChart()
    {
        await Chart.PrintAsync();
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

## Export

The `ExportAsync` method exports the rendered chart. It accepts the following parameters:

* `type`: The file format of the exported chart, specified by using the `ExportType` enum. The supported values are `ExportType.PNG`, `ExportType.JPEG`, `ExportType.SVG`, `ExportType.PDF`, `ExportType.XLSX`, and `ExportType.CSV`.
* `fileName`: The name of the exported file, without the extension.
* `orientation`: The page orientation of the exported PDF document, specified by using `PdfPageOrientation`. It applies only to the `ExportType.PDF` format.
* `allowDownload`: Set this parameter to `true` to show the browser download prompt, or to `false` to get the exported content without downloading it.
* `isBase64`: Set this parameter to `true` to get the exported content as a Base64 string, or to `false` to get it as a data URL.

N> The PDF and Excel exports require the `Syncfusion.PdfExport` and `Syncfusion.ExcelExport` namespaces to be referenced in the application.

### Image formats

Pass `ExportType.PNG`, `ExportType.JPEG`, or `ExportType.SVG` to export the chart as an image.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons

<SfCircularChart3D @ref="Chart" Title="Mobile Browser Statistics">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

<SfButton Content="Export as PNG" IsPrimary="true" CssClass="e-flat" @onclick="ExportChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task ExportChart()
    {
        await Chart.ExportAsync(ExportType.PNG, "BrowserStatistics");
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

### PDF

Pass `ExportType.PDF` to export the chart to a PDF document. Use the `orientation` parameter to set the page orientation to `PdfPageOrientation.Landscape` or `PdfPageOrientation.Portrait`.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons
@using Syncfusion.PdfExport

<SfCircularChart3D @ref="Chart" Title="Mobile Browser Statistics">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

<SfButton Content="Export as PDF" IsPrimary="true" CssClass="e-flat" @onclick="ExportChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task ExportChart()
    {
        await Chart.ExportAsync(ExportType.PDF, "BrowserStatistics", PdfPageOrientation.Landscape);
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

### Excel and CSV

Pass `ExportType.XLSX` or `ExportType.CSV` to export the data of the chart as a worksheet or a comma-separated file instead of an image.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons
@using Syncfusion.ExcelExport

<SfCircularChart3D @ref="Chart" Title="Mobile Browser Statistics">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

<SfButton Content="Export as XLSX" IsPrimary="true" CssClass="e-flat" @onclick="ExportChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task ExportChart()
    {
        await Chart.ExportAsync(ExportType.XLSX, "BrowserStatistics");
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

### Allow download and Base64 output

By default, the exported file is downloaded by the browser. Set `allowDownload` to `false` to skip the download prompt, and set `isBase64` to `true` to receive the content as a Base64 string. Handle the `ExportCompleted` event to read the result, which is available in the `DataUrl` and `Base64` properties of `CircularChart3DExportEventArgs`.

```cshtml

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D
@using Syncfusion.Blazor.Buttons

<SfCircularChart3D @ref="Chart" ExportCompleted="@OnExportCompleted" Title="Mobile Browser Statistics">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@StatisticsDetails" XName="Browser" YName="Users" Name="Browser">
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true"></CircularChart3DLegendSettings>
</SfCircularChart3D>

<SfButton Content="Export" IsPrimary="true" CssClass="e-flat" @onclick="ExportChart"></SfButton>

@code {
    private SfCircularChart3D Chart;

    private async Task ExportChart()
    {
        await Chart.ExportAsync(ExportType.PNG, "BrowserStatistics", null, false, true);
    }

    private void OnExportCompleted(CircularChart3DExportEventArgs args)
    {
        // args.Base64 holds the Base64 string of the exported chart.
        // args.DataUrl holds the data URL when isBase64 is false.
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

N> The `ExportCompleted` and `PrintCompleted` events are described on the [Events](./events#interaction-and-export-events) page.

## See also

* [Appearance](./appearance)
* [Legend](./legend)
* [Events](./events)
* [Accessibility and localization](./accessibility-and-localization)
* [Getting started with Blazor Web App](./getting-started/blazor-web-app)
