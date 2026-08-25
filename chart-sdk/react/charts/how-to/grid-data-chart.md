---
layout: post
title: How to visualize Grid data in React Charts | Syncfusion
description: Learn how to visualize data from a Syncfusion React Grid in Syncfusion React Charts by using the Grid's actionComplete and dataBound events.
control: Grid data chart 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to visualize Grid data in React Charts

You can visualize the data that returned by grid in chart.

To visualize the data in chart, follow the given steps:

**Step 1**:

Initialize the grid with datasource.

**Step 2**:

By using the grid’s `actionComplete` event and `getCurrentViewRecords` method, you can get the current page records.
By using the grid’s `databound` event, you can update the current page records into the chart’s datasource and visualize the grid data in chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/grid-visual-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/grid-visual-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/grid-visual-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/grid-visual-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/grid-visual-cs2" %}