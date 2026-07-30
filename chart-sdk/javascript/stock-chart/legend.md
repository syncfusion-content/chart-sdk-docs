---
layout: post
title: Legend in JavaScript Stock chart control | Syncfusion
description: Learn here all about Legend in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

<!-- markdownlint-disable MD036 -->

# Legend in JavaScript Stock chart control

<!-- markdownlint-disable MD038 -->

Legend provides information about the series rendered in the Stock Chart. Legend can be added to a Stock Chart by enabling the [`visible`](../api/stock-chart/legendSettings/#visible) option in the [`legendSettings`](../api/stock-chart/legendSettings/).

## Position and Alignment

By using the [`position`](../api/stock-chart/legendSettings/#position) property, legend can be placed at `Left`, `Right`, `Top`, `Bottom` or `Custom` of the Stock Chart. The legend is positioned at the bottom of the Stock Chart, by default.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs1" %}

[`Custom`](../api/stock-chart/legendSettings/#position) position is used to position the legend anywhere in the Stock Chart using x, y coordinates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs2" %}

**Legend Alignment**

The legend can be align as `Center`, `Far` or `Near` to the Stock Chart using [`alignment`](../api/stock-chart/legendSettings/#alignment) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs3" %}

## Customization

To change the legend icon shape, [`legendShape`](../api/stock-chart/stockSeries/#legendshape-string) property in the [`series`](../api/stock-chart/stockSeries/) can be used. By default legend icon shape is `seriesType`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs4" %}

**Legend Size**

By default, legend takes 20% - 25% of the Stock Chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the width vertically, while placing on left or right position of the Stock Chart. The default legend size can be changed by using the [`width`](../api/stock-chart/legendSettings/#width) and [`height`](../api/stock-chart/legendSettings/#height) property of the `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs5" %}

**Legend Item Size**

The size of the legend items can customized by using the [`shapeHeight`](../api/stock-chart/legendSettings/#shapeheight) and [`shapeWidth`](../api/stock-chart/legendSettings/#shapewidth) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs6" %}

## Collapsing Legend Item

By default, series name will be displayed as legend. To skip the legend for a particular series, empty string to the series name can be given.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs7" %}

## Legend Title

The title for legend can be set using [`title`](../api/stock-chart/legendSettings/#title) property in `legendSettings`. Customize the [`fontStyle`](../api/stock-chart/stockChartFont/#fontstyle), [`size`](../api/stock-chart/stockChartFont/#size), [`fontWeight`](../api/stock-chart/stockChartFont/#fontweight), [`color`](../api/stock-chart/stockChartFont/#color), [`textAlignment`](../api/stock-chart/stockChartFont/#textalignment), [`fontFamily`](../api/stock-chart/stockChartFont/#fontfamily), [`opacity`](../api/stock-chart/stockChartFont/#opacity) and [`textOverflow`](../api/stock-chart/stockChartFont/#textoverflow) of legend title. [`titlePosition`](../api/stock-chart/legendSettings/#titleposition) is used to set the legend position in `Top`, `Left` and `Right` position. [`maximumTitleWidth`](../api/stock-chart/legendSettings/#maximumtitlewidth) is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs8" %}

## Legend Template

Legend templates allow you to replace default legend icons and text with custom HTML.This enables branded styles, richer content (icons, multi-line text, badges), improved readability, and localization.The rendered content becomes the legend item and can be styled with CSS.

You can customize the legend items by using the [`template`](https://ej2.syncfusion.com/documentation/api/stock-chart/legendSettingsModel) property of [`legendSettings`](https://ej2.syncfusion.com/documentation/api/stock-chart/legendSettingsModel). Legend interactions (click to toggle series) remain unless [`ToggleVisibility`](https://ej2.syncfusion.com/documentation/api/stock-chart/legendsettings#togglevisibility) is set to false. Templates work with all legend positions, alignments, and paging.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/legend-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/legend-cs9" %}

>Note: To use legend feature, we need to inject `StockLegend` using `StockChart.Inject(StockLegend)`.