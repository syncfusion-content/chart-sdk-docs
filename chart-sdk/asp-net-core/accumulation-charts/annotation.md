---
layout: post
title: Annotation in ASP.NET Core Accumulation Chart Component | Syncfusion
description: Learn here all about Annotation in Syncfusion ASP.NET Core Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Annotation
publishingplatform: chart-sdk
documentation: ug
---


# Annotation in ASP.NET Core Accumulation Chart Component

The annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.

<!-- markdownlint-disable MD033 -->

By using the <code>content</code> option of annotation property, you can specify the Id of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/annotation/annotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string xValue;
    public double yValue;
}
{% endhighlight %}
{% endtabs %}



## Region

The annotation can be placed with respect to either `Series` or `Chart`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/annotation/region/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string x;
    public double y;
}
{% endhighlight %}
{% endtabs %}



## Co-ordinate Units

Specifies the coordinate units of an annotation either in `Pixel` or `Point`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/annotation/co-ordinate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string x;
    public double y;
}
{% endhighlight %}
{% endtabs %}



## Alignment

The annotations can be moved vertically and horizontally from its default position by using `verticalAlignment` or `horizontalAlignment` properties. The verticalAlignment property takes value as `Top`, `Bottom` or `Middle` and the horizontalAlignment property takes value as `Near`, `Far` or `Center`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/annotation/alignment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class PieChartData
{
    public string x;
    public double y;
}
{% endhighlight %}
{% endtabs %}

