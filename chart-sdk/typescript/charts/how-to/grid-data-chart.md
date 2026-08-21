---
layout: post
title: How to visualize grid records in TypeScript Chart | Syncfusion
description: Learn here all about Grid data chart in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to visualize grid records in TypeScript Chart

You can visualize the data that returned by grid in chart.

To visualize the data in chart, follow the given steps:

**Step 1**:

Initialize the grid with datasource.

**Step 2**:

By using the grid’s `actionComplete` event and `getCurrentViewRecords` method, you can get the current page records.

By using the grid’s `databound` event, you can update the current page records into the chart’s datasource and visualize the grid data in chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/grid-visual-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/grid-visual-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/grid-visual-cs2" %}