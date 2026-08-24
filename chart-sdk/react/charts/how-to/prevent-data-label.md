---
layout: post
title: How to prevent data labels in React Charts | Syncfusion
description: Learn how to prevent Syncfusion React Charts data labels from showing zero values for cleaner numeric visualizations.
control: Prevent data label 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to prevent data labels in React Charts

To prevent the chart data label when the data value is 0, follow the given steps:

**Step 1**:

Get the point value and check whether the `args.point.y` value is zero or not by using the [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#textrender) event. If the value is zero, then set the `args.cancel` to true.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/how-to-cs8" %}