---
layout: post
title: Cross Hair And Track Ball in Syncfusion ASP.NET Core Chart Component
description: Learn here all about Cross Hair and Track Ball in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Cross Hair And Track Ball
publishingplatform: chart-sdk
documentation: ug
---


# Crosshair in ASP.NET Core Chart Component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_Enable) property in the `crosshair`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/crosshair/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Crosshair.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/crosshair/crosshair.cs %}
{% endhighlight %}
{% endtabs %}



## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairTooltip.html#Syncfusion_EJ2_Charts_ChartCrosshairTooltip_Enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/axis-tooltip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Axis-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/axis-tooltip/axis-tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

The [`fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Fill) and [`textStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_Line) property in the crosshair.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

## Crosshair label customization

The [`CrosshairLabelRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_CrosshairLabelRender) event is triggered before each crosshair axis label is rendered. This event allows you to customize the label content and appearance, or prevent a label from being displayed.

Event arguments:

* `text` – The label text that can be modified.
* `value` – The data value at the crosshair position.
* `axisName` – The axis identifier (for example, `primaryXAxis`).
* `axisOrientation` – The orientation of the axis (`Horizontal` or `Vertical`).
* `textStyle` – Font properties used to customize the label text.
* `fill` – Background color of the label.
* `cancel` – Set this property to **true** to skip rendering the label.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/crosshair-label-render/tagHelper %}
{% endhighlight %}

{% highlight c# tabtitle="Crosshair-label-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/crosshair-label-render/crosshair-label-render.cs %}
{% endhighlight %}
{% endtabs %}

**Snap to data**

Enabling the [`SnapToData`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_SnapToData) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/snapToData/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="SnapToData.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/snapToData/snapToData.cs %}
{% endhighlight %}
{% endtabs %}

## Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point.

Trackball can be enabled by setting the [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html) property of the crosshair to true and [`shared`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html) property in `tooltip` to true in chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/trackball/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Trackball.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/trackball/trackball.cs %}
{% endhighlight %}
{% endtabs %}



## Crosshair highlight

The [`HighlightCategory`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_HighlightCategory) property in the crosshair highlights the background of the entire category when hovered over. The crosshair color can be customized using the [`Color`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartBorder.html#Syncfusion_EJ2_Charts_ChartBorder_Color) property within the [`Line`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartCrosshairSettings.html#Syncfusion_EJ2_Charts_ChartCrosshairSettings_Line) configuration.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/highlight-category/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Highlight-category.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/user-interaction/crosshair-trackball/highlight-category/highlight-category.cs %}
{% endhighlight %}
{% endtabs %}


