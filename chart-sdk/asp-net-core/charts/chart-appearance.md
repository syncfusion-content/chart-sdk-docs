---
layout: post
title: Appearance in ASP.NET Core Charts | Syncfusion
description: Learn here all about Appearance in ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Appearance
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Appearance in ASP.NET Core Charts

## Chart theme customization

You can customize the default theme of the chart using the `theme` property. There are 9 themes available: `Material`, `Fabric`, `Bootstrap`, `HighContrastLight`, `MaterialDark`, `FabricDark`, `HighContrast`, `BootstrapDark`, and `Bootstrap4`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/theme/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Theme.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/theme/theme.cs %}
{% endhighlight %}
{% endtabs %}

## Custom color palette

You can customize the default color of series or points by providing a custom color palette of your choice by using the [`palettes`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Palettes) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

## Data point customization

The color of an individual data point or data points within a range can be customized using the options below.

### Point color mapping

You can bind the color for the points from [`dataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_DataSource) for the series using [`pointColorMapping`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_PointColorMapping) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/point-color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-color.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/point-color/point-color.cs %}
{% endhighlight %}
{% endtabs %}

### Range color mapping

You can differentiate data points based on their y-values using the [`rangeColorSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRangeColorSettings.html) in the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/range-color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Range-color.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/range-color/range-color.cs %}
{% endhighlight %}
{% endtabs %}

## Point level customization

The marker, data label, and fill color of each data point can be customized with the [`pointRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) and [`textRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TextRender) event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/point/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/point/point.cs %}
{% endhighlight %}
{% endtabs %}

## Chart area customization

### Customize the chart background

Using the [`background`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Background) and [`border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Border) properties, you can change the background color and border of the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/area/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Area.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/area/area.cs %}
{% endhighlight %}
{% endtabs %}

### Chart margin

You can set the margin for the chart from its container using [`margin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Margin) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/margin/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}

### Chart area background and border

Using [`background`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartArea.html#Syncfusion_EJ2_Charts_ChartArea_Background) and [`border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartArea.html#Syncfusion_EJ2_Charts_ChartArea_Border) properties, you can change the background color and border of the chart area. The width of the chart area can be customized using the [`width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartArea.html#Syncfusion_EJ2_Charts_ChartArea_Width) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/background/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Background.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/background/background.cs %}
{% endhighlight %}
{% endtabs %}

### Chart area margin

You can customize the space between the chart area and its chart container using the [`Margin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartArea.html#Syncfusion_EJ2_Charts_ChartArea_Margin) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/area-margin/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Area-margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/area-margin/area-margin.cs %}
{% endhighlight %}
{% endtabs %}

## Animation

You can customize animation for a particular series using the [`animation`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAnimation.html) property. You can enable or disable animation of the series using the `enable` property, `duration` specifies the duration of an animation, and `delay` lets you start the animation at a desired time.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/animation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Animation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/animation/animation.cs %}
{% endhighlight %}
{% endtabs %}

## Fluid animation

Fluid animation animates a series with an updated data source by continuing the existing animation rather than re-animating the entire series. You can customize the animation for a particular series using the `animate` method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/fluid-animation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Fluid.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/fluid-animation/fluid.cs %}
{% endhighlight %}
{% endtabs %}

## Title

Add a title to a chart by using the [`title`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Title) property to show the information about the data plotted.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/title/title.cs %}
{% endhighlight %}
{% endtabs %}

### Title position

By using the [`Position`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTitleSettings.html#Syncfusion_EJ2_Charts_ChartTitleSettings_Position) property in [`TitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TitleStyle), you can position the [`Title`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Title) at left, right, top or bottom of the chart. The title is positioned at the top of the chart, by default.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/titleposition/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Titleposition.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/titleposition/titleposition.cs %}
{% endhighlight %}
{% endtabs %}

The custom option helps you to position the title anywhere in the chart using [`X`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTitleSettings.html#Syncfusion_EJ2_Charts_ChartTitleSettings_X) and [`Y`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTitleSettings.html#Syncfusion_EJ2_Charts_ChartTitleSettings_Y) coordinates.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/titleoption/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Titleoption.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/titleoption/titleoption.cs %}
{% endhighlight %}
{% endtabs %}

### Title alignment

You can align the title to the near, far, or center of the chart using the [`TextAlignment`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTitleSettings.html#Syncfusion_EJ2_Charts_ChartTitleSettings_TextAlignment) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/titlealignment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Titlealignment.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/titlealignment/titlealignment.cs %}
{% endhighlight %}
{% endtabs %}

## Subtitle

Add a subtitle to a chart by using the [`subTitle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SubTitle) property to show the information about the data plotted.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/subtitle/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Subtitle.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/subtitle/subtitle.cs %}
{% endhighlight %}
{% endtabs %}