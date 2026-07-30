---
layout: post
title: Selection in Syncfusion ASP.NET MVC HeatMap Chart Component
description: Learn here all about Selection in Syncfusion ASP.NET MVC HeatMap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection
publishingplatform: chart-sdk
documentation: ug
---


# Selection in ASP.NET MVC HeatMap Chart Component

In the HeatMap, the cell selection is used to select single or multiple HeatMap cells at runtime and get the selected cell details using the [CellSelected](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellSelected) event. You can enable the cell selection using the [AllowSelection](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_AllowSelection) property.

The HeatMap cells can be selected using the following interactions, as shown in the table below.

|   Modes of Interactions |   Description                                                                                                      |
|------------------------ | -------------------------------------------------------------------------------------------------------------------|
|   Mouse                 |  HeatMap cells can be selected by clicking or dragging and dropping over them.                                     |
|   Touch                 |  HeatMap cells can be selected by tapping or dragging and dropping over them.                                      |
|   Keyboard              |  The **Ctrl** key on the keyboard can be used to enable multiple cell selection with mouse and touch interaction. The **Ctrl** key can only be used if the `EnableMultiSelect` property is set to **true** in order to enable multiple cell selection.                                                                                                                                     |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/selection/cellSelection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CellSelection.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/selection/cellSelection/cellSelection.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET MVC HeatMap chart with selection](./images/selection/heatmap-chart-selection.gif)

## Enable single cell selection

In the HeatMap, the [EnableMultiSelect](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_EnableMultiSelect) property is used to allow single cell selection. When you set the `EnableMultiSelect` property to **false**, only one cell is selected. By default, `EnableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/selection/singleCellSelection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SingleCellSelection.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/selection/singleCellSelection/singleCellSelection.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET MVC HeatMap chart with single cell selection](./images/selection/heatmap-chart-single-cell-selection.gif)

### Clearing cell selection

The `clearSelection` method can be used to clear all the selected cells. The below example illustrates the same.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/selection/clear-selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ClearSelection.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/selection/clear-selection/clear-selection.cs %}
{% endhighlight %}
{% endtabs %}

![Clearing cell selection in ASP.NET MVC HeatMap chart](./images/selection/heatmap-chart-clear-selection.gif)

