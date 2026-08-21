---
layout: post
title: How to add footer and watermark in TypeScript Chart | Syncfusion
description: Learn here all about Footer in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to add footer and watermark in TypeScript Chart

By using `annotation`, you can place any html elements to chart in a desired view.

To create footer and watermark for chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By using the `content` option of the annotation object, you can specify the id of the element that needs to be displayed in the chart area as follow,

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/table-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/table-cs3" %}