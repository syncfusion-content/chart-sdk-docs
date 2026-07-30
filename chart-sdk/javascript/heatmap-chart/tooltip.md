---
layout: post
title: Tooltip in JavaScript Heatmap chart control | Syncfusion
description: Learn here all about Tooltip in Syncfusion JavaScript Heatmap chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Tooltip in JavaScript Heatmap chart control

Tooltip is used to provide the details of the heat map cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default Tooltip

You can enable the tooltip by setting the [showTooltip](../api/heatmap/#showtooltip) property to **true** and injecting the `Tooltip` module using the `HeatMap.Inject(Tooltip)`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs1" %}

## Tooltip template

In heat map, you can customize the tooltip using the [tooltipRender](../api/heatmap/#tooltiprender) client-side event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs2" %}

## Customize the appearance of Tooltip

The  [fill](../api/heatmap/tooltipSettings/#fill) and [border](../api/heatmap/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [textStyle](../api/heatmap/tooltipSettings/#textStyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/tooltip-cs3" %}

>Note: To use tooltip feature, we need to inject `Tooltip` using `HeatMap.Inject(Tooltip)`.
