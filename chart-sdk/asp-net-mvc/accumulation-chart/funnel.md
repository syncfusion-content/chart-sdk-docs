---
layout: post
title: Funnel in ASP.NET MVC Accumulation Chart Component | Syncfusion
description: Learn here all about Funnel in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Funnel
publishingplatform: chart-sdk
documentation: ug
---


# Funnel chart in ASP.NET MVC Accumulation Chart Component

To render a funnel series, use the series [`Type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Type) as `Funnel`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/default/default.cs %}
{% endhighlight %}
{% endtabs %}



## Size

The size of the funnel chart can be customized by using the  `Width` and `Height` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/size/size.cs %}
{% endhighlight %}
{% endtabs %}



## Neck size

The funnel's neck size can be customized by using the `NeckWidth` and `NeckHeight` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/neck-size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Neck-size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/neck-size/neck-size.cs %}
{% endhighlight %}
{% endtabs %}



## Gap between the segments

Funnel chart provides options to customize the space between the segments by using the `GapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/gap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Gap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/gap/gap.cs %}
{% endhighlight %}
{% endtabs %}



## Explode

Points can be exploded on mouse click by setting the `Explode` property to true. You can also explode the point on load using `ExplodeIndex`. Explode distance can be set by using `ExplodeOffset` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/explode/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Explode.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/explode/explode.cs %}
{% endhighlight %}
{% endtabs %}



## Smart data label

It provides the data label smart arrangement of the funnel and pyramid series. The overlap data label will be placed on left side of the funnel/pyramid series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/data-label/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/data-label/data-label.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

Individual points can be customized using the `PointRender` event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



## Mode

The Funnel chart supports both Standard and Trapezoidal modes of rendering. The default value of the [`FunnelMode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_FunnelMode) is `Standard`.

### Standard

The `Standard` funnel mode follows the traditional funnel shape, with the width continuously narrowing down to a point at the bottom.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/mode-standard/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mode-standard.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/mode-standard/mode-standard.cs %}
{% endhighlight %}
{% endtabs %}



### Trapezoidal

The `Trapezoidal` mode is a modified funnel shape where the width narrows, but features a flattened or parallel section near the top, creating a trapezoidal appearance. This mode helps compare different data points more clearly while maintaining a funnel-like structure.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/mode-trapezoidal/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mode-trapezoidal.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/funnel/mode-trapezoidal/mode-trapezoidal.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Data label](./data-label/)
* [Grouping](./grouping/)
