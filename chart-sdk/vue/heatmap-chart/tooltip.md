---
layout: post
title: Tooltip in Vue HeatMap Chart | Syncfusion
description: Show tooltips on the Syncfusion Vue HeatMap Chart control with customizable templates, fill, border, and text style for richer cell information display.
control: Tooltip 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Tooltip in Vue HeatMap Chart

Tooltip is used to provide the details of the heatmap cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default tooltip

You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/vue/documentation/api/heatmap#showtooltip) property to **true** and injecting the `Tooltip` module into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs1" %}

## Tooltip template

In heatmap, you can customize the tooltip using the [tooltipRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap#tooltiprender) client side event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs2" %}

## Customize the appearance of Tooltip

The [fill](https://ej2.syncfusion.com/vue/documentation/api/heatmap/tooltipSettings#fill) and [border](https://ej2.syncfusion.com/vue/documentation/api/heatmap/tooltipSettings#border) properties are used to customize the background color and border of the Tooltip respectively. The [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/tooltipSettings#textstyle) property in the Tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/tooltip-cs3" %}

## Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iTooltipEventArgs#data) property in the [tooltipRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap#tooltiprender) event arguments. The [`value`](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iTooltipEventArgs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content without modifying the underlying datasource.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/events-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/events-cs11" %}

>Note: To use tooltip feature, we need to inject `Tooltip` module into the `provide`.