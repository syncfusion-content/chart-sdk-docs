---
layout: post
title: How to in JavaScript Chart control | Syncfusion
description: Learn here all about How to in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: How to 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to in JavaScript Chart control

## Create a Live Chart

You can update a chart with live data by using the set interval.

To update live data in a chart, follow the given steps:

**Step 1**:

Initialize the chart with series.

```javascript
import { Chart } from '@syncfusion/ej2-charts';

// initialize Chart component
let chart: Chart = new Chart(
    //Initializing Chart Series
    series:[
               type: 'Line',
    ]
);
// render initialized Chart
chart.appendTo('#container');
```

**Step 2**:

Update the data to series, and refresh the chart at specified interval by using the set interval.

To refresh the chart, invoke the `refresh` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs1" %}

## Prevent the data label when the data value is 0

To prevent the chart data label when the data value is 0, follow the given steps:

**Step 1**:

Get the point value and check whether the `args.point.y` value is zero or not by using the [`textRender`](https://ej2.syncfusion.com/documentation/api/chart/iTextRenderEventArgs/) event. If the value is zero, then set the `args.cancel` to true.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs2" %}

## Format the tooltip value

Using [`tooltipRender`](https://ej2.syncfusion.com/documentation/api/chart/iTooltipRenderEventArgs/) event, you can able to format the
datetime value instead of rendered value.

To format the datetime value,please follow the steps below

**Step 1**:

By using [`tooltipRender`](https://ej2.syncfusion.com/documentation/api/chart/iTooltipRenderEventArgs/) event we can able to get the current point x value. Using this value to format the tooltip by using `formatDate` method.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs3" %}

## Add or remove a series from the chart dynamically

You can add or remove the chart series dynamically by using the `addSeries` or `removeSeries` method.

To add or remove the series dynamically, follow the given steps:

**Step 1**:

To add a new series to chart dynamically, pass the series value to the `addSeries` method.

To remove the new series from chart dynamically, pass the series index to the `removeSeries` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/add-series-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/add-series-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/add-series-cs1" %}

## Display selected data for range selection

By using the [`dragComplete`](https://ej2.syncfusion.com/documentation/api/chart/iDragCompleteEventArgs/), you can get the selected data values for range selection.

To display the selected data value, follow the given steps:

**Step 1**:

Get the selected data point values and display the values through grid component by using the [`dragComplete`](https://ej2.syncfusion.com/documentation/api/chart/iDragCompleteEventArgs/) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs4" %}

## Customize the marker with different shape

By using the [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/iPointEventArgs/), you can customize the marker shape.

To Customize the marker shape, follow the given steps:

**Step 1**:

Customize the marker shape in each data point by using the [`pointRender`](https://ej2.syncfusion.com/documentation/api/chart/iPointEventArgs/) event. Using this event, you can set the `shape` value to the argument.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs5" %}

## Customize each shape in legend

By using the [`legendRender`](https://ej2.syncfusion.com/documentation/api/chart/iLegendRenderEventArgs/), you can customize the legend shape.

To Customize the legend shape, follow the given steps:

**Step 1**:

Set the shape value for each legend using `args.shape` in [`legendRender`](https://ej2.syncfusion.com/documentation/api/chart/iLegendRenderEventArgs/) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs6" %}

## Create a table in tooltip

You can show the tooltip as table by using template property in tooltip.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the tooltip template div as shown in the following html page,

```
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>

```

**Step 2**:

To show that tooltip template, set the element id to the `template` property in tooltip.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/table-cs1" %}

## Create footer and watermark for chart

By using `annotation`, you can place any html elements to chart in a desired view.

To create footer and watermark for chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By using the `content` option of the annotation object, you can specify the id of the element that needs to be displayed in the chart area as follow,

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/table-cs2" %}

## Mark a threshold in chart

You can mark a threshold in chart by using the `stripline`.

To mark a threshold in chart, follow the given steps:

**Step 1**:

By using the start and end properties of `striplines` object in vertical axis, you can mark the threshold for y values of the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs7" %}

## Visualize the data that returned by grid in chart

You can visualize the data that returned by grid in chart.

To visualize the data in chart, follow the given steps:

**Step 1**:

Initialize the grid with datasource.

**Step 2**:

By using the grid’s `actionComplete` event and `getCurrentViewRecords` method, you can get the current page records. By using the grid’s `databound` event, you can update the current page records into the chart’s datasource and visualize the grid data in chart.

## Show percentage value in pie tooltip

By using the [`tooltipRender`](https://ej2.syncfusion.com/documentation/api/accumulation-chart/iAccTooltipRenderEventArgs/) event, you can show the percentage value for each point of pie series in tooltip.

To show the percentage value in pie tooltip, follow the given steps:

**Step 1**:

By using the [`tooltipRender`](https://ej2.syncfusion.com/documentation/api/accumulation-chart/iAccTooltipRenderEventArgs/) event, you can get the `args.point.y` and `args.series.sumOfPoints` values. You can use these values to calculate the percentage value for each point of pie series. To display the percentage value in tooltip, use the `args.content` property.
