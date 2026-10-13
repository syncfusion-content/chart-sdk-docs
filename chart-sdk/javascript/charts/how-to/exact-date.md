---
layout: post
title: How to show an exact date range in JavaScript Charts | Syncfusion
description: Learn how to display an exact day, month, or hour range by updating axis zoom settings in the Syncfusion JavaScript Chart control.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to show an exact date range in JavaScript Charts

Use the DateTime axis `zoomFactor` and `zoomPosition` properties to display a specific portion of the complete date range. In this example, buttons switch the visible range between the last month and the last day of the dataset.

## Understand zoom factor and zoom position

- `zoomFactor` defines the fraction of the complete axis range that remains visible. Valid values are from `0` to `1`; `1` displays the complete range.
- `zoomPosition` defines where the visible range begins within the complete axis range. Valid values are from `0` to `1 - zoomFactor`.

Calculate these values from the required start and end dates instead of relying on fixed constants.

```javascript
var totalDuration = dataEnd.getTime() - dataStart.getTime();
var visibleDuration = visibleEnd.getTime() - visibleStart.getTime();

var zoomFactor = visibleDuration / totalDuration;
var zoomPosition =
    (visibleStart.getTime() - dataStart.getTime()) / totalDuration;
```

## Apply an exact visible range

Clamp the calculated values to the valid range, assign the values to `primaryXAxis`, and call `refresh()`.

```javascript
function showDateRange(startDate, endDate) {
    var minimum = chartData[0].date.getTime();
    var maximum = chartData[chartData.length - 1].date.getTime();
    var total = maximum - minimum;
    var start = Math.max(minimum, startDate.getTime());
    var end = Math.min(maximum, endDate.getTime());
    var factor;
    var position;

    if (total <= 0 || end <= start) {
        return;
    }

    factor = Math.min(1, Math.max(0.0001, (end - start) / total));
    position = Math.min(1 - factor, Math.max(0, (start - minimum) / total));

    chart.primaryXAxis.zoomFactor = factor;
    chart.primaryXAxis.zoomPosition = position;
    chart.refresh();
}
```

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/exact-date-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/exact-date-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/exact-date-cs1" %}

## Troubleshooting

- If the wrong range appears, verify that the source data is sorted by date and that the first and last points represent the complete range.
- If `zoomFactor` or `zoomPosition` is invalid, clamp both values to their supported ranges.
- If labels are too dense, update `labelFormat` and `intervalType` for the selected range.
- If dates shift by several hours, verify whether the source uses local time or UTC and apply one convention consistently.
- If the scrollbar does not appear, verify that `enableScrollbar` is `true` and that `zoomFactor` is below `1`.

## See also

- [Zooming](../zooming)
- [DateTime axis](../date-time-axis)
- [Initial scrollbar](./initial-scrollbar)
- [Chart events](../chart-events)
- [Getting started](../es5-getting-started)