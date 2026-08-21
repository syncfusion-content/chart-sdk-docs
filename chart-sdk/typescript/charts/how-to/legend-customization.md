---
layout: post
title: How to customize legend in TypeScript Chart | Syncfusion
description: Learn here all about Legend customization in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to customize legend in TypeScript Chart

By using the [`legendRender`](../../api/chart/chartModel/#legendrender), you can customize the legend shape.

To Customize the legend shape, follow the given steps:

**Step 1**:

Set the shape value for each legend using `args.shape` in [`legendRender`](../../api/chart/chartModel/#legendrender) event.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs11" %}
