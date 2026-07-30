---
layout: post
title: Tooltip in JavaScript 3D Circular Chart control | Syncfusion
description: Learn here all about tooltip in Syncfusion JavaScript 3D Circular Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Tooltip in JavaScript 3D Circular Chart control

The 3D Circular Chart will display details about the points through a tooltip, when the mouse is moved over a specific point. By default, the tooltip is not visible. It can be enabled by using the `enable` property in `tooltip` to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip" %}

>To use tooltip feature, inject the `CircularChartTooltip3D` using the `CircularChart3D.Inject(CircularChartTooltip3D)` method.

## Header

You can specify a header for the tooltip by using the `header` property in `tooltip`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/header/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/header/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/header" %}

## Format

By default, the tooltip shows information about the x and y values in points. Additionally, more information can be displayed in the tooltip by using the `format` property. For example, the format `${series.name} : ${point.x}` shows the series name and the point's x value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-format/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-format/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-format" %}

## Inline tooltip formatting

The tooltip content can be formatted directly within the `format` property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier is applied by adding a colon (`:`) followed by the required format.

For example:

```js
tooltip: {
    enable: true,
    format: '${series.name}<br>${point.x:MMM yyyy} : ${point.y:n2}<br>Percentage: ${point.percentage:p1}<br>Opacity: ${series.opacity}'
}
```

In the above example, `point.x` is displayed in month-year format, `point.y` is displayed with two decimal places, `point.percentage` is displayed in percentage format, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value or category value of the 3D circular chart point.
- `point.y` – Specifies the numeric y-value of the 3D circular chart point.
- `point.percentage` – Specifies the percentage contribution of the point value in the 3D circular chart.
- `point.text` – Specifies the text value mapped to the point, when text mapping is configured.
- `point.tooltip` – Specifies the tooltip value mapped from the data source, when tooltip mapping is configured.
- `point.index` – Specifies the index position of the point in the 3D circular chart.
- `point.color` – Specifies the fill color applied to the point.
- `point.visible` – Specifies the visibility state of the point.
- `series.name` – Specifies the name assigned to the 3D circular chart series.
- `series.opacity` – Specifies the opacity value applied to the 3D circular chart series.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the 3D circular chart series. For example, `point.percentage` is useful for pie and doughnut charts, while `point.text` and `point.tooltip` depend on the corresponding field mappings. String tokens such as `series.name`, `point.text`, `point.tooltip`, `point.color`, and `point.visible` return string values, so DateTime or number formatting is not applied to these tokens.

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
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/inline-format/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/inline-format/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/inline-format" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the `template` property in the tooltip.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/template" %}

## Fixed tooltip

By default, the tooltip tracks the mouse movement, but it can be set to a fixed position using the `location` property in `tooltip`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/fixed-tooltip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/fixed-tooltip/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/fixed-tooltip" %}

## Customization

The `fill` and `border` properties are used to customize the background color and border of the tooltip, respectively. The `textStyle` property in the tooltip is used to customize the font of the tooltip text. Additionally, the `highlightColor` property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-custom/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-custom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-custom" %}

## Customization of individual tooltip

Using the `tooltipRender` event, you can customize tooltip values for a particular point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-event/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-event/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-circular-charts/user-interaction/tooltip-event" %}