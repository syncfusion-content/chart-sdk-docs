---
layout: post
title: Cross Hair in ASP.NET Core Stock Charts | Syncfusion
description: Learn here all about Cross Hair in Syncfusion ASP.NET Core Stock Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Cross Hair
publishingplatform: chart-sdk
documentation: ug
---


# Cross Hair in ASP.NET Core Stock Charts

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_Enable) property in the `crosshair`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/crosshair/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Crosshair.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/crosshair/crosshair.cs %}
{% endhighlight %}
{% endtabs %}



## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairTooltip.html#Syncfusion_EJ2_Charts_ChartCrosshairTooltip_Enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/axis-tooltip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Axis-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/axis-tooltip/axis-tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

The [`fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Fill) and [`textStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_Line) property in the crosshair.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

## Crosshair label customization

The [`crosshairLabelRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChart.html#Syncfusion_EJ2_Charts_StockChart_CrosshairLabelRender) event is triggered before each crosshair axis label is rendered in the stock chart. This event allows you to customize the appearance and content of the crosshair labels or prevent specific labels from being displayed.

The event arguments include:

* `text` – The default text displayed in the crosshair label. You can modify this value to show custom content.
* `value` – The actual data value at the crosshair position.
* `axisName` – The name of the axis associated with the label.
* `axisOrientation` – The orientation of the axis (`Horizontal` or `Vertical`).
* `textStyle` – Defines the font properties of the label text such as color, size, and font family.
* `fill` – Specifies the background color of the crosshair label.
* `cancel` – Set this property to **true** to prevent the label from being rendered.

{% tabs %}

{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/crosshair-label-render/tagHelper %}
{% endhighlight %}

{% highlight c# tabtitle="Crosshair-label-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/crosshair-label-render/crosshair-label-render.cs %}
{% endhighlight %}

{% endtabs %}

**Snap to data**

Enabling the [`SnapToData`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChartCrosshairSettings.html#Syncfusion_EJ2_Charts_StockChartCrosshairSettings_SnapToData) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/snapToData/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="SnapToData.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/user-interaction/crosshair-trackball/snapToData/snapToData.cs %}
{% endhighlight %}
{% endtabs %}

## Add Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point.

Trackball can be enabled by setting the [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html) property of the crosshair to true and [`shared`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html) property in `tooltip` to true in chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/getting-started/trackball/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Trackball.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/getting-started/trackball/trackball.cs %}
{% endhighlight %}
{% endtabs %}


