---
layout: post
title: Feature modules in JavaScript Charts | Syncfusion
description: Learn here all about Module in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Feature modules in JavaScript charts

Inject the modules listed below to extend the Chart's functionality.

## How to inject modules

In a CommonJS or ES module setup, import the chart and the modules you need, then call `Chart.Inject(...)` with the module classes:

```javascript
import { Chart, Category, LineSeries, Legend, Tooltip } from '@syncfusion/ej2-charts';

Chart.Inject(Category, LineSeries, Legend, Tooltip);

let chart: Chart = new Chart({
  // ...
});
chart.appendTo('#element');
```

In an ES5 (script-tag) setup, the modules are part of the global `ej.charts` namespace. You do not need to call `Chart.Inject` manually because all modules are available on the global `ej.charts` object once the corresponding `ej2-charts.min.js` script is loaded.

## Available chart modules

### Axis type feature modules

| Module | Description |
|------|-------------|
| [`Category`](https://help.syncfusion.com/chart-sdk/javascript/charts/api/chart/axisModel#valuetype) | Inject this module to use a category axis type to visualize category (string-type) values. |
| [`DateTime`](https://help.syncfusion.com/chart-sdk/javascript/charts/api/chart/axisModel#valuetype) | Inject this module to use a DateTime axis type to visualize DateTime values. |
| [`Logarithmic`](https://help.syncfusion.com/chart-sdk/javascript/charts/api/chart/axisModel#valuetype) | Inject this module to use a logarithmic axis type to visualize logarithmic values. |
| [`DateTimeCategory`](https://help.syncfusion.com/chart-sdk/javascript/charts/api/chart/axisModel#valuetype) | Inject this module to use a DateTime category axis type to visualize DateTime category values. |

### Series type feature modules

| Module | Description |
|------|-------------|
| [`LineSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the line type series in the chart. |
| [`StepLineSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the step line type series in the chart. |
| [`StackingLineSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the stacking line type series in the chart. |
| [`MultiColoredLineSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the multi colored line type series in the chart. |
| [`SplineSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the spline type series in the chart. |
| [`AreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the area type series in the chart. |
| [`RangeAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the range area type series in the chart. |
| [`RangeStepAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the range step area type series in the chart. |
| [`SplineRangeAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the spline range area type series in the chart. |
| [`StackingAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the stacking area type series in the chart. |
| [`StackingStepAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the stacking step area type series in the chart. |
| [`StepAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the step area type series in the chart. |
| [`SplineAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the spline area type series in the chart. |
| [`MultiColoredAreaSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the multi colored area type series in the chart. |
| [`ColumnSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the column type series in the chart. |
| [`RangeColumnSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the range column type series in the chart. |
| [`StackingColumnSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the stacking column type series in the chart. |
| [`BarSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the bar type series in the chart. |
| [`StackingBarSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the stacking bar type series in the chart. |
| [`ScatterSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the scatter type series in the chart. |
| [`BubbleSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the bubble type series in the chart. |
| [`PolarSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the polar type series in the chart. Requires a polar axis type. |
| [`RadarSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the radar type series in the chart. Requires a radar axis type. |
| [`HiloSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the hilo type series in the chart. |
| [`HiloOpenCloseSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the hilo open close type series in the chart. |
| [`CandleSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the candle type series in the chart. |
| [`BoxAndWhiskerSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the box and whisker type series in the chart. |
| [`WaterfallSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the waterfall type series in the chart. Requires `ColumnSeries` to be injected. |
| [`HistogramSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the histogram type series in the chart. Requires `ColumnSeries` or `BarSeries` to be injected. |
| [`ParetoSeries`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series) | Inject this module to use the Pareto type series in the chart. Requires `LineSeries` and `ColumnSeries` to be injected. |

> **Module dependencies:** `WaterfallSeries`, `HistogramSeries`, and `ParetoSeries` extend base series types. Inject the base module (such as `ColumnSeries` or `LineSeries`) in addition to the derived module, or the chart will not render the series.

### Indicator type feature modules

| Module | Description |
|------|-------------|
| [`AccumulationDistributionIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the accumulation distribution indicator. |
| [`AtrIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the average true range (ATR) indicator. |
| [`BollingerBands`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the Bollinger Bands indicator. |
| [`EMAIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the exponential moving average (EMA) indicator. |
| [`MomentumIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the momentum indicator. |
| [`MACDIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the moving average convergence divergence (MACD) indicator. |
| [`RsiIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the relative strength index (RSI) indicator. |
| [`SmaIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the simple moving average (SMA) indicator. |
| [`StochasticIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the stochastic indicator. |
| [`TmaIndicator`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalindicator) | Inject this module to use the triangular moving average (TMA) indicator. |

> For indicator configuration options, see [Technical indicators](./technical-indicators).

### Chart-level feature modules

| Module | Description |
|------|-------------|
| [`StripLine`](https://ej2.syncfusion.com/javascript/documentation/api/chart/stripLine) | Inject this module to use the strip line feature. |
| [`Trendlines`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlines) | Inject this module to use the trendline feature. |
| [`DataLabel`](https://ej2.syncfusion.com/javascript/documentation/api/chart/dataLabel) | Inject this module to use the data label feature on series points. |
| [`ChartAnnotation`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotation) | Inject this module to use the annotation feature. |
| [`Legend`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legend) | Inject this module to use the legend feature. |
| [`Tooltip`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltip) | Inject this module to use the chart-level tooltip feature. This is separate from the data-label tooltip rendered on a series point. |
| [`Zoom`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoom) | Inject this module to use the zooming and panning feature. |
| [`DataEditing`](https://ej2.syncfusion.com/javascript/documentation/api/chart/dataEditing) | Inject this module to use the data editing feature. |
| [`Crosshair`](https://ej2.syncfusion.com/javascript/documentation/api/chart/crosshair) | Inject this module to use the crosshair and trackball feature. |
| [`Selection`](https://ej2.syncfusion.com/javascript/documentation/api/chart/selection) | Inject this module to use the selection feature on series points. |
| [`Highlight`](https://ej2.syncfusion.com/javascript/documentation/api/chart/highlight) | Inject this module to use the highlight feature on series points. Use `Highlight` to render a hovered state and `Selection` to render a persisted selected state. |
| [`Export`](https://ej2.syncfusion.com/javascript/documentation/api/chart/export) | Inject this module to use the export feature (PNG, JPEG, SVG, PDF, or print). |
| [`MultiLevelLabel`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axisModel#multilevellabels) | Inject this module to use the multi-level label feature on an axis. |

> **Highlight vs selection:** `Highlight` is triggered on hover and is reset when the pointer leaves. `Selection` persists until cleared programmatically. Inject the module that matches the interaction you want.

## See also

* [Getting started with JavaScript Charts](./es5-getting-started)
* [Chart series configuration](./chart-series)
* [Chart axes configuration](./axis)
* [Tooltip](./tool-tip)
* [Legend](./legend)
* [Crosshair and trackball](./cross-hair-and-track-ball)
* [Technical indicators](./technical-indicators)
