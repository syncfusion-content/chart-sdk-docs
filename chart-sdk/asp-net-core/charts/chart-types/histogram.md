---
layout: post
title: Histogram Chart in ASP.NET Core Charts
description: Learn here all about Histogram Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Histogram Chart
publishingplatform: chart-sdk
documentation: ug
---


# Histogram Chart in ASP.NET Core Charts

## Histogram

To render a [histogram](https://www.syncfusion.com/aspnet-core-ui-controls/charts/chart-types/histogram-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **Histogram** in your chart configuration. This indicates that the data should be represented as a histogram chart, providing a visual display of large amounts of data that are difficult to understand in a tabular or spreadsheet format.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/histogram/histogram/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Histogram.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/histogram/histogram/histogram.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/histogram/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/histogram/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/histogram/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/histogram/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}


## See Also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)