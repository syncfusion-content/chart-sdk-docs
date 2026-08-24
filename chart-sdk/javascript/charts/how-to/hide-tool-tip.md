---
layout: post
title: How to hide tooltip in JavaScript Chart | Syncfusion
description: Learn here all about Hide tool tip in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to hide tooltip in JavaScript Chart

By using the [`tooltipRender`](../../api/chart/chartModel#tooltiprender) event, you can cancel the tooltip for unselected series in the chart.

To hide the tooltip value in unselected series, follow the given steps:

**Step 1**:

By using the [`tooltipRender`](../../api/chart/chartModel#tooltiprender) event, you can get the series elements in the arguments. By using this argument we can compare whether series Element class list is deselected container or not. If it is true then we cancel the tooltip by setting the value for `args.cancel` as `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs9" %}