---
layout: post
title: Legend and Customization in ASP.NET MVC Syncfusion Chart Component
description: Learn here all about Legend in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend
publishingplatform: chart-sdk
documentation: ug
---


# Legend and in ASP.NET MVC Chart Component

Legend provides information about the series rendered in the chart.

## Enable Legend

You can use legend for the chart by setting the [`Visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Visible) property to true in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html) object.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/legend/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Legend.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/getting-started/legend/legend.cs %}
{% endhighlight %}
{% endtabs %}



## Position and Alignment

By using the [`Position`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Position) property, you can position the legend at left, right, top or bottom of the chart. The legend is positioned at the bottom of the chart, by default.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/default/default.cs %}
{% endhighlight %}
{% endtabs %}



Custom position helps you to position the legend anywhere in the chart using x, y coordinates.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/position/position.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Reverse

You can reverse the order of the legend items by using the [`Reverse`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/reverse/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Reverse.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/reverse/reverse.cs %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD036 -->

**Legend Alignment**

<!-- markdownlint-disable MD036 -->

You can align the legend as `Center`, `Far` or `Near` to the chart using [`Alignment`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Alignment) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/alignment/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Alignment.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/alignment/alignment.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

To change the legend icon shape, you can use [`LegendShape`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_LegendShape) property in the [`Series`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html). By default legend icon shape is `SeriesType`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



### Legend Size

By default, legend takes 20% - 25% of the chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the chart's width vertically, when placed on left or right position of the chart. You can change this default legend size by using the [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Width) and [`Height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Height) property of the `LegendSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/size/size.cs %}
{% endhighlight %}
{% endtabs %}



### Legend Item Size

You can customize the size of the legend items by using the [`ShapeHeight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_ShapeHeight) and [`ShapeWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_ShapeWidth) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/item-size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Item-size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/item-size/item-size.cs %}
{% endhighlight %}
{% endtabs %}


### Paging for Legend

### Paging for Legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. You can view each legend items by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/paging/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Paging.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/paging/paging.cs %}
{% endhighlight %}
{% endtabs %}

### Legend Text Wrap

When the legend text exceed the container, the text can be wrapped by using the [`textWrap`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_TextWrap) property. End user can also wrap the legend text based on the [`maximumLabelWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_MaximumLabelWidth) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/text-wrap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Textwrap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/text-wrap/textwrap.cs %}
{% endhighlight %}
{% endtabs %}

### Set the label color based on series color

You can set the legend label color based on series color by using chart's [Loaded](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Loaded) event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/legend-label/razor %}
{% endhighlight %}
{% highlight c# tabtitle="legend-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/legend-label/legend-label.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET MVC Chart Label Color](../images/legend-label.png)

## Series Selection on Legend

By default, legend click enables you to collapse the series visibility.  On other hand, if you need to select a series through legend click, disable the [`ToggleVisibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_ToggleVisibility).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/selection/selection.cs %}
{% endhighlight %}
{% endtabs %}



## Enable Animation

You can customize the animation while clicking legend by setting enableAnimation as true or false using `EnableAnimation` property in chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/animation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Animation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/animation/animation.cs %}
{% endhighlight %}
{% endtabs %}



## Collapsing Legend Item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/collapse/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Collapse.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/collapse/collapse.cs %}
{% endhighlight %}
{% endtabs %}



## Legend Title

You can set title for legend using `Title` property in `LegendSettings`. You can also customize the `FontStyle`, `Size`, `FontWeight`, `Color`, `TextAlignment`, `FontFamily`, `Opacity` and `TextOverflow` of legend title. `TitlePosition` is used to set the legend position in `Top`, `Left` and `Right` position. `MaximumTitleWidth` is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/title/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/title/title.cs %}
{% endhighlight %}
{% endtabs %}



## Arrow Page Navigation

By default, the page number will be enabled while legend paging. Now, you can disable that page number and also you can get left and right arrows for page navigation. You have to set `false` value to `EnablePages` to get this support.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/arrow-page/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Arrow-page.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/arrow-page/arrow-page.cs %}
{% endhighlight %}
{% endtabs %}

## Legend Item Padding

The [`ItemPadding`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_ItemPadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/itempadding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ItemPadding.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/itempadding/itempadding.cs %}
{% endhighlight %}
{% endtabs %}

## Legend layout

The [`Layout`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Layout) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings) allows you to display the legend either horizontally or vertically. By default, the [`Layout`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Layout) is set to **Auto**. The [`MaximumColumns`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_MaximumColumns) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings) defines the maximum number of columns that can be displayed within the available space when using the auto layout. Additionally, enabling the [`FixedWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_FixedWidth) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings) ensures that all legend items are displayed with equal widths. The width of each item is determined by the maximum width among the legend items.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/layout/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Layout.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/layout/layout.cs %}
{% endhighlight %}
{% endtabs %}

## Legend template

Legend templates allow you to replace default legend icons and text with custom HTML for each series. This enables branded styles, richer content (icons, multi-line text, badges), improved readability, and localization.

You can customize the legend items by using the [`template`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings) property of [`legendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings). Legend interactions (click to toggle series) remain unless [`ToggleVisibility`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings#togglevisibility) is set to false. Templates work with all legend positions, alignments, and paging.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/legend/template/template.cs %}
{% endhighlight %}
{% endtabs %}