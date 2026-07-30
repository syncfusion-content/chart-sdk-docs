---
layout: post
title: Multiple panes in JavaScript Chart control | Syncfusion
description: Learn here all about Multiple panes in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Multiple panes 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Multiple panes in JavaScript Chart control

The chart area can be divided into multiple panes by defining rows and columns using the [`rows`](../api/chart/row) and [`columns`](../api/chart/column) collections. This feature is useful for displaying multiple related datasets within the same chart container while maintaining clear visual separation.

## Rows

To split the chart area vertically into multiple rows, use the [`rows`](../api/chart/row) property of the chart.

- Space for each row can be allocated by using the [`height`](../api/chart/row#height-string) property. The value can be specified either in pixels or as a percentage.
- To associate a vertical axis with a specific row, assign the corresponding index using the [`rowIndex`](../api/chart/axis#rowindex-number) property of the axis.
- To customize the bottom line of each row, use the [`border`](../api/chart/row#border-bordermodel) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs78/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs78/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs78" %}

To span a vertical axis across multiple rows, use the [`span`](../api/chart/axis#span-number) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs79/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs79/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs79" %}

## Columns

To split the chart area horizontally into multiple columns, use the [`columns`](../api/chart/column) property of the chart.

- Space for each column can be allocated using the [`width`](../api/chart/row#width-string) property. The width can be specified either in pixels or as a percentage.
- To associate a horizontal axis with a specific column, assign the corresponding index using the [`columnIndex`](../api/chart/axis#columnindex-number) property of the axis.
- To customize the bottom line of each column, use the [`border`](../api/chart/row#border-bordermodel) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs80/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs80/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs80" %}

To span a horizontal axis across multiple columns, use the [`span`](../api/chart/axis#span-number) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs81/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs81/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs81" %}