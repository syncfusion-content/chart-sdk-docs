---
layout: post
title: Rendering methods in JavaScript Charts | Syncfusion
description: Learn here all about Render methods in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Rendering methods in JavaScript Charts

The Chart supports the following rendering methods:

- SVG
- Canvas

SVG is the default rendering method. Use Canvas when the application needs to plot a large number of data points or perform high-frequency live updates.

## SVG

SVG is used to render the Chart by default in modern browsers. It provides full support for Chart features such as animation, accessibility, interactivity, printing, and exporting.

No additional configuration is required to use SVG rendering.

## Canvas

Set the [`enableCanvas`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#enablecanvas) property to `true` to render the Chart using Canvas. The property accepts a Boolean value and defaults to `false`.

Canvas rendering is useful in the following scenarios:

- Plotting a large number of data points.
- Performing high-frequency live updates.

```javascript
var chartData = [
    { x: 1, y: 10 },
    { x: 2, y: 15 },
    { x: 3, y: 12 },
    { x: 4, y: 18 },
    { x: 5, y: 16 }
];
var chart = new ej.charts.Chart({
    enableCanvas: true,
    primaryXAxis: {
        valueType: 'Double',
        title: 'Index'
    },
    primaryYAxis: {
        title: 'Value'
    },
    series: [{
        dataSource: chartData,
        xName: 'x',
        yName: 'y',
        type: 'Line'
    }],
    title: 'Canvas Rendering'
}, '#element');
```

### Limitations

- Series animation is not supported in Canvas mode.
- Print and export quality can be lower than SVG when the Canvas is very large.
- Some SVG-specific accessibility hooks and events might not be available in Canvas mode.

> **Note:** Canvas rendering can improve performance for large datasets and frequent updates, but it can limit features that depend on individual SVG elements.

## SVG and Canvas comparison

| Feature | SVG | Canvas |
|---|---|---|
| Default rendering method | Yes | No |
| Series animation | Supported | Not supported |
| Large dataset performance | Moderate | High |
| High-frequency updates | Moderate | High |
| Print and export quality | High | Moderate for very large canvases |
| Accessibility | Full | Limited |

## See also

- [Getting started with JavaScript Charts](./getting-started)
- [Appearance in JavaScript Charts](./appearance)
- [Print and export in JavaScript Charts](./chart-print)
- [Feature modules in JavaScript Charts](./feature-modules)
