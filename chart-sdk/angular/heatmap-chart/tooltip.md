---
layout: post
title: Tooltip in Angular HeatMap Chart | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Tooltip in Angular HeatMap Chart

Tooltip is used to provide the details of the heat map cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Enable tooltip

The tooltip is used to display information that cannot fit in the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/angular/documentation/api/heatmap#showTooltip) property to **true** and registering the `TooltipService` in the component's `providers` array (see [Module injection](#module-injection) above).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/heatmap-chart/getting-started/tooltip-cs1" %}

## Tooltip template

In heat map, you can customize the tooltip using the [tooltipRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap#tooltiprender) client-side event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/tooltip/tooltiptemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/tooltip/tooltiptemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/heatmap-chart/tooltip/tooltiptemplate-cs1" %}

## Customize the appearance of Tooltip

The  [fill](https://ej2.syncfusion.com/angular/documentation/api/heatmap/tooltipSettings#fill) and [border](https://ej2.syncfusion.com/angular/documentation/api/heatmap/tooltipSettings#border) properties are used to customize the background color and border of the tooltip respectively. The [textStyle](https://ej2.syncfusion.com/angular/documentation/api/heatmap/tooltipSettings#textStyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/tooltip/tooltipSettings-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/tooltip/tooltipSettings-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/heatmap-chart/tooltip/tooltipSettings-cs1" %}

## Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iTooltipEventArgs#data) property in the [tooltipRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap#tooltiprender) event arguments. The [`value`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iTooltipEventArgs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content without modifying the underlying datasource.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/events/events-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/heatmap-chart/events/events-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/heatmap-chart/events/events-cs11" %}

>Note: To use tooltip feature, we need to inject `Tooltip` using `HeatMap.Inject(Tooltip)`.
