---
layout: post
title: How to add or remove series in React Charts | Syncfusion
description: Learn how to add or remove series dynamically in Syncfusion React Charts at runtime without re-rendering the chart.
control: Add series 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to add or remove series in React Charts

You can add or remove the chart series dynamically by using the `addSeries` or `removeSeries` method.

To add or remove the series dynamically, follow the given steps:

**Step 1**:

To add a new series to chart dynamically, pass the series value to the `addSeries` method.

To remove the new series from chart dynamically, pass the series index to the `removeSeries` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/add-series-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/add-series-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/add-series-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/add-series-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/add-series-cs1" %}