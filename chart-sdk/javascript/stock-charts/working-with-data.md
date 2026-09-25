---
layout: post
title: Working with data in JavaScript Stock Chart | Syncfusion
description: Learn here all about Working with data in Syncfusion JavaScript Stock Chart of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stock Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Working with data in JavaScript Stock Chart

Stock Chart can visualize data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](../api/stock-chart/stockSeriesModel#datasource) property in series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/working-with-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/working-with-data-cs1" %}

## Handling No Data

When no data is available to render in the stock chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/working-with-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/working-with-data-cs2" %}

## Live Stock Chart

The Stock Chart can be updated in real time by pushing new and modified OHLC (open, high, low, close, volume) values into an existing candle series without re-rendering the entire chart. This is achieved with the help of the [`addPoint`](../api/stock-chart/stockSeries#addpoint) and [`setData`](../api/stock-chart/stockSeries#setdata) methods exposed on a [`StockSeries`](../api/stock-chart/stockSeries) instance.

* `setData(point, animationDuration)` – replaces the current forming candle with the supplied point. Use this when you want to update the price of the candle that is currently being built.
* `addPoint(point, animationDuration)` – appends a brand-new candle to the end of the series. Use this when a new time bucket starts (for example, every new minute on a one-minute candle).

A typical real-time workflow uses both methods together:

1. Start with a set of historical candles loaded through `dataSource`.
2. On every tick, call `setData` to mutate the values of the in-progress candle.
3. When the candle interval elapses, call `addPoint` to begin a new candle whose open price matches the previous close.

In the following example, simulated one-minute OHLC data is generated locally and the chart is updated every 100 ms (using `setInterval`) to demonstrate live behavior. The forming candle is updated with `setData`, and a new candle is appended with `addPoint` every ten ticks.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs42/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs42/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs42" %}

## See Also

* [Series Types](./series-types)