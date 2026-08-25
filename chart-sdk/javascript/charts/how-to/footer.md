---
layout: post
title: How to add footer and watermark in JavaScript Charts | Syncfusion
description: Learn how to add and customize footers in Syncfusion JavaScript Charts to provide additional context, annotations, and chart information.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to add footer and watermark in JavaScript Charts

By using `annotation`, you can place any html elements to chart in a desired view.

To create footer and watermark for chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By using the `content` option of the annotation object, you can specify the id of the element that needs to be displayed in the chart area as follow,

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/table-cs3" %}