---
layout: post
title: Working with Data in Angular Stock Chart | Syncfusion
description: Learn here all about Working with data in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Working with data 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Working with Data in Angular Stock Chart

Stock Chart can visualize data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel#datasource) property in series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/stock-chart/datasource-cs1" %}

## Remote Data

You can also bind remote data to the chart using `DataManager`. The DataManager requires minimal information like web service URL, adaptor and crossDomain to interact with service endpoint properly. Assign the instance of DataManager to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective#datasource) property in series and map the fields of data to [`xName`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/seriesDirective#query) property of the series to filter the data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/datasource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/datasource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/stock-chart/datasource-cs2" %}

## Handling No Data

When no data is available to render in the stock chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/datasource-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/datasource-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/stock-chart/datasource-cs3" %}

## Live Stock Chart

The Stock Chart can be updated in real time by pushing new and modified OHLC (open, high, low, close, volume) values into an existing candle series without re-rendering the entire chart. This is achieved with the help of the [`addPoint`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockseriesmodel#addpoint) and [`setData`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockseriesmodel#setdata) methods exposed on a [`StockSeries`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockseriesmodel) instance.

* `setData(point, animationDuration)` – replaces the current forming candle with the supplied point. Use this when you want to update the price of the candle that is currently being built.
* `addPoint(point, animationDuration)` – appends a brand-new candle to the end of the series. Use this when a new time bucket starts (for example, every new minute on a one-minute candle).

A typical real-time workflow uses both methods together:

1. Start with a set of historical candles loaded through `dataSource`.
2. On every tick, call `setData` to mutate the values of the in-progress candle.
3. When the candle interval elapses, call `addPoint` to begin a new candle whose open price matches the previous close.

In the following example, simulated one-minute OHLC data is generated locally and the chart is updated every 100 ms (using `setInterval`) to demonstrate live behavior. The forming candle is updated with `setData`, and a new candle is appended with `addPoint` every ten ticks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/live-stock-chart/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/stock-chart/live-stock-chart/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/stock-chart/live-stock-chart" %}

## See Also

* [Series Types](./series-types)