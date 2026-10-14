---
layout: post
title: High Low Chart in TypeScript Charts | Syncfusion
description: Learn here all about High Low in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# High Low Chart in TypeScript Charts

## Hilo

The Hilo series visualizes stock price movements by displaying the high and low values for each data point using vertical lines. Use it to show the price range of a stock over time without the open or close markers of a HiloOpenClose chart.
 
To render a `Hilo` series, configure the chart as follows:

* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) as `Hilo`. Renders the data as a Hilo chart, showing the high and low prices for each period to visualize stock price ranges.

* **Inject the required modules**: Use `Chart.Inject(HiloSeries)` to register the series type. If the x-axis uses [`valueType`](https://ej2.syncfusion.com/documentation/api/chart/axis#valuetype): `Category`, also inject `Category`. Without these modules, the chart cannot render Hilo data.

* **Provide high and low values**: The `Hilo` series requires two y-values for each data point. Specify both the high and low values; the high value represents the maximum price, and the low value represents the minimum price of the stock.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs101/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs101/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs101/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs101" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/documentation/api/chart/series#high), and [`low`](https://ej2.syncfusion.com/documentation/api/chart/series#low) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs371/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs371/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs371/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs371" %}

## Series customization

The following properties can be used to customize the `Hilo` series.

### Fill

The [fill](https://ej2.syncfusion.com/documentation/api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs102/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs102/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs102/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs102" %}

### Gradient fill

The [fill](https://ej2.syncfusion.com/documentation/api/chart/series#fill) property accepts an SVG gradient reference, allowing you to apply a gradient color to the Hilo series. Define a `<linearGradient>` (or `<radialGradient>`) inside an SVG `<defs>` block in the page, and assign `fill: 'url(#gradientId)'` to the series. The chart then renders the segment with a color that transitions smoothly between the gradient stops.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs372/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs372/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs372/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs372" %}

### Opacity

The [opacity](https://ej2.syncfusion.com/documentation/api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs373/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs373/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs373/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs373" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are handled according to the configured [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode).

### Mode

Use the [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) property to control how empty points are rendered. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs375/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs375/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs375/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs375" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs376/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs376/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs376/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs376" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs449/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs449/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs449/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs449" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs450/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs450/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs450/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs450" %}

## Troubleshooting

The following list describes common issues you may encounter when working with the Hilo series and how to resolve them.

**Chart does not render tick marks:** Confirm the [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) property of the series is set to `Hilo`. Also ensure `HiloSeries` and `Category` are registered with `Chart.Inject(HiloSeries, Category)` before the chart is initialized, or import the modules directly from `@syncfusion/ej2-charts` using ES module syntax. The `Category` module is required because the x-axis uses `valueType: 'Category'`.

**Field mappings produce empty high/low lines:** Confirm the data item fields match the series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/documentation/api/chart/series#high), and [`low`](https://ej2.syncfusion.com/documentation/api/chart/series#low) values. Mismatched field names silently produce empty points.

**Gradient fill does not apply:** Confirm the SVG `<defs>` block defines a gradient with a unique `id`, and that the series `fill` property uses the exact same id in `url(#gradientId)`. Mismatched ids, missing `<defs>`, or unsanitized id values cause the chart to fall back to the default fill.

**Empty-point mode produces no visible point:** The default [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) is `Gap`, which leaves a gap between segments. To render empty points, switch the mode to `Zero` or `Average` and (optionally) set a [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) on `emptyPointSettings`.

**Events fire but changes are not visible:** The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart/iSeriesRenderEventArgs) and [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/iPointRenderEventArgs) events let you modify the rendered series or point. Mutate the `args` object (for example, `args.fill`) inside the handler; setting properties on the series object directly is overwritten during rendering.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Hilo open close chart](high-low-open-close)
* [Candle chart](candle)
* [Box and whisker chart](box-and-whisker)