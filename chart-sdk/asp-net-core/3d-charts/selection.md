---
layout: post
title: Selection in ASP.NET Core Syncfusion 3D Chart Component
description: Learn here all about selection in Syncfusion ASP.NET Core 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection
publishingplatform: chart-sdk
documentation: ug
---

# Selection in ASP.NET Core 3D Chart Component

The 3D chart provides selection support for the series and its data points on mouse click.

>When mouse is clicked on the data points, the corresponding series legend will also be selected.

We have different types of selection mode for selecting a data.

* None
* Point
* Series
* Cluster

## Point

To select a point, set the [`SelectionMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_SelectionMode) property to **Point**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/point-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/point-selection/point-selection.cs %}
{% endhighlight %}
{% endtabs %}



## Series

To select a series, set the [`SelectionMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_SelectionMode) property to **Series**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/series-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/series-selection/series-selection.cs %}
{% endhighlight %}
{% endtabs %}



## Cluster

To select the points that corresponds to the same index in all the series, set the [`SelectionMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_SelectionMode) property to **Cluster**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/cluster-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cluster-selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/cluster-selection/cluster-selection.cs %}
{% endhighlight %}
{% endtabs %}



## Selection type

To select multiple points or series, enable the [`IsMultiSelect`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_IsMultiSelect) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/selection-type/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Selection-type.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/selection-type/selection-type.cs %}
{% endhighlight %}
{% endtabs %}



## Selection during initial loading

In a 3D chart, selecting a point or series during initial loading can only be done programmatically. The [`SelectedDataIndexes`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_SelectedDataIndexes) property can be used for this.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/onload/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Onload.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/onload/onload.cs %}
{% endhighlight %}
{% endtabs %}



## Selection through legend

To select a point or series through legend use the [`ToggleVisibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_ToggleVisibility) property. Also, use [`EnableHighlight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_EnableHighlight) property for highlighting the series through legend.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/selection-legend/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Selection-legend.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/user-interaction/selection-legend/selection-legend.cs %}
{% endhighlight %}
{% endtabs %}


