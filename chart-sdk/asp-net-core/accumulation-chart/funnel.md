---
layout: post
title: Funnel in ASP.NET Core Accumulation Chart Component | Syncfusion
description: Learn here all about Funnel in Syncfusion ASP.NET Core Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Funnel
publishingplatform: chart-sdk
documentation: ug
---


# Funnel chart in ASP.NET Core Accumulation Chart Component

To render a funnel series, use the series [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Type) as `Funnel`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Size

The size of the funnel chart can be customized by using the `width` and `height` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Neck size

The funnel's neck size can be customized by using the `neckWidth` and `neckHeight` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/neck-size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Gap between the segments

Funnel chart provides options to customize the space between the segments by using the `gapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/gap/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Explode

Points can be exploded on mouse click by setting the `explode` property to true. You can also explode the point on load using `explodeIndex`. Explode distance can be set by using `explodeOffset` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/explode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Smart data label

It provides the data label smart arrangement of the funnel and pyramid series. The overlap data label will be placed on left side of the funnel or pyramid series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/data-label/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
    public string text;
}
{% endhighlight %}
{% endtabs %}



## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class FunnelChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Mode

The Funnel chart supports both Standard and Trapezoidal modes of rendering. The default value of the [`FunnelMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_FunnelMode) is `Standard`.

### Standard

The `Standard` funnel mode follows the traditional funnel shape, with the width continuously narrowing down to a point at the bottom.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/mode-standard/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Mode-standard.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/mode-standard/mode-standard.cs %}
{% endhighlight %}
{% endtabs %}



### Trapezoidal

The `Trapezoidal` mode is a modified funnel shape where the width narrows, but features a flattened or parallel section near the top, creating a trapezoidal appearance. This mode helps compare different data points more clearly while maintaining a funnel-like structure.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/mode-trapezoidal/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Mode-trapezoidal.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/funnel/mode-trapezoidal/mode-trapezoidal.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Data label](./data-label/)
* [Grouping](./grouping/)
