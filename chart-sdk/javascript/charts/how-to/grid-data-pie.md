---
layout: post
title: Visualize Grid Records in JavaScript Pie Chart | Syncfusion
description: Learn here all about Grid data pie in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to visualize grid records in pie chart in JavaScript Charts

You can visualize the filtered data that returned by grid in pie chart.

To visualize the data in pie chart, follow the given steps:

**Step 1**:

Initialize the grid with datasource.

**Step 2**:

By using the grid’s `actionComplete` event and `getCurrentViewRecords` method, you can get the current page records. By setting `allowFiltering` value as `true`, you can filter the data. By using the grid’s [`dataBound`](https://ej2.syncfusion.com/documentation/api/grid/index-default#databound) event, you can update the current page filtered records into the chart’s datasource and display the grid filtered data in chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/grid-visual-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/grid-visual-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/grid-visual-cs3" %}