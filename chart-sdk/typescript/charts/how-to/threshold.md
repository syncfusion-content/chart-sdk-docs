---
layout: post
title: How to add a threshold in TypeScript Charts | Syncfusion
description: Learn here all about Threshold in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to add a threshold in TypeScript Charts

Use a strip line on the vertical axis to display a horizontal threshold across the Chart. Configure the strip line through `primaryYAxis.stripLines` and set `visible` to `true`.

## Configure the threshold

Set `start` and `end` to define the threshold range. For a thin threshold line, use a small difference between the two values. For a highlighted band, use a wider range.

```javascript
primaryYAxis: {
    stripLines: [{
        start: 30,
        end: 30.1,
        visible: true,
        color: '#ff512f',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
    }]
}
```

A strip line configured on the Y-axis is horizontal. A strip line configured on the X-axis is vertical.

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs18" %}

## Strip-line options

- `start` and `end` define the highlighted axis range.
- `visible` controls whether the strip line is rendered.
- `color` and `opacity` control the threshold appearance.
- `text` and `textStyle` add and format a threshold label.
- `zIndex: 'Behind'` places the threshold behind the series; `zIndex: 'Over'` places it above the series.
- `dashArray` can be used when the threshold should appear dashed.
- Multiple objects can be added to `stripLines` to show several thresholds or ranges.

## Troubleshooting

- If the threshold is outside the plot area, verify that `start` and `end` fall within the axis range.
- If the threshold is vertical instead of horizontal, move `stripLines` from the X-axis to the Y-axis.
- If the threshold obscures the series, set `zIndex` to `Behind` or reduce `opacity`.
- If a thin threshold is difficult to see, increase the difference between `start` and `end` or use a contrasting color.

## See also

- [Strip lines](../strip-line)
- [Numeric axis](../numeric-axis)
- [StripLineSettings API](https://ej2.syncfusion.com/documentation/api/chart/striplineSettings)
- [Getting started](../getting-started)