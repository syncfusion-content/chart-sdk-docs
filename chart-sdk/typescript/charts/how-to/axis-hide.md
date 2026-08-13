---
layout: post
title: How to hide axis on legend click in TypeScript Chart | Syncfusion
description: Learn here all about Axis hide in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to hide axis on legend click in TypeScript Chart

By using the [`chartMouseClick`](../../api/chart/chartModel/#chartmouseclick) event, you can hide the axis line through legend.

To hide the axis line through legend click, follow the given steps:

**Step 1**:

Create a chart with multiple axes.

By using the [`chartMouseClick`](../../api/chart/chartModel/#chartmousemove) event, you can get the legend's target ids. Using this event, you can also get the `yAxisName` of each axis, based on which you can hide the axis line when clicking the legend.

The following code sample demonstrates the output.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs16" %}