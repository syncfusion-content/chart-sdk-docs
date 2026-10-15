---
layout: post
title: Multiple series in JavaScript Charts | Syncfusion
description: Learn here all about Chart series in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Multiple series in JavaScript Charts

The chart supports rendering multiple data series simultaneously, allowing comparison of different datasets within a single chart. You can also combine different series types and bind complex data structures to series.

## Multiple series

You can add multiple series to the chart by using the [`series`](https://ej2.syncfusion.com/javascript/documentation/api/chart#series) property. The series are rendered in the order they are added to the series array, and this order also determines the legend display sequence.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-series-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-series-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-series-cs1" %}

## Combination series

The chart allows you to render a combination of different series, such as Column, Line, Area, etc. This is useful for comparing datasets that have different scales or trends. For the complete list of available series types, see the [chart types documentation](https://ej2.syncfusion.com/javascript/documentation/chart/chart-types).

> **Note:** Bar series cannot be combined with any other series, because the axis orientation is different from other series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-series-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-series-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-series-cs2" %}

## Enable complex property in series

Set the [`enableComplexProperty`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesModel#enablecomplexproperty) value to `true` in the series to bind complex (nested) data to the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-series-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-series-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-series-cs3" %}

> **Troubleshooting:** If series do not appear as expected, verify that each series has a unique name, the dataSource is correctly bound, and the xName/yName properties match your data structure. For combination charts, ensure all series use compatible axis orientations.

## See also

* [Chart types in JavaScript Charts](https://ej2.syncfusion.com/javascript/documentation/chart/chart-types/line)
* [Working with data in JavaScript Charts](https://ej2.syncfusion.com/javascript/documentation/chart/working-with-data)