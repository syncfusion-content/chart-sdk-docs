---
layout: post
title: Cross hair in JavaScript Stock chart control | Syncfusion
description: Learn here all about Cross hair in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Cross hair 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Cross hair in JavaScript Stock chart control

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](../api/chart/crosshairSettingsModel/#enable) property in the `crosshair`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs12" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](../api/chart/crosshairTooltipModel/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs13" %}

## Customization

The [`fill`](../api/chart/crosshairTooltipModel/#fill) and [`textStyle`](../api/chart/crosshairTooltipModel/#textstyle) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](../api/chart/crosshairSettingsModel/#line) property in the crosshair.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs14" %}

**Snap to data**

Enabling the [`snapToData`](../api/chart/crosshairSettingsModel/#snaptodata) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs39" %}

>Note: To use crosshair feature, we need to inject `Crosshair` module `StockChart.Inject(Crosshair)` method.

## Crosshair label customization

The [`crosshairLabelRender`](../api/stock-chart/stockChartModel#crosshairlabelrender) event is triggered before each crosshair axis label is rendered in the stock chart. This event provides the ability to customize the appearance and content of crosshair labels, or to conditionally prevent specific labels from being displayed.

The event arguments include:

* `text` – The default text for the crosshair label. You can modify this value to display custom content.
* `value` – The actual data value at the crosshair position.
* `axisName` – The name of the axis associated with the label.
* `axisOrientation` – The orientation of the axis, either `Horizontal` or `Vertical`.
* `textStyle` – Font properties for the label text, allowing customization of font family, size, weight, and color.
* `fill` – The background color of the crosshair label.
* `cancel` – Set this to **true** to prevent the label from being rendered.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/crosshair-label-render/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/crosshair-label-render/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/crosshair-label-render" %}
