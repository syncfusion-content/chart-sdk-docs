---
layout: post
title: Multiple Panes in JavaScript 3D Chart | Syncfusion
description: Learn how to split the Syncfusion JavaScript 3D Chart area into multiple rows and columns to create multiple panes.
platform: chart-sdk
control: 3D Chart 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Multiple Panes in JavaScript 3D Chart

The chart area can be divided into multiple panes using [`rows`](../api/chart3d/chart3DModel#rows) and [`columns`](../api/chart3d/chart3DModel#columns).

## Rows

To split the chart area vertically into number of rows, use [`rows`](../api/chart3d/chart3DModel#rows) property of the 3D chart.

* The space for each row can be allocated by using the [`height`](../api/chart3d/threeDimensionRowModel#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](../api/chart3d/axis3DModel#rowindex) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs1" %}

For spanning the vertical axis along multiple rows, use [`span`](../api/chart3d/axis3DModel#span)  property of an axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs2" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](../api/chart3d/chart3DModel#columns) property of the 3D chart.

* The space for each column can be allocated by using the [`width`](../api/chart3d/threeDimensionColumnModel#width) property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](../api/chart3d/axis3DModel#columnindex) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs3" %}

For spanning the vertical axis along multiple column, you can use [`span`](../api/chart3d/axis3DModel#span) property of an axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/multi-pane-cs4" %}
