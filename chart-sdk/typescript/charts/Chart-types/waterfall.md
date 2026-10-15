---
layout: post
title: Waterfall Chart in TypeScript Charts | Syncfusion
description: Learn here all about Waterfall in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
# Waterfall Chart in TypeScript Charts

## Waterfall Chart

To render a `waterfall` series in your chart, follow the steps below:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) as `Waterfall` in your chart configuration. This indicates that the data should be represented as a waterfall chart, which helps illustrate the cumulative effect of sequentially introduced positive and negative values.

* **Inject the WaterfallSeries and Category modules**: Use `Chart.Inject(WaterfallSeries, Category)` to register the `WaterfallSeries` and the `Category` axis module. The `Category` module is required because the x-axis uses `valueType: 'Category'`.

* **Configure intermediate and cumulative sums**: Use the [`intermediateSumIndexes`](https://ej2.syncfusion.com/documentation/api/chart/series#intermediatesumindexes) property to represent intermediate sum values, and the [`sumIndexes`](https://ej2.syncfusion.com/documentation/api/chart/series#sumindexes) property to represent cumulative sum values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs160/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs160/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs160/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs160" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/documentation/api/chart/series#yname) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs394/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs394/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs394/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs394" %}

## Series customization

In waterfall charts, you can customize the appearance of different types of data changes using specific properties. The [`negativeFillColor`](https://ej2.syncfusion.com/documentation/api/chart/series#negativefillcolor) property sets the color for negative (decrease) values, and the [`summaryFillColor`](https://ej2.syncfusion.com/documentation/api/chart/series#summaryfillcolor) property sets the color for summary (intermediate and total) values. The defaults are `#C64E4A` (red) for negative and `#4E81BC` (blue) for summary.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs161/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs161/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs161/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs161" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Configure the [`emptyPointSettings`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings) on the series to control how empty data points are rendered.

### Mode

Use the [`mode`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes are `Gap`, `Drop`, `Zero`, and `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs395/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs395/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs395/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs395" %}

### Fill

Use the [`fill`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs396/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs396/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs396/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs396" %}

### Border

Use the [`border`](https://ej2.syncfusion.com/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs397/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs397/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs397/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs397" %}

## Corner radius

The [`cornerRadius`](https://ej2.syncfusion.com/documentation/api/chart/series#cornerradius) property in the chart series is used to customize the corner radius for bar series. This allows you to create bars with rounded corners. You can customize each corner of the bars using the `topLeft`, `topRight`, `bottomLeft`, and `bottomRight` properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458A/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458A/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458A/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs458A" %}

### Point corner radius

You can customize the corner radius for individual points in the chart series using the [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/iPointRenderEventArgs) event by setting the [`cornerRadius`](https://ej2.syncfusion.com/documentation/api/chart/iPointRenderEventArgs#cornerradius) property in its event argument.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458B/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458B/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458B/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs458B" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs457/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs457/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs457/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs457" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs458/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs458" %}

## Troubleshooting

The following list describes common issues you may encounter when working with the Waterfall series and how to resolve them.

**Chart does not render as a waterfall:** Confirm the [`type`](https://ej2.syncfusion.com/documentation/api/chart/series#type) property of each series is set to `Waterfall`. Also ensure `WaterfallSeries` (plus the `Category` axis module if the x-axis uses categorical data) is registered with `Chart.Inject(...)` before the chart is initialized, or import the modules directly from `@syncfusion/ej2-charts` using ES module syntax.

**Intermediate or cumulative sums do not appear:** [`intermediateSumIndexes`](https://ej2.syncfusion.com/documentation/api/chart/series#intermediatesumindexes) and [`sumIndexes`](https://ej2.syncfusion.com/documentation/api/chart/series#sumindexes) accept arrays of point indexes. Verify that each index references a valid point in the data source; indexes that are out of range or that point to summary points already declared by the other property are ignored.

**Negative or summary colors look wrong:** The default [`negativeFillColor`](https://ej2.syncfusion.com/documentation/api/chart/series#negativefillcolor) is `#C64E4A` (red) and [`summaryFillColor`](https://ej2.syncfusion.com/documentation/api/chart/series#summaryfillcolor) is `#4E81BC` (blue). Set them explicitly to override the defaults.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Column chart](./column)
* [Stacking Column chart](./stack-column)
* [Bar chart](./bar)