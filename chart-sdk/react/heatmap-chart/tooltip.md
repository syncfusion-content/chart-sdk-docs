---
layout: post
title: Tooltip in React HeatMap Chart | Syncfusion
description: Show tooltips on the React HeatMap Chart by enabling showTooltip, customize content with tooltipRender, and style via fill, border, and textStyle.
control: Tooltip 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Tooltip in React HeatMap Chart

Tooltip is used to provide the details of the heatmap cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default tooltip

The tooltip is used to display information that cannot be shown using data labels due to space constraints. Enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/react/documentation/api/heatmap#showtooltip) property to **true** and injecting the `Tooltip` module via `<Inject services={[..., Tooltip]} />`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/tooltip-cs1" %}

## Tooltip template

In heatmap, you can customize the tooltip using the [tooltipRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#tooltiprender) client side event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/tooltip-cs2" %}

## Customize the appearance of Tooltip

The  [fill](https://ej2.syncfusion.com/react/documentation/api/heatmap/tooltipSettings#fill) and [border](https://ej2.syncfusion.com/react/documentation/api/heatmap/tooltipSettings#border) properties are used to customize the background color and border of the Tooltip respectively. The [textStyle](https://ej2.syncfusion.com/react/documentation/api/heatmap/tooltipSettings#textStyle) property in the Tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/tooltip-cs3" %}

## Access the datasource record in the tooltip

The complete datasource record associated with a hovered HeatMap cell can be accessed using the [`data`](https://ej2.syncfusion.com/react/documentation/api/heatmap/iTooltipEventArgs#data) property in the [tooltipRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#tooltiprender) event arguments. The [`value`](https://ej2.syncfusion.com/react/documentation/api/heatmap/iTooltipEventArgs#value) property contains only the rendered cell value, whereas the `data` property contains the corresponding datasource record. This allows additional mapped or unmapped fields from the datasource to be used when customizing the tooltip content without modifying the underlying datasource.

The value returned through the `data` property depends on the datasource binding type:

* In JSON cell binding, it contains the complete JSON object associated with the hovered cell.
* In JSON table binding, it contains the complete JSON row object associated with the hovered cell.
* In array cell binding, it contains the complete array associated with the hovered cell.
* In array table binding, it contains the complete row array associated with the hovered cell.

The following example demonstrates how to access the complete datasource record through the `data` property and use its additional fields to customize the tooltip content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/heatmap-chart/code-path/events-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/heatmap-chart/events-cs11" %}

>Note: To use tooltip feature, we need to inject `Tooltip` module into the `services`.
