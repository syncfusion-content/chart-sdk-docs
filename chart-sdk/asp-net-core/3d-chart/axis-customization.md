---
layout: post
title: Axis Customization in ASP.NET Core Syncfusion 3D Chart Component
description: Learn here all about Axis Customization in Syncfusion ASP.NET Core 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis Customization
publishingplatform: chart-sdk
documentation: ug
---


# Axis customization in ASP.NET Core 3D Chart Component

## Title

The title for the axis can be added by using the [`Title`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_Title) property. It helps to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`TitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_TitleStyle) property of the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/title/title.cs %}
{% endhighlight %}
{% endtabs %}



## Title rotation

The title can be rotated from 0 to 360 degree by using the [`TitleRotation`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_TitleRotation) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/titlerotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TitleRotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/titlerotation/titlerotation.cs %}
{% endhighlight %}
{% endtabs %}


## Tick lines customization

The [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DMajorTickLines.html#Syncfusion_EJ2_Charts_Chart3DMajorTickLines_Width), [`Color`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DMajorTickLines.html#Syncfusion_EJ2_Charts_Chart3DMajorTickLines_Color) and [`Height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DMajorTickLines.html#Syncfusion_EJ2_Charts_Chart3DMajorTickLines_Height) of the minor and major tick lines can be customized by using the [`MajorTickLines`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_MajorTickLines) and [`MinorTickLines`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_MinorTickLines) properties in the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/tick/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Tick.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/tick/tick.cs %}
{% endhighlight %}
{% endtabs %}



## Grid lines customization

The [`Width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DMajorGridLines.html#Syncfusion_EJ2_Charts_Chart3DMajorGridLines_Width) and [`Color`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DMajorGridLines.html#Syncfusion_EJ2_Charts_Chart3DMajorGridLines_Color) of the minor and major grid lines can be customized by using the [`MajorGridLines`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_MajorGridLines) and [`MinorGridLines`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_MinorGridLines) properties in the axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/grid/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Grid.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/grid/grid.cs %}
{% endhighlight %}
{% endtabs %}



## Multiple axis

In addition to primary X and Y axis, n number of axis can be added to the chart. Series can be associated with this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/multiple/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multiple.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/multiple/multiple.cs %}
{% endhighlight %}
{% endtabs %}



## Inversed axis

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner, set the [`IsInversed`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_IsInversed) property to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/inversed/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Inversed.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/inversed/inversed.cs %}
{% endhighlight %}
{% endtabs %}


## Opposed position

To place an axis opposite from its original position, set the [`OpposedPosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_OpposedPosition) property to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/opposed/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opposed.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-charts/series/axis/opposed/opposed.cs %}
{% endhighlight %}
{% endtabs %}




