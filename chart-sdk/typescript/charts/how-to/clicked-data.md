---
layout: post
title: How to get pie clicked data in TypeScript Chart | Syncfusion
description: Learn here all about Clicked data in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to get pie clicked data in TypeScript Chart

By using the [`pointClick`](../../api/accumulation-chart#pointClick-emittypeIPointEventArgs) event, you can get the chart data of clicked area.

To show the clicked area data from pie, follow the given steps:

**Step 1**:

By using the [`pointClick`](../../api/accumulation-chart#pointClick-emittypeIPointEventArgs) event, you can get the `args.point.x` and `args.point.y` values.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs8" %}