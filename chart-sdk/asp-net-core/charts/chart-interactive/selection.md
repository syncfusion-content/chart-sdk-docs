---
layout: post
title: Selection in ASP.NET Core Charts | Syncfusion
description: Learn here all about Selection in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD036 -->

# Selection in ASP.NET Core Charts

Chart provides selection support for the series and its data points on mouse click.

> When a data point is clicked, the corresponding series legend item is also selected.

There are different types of selection mode for selecting the data. They are,

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

## Point

You can select a point by setting `selectionMode` to `Point`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/point-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/point-selection/point-selection.cs %}
{% endhighlight %}
{% endtabs %}

## Series

You can select a series by setting `selectionMode` to `Series`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/series-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/series-selection/series-selection.cs %}
{% endhighlight %}
{% endtabs %}

## Cluster

You can select the points that correspond to the same index in all the series by setting `selectionMode` to `Cluster`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/cluster-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cluster-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/cluster-selection/cluster-selection.cs %}
{% endhighlight %}
{% endtabs %}

## Rectangular selection

### DragXY, DragX, and DragY

To fetch the collection of data under a particular region, set `selectionMode` to `DragXY`.

* DragXY - Allows us to select data with respect to horizontal and vertical axis.
* DragX - Allows us to select data with respect to horizontal axis.
* DragY - Allows us to select data with respect to vertical axis.

The selected data is returned as an array collection in the [`dragComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_DragComplete) event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/drag/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Drag.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/drag/drag.cs %}
{% endhighlight %}
{% endtabs %}

## Selection type

You can select multiple points or series, by enabling the [`isMultiSelect`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_IsMultiSelect) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/selection-type/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Selection-type.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/selection-type/selection-type.cs %}
{% endhighlight %}
{% endtabs %}

## Selection on load

You can select a point or series programmatically on chart load by setting the [`selectedDataIndexes`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SelectedDataIndexes) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/onload/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Onload.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/onload/onload.cs %}
{% endhighlight %}
{% endtabs %}

## Selection through the legend

You can select a point or series through the legend using [`toggleVisibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_ToggleVisibility) property. Also, use [`enableHighlight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_EnableHighlight) property for highlighting the series through legend.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/selection-legend/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Selection-legend.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/selection-legend/selection-legend.cs %}
{% endhighlight %}
{% endtabs %}

## Customization for selection

You can apply custom style to selected points or series with [`selectionStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_SelectionStyle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/custom-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/custom-selection/custom-selection.cs %}
{% endhighlight %}
{% endtabs %}

