---
layout: post
title: 100% Stacked Column Chart in JavaScript 3D Chart | Syncfusion
description: Learn how to render a 100% stacked column series in the Syncfusion JavaScript 3D Chart using the StackingColumnSeries3D module.
platform: JavaScript
control: 3D Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# 100% Stacked column chart in JavaScript 3D Chart

## 100% Stacked column chart

To render a [100% stacked column](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/100-stacked-column-chart) series, use series [`type`](../../api/chart3d/series3DModel#type) as `StackingColumn100` and inject `StackingColumnSeries3D` module using `Chart3D.Inject(StackingColumnSeries3D)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs1" %}

## 100% Cylindrical stacked column chart

To render a 100% cylindrical stacked column chart, set the [`columnFacet`](../../api/chart3d/series3DModel#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs2" %}

## Series customization

The following properties can be used to customize the `100% stacked column` series.

* [fill](../../api/chart3d/series3DModel#fill) – Specifies the color of the series.
* [opacity](../../api/chart3d/series3DModel#opacity) – Specifies the opacity of the [fill](../../api/chart3d/series3DModel#fill) color.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/stacked-column-cs3" %}