---
layout: post
title: Pyramid in ASP.NET Core Accumulation Chart Component | Syncfusion
description: Learn here all about Pyramid in Syncfusion ASP.NET Core Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Pyramid
publishingplatform: chart-sdk
documentation: ug
---


# Pyramid Chart in ASP.NET Core Accumulation Chart Component

To render a pyramid series, use the series [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.AccumulationSeries.html#Syncfusion_EJ2_Charts_AccumulationSeries_Type) as `Pyramid`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pyramid/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PyramidChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Mode

The Pyramid chart supports linear and surface modes of rendering. The default type of the `pyramidMode` is `linear`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pyramid/mode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PyramidChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Size

The size of the pyramid chart can be customized by using the `width` and `height` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pyramid/size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PyramidChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Gap Between the Segments

Pyramid chart provides options to customize the space between the segments by using the `gapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pyramid/gap/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PyramidChartData
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
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pyramid/explode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
public class PyramidChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/pyramid/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
public class PyramidChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## See Also

* [Data label](./data-label/)
* [Grouping](./grouping/)