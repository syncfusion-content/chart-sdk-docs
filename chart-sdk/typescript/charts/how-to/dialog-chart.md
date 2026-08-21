---
layout: post
title: How to show chart in dialog in TypeScript Chart | Syncfusion
description: Learn here all about Dialog chart in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to show chart in dialog in TypeScript Chart

Using the `content` property of the dialog component, you can show the chart in dialog pop-up.

To show the chart in dialog component, follow the given steps:

**Step 1**:

Initialize the dialog and button components, and then create a basic chart and set the visibility of dialog to `false` when initialize.

By setting the chart `id` in the `content` property of dialog component, you can show chart when clicking the button component.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/dialog-cs1" %}