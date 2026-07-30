---
layout: post
title: Selection in ASP.NET Core Syncfusion Chart Component
description: Learn here all about Selection in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection
publishingplatform: chart-sdk
documentation: ug
---


<!-- markdownlint-disable MD036 -->

# Selection in ASP.NET Core Chart Component

Chart provides selection support for the series and its data points on mouse click.

N> When Mouse is clicked on the data points, the corresponding series legend will also be selected.

There are different types of selection mode for selecting the data. They are,

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

## Point

You can select a point, by setting `selectionMode` to point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/point-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/point-selection/point-selection.cs %}
{% endhighlight %}
{% endtabs %}



## Series

You can select a series, by setting `selectionMode` to series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/series-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/series-selection/series-selection.cs %}
{% endhighlight %}
{% endtabs %}



## Cluster

You can select the points that corresponds to the same index in all the series, by setting `selectionMode` to cluster.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/cluster-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cluster-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/cluster-selection/cluster-selection.cs %}
{% endhighlight %}
{% endtabs %}



## Rectangular selection

**DragXY, DragX and DragY**

To fetch the collection of data under a particular region, you have to set `selectionMode` as `DragXY`.

* DragXY - Allows us to select data with respect to horizontal and vertical axis.
* DragX - Allows us to select data with respect to horizontal axis.
* DragY - Allows us to select data with respect to vertical axis.

The selected data are returned as an array collection in the [`dragComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_DragComplete) event.

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

You can select a point or series programmatically on a chart using [`selectedDataIndexes`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SelectedDataIndexes) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/onload/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Onload.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/selection/onload/onload.cs %}
{% endhighlight %}
{% endtabs %}



## Selection through on legend

You can able to select a point or series through on legend using [`toggleVisibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_ToggleVisibility) property. Also, use [`enableHighlight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_EnableHighlight) property for highlighting the series through legend.

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

