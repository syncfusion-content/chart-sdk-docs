---
layout: post
title: Tooltip in TypeScript HeatMap Chart | Syncfusion
description: Learn here all about Tooltip in Syncfusion TypeScript HeatMap Chart of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Tooltip in TypeScript HeatMap Chart

Tooltip is used to provide the details of the heat map cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default Tooltip

You can enable the tooltip by setting the [showTooltip](../api/heatmap#showtooltip) property to **true** and injecting the `Tooltip` module using the `HeatMap.Inject(Tooltip)`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs1" %}

## Tooltip template

In heat map, you can customize the tooltip using the [tooltipRender](../api/heatmap#tooltiprender) client-side event.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs2" %}

## Customize the appearance of Tooltip

The  [fill](../api/heatmap/tooltipSettings#fill) and [border](../api/heatmap/tooltipSettings#border) properties are used to customize the background color and border of the tooltip respectively. The [textStyle](../api/heatmap/tooltipSettings#textStyle) property in the tooltip is used to customize the font of the tooltip text.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/tooltip-cs3" %}

## Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/documentation/api/heatmap/itooltipeventargs#data) property in the [tooltipRender](https://ej2.syncfusion.com/documentation/api/heatmap/index-default#tooltiprender) event arguments. The [`value`](https://ej2.syncfusion.com/documentation/api/heatmap/itooltipeventargs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content without modifying the underlying datasource.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/events-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% pet/chart-sdk/typescript/heatmap-chart/events-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/events-cs11" %}

>Note: To use tooltip feature, we need to inject `Tooltip` using `HeatMap.Inject(Tooltip)`.
