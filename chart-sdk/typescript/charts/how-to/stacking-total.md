---
layout: post
title: Stacking total in TypeScript Chart control | Syncfusion
description: Learn here all about Stacking total in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stacking total 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Stacking total in TypeScript Chart control

By using the `annotation`, you can show any element in desired view.

To show the total value in data points, follow the given steps:

**Step 1**:

Define annotation for each x point in chart, now change the annotation value in chart by using the [`annotationRender`](../../api/chart/chartModel/#annotationrender) event. In this event, assign the stacked value of the last series to the annotation to show the total value of the
stacking series.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs17" %}