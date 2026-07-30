---
layout: post
title: Api zoomSettingsModel in TypeScript Chart control | Syncfusion
description: Learn here all about Api zoomSettingsModel in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Api zoomSettingsModel 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Api zoomSettingsModel in TypeScript Chart control

Interface for a class ZoomSettings

## Properties

### enableDeferredZooming `boolean`

If set to true, zooming will be performed on mouse up. It requires `enableSelectionZooming` to be true.
```
<div id='Chart'></div>
```
```ts
let chart: Chart = new Chart({
...
   zoomSettings: {
     enableSelectionZooming: true,
     enableDeferredZooming: false
   }
...
});
chart.appendTo('#Chart');
```

### enableMouseWheelZooming `boolean`

If set to true, chart can be zoomed by using mouse wheel.

### enablePan `boolean`

Specifies whether chart needs to be panned by default.

### enablePinchZooming `boolean`

If to true, chart can be pinched to zoom in / zoom out.

### enableScrollbar `boolean`

Specifies whether axis needs to have scrollbar.

### enableSelectionZooming `boolean`

If set to true, chart can be zoomed by a rectangular selecting region on the plot area.

### mode `string`

Specifies whether to allow zooming vertically or horizontally or in both ways. They are,
* x,y: Chart can be zoomed both vertically and horizontally.
* x: Chart can be zoomed horizontally.
* y: Chart can be zoomed  vertically.
 It requires `enableSelectionZooming` to be true.
```
<div id='Chart'></div>
```
```ts
let chart: Chart = new Chart({
...
   zoomSettings: {
     enableSelectionZooming: true,
     mode: 'XY'
   }
...
});
chart.appendTo('#Chart');
```

### toolbarItems `ToolbarItems[]`

Specifies the toolkit options for the zooming as follows:
* Zoom
* ZoomIn
* ZoomOut
* Pan
* Reset
