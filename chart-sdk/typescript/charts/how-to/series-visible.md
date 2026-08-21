---
layout: post
title: How to show series on legend click in TypeScript Chart | Syncfusion
description: Learn here all about Series visible in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to show series on legend click in TypeScript Chart

By using the `chartMouseClick` event, you can show the series based on respective legend click. In this event, you can get the legend target id, using which you can get the current series index. Based on the index, you can set value of `visible` to `true` or `false`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs19" %}