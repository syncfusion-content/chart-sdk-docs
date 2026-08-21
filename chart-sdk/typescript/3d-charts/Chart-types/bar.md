---
layout: post
title: Bar Chart in TypeScript 3D Chart | Syncfusion
description: Learn how to render a bar series in the Syncfusion TypeScript 3D Chart using the BarSeries3D module.
platform: chart-sdk
control: 3D Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# Bar Chart in TypeScript 3D Chart

## Bar chart

To render a [bar series](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/bar-chart), use series [`type`](../../api/chart3d/series3DModel#type) as `Bar` and inject `BarSeries3D` module using `Chart3D.Inject(BarSeries3D)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/bar-cs1" %}

## Bar space and width

The [`columnSpacing`](../../api/chart3d/series3DModel#columnspacing) and [`columnWidth`](../../api/chart3d/series3DModel#columnwidth) properties are used to customize the space between bars.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/bar-cs2" %}

## Grouped bar

The data points can be grouped in the bar type charts by using the [`groupName`](../../api/chart3d/series3DModel#groupname) property. Data points with same group name are grouped together.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/bar-cs3" %}

## Cylindrical bar chart

To render a cylindrical bar chart, set the [`columnFacet`](../../api/chart3d/series3DModel#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/bar-cs4" %}

## Series customization

The following properties can be used to customize the `bar` series.

* [fill](../../api/chart3d/series3DModel#fill) – Specifies the color of the series.
* [opacity](../../api/chart3d/series3DModel#opacity) – Specifies the opacity of the [fill](../../api/chart3d/series3DModel#fill) color.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/bar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/bar-cs5" %}

