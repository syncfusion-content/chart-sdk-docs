---
layout: post
title: How to format tooltip in JavaScript Charts | Syncfusion
description: Learn here all about Tool tip format in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to format tooltip in JavaScript Charts

Use the Chart `tooltipRender` event to replace the default tooltip text with a formatted DateTime value. Retrieve the current point's X value from `args.point.x`, format it with `ej.base.Internationalization`, and assign the result to `args.text`.

## Enable the tooltip

Set `tooltip.enable` to `true` so the Chart raises `tooltipRender` before displaying a tooltip.

```javascript
tooltip: {
    enable: true
}
```

## Format the DateTime value

Create an `Internationalization` instance once and reuse it inside the event handler. Convert `args.point.x` to a valid `Date`, format the value, and set `args.text`.

```javascript
tooltipRender: function(args) {
    var intl = new ej.base.Internationalization();
    var formattedString = intl.formatDate(new Date(args.point.x), { skeleton: 'yMd' });
    args.text = formattedString;
}
```

The `yMd` skeleton produces a locale-aware year, month, and day representation. Use a different supported skeleton when the tooltip requires time or another date granularity.

This formatting is also available through the tooltip's inline `format` property when the required output can be expressed with supported tooltip placeholders; use `tooltipRender` when custom date conversion or conditional formatting is required.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs19" %}

## Formatting considerations

- `args.point.x` contains the current point's mapped X value.
- `args.text` replaces the tooltip text for the current point.
- `formatDate()` formats a JavaScript `Date` according to the selected locale and options.
- `skeleton: 'yMd'` formats a date; time-focused skeletons can be used when the X value includes time.
- JavaScript `Date` parsing can apply local-time or UTC conversions, so use one time-zone convention consistently in the data source.
- When `tooltip.shared` is enabled, verify the event argument shape and desired output for every series before replacing the complete tooltip text.

## Troubleshooting

- If no tooltip appears, verify that `tooltip.enable` is `true` and Tooltip support is available in the loaded EJ2 ES5 bundle.
- If the date is invalid, verify that `args.point.x` contains a valid Date, timestamp, or parseable date value.
- If the tooltip shows only the date, append the point value or series name when both are required.
- If formatting does not follow the expected locale, configure and load the required localization data before creating the Chart.
- If the axis uses DateTime values but labels are incorrect, verify that `primaryXAxis.valueType` is `DateTime`.

## See also

- [Tooltip](../tool-tip)
- [DateTime axis](../date-time-axis)
- [TooltipRender API](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#tooltiprender)
- [Internationalization](https://ej2.syncfusion.com/javascript/documentation/common/internationalization)
- [Getting started](../es5-getting-started)
