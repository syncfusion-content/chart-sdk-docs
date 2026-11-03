---
layout: post
title: How to add a dotted line in TypeScript Charts | Syncfusion
description: Learn here all about Dotted line in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to add a dotted line in TypeScript Charts

Use the Chart `annotations` collection to position custom HTML at a data point. The sample renders a horizontal dotted reference line by using an annotation whose `content` contains a styled HTML element.

## Configure the annotation

Set [`coordinateUnits`](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings#coordinateunits) to `Point` so the annotation `x` and `y` values are interpreted as axis values. The default coordinate unit is `Pixel`.

Set [`region`](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings#region) to `Series` to position the annotation relative to the plot area. The default region is `Chart`.

The main annotation properties used in this example are:

- [`content`](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings#content): Specifies the custom HTML rendered by the annotation.
- [`x`](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings#x): Specifies the horizontal axis value when `coordinateUnits` is `Point`.
- [`y`](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings#y): Specifies the vertical axis value when `coordinateUnits` is `Point`.
- `xAxisName` and `yAxisName`: Associate the annotation with named axes when the Chart uses multiple axes.

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs17" %}

## Troubleshooting

- If the annotation appears in the wrong location, verify `coordinateUnits`, `region`, `x`, and `y`.
- If a category-axis annotation is missing, verify that `x` exactly matches a category value in the series data.
- If the line is clipped or extends outside the Chart, adjust the CSS width or use a strip line for a plot-wide threshold.
- If named axes are used, verify that `xAxisName` and `yAxisName` exactly match existing axis names.

## See also

- [Chart annotations](../chart-annotations)
- [Strip lines](../strip-line)
- [ChartAnnotationSettings API](https://ej2.syncfusion.com/documentation/api/chart/chartannotationsettings)
- [Getting started](../getting-started)