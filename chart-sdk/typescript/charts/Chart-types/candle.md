---
layout: post
title: Candle Chart in TypeScript Charts | Syncfusion
description: Learn here all about Candle in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Candle Chart in TypeScript Charts

## Candle

The Candle series, similar to the HiLo Open Close series, is used to represent the low, high, open, and closing prices over time. It is commonly used in financial charts to visualize stock price movements.

To render a [`candle`](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/stock-chart) series in your chart, configure the chart as follows:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) as `Candle` in your chart configuration. Renders the data as a candle chart, showing the high, low, open, and close prices for each period.

* **Inject the CandleSeries and Category modules**: Use `Chart.Inject(CandleSeries, Category)` to register both the `CandleSeries` and the `Category` axis modules. The `Category` module is required because the x-axis uses `valueType: 'Category'`.

* **Provide high, low, open, and close values**: The `Candle` series requires five fields (x, high, low, open, and close) to display OHLC prices for each period. Ensure that your data source includes these fields.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs87/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs87/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs87/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs87" %}

## Binding data with series

You can bind data to the chart by assigning a JSON array (or a remote data source resolved through a data adapter) to the series [`dataSource`](https://ej2.syncfusion.com/documentation/api/chart/series#datasource) property. To display the data correctly, map the data fields to the series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/documentation/api/chart/series#high), [`low`](https://ej2.syncfusion.com/documentation/api/chart/series#low), [`open`](https://ej2.syncfusion.com/documentation/api/chart/series#open), and [`close`](https://ej2.syncfusion.com/documentation/api/chart/series#close) properties. Each data item must include `x`, `high`, `low`, `open`, and `close` numeric fields.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs381/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs381/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs381/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs381" %}

## Hollow candles

Hollow candles are the default candle rendering mode. Hollow candles color the candle body based on whether the closing price is above or below the opening price. The candles are filled or left hollow based on the following criteria:

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>States</b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>Filled</td>
<td>Candlesticks are filled when the close value is less than the open value.</td>
</tr>
<tr>
<td>Unfilled</td>
<td>Candlesticks are unfilled when the close value is greater than the open value.</td>
</tr>
</table>

By default, `bullFillColor` is set to `red` and `bearFillColor` is set to `green`. Note the naming convention: `bullFillColor` is applied when the opening price is **higher** than the closing price (a price decrease), and `bearFillColor` is applied when the opening price is **lower** than the closing price (a price increase).

## Solid candles

The [`enableSolidCandles`](https://ej2.syncfusion.com/documentation/api/chart/series#enablesolidcandles) property is used to enable or disable solid candles. By default, it is set to `false`. The fill color of the candle will be determined by its opening and closing values:

* The [`bearFillColor`](https://ej2.syncfusion.com/documentation/api/chart/series#bearfillcolor) is applied when the opening value is less than the closing value (a bullish move).
* The [`bullFillColor`](https://ej2.syncfusion.com/documentation/api/chart/series#bullfillcolor) is applied when the opening value is greater than the closing value (a bearish move).

These color rules apply to **all** candle rendering modes (hollow and solid); `enableSolidCandles` only toggles whether the candle body is filled or hollow.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs88/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs88/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs88/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs88" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) property to control how empty points are handled. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs379/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs379/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs379/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs379" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs380/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs380/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs380/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs380" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs453/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs453/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs453/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs453" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs454/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs454/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs454/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs454" %}

## Troubleshooting

The following list describes common issues you may encounter when working with the Candle series and how to resolve them.

**Chart does not render candles:** Confirm the [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) property of the series is set to `Candle`. Also ensure `CandleSeries` and `Category` are registered with `Chart.Inject(CandleSeries, Category)` before the chart is initialized, or import the modules directly from `@syncfusion/ej2-charts` using ES module syntax. The `Category` module is required because the x-axis uses `valueType: 'Category'`.

**Candles are missing for some x values:** Confirm each data item includes the five numeric fields (`x`, `high`, `low`, `open`, and `close`) and that the series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/documentation/api/chart/series#high), [`low`](https://ej2.syncfusion.com/documentation/api/chart/series#low), [`open`](https://ej2.syncfusion.com/documentation/api/chart/series#open), and [`close`](https://ej2.syncfusion.com/documentation/api/chart/series#close) properties reference those field names. Mismatched field names silently produce empty points.

**Bear and bull colors are reversed:** Syncfusion's naming convention maps `bullFillColor` to the case where the opening price is **higher** than the closing price (typically bearish), and `bearFillColor` to the case where the opening price is **lower** than the closing price (typically bullish). Swap the property names if you see inverted colors.

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between connected series. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args.series` or `args.point` object inside the handler; setting properties on the series object directly is overwritten during rendering.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [HiLo Open Close chart](./high-low-open-close)
* [High-Low chart](./high-low)