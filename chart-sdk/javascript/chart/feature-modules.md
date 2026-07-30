---
layout: post
title: Module in JavaScript Chart control | Syncfusion
description: Learn here all about Module in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Module 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Module in JavaScript Chart control

The following available modules should be injected to extend the Chart's functionality.

The available chart modules are:

| Module | Description |
|------|-------------|
| **Axis Type Feature Modules** |
| [`Category`](./api/chart/axisModel#valuetype)| Inject this module to use category axis type to visualize category (string type) values.|
| [`DateTime`](./api/chart/axisModel#valuetype)| Inject this module to use date time axis type to visualize datetime values.|
| [`Logarithmic`](./api/chart/axisModel#valuetypec)| Inject this module to use log axis type to visualize logarithmic values.|
| [`DateTimeCategory`](./api/chart/axisModel#valuetype)| Inject this module to use date time category axis type to visualize datetime category values.|
| **Series Type Feature Modules** |
| [`LineSeries`](./api/chart/series)| Inject this module to use the line type series in the chart.|
| [`StepLineSeries`](./api/chart/series)| Inject this module to use the step line type series in the chart.|
| [`StackingLineSeries`](./api/chart/series)| Inject this module to use the stacking line type series in the chart.|
| [`MultiColoredLineSeries`](./api/chart/series)| Inject this module to use the multi colored line type series in the chart.|
| [`SplineSeries`](./api/chart/series)| Inject this module to use the spline type series in the chart.|
| [`AreaSeries`](./api/chart/series)| Inject this module to use the area type series in the chart.|
| [`RangeAreaSeries`](./api/chart/series)| Inject this module to use the range area type series in the chart.|
| [`RangeStepAreaSeries`](./api/chart/series)| Inject this module to use the range step area type series in the chart.|
| [`SplineRangeAreaSeries`](./api/chart/series)| Inject this module to use the spline range area type series in the chart.|
| [`StackingAreaSeries`](./api/chart/series)| Inject this module to use the stacking area type series in the chart.|
| [`StackingStepAreaSeries`](./api/chart/series)| Inject this module to use the stacking step area type series in the chart.|
| [`StepAreaSeries`](./api/chart/series)| Inject this module to use the step area type series in the chart.|
| [`SplineAreaSeries`](./api/chart/series)| Inject this module to use the spline area type series in the chart.|
| [`MultiColoredAreaSeries`](./api/chart/series)| Inject this module to use the multi colored area type series in the chart.|
| [`ColumnSeries`](./api/chart/series)| Inject this module to use the column type series in the chart.|
| [`RangeColumnSeries`](./api/chart/series)| Inject this module to use the range column type series in the chart.|
| [`StackingColumnSeries`](./api/chart/series)| Inject this module to use the stacking column type series in the chart.|
| [`BarSeries`](./api/chart/series)| Inject this module to use the bar type series in the chart.|
| [`StackingBarSeries`](./api/chart/series)| Inject this module to use the stacking bar type series in the chart.|
| [`ScatterSeries`](./api/chart/series)| Inject this module to use the scatter type series in the chart.|
| [`BubbleSeries`](./api/chart/series)| Inject this module to use the bubble type series in the chart.|
| [`PolarSeries`](./api/chart/series)| Inject this module to use the polar type series in the chart.|
| [`RadarSeries`](./api/chart/series)| Inject this module to use the radar type series in the chart.|
| [`HiloSeries`](./api/chart/series)| Inject this module to use the hilo type series in the chart.|
| [`HiloOpenCloseSeries`](./api/chart/series)| Inject this module to use the hilo open close type series in the chart.|
| [`CandleSeries`](./api/chart/series)| Inject this module to use the candle type series in the chart.|
| [`BoxAndWhiskerSeries`](./api/chart/series)| Inject this module to use the box and whisker type series in the chart.|
| [`WaterfallSeries`](./api/chart/series)| Inject this module to use the waterfall type series in the chart.|
| [`HistogramSeries`](./api/chart/series)| Inject this module to use the histogram type series in the chart.|
| [`ParetoSeries`](./api/chart/series)| Inject this module to use the pareto type series in the chart.|
| [`ErrorBar`](./api/chart/series)| Inject this module to use the error bar feature in series.|
| **Indicator Type Feature Modules** |
| [`AccumulationDistributionIndicator`](./technical-indicators)| Inject this module to use the accumulation distribution indicator.|
| [`AtrIndicator`](./technical-indicators)| Inject this module to use the average true range (ATR) indicator.|
| [`BollingerBands`](./technical-indicators)| Inject this module to use the bollinger band indicator.|
| [`EMAIndicator`](./technical-indicators)| Inject this module to use the exponential moving average (EMA) indicator.|
| [`MomentumIndicator`](./technical-indicators)| Inject this module to use the momentum indicator.|
| [`MACDIndicator`](./technical-indicators)| Inject this module to use the moving average convergence divergence (MACD) indicator.|
| [`RsiIndicator`](./technical-indicators)| Inject this module to use the relative Strength index (Rsi) indicator.|
| [`SmaIndicator`](./technical-indicators)| Inject this module to use the simple moving average (SMA) indicator.|
| [`StochasticIndicator`](./technical-indicators)| Inject this module to use the stochastic indicator.|
| [`TmaIndicator`](./technical-indicators)| Inject this module to use the triangular moving average indicator.|
| **Other Feature Modules** |
| [`StripLine`](./strip-line)| Inject this module to use strip line feature.|
| [`Trendlines`](./trend-lines)| Inject this module to use the trendline feature.|
| [`DataLabel`](./data-labels)| Inject this module to use the data label feature.|
| [`ChartAnnotation`](./chart-annotations)| Inject this module to use the annotation feature.|
| [`Legend`](./legend)| Inject this module to use the legend feature.|
| [`Tooltip`](./tool-tip)| Inject this module to use the tooltip feature.|
| [`Zoom`](./zooming)| Inject this module to use the zooming and panning feature.|
| [`DataEditing`](./data-editing)| Inject this module to use the data editing feature.|
| [`Crosshair`](./cross-hair-and-track-ball)| Inject this module to use the crosshair feature.|
| [`Selection`](./selection)| Inject this module to use the selection feature.|
| [`Highlight`](./selection)| Inject this module to use the highlight feature.|
| [`Export`](./api-exportUtils)| Inject this module to use the export feature.|
| [`MultiLevelLabel`](./api-multiLevelLabel)| Inject this module to use the multi level label feature.|

These modules should be injected into the chart using the `Chart.Inject` method or into a standalone component that requires the feature.
