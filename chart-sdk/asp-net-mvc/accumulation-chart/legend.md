---
layout: post
title: Legend in ASP.NET MVC Syncfusion Accumulation Chart Component
description: Learn here all about Legend in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend
publishingplatform: chart-sdk
documentation: ug
---


# Legend in ASP.NET MVC Accumulation Chart Component

As like a chart, the legend is also available for accumulation charts, which gives information about the points. By default, the legend will be placed on the right, if the width of the chart is high or will be placed on the bottom, if the height of the chart is high. Other customization features regarding the legend element are same as the [`chart legend`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html). Here, the legend for a point can be collapsed by giving the empty string to the x value of the point.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/default/default.cs %}
{% endhighlight %}
{% endtabs %}



## Position and Alignment

By using the position property, you can position the legend at the `Left`, `Right`, `Top` or `Bottom` of the chart. You can also align the legend to `Center`, `Far` or `Near` of the chart using the alignment property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/position/position.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Reverse

You can reverse the order of the legend items by using the [`Reverse`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_Reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/axis/legend/reverse/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Reverse.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/axis/legend/reverse/reverse.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Shape

To change the legend icon shape, use the `LegendShape` property in the `Series`. By default, legend icon shape is `SeriesType`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/legend-shape/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Legend-shape.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/legend-shape/legend-shape.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Size

The legend size can be changed by using the `Width` and `Height` properties of the `LegendSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/size/size.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Item Size

You can customize the size of the legend items by using the `ShapeHeight` and `ShapeWidth` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/item-size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Item-size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/item-size/item-size.cs %}
{% endhighlight %}
{% endtabs %}



## Paging for Legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. You can view the each legend item by navigating between the pages using the navigation buttons.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/paging/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Paging.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/paging/paging.cs %}
{% endhighlight %}
{% endtabs %}

## Legend Text Wrap

When the legend text exceeds the container, the text can be wrapped by using **TextWrap** Property. End user can also wrap the legend text based on the **MaximumLabelWidth** property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/text-wrap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Textwrap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/text-wrap/textwrap.cs %}
{% endhighlight %}
{% endtabs %}

## Enable Animation

You can customize the animation while clicking legend by setting enableAnimation as true or false using `EnableAnimation` property in Accumulation Chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/accumulation-animation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Accumulation-animation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/accumulation-animation/accumulation-animation.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Title

You can set title for legend using `Title` property in `LegendSettings`. You can also customize the `FontStyle`, `Size`, `FontWeight`, `Color`, `TextAlignment`, `FontFamily`, `Opacity` and `TextOverflow` of legend title. `TitlePosition` is used to set the legend position in `Top`, `Left` and `Right` position. `MaximumTitleWidth` is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/title/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/title/title.cs %}
{% endhighlight %}
{% endtabs %}



## Arrow Page Navigation

By default, the page number will be enabled while legend paging. Now, you can disable that page number and also you can get left and right arrows for page navigation. You have to set `false` value to `EnablePages` to get this support.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/arrow-page/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Arrow-page.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/arrow-page/arrow-page.cs %}
{% endhighlight %}
{% endtabs %}

## Legend Item Padding

The [`ItemPadding`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_ItemPadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/itempadding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ItemPadding.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/itempadding/itempadding.cs %}
{% endhighlight %}
{% endtabs %}

## Legend layout

The [`Layout`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_Layout) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_LegendSettings) allows you to display the legend either horizontally or vertically. By default, the [`Layout`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_Layout) is set to **Auto**. The [`MaximumColumns`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_MaximumColumns) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_LegendSettings) defines the maximum number of columns that can be displayed within the available space when using the auto layout. Additionally, enabling the [`FixedWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartLegendSettings.html#Syncfusion_EJ2_Charts_AccumulationChartLegendSettings_FixedWidth) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_LegendSettings) ensures that all legend items are displayed with equal widths. The width of each item is determined by the maximum width among the legend items.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/layout/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Layout.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/layout/layout.cs %}
{% endhighlight %}
{% endtabs %}

## Legend template

Legend templates allow you to replace default legend icons and text with custom HTML for each series. This enables branded styles, richer content (icons, multi-line text, badges), improved readability, and localization.

You can customize the legend items by using the [`template`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_LegendSettings) property of [`legendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_LegendSettings). Legend interactions (click to toggle series) remain unless [`ToggleVisibility`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChart.html#Syncfusion_EJ2_Charts_AccumulationChart_LegendSettings#togglevisibility) is set to false. Templates work with all legend positions, alignments, and paging.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/legend/template/template.cs %}
{% endhighlight %}
{% endtabs %}
