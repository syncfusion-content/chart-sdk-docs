---
layout: post
title: Tooltip in JavaScript Charts | Syncfusion
description: Learn here all about Tooltip in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Tooltip in JavaScript Charts

The Chart displays contextual information in a tooltip when the pointer hovers over or a user interacts with a data point on a touch device.


## Default tooltip

By default, the tooltip is not visible. You can enable the tooltip by setting the [`enable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#enable) property to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs18" %}

The `enable` property defaults to `false`. Tooltip movement animation is enabled by default with a duration of `300` milliseconds, and the default fade-out duration is `1000` milliseconds.

## Fixed tooltip

By default, the tooltip tracks the mouse movement. Use the [`location`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#location) property to render the tooltip at fixed pixel coordinates relative to the Chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs49/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs49/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs49" %}

## Format the tooltip

By default, the tooltip displays the x- and y-values of a data point. Additional information can be shown by specifying a custom format. For example, the format `${series.name} ${point.x}` displays the series name along with the x-value of the data point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs19" %}

### Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```javascript
tooltip: {
    enable: true,
    format: '${series.name} (${series.type})<br>${point.x:MMM yyyy} : ${point.y:n2}<br>Size: ${point.size}<br>Opacity: ${series.opacity}'
}
```

In the above example, `point.x` is displayed in month-year format, `point.y` is displayed with two decimal places, `point.size` displays the size value of the data point, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value of the data point, such as DateTime or category values.
- `point.y` – Specifies the numeric y-value of the data point.
- `point.size` – Specifies the size value of the data point, commonly used in bubble series.
- `point.high` and `point.low` – Specify the high and low values, commonly used in range and financial series.
- `point.open` and `point.close` – Specify the open and close values, commonly used in financial series.
- `point.volume` – Specifies the volume value, commonly used in financial series.
- `point.minimum` – Specifies the minimum value, commonly used in box and whisker series.
- `point.maximum` – Specifies the maximum value, commonly used in box and whisker series.
- `point.median` – Specifies the median value, commonly used in box and whisker series.
- `point.lowerQuartile` – Specifies the lower quartile value, commonly used in box and whisker series.
- `point.upperQuartile` – Specifies the upper quartile value, commonly used in box and whisker series.
- `point.outliers` – Specifies the outlier values, commonly used in box and whisker series.
- `series.name` – Specifies the name assigned to the series.
- `series.type` – Specifies the rendering type of the series, such as `Line`, `Spline`, or `Column`.
- `series.opacity` – Specifies the opacity value applied to the series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:*- The availability of point-specific tokens depends on the series type and the values configured in the data source. For example, `point.size` is applicable to bubble series, while `point.median`, `point.lowerQuartile`, and `point.upperQuartile` are applicable to box and whisker series. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

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
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs56/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs56/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs56" %}

### Tooltip template

Use the [`template`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#template) property. The `${x}` and `${y}` placeholders can be used within the template to display the x- and y-values of the corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs20" %}

### Enable highlight

Set the [`enableHighlight`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettingsmodel#enablehighlight) property to **true**, all points in the hovered series are highlighted while the remaining points are dimmed. This behavior improves focus and readability during data analysis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs52/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs52/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs52" %}

## Customize tooltip appearance

The appearance of the tooltip can be customized by using the following properties:
- [`fill`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#fill) to set the background color
- [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#border) to configure the tooltip border
- [`textStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#textstyle) to customize the tooltip text style

The [`highlightColor`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#highlightcolor) property is used to change the color of a data point when it is highlighted during tooltip interaction.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs21" %}

## Access data values in the tooltipRender event

The original data associated with the hovered point can be accessed through the `data.rawData` property of the [`tooltipRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#tooltiprender) event argument. Refer to [`ITooltipRenderEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/chart/itooltiprendereventargs) for the available event data. This allows additional values that are not directly mapped to the chart to be used when customizing the tooltip content. Use `args.data.rawData` to read additional fields from the original point data. Avoid mutating tooltip event data when updating the underlying data source.

In the following example, the `country` and `growth` fields are retrieved from `args.data.rawData` and added to the tooltip content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs57/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs57/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs57" %}

## Closest tooltip

The [`showNearestTooltip`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings#shownearesttooltip) property displays the tooltip for the data point nearest to the pointer, even when the pointer is not directly positioned over the point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs55/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs55/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs55" %}

## Split tooltip

A shared tooltip combines series values in one container, while a split tooltip displays a separate tooltip for each point. Avoid enabling `shared` and `split` together unless the installed Chart version explicitly supports the combination.


The split tooltip displays a separate tooltip for each series at the same data point, making it easier to compare values across multiple series.

Enable this feature by setting the [`split`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettingsmodel#split) property to **true**:

```javascript
tooltip: {
    enable: true,
    split: true
}
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/tooltip-split/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/tooltip-split/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/tooltip-split" %}

## Follow pointer

`showNearestTooltip` resolves the nearest data point, while `followPointer` controls tooltip placement near the pointer. `showNearestPoint` controls whether nearest points are included in a shared tooltip.


The `followPointer` option enables the tooltip to follow the mouse cursor or touch pointer as users interact with the chart, keeping the tooltip near the point of interaction.

Enable this feature by setting the [`followPointer`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettingsmodel#followpointer) property to **true**:

```javascript
tooltip: {
    enable: true,
    followPointer: true
}
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/tooltip-followPointer/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/tooltip-followPointer/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/tooltip-followPointer" %}

## Tooltip distance

The `distance` property controls the spacing between the tooltip and the mouse pointer or target data point. This prevents the tooltip from overlapping with the cursor or nearby chart elements, improving readability.

Set the [`distance`](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettingsmodel#distance) property to specify the gap in pixels. The default value is `0`, and negative values are ignored:

```javascript
tooltip: {
    enable: true,
    distance: 25
}
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/tooltip-distance/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/tooltip-distance/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/tooltip-distance" %}

## Troubleshooting

- If a tooltip is not displayed, verify that `tooltip.enable` is set to `true` and that the ES5 EJ2 bundle is loaded before the Chart script.
- If a template does not render, verify that the template selector matches an existing HTML element and that the placeholder names are valid.
- If custom data is unavailable in `tooltipRender`, verify that the field exists in the original data-source object.
- If inline DateTime, currency, or number formatting is incorrect, verify the active culture and currency configuration.
- If a fixed tooltip is outside the visible Chart area, adjust `location.x` and `location.y` to coordinates within the Chart bounds.
- If split and shared behavior conflicts, enable only the mode required by the design.

## See also

- [TooltipRender event](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#tooltiprender)
- [Internationalization](./internationalization)
- [Accessibility](./accessibility)
- [Format the tooltip value](./how-to/tool-tip-format)
- [Create a table in tooltip](./how-to/tool-tip-table#create-a-table-in-tooltip)
- [Change the cursor to a hand pointer](https://support.syncfusion.com/kb/article/21505/how-to-change-the-cursor-to-a-hand-pointer-in-a-javascript-chart)
