---
layout: post
title: Pie in JavaScript Accumulation chart control | Syncfusion
description: Learn here all about Pie in Syncfusion JavaScript Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pie 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Pie in JavaScript Accumulation chart control

## Pie Chart

To render a pie series, use the series [`type`](../api/accumulation-chart/accumulationSeriesModel/#type) as `Pie` and inject the `PieSeries` module using `AccumulationChart.Inject(PieSeries)` method. If the `PieSeries` module is not injected, this module will be loaded by default.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs50/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs50/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs50" %}

## Radius Customization

By default, radius of the pie series will be 80% of the size (minimum of chart width and height). You can customize this using [`radius`](../api/accumulation-chart/accumulationSeries/#radius) property of the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs51/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs51/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs51" %}

## Doughnut Chart

To achieve a [doughnut](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/donut-chart) in pie series, customize the [`innerRadius`](../api/accumulation-chart/accumulationSeries/#innerradius) property of the series. By setting value greater than 0%, a doughnut will appear. The `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs52/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs52/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs52" %}

## Start and End angles

You can customize the start and end angle of the pie series using the [`startAngle`](../api/accumulation-chart/accumulationSeries/#startangle) and [`endAngle`](../api/accumulation-chart/accumulationSeries/#endangle) properties. The default value of  `startAngle` is 0 degree, and `endAngle` is 360 degrees. By customizing this, you can achieve a semi pie series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs53/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs53/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs53" %}

## Color & Text Mapping

The fill color and the text in the data source can be mapped to the chart using `pointColorMapping` in series and `name` in datalabel respectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs54/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs54/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs54" %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs55/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs55/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs55" %}

## See Also

* [Data label](./data-label.md)
* [Grouping](./grouping.md)