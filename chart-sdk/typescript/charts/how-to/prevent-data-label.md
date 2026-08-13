---
layout: post
title: How to prevent data label in TypeScript Chart | Syncfusion
description: Learn here all about Prevent data label in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: TypeScript
control: Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to prevent data label in TypeScript Chart

To prevent the chart data label when the data value is 0, follow the given steps:

**Step 1**:

Get the point value and check whether the `args.point.y` value is zero or not by using the [`textRender`](../../api/chart/chartModel/#textrender) event. If the value is zero, then set the `args.cancel` to true.

The output will appear as follows,

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs15" %}