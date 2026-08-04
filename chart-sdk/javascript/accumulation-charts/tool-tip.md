---
layout: post
title: Tooltip in JavaScript Accumulation chart control | Syncfusion
description: Learn here all about Tooltip in Syncfusion JavaScript Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Tooltip in JavaScript Accumulation chart control

Tooltip for the accumulation chart can be enabled by using the [`enable`](../api/accumulation-chart/tooltipSettingsModel/#enable) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs66/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs66/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs66" %}

>Note: To use tooltip feature, inject the `AccumulationTooltip` using the `Chart.Inject(AccumulationTooltip)` method.

## Header

We can specify header for the tooltip using [`header`](../api/accumulation-chart/tooltipSettingsModel/#header) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs67/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs67/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs67" %}

## Format

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs68/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs68/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs68" %}

## Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](../api/accumulation-chart/tooltipSettingsModel/#format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```js
tooltip: {
    enable: true,
    format: '${series.name}<br>${point.x} : ${point.y:n2}<br>Percentage: ${point.percentage:p1}<br>Opacity: ${series.opacity}'
}
```

In the above example, `point.y` is displayed with two decimal places, `point.percentage` is displayed in percentage format, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value or category value of the accumulation chart point.
- `point.y` – Specifies the numeric y-value of the accumulation chart point.
- `point.percentage` – Specifies the percentage contribution of the point value in the accumulation chart.
- `point.text` – Specifies the text value mapped to the point, when text mapping is configured.
- `point.tooltip` – Specifies the tooltip value mapped from the data source, when tooltip mapping is configured.
- `point.index` – Specifies the index position of the point in the accumulation chart.
- `point.color` – Specifies the fill color applied to the point.
- `point.visible` – Specifies the visibility state of the point.
- `series.name` – Specifies the name assigned to the accumulation chart series.
- `series.type` – Specifies the rendering type of the accumulation chart series, such as `Pie`, `Doughnut`, `Pyramid`, or `Funnel`.
- `series.opacity` – Specifies the opacity value applied to the accumulation chart series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the accumulation chart series type. For example, `point.percentage` is useful for pie and doughnut charts, while `point.text` and `point.tooltip` depend on the corresponding field mappings. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

The following format types are supported:

- DateTime formats such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- Number formats such as:
  - `n2` – number with two decimal places
  - `n0` – number without decimals
  - `c2` – currency format
  - `p1` – percentage format
  - `e1` – exponential notation 

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/tooltip-format/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/tooltip-format/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/tooltip-format" %}

## Tooltip Template

Any HTML element can be displayed in the tooltip by using the [`template`](../api/accumulation-chart/tooltipSettingsModel/#template) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs69/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs69/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs69" %}

## Fixed tooltip

By default, tooltip track the mouse movement, but you can set a fixed position for the tooltip by using the [`location`](../api/accumulation-chart/tooltipSettingsModel/#location) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs180/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs180/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs180" %}

## Customization

The [`fill`](../api/accumulation-chart/tooltipSettingsModel/#fill) and [`border`](../api/accumulation-chart/tooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](../api/accumulation-chart/tooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text. The [`highlightColor`](../api/accumulation-chart/accumulationChartModel/#highlightcolor) property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs70/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs70/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs70" %}

## To customize individual tooltip

Using [`tooltipRender`](../api/accumulation-chart/iAccTooltipRenderEventArgs/) event, you can customize a tooltip for particular point. event, you can customize a tooltip for particular point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs71/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs71/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs71" %}

## Enable highlight

By setting the [`enableHighlight`](../api/accumulation-chart/tooltipSettingsModel/#enablehighlight) property to **true**, the hovered pie slice is highlighted, while the remaining slices are dimmed, enhancing focus and clarity.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs476/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs476/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs476" %}

## Follow pointer

The follow pointer feature enables the tooltip to follow the mouse cursor or touch pointer as users interact with the accumulation chart. This provides a more dynamic and intuitive experience by keeping the tooltip close to the user's point of interaction.

Enable this feature by setting the [`followPointer`](../api/accumulation-chart/tooltipSettingsModel#followpointer) property to **true**:

```js
tooltip: { 
	enable: true, 
	followPointer: true 
}
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/tooltip-followPointer-Acc/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/tooltip-followPointer-Acc/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/tooltip-followPointer-Acc" %}
