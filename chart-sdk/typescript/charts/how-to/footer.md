---
layout: post
title: How to add a footer and watermark in TypeScript Charts | Syncfusion
description: Learn how to add and customize a footer and watermark in the Syncfusion TypeScript Chart control by using annotations.
platform: chart-sdk
control: Charts 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to add a footer and watermark in TypeScript Charts

Use the Chart `annotations` collection to render custom HTML as a footer or watermark. Use point coordinates for content tied to axis values and pixel coordinates for content positioned within the Chart area.

## Configure the watermark

Set `coordinateUnits` to `Point` to position the watermark with X-axis and Y-axis values. In the following example, the watermark is positioned at the `Wed` category and the Y value `20`.

## Configure the footer

Set `coordinateUnits` to `Pixel` to position the footer with pixel coordinates. Pixel coordinates are measured within the annotation region, so fixed values must be adjusted when the Chart dimensions change.

The main annotation properties used by the example are:

- `content`: Specifies the HTML string or element selector rendered by the annotation.
- `x` and `y`: Specify point values or pixel coordinates according to `coordinateUnits`.
- `coordinateUnits`: Accepts `Point` or `Pixel`.
- `region`: Positions the annotation relative to the Chart or series region.
- `horizontalAlignment` and `verticalAlignment`: Align the annotation around its calculated position.

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/table-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/table-cs3" %}

## Troubleshooting

- If an annotation is missing, verify that the `content` selector matches an existing template element.
- If the watermark is in the wrong location, verify `coordinateUnits`, `region`, `x`, and `y`.
- If the footer is clipped, adjust the pixel coordinates, Chart dimensions, or margins.
- If footer placement changes after resizing, recalculate its pixel coordinates or move the footer outside the Chart.

## See also

- [Chart annotations](../chart-annotations)
- [ChartAnnotationSettings API](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings)
- [Chart dimensions](../chart-dimensions)
- [Getting started](../getting-started)