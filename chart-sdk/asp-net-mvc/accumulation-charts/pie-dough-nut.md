---
layout: post
title: Syncfusion Pie Dough Nut in ASP.NET MVC Accumulation Chart Component
description: Learn here all about Pie Dough Nut in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pie Dough Nut
publishingplatform: chart-sdk
documentation: ug
---


# Pie & Doughnut in ASP.NET MVC Accumulation Chart Component

## Pie Chart

To render a pie series, use the series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Type) as `Pie`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/pie/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pie.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/pie/pie.cs %}
{% endhighlight %}
{% endtabs %}



## Radius Customization

By default, radius of the pie series will be 80% of the size (minimum of chart width and height). You can customize this using [`Radius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Radius) property of the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/radius/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/radius/radius.cs %}
{% endhighlight %}
{% endtabs %}



## Pie Center

The center position of the pie can be changed by Center X and Center Y. By default, center value of the pie series x and y is 50%. You can customize this using [`Center`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_Center) property of the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/piecenter/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Piecenter.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/piecenter/piecenter.cs %}
{% endhighlight %}
{% endtabs %}



## Various Radius Pie Chart

You can use radius mapping to render the slice with different [`Radius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Radius) pie and also use [`Border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Border) , fill properties to customize the point. dataLabel is used to represent individual data and its value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/various-radius/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Various-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/various-radius/various-radius.cs %}
{% endhighlight %}
{% endtabs %}



## Doughnut Chart

To achieve a doughnut in pie series, customize the [`InnerRadius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_InnerRadius) property of the series. By setting value greater than 0%, a doughnut will appear. The `InnerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/doughnut/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Doughnut.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/doughnut/doughnut.cs %}
{% endhighlight %}
{% endtabs %}



## Multiple Doughnut Series

You can create multiple doughnut within a single chart by adding multiple series with different [`InnerRadius`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_InnerRadius) and [`Radius`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Radius) values. This allows you to compare multiple data sets with the same categories. Each series can have different data, colors, and customizations. You can also use the [`MappingKey`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_MappingKey) property in `LegendSettings` to map the legend items based on the specified field from the data source. When set, points with matching `MappingKey` values are grouped into a single legend item.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/multiple-series/razor %}
{% endhighlight %}
{% highlight c# tabtitle="MultipleSeriesPie.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/multiple-series/multiple-series.cs %}
{% endhighlight %}
{% endtabs %}


## Start and End angles

You can customize the start and end angle of the pie series using the [`StartAngle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_StartAngle) and [`EndAngle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_EndAngle) properties. The default value of `StartAngle` is 0 degree, and `EndAngle` is 360 degrees. By customizing this, you can achieve a semi pie series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/start-angle/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Start-angle.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/start-angle/start-angle.cs %}
{% endhighlight %}
{% endtabs %}



## Color & Text Mapping

The fill color and the text in the data source can be mapped to the chart using `PointColorMapping` in series and `Name` in datalabel respectively.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/map/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Map.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/map/map.cs %}
{% endhighlight %}
{% endtabs %}



## Border radius

You can create rounded corners for each slice by using the `BorderRadius` option, which gives the chart a modern and polished appearance.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/border-radius/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/border-radius/border-radius.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

Individual points can be customized using the `PointRender` event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



## Patterns

You can apply different patterns to the pie slices using the `ApplyPattern` property in the series and the [`PointRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_PointRender) event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/patterns/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Patterns.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/patterns/patterns.cs %}
{% endhighlight %}
{% endtabs %}



## Hide pie or doughnut border

By default, the border will appear in the pie/doughnut chart while mouse hover on the chart. You can disable the the border by setting `EnableBorderOnMouseMove` property is `false`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/border/border.cs %}
{% endhighlight %}
{% endtabs %}



## Color Palette

You can customize the color the of the point using the `Palettes` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/palette/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Palette.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pie-doughnut/palette/palette.cs %}
{% endhighlight %}
{% endtabs %}

## Multi-level pie chart

You can achieve a multi-level drill down in pie and doughnut charts using [PointClick](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_PointClick) event. If user clicks any point in the chart, that corresponding data will be shown in the next level and so on based on point clicked.

You can also achieve drill-up (back to the initial state) by using [ChartMouseClick](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_ChartMouseClick) event. In below sample, you can drill-up by clicking back button in the center of the char

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/drill-down/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/drill-down/drill-down.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET MVC AccumulationChart Drill-Down and Display Data in Grid](images/pie-drill-down-and-display-data-in-grid.gif)

## See Also

* [Data label](./data-label)
* [Grouping](./grouping)
