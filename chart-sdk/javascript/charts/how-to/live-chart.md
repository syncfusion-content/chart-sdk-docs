---
layout: post
title: How to create a live chart in JavaScript Charts | Syncfusion
description: Learn how to update a Syncfusion JavaScript Chart at a fixed interval while limiting the number of displayed data points.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to create a live chart in JavaScript Charts

Use `setInterval()` to add data at a fixed interval, remove older points, and refresh the Chart. Keep the interval identifier so the timer can be stopped when the Chart is no longer needed.

## Initialize the Chart

Create an initial data array and bind it to the series through `dataSource`, `xName`, and `yName`. Disable animation when updates occur frequently to avoid repeated transition effects.

```javascript
var chart = new ej.charts.Chart({
    series: [{
        type: 'Line',
        dataSource: series1,
        xName: 'x',
        yName: 'y',
        animation: {
            enable: false
        }
    }]
}, '#element');
```

## Update the data at an interval

On each timer tick:

1. Generate or receive the next data point.
2. Append the point to the data array.
3. Remove the oldest point when the array exceeds the maximum length.
4. Reassign the series data source and call `refresh()`.

```javascript
setInterval(
    function() {
        if (document.getElementById('container') === null) {
            clearInterval(intervalId);
        } else {
            if (Math.random() > .5) {
                value += Math.random() * 2.0;
            }
            series1.push({ x: i, y: value });
            i++;
            series1.shift(); // Used to remove the first element
            chart.series[0].dataSource = series1;
            chart.refresh();
        }
    }, setTimeoutValue);
```

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs12" %}

## Update frequency and performance

- Choose an interval appropriate for the source data and user interface; very short intervals can increase CPU usage.
- Keep a fixed maximum number of displayed points to prevent unbounded memory growth.
- Disable animation for frequent updates.
- Stop the timer when the Chart is hidden, removed, or no longer required.
- For high-frequency streams, batch multiple incoming values into one visual update.
- Use `requestAnimationFrame()` for frame-driven visual updates and `setInterval()` for time-based sampling.
- For remote data, handle connection failures and avoid starting duplicate timers or subscriptions.

## Troubleshooting

- If the Chart does not update, verify that the timer is running and that the series data source is reassigned before `refresh()`.
- If memory usage increases continuously, enforce a maximum point count and stop unused timers.
- If multiple updates occur per interval, verify that `startUpdates()` cannot create duplicate timers.
- If the Chart updates after it is removed, clear the interval during component or page cleanup.
- If values render incorrectly, ensure that the Y values are numbers rather than formatted strings.

## See also

- [Dynamic data update](../dynamic-data-update)
- [Working with data](../working-with-data)
- [Line series](../chart-types/line)
- [Chart performance](../performance)
- [Getting started](../es5-getting-started)