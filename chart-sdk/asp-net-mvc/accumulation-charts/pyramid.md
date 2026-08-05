---
layout: post
title: Pyramid in ASP.NET MVC Accumulation Chart Component
description: Learn here all about Pyramid in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pyramid
publishingplatform: chart-sdk
documentation: ug
---


# Pyramid Chart

To render a pyramid series, use the series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Type) as `Pyramid`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/default/default.cs %}
{% endhighlight %}
{% endtabs %}



## Mode

The Pyramid chart supports linear and surface modes of rendering. The default type of the `PyramidMode` is `Linear`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/mode/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mode.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/mode/mode.cs %}
{% endhighlight %}
{% endtabs %}



## Size

The size of the pyramid chart can be customized by using the  `Width` and `Height` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/size/size.cs %}
{% endhighlight %}
{% endtabs %}



## Gap Between the Segments

Pyramid chart provides options to customize the space between the segments by using the `GapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/gap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Gap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/gap/gap.cs %}
{% endhighlight %}
{% endtabs %}



## Explode

Points can be exploded on mouse click by setting the `Explode` property to true. You can also explode the point on load using `ExplodeIndex`. Explode distance can be set by using `ExplodeOffset` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/explode/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Explode.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/explode/explode.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

Individual points can be customized using the `PointRender` event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/pyramid/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Data label](./data-label/)
* [Grouping](./grouping/)