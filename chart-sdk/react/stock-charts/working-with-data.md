---
layout: post
title: Working with Data in React Stock Chart | Syncfusion
description: Learn how to bind JSON data to the Syncfusion React Stock Chart Component by mapping fields to date, open, high, low, and close.
control: Working with data 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Working with Data in React Stock Chart

Stock Chart can visualizes data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel#datasource) property in series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/stock-chart/code-path/working-with-data-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/stock-chart/code-path/working-with-data-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/stock-chart/working-with-data-cs3" %}

## Handling No Data

When no data is available to render in the stock chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/stock-chart/code-path/working-with-data-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/stock-chart/code-path/working-with-data-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/stock-chart/working-with-data-cs4" %}

## Live Stock Chart

The Stock Chart can be updated in real time by pushing new and modified OHLC (open, high, low, close, volume) values into an existing candle series without re-rendering the entire chart. This is achieved with the help of the [`addPoint`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries#addpoint) and [`setData`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries#setdata) methods exposed on a [`StockSeries`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries) instance.

* `setData(point, animationDuration)` – replaces the current forming candle with the supplied point. Use this when you want to update the price of the candle that is currently being built.
* `addPoint(point, animationDuration)` – appends a brand-new candle to the end of the series. Use this when a new time bucket starts (for example, every new minute on a one-minute candle).

A typical real-time workflow uses both methods together:

1. Start with a set of historical candles loaded through `dataSource`.
2. On every tick, call `setData` to mutate the values of the in-progress candle.
3. When the candle interval elapses, call `addPoint` to begin a new candle whose open price matches the previous close.

In the following example, simulated one-minute OHLC data is generated locally and the chart is updated every 100 ms (using `setInterval`) to demonstrate live behavior. The forming candle is updated with `setData`, and a new candle is appended with `addPoint` every ten ticks.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/stock-chart/code-path/getting-started-cs42/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/stock-chart/code-path/getting-started-cs42/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/stock-chart/getting-started-cs42" %}

## See Also

* [Series Types](series-types)