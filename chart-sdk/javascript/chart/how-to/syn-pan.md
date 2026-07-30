---
layout: post
title: Syn pan in JavaScript Chart control | Syncfusion
description: Learn here all about Syn pan in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Syn pan 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Syn pan in JavaScript Chart control

Using the [`chartMouseMove`](../../api/chart/chartModel/#chartmousemove) event, you can achieve the synchronized panning between multiple charts.

To make a synchronized panning chart, follow the given steps:

**Step 1**:

Initially create two charts, and enable `zoomSettings` for both charts.

To use the [`chartMouseMove`](../../api/chart/chartModel/#chartmousemove) event, assign the first chart's `zoomFactor` and `zoomPosition` values to the second chart. Now, pan the first zoomed chart, and then the second chart will be panned automatically based on `zoomFactor` and `zoomPosition`.

The following code sample demonstrates the output.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs20" %}