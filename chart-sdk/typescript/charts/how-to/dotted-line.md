---
layout: post
title: Dotted line in TypeScript Chart control | Syncfusion
description: Learn here all about Dotted line in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dotted line 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Dotted line in TypeScript Chart control

By using `annotation`, you can add dotted lines in the chart.

To add dotted lines in the chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By setting `coordinateUnits` value as `point` in annotation object you can placed dotted lines in the chart based on point x and y values.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs17" %}