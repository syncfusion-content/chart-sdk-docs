---
layout: post
title: Pie and Donut in ASP.NET Core 3D Circular Chart Component | Syncfusion
description: Learn here all about Pie and Donut in Syncfusion ASP.NET Core 3D Circular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pie and Donut
publishingplatform: chart-sdk
documentation: ug
---


# Pie and Donut in ASP.NET Core 3D Circular Chart Component

## Pie chart

To render a pie series, use the series `Type` as `Pie`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/pie/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Pie.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/pie/pie.cs %}
{% endhighlight %}
{% endtabs %}



## Radius customization

By default, the radius of the pie series will be 80% of the size, which is the minimum of the 3D Circular Chart's width and height. You can customize this by using the `Radius` property of the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/radius/radius.cs %}
{% endhighlight %}
{% endtabs %}



## Various radius pie chart

You can assign different radii to each slice of the pie by fetching the radius from the data source and using it with the `Radius` property in the `Series`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/various-radius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Various-radius.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/various-radius/various-radius.cs %}
{% endhighlight %}
{% endtabs %}



## Donut chart

To achieve a donut in the pie series, customize the `InnerRadius` property of the series. By setting a value greater than 0%, a donut will appear. The `InnerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/donut/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Donut.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/donut/donut.cs %}
{% endhighlight %}
{% endtabs %}



## Text and fill color mapping

The text and the fill color from the data source can be mapped to the 3D Circular Chart using `PointColorMapping` in the series and `Name` in the data label, respectively.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Color.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/color/color.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

Individual points in pie chart can be customized using the `PointRender` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/customization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Customization.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/3d-circular-charts/pie-donut/customization/customization.cs %}
{% endhighlight %}
{% endtabs %}


