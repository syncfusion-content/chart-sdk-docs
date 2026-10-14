---
layout: post
title: How to customize markers in TypeScript Charts | Syncfusion
description: Learn here all about Marker customization in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to customize markers in TypeScript Charts

Use the Chart [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#pointrender) event to customize the marker shape for each data point before the point is rendered. Set `marker.visible` to `true`, then assign a supported shape to `args.shape`.

## Enable markers

Markers are not displayed unless `marker.visible` is set to `true`. Configure a default shape and size on the series before applying per-point customization.

```javascript
marker: {
    visible: true,
    width: 10,
    height: 10,
    shape: 'Diamond'
}
```

The marker configuration also supports properties such as `fill`, `border`, `opacity`, `offset`, `isFilled`, and `imageUrl`. `imageUrl` requires `shape: 'Image'`.

## Customize each point in pointRender

The `pointRender` event runs for each point. Use `args.point.index` to select the required shape and assign it to `args.shape`.

```javascript
var shapes = [
   'Diamond', 'Circle','Rectangle', 'Line', 'Triangle', 'Rectangle'
];
var shapeRender = function(args) {
    args.shape = shapes[args.point.index];
}
```

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs13" %}

## Supported marker shapes

Common marker shapes include `Circle`, `Rectangle`, `Triangle`, `Diamond`, `HorizontalLine`, `VerticalLine`, `Pentagon`, `InvertedTriangle`, `Image`, and `Star`.

## Troubleshooting

- If markers are missing, verify that `marker.visible` is `true` and that the selected series type supports markers.
- If every point uses the same shape, verify that `pointRender` is assigned to the Chart and that `args.shape` is updated.
- If a marker is missing for later points, verify that the shape array index is valid or use modulo-based selection.
- If an image marker is not displayed, set `shape` to `Image` and verify that `imageUrl` is valid and accessible.
- If data labels are missing, set `marker.dataLabel.visible` to `true` and verify that `name` matches a data-source field.

## See also

- [Data markers](../data-markers)
- [MarkerSettingsModel API](https://ej2.syncfusion.com/documentation/api/chart/markersettingsmodel)
- [PointRender API](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#pointrender)
- [Chart events](../chart-events)
- [Getting started](../getting-started)