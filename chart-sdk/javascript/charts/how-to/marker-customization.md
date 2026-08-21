---
layout: post
title: How to customize markers in JavaScript Chart | Syncfusion
description: Learn here all about Marker customization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to customize markers in JavaScript Chart

By using the [`pointRender`](../../api/chart/chartModel/#pointrender), you can customize the marker shape.

To Customize the marker shape, follow the given steps:

**Step 1**:

Customize the marker shape in each data point by using the [`pointRender`](../../api/chart/chartModel/#pointrender) event. Using this event, you can set the `shape` value to the argument.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs13" %}
