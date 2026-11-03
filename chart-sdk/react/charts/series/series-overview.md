---
layout: post
title: Series Overview in React Chart | Syncfusion
description: Learn about chart series, single and multiple series, and common series properties in the Syncfusion React Chart component.
platform: chart-sdk
control: Chart Series
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Series Overview in React Chart

## What is a series?

A series represents a set of related data points visualized together on a chart. Each series is plotted using a specific rendering type, such as Line, Column, Area, Spline, or Scatter.

## Single series

A single series refers to a chart that displays only one set of data points. It represents one continuous dataset plotted on the chart, allowing you to visualize trends or values from a single source of data.

<img src="../images/singleseries.png" alt="Single-series chart showing one dataset trend">

## Multiple series

A multiple series chart displays two or more datasets together, allowing you to compare trends or values across different series.

<img src="../images/line.png" alt="Multi-series chart showing multiple dataset trend">

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/series/series-overview/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/series/series-overview/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/series/series-overview/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/series/series-overview/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/series/series-overview" %}


## Common series properties

| Property | Description |
|---|---|
| [type](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Series rendering type: `Line`, `Column`, `Area`, `Bar`, `Spline`, `Scatter`, etc. |
| [dataSource](https://ej2.syncfusion.com/react/documentation/api/chart/series#datasource) | Array or remote data source bound to the series. |
| [xName](https://ej2.syncfusion.com/react/documentation/api/chart/series#xname) | Field name in the data source used for X-axis values. |
| [yName](https://ej2.syncfusion.com/react/documentation/api/chart/series#yname) | Field name in the data source used for Y-axis values. |
| [name](https://ej2.syncfusion.com/react/documentation/api/chart/series#name) | Series label shown in the legend and tooltips. |
| [visible](https://ej2.syncfusion.com/react/documentation/api/chart/series#visible) | Determines whether the series is displayed on the chart. |
| [fill](https://ej2.syncfusion.com/react/documentation/api/chart/series#fill) | Fill color or gradient for the series. |
| [width](https://ej2.syncfusion.com/react/documentation/api/chart/series#width) | Stroke width for line-type series. |
| [marker](https://ej2.syncfusion.com/react/documentation/api/chart/series#marker) | Object configuring data point markers (visibility, size, shape, fill). |
| [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/series#opacity) | Series transparency (0.0 - 1.0). |
| [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/series#dasharray) | Dash pattern for stroke lines (for example: `"5,3"`). |
| [animation](https://ej2.syncfusion.com/react/documentation/api/chart/series#animation) | Animation options (enable, duration, delay) for series rendering. |
| [enableTooltip](https://ej2.syncfusion.com/react/documentation/api/chart/series#enabletooltip) | Enable or disable tooltip for the series points. |
| [columnSpacing](https://ej2.syncfusion.com/react/documentation/api/chart/series#columnspacing) | Spacing between bars/columns for Column/Bar series. |
| [columnWidth](https://ej2.syncfusion.com/react/documentation/api/chart/series#columnwidth) | Width of columns/bars (fractional value 0-1 or pixel value). |
| [border](https://ej2.syncfusion.com/react/documentation/api/chart/series#border) | Border settings (color, width) for Area, Column, and Bar series. |
| [legendShape](https://ej2.syncfusion.com/react/documentation/api/chart/series#legendshape) | Shape/icon used in the legend for the series. |
| [emptyPointSettings](https://ej2.syncfusion.com/react/documentation/api/chart/series#emptypointsettings) | How to render empty/null points (gap, zero, average, etc.). |
| [errorBar](https://ej2.syncfusion.com/react/documentation/api/chart/series#errorbar) | Configuration to render error bars for each point. |
| [trendlines](https://ej2.syncfusion.com/react/documentation/api/chart/series#trendlines) | Add trendlines (Linear, Polynomial, Moving Average, etc.). |
| [dataLabel](https://ej2.syncfusion.com/react/documentation/api/chart/datalabelsettingsmodel) | Configuration object for displaying the value of each data point directly on the chart. |

## Troubleshooting

The following symptoms map to the most common configuration issues.

- **Series does not render**: Confirm that the series module (for example, `LineSeries`) is injected and that the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) is valid.
- **Data points are missing**: Verify that the fields referenced by `xName` and `yName` exist on every record and that the bound array is not empty.
- **Legend does not show a label**: Confirm that the `name` property is set on each `<SeriesDirective>` element.
- **Series renders on top of another axis unexpectedly**: Verify that the data values fall within the configured `minimum` and `maximum` of the bound `primaryXAxis` or `primaryYAxis`.

## See also

* [Data label](../chart-elements/data-labels)
* [Tooltip](../chart-interactive/tool-tip)
* [Legend](../chart-elements/legend)
* [Axis customization](../axis/axis-customization)
* [Working with data](../data-binding/working-with-data)
