---
layout: post
title: Annotations in JavaScript Charts | Syncfusion
description: Learn here all about Chart annotations in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Annotations in JavaScript Charts

Chart annotations allow highlighting specific areas of the chart using text, shapes, images, or custom HTML elements. Annotations can be used to emphasize trends, mark thresholds, show custom notes, or display additional information directly inside the chart area.

Annotations are added using the `annotations` option. Set the [`content`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#content) property to reference the element that should be rendered within the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs1" %}

## Positioning annotations

Annotations are positioned using the [`x`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#x) and [`y`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#y) properties. The interpretation of these values depends on the `coordinateUnits` setting:

- When `coordinateUnits` is `Pixel`: x and y represent pixel offsets from the chart area origin.
- When `coordinateUnits` is `Point`: x and y represent actual data values on the respective axes (use axis names with `xAxisName` and `yAxisName` if multiple axes exist).

## Region

Annotations can be positioned relative to either the overall `Chart` area or a specific `Series`. When placed relative to the chart, the annotation uses the chart’s coordinate system. When placed relative to a series, the annotation aligns with that series' data points. By default, annotations are placed with respect to the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs2" %}

## Coordinate units

Use the [`coordinateUnits`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#coordinateunits) property to define how annotation coordinates are interpreted. Choose between:

- **Pixel** – The annotation is positioned using fixed pixel values within the chart area (use x and y pixel offsets).  
- **Point** – The annotation is positioned based on chart data points (use axis values for x and y positioning).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs3" %}

## Alignment

Annotations support [`verticalAlignment`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#verticalalignment) and [`horizontalAlignment`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#horizontalalignment) properties. The `verticalAlignment` can be set to `Top`, `Bottom`, or `Middle`, and the `horizontalAlignment` can be set to `Near`, `Far`, or `Center`. Alignment works with both Pixel and Point coordinate units.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs4" %}

## Adding Y-Axis subtitle using annotations

You can add a subtitle to the chart y-axis by setting an HTML div element in the `content` property of the annotation. Set the [`coordinateUnits`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettings#coordinateunits) to `Pixel` and customize the x and y position values to place the text at your desired location.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs5" %}

## See also

* [Show total stacking values in data label](https://ej2.syncfusion.com/javascript/documentation/chart/how-to/stacking-total#show-the-total-value-for-stacking-series-in-data-label)
* [Create footer and watermark for chart](https://ej2.syncfusion.com/javascript/documentation/chart/how-to/footer#create-footer-and-watermark-for-chart)
