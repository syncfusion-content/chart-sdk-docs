---
layout: post
title: Selection in Syncfusion ASP.NET Core HeatMap Chart Component
description: Learn here all about Selection in Syncfusion ASP.NET Core HeatMap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection
publishingplatform: chart-sdk
documentation: ug
---


# Selection in ASP.NET Core HeatMap Chart Component

In the HeatMap, the cell selection is used to select single or multiple HeatMap cells at runtime and get the selected cell details using the [cellSelected](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellSelected) event. You can enable the cell selection using the [allowSelection](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_AllowSelection) property.

The HeatMap cells can be selected using the following interactions, as shown in the table below.

|   Modes of Interactions |   Description                                                                                                      |
|------------------------ | -------------------------------------------------------------------------------------------------------------------|
|   Mouse                 |  HeatMap cells can be selected by clicking or dragging and dropping over them.                                     |
|   Touch                 |  HeatMap cells can be selected by tapping or dragging and dropping over them.                                      |
|   Keyboard              |  The **Ctrl** key on the keyboard can be used to enable multiple cell selection with mouse and touch interaction. The **Ctrl** key can only be used if the `enableMultiSelect` property is set to **true** in order to enable multiple cell selection.                                                                                                                                     |

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/selection/cellSelection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellSelection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/selection/cellSelection/cellSelection.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with selection](./images/selection/heatmap-chart-selection.gif)

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_EnableMultiSelect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/selection/singleCellSelection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="SingleCellSelection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/selection/singleCellSelection/singleCellSelection.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with single cell selection](./images/selection/heatmap-chart-single-cell-selection.gif)

### Clearing cell selection

The `clearSelection` method can be used to clear all the selected cells. The below example illustrates the same.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/selection/clear-selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ClearSelection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/selection/clear-selection/clear-selection.cs %}
{% endhighlight %}
{% endtabs %}

![Clearing cell selection in ASP.NET Core HeatMap chart](./images/selection/heatmap-chart-clear-selection.gif)
