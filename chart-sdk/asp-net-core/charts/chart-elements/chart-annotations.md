---
layout: post
title: Chart Annotations in ASP.NET Core Charts | Syncfusion
description: Learn here all about Chart Annotations in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart Annotations
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Chart Annotations in ASP.NET Core Charts

Annotations are used to mark a specific area of interest in the chart area with text, shapes, or images.

You can add annotations to the chart by using the `<e-chart-annotations>` Tag Helper. By using the [`content`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAnnotation.html#Syncfusion_EJ2_Charts_ChartAnnotation_Content) option of annotation object, you can specify the ID of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/annotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/annotation/annotation.cs %}
{% endhighlight %}
{% endtabs %}

## Region

Annotations can be placed either with respect to `Series` or `Chart`. By default, it will be placed with respect to `Chart`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/region/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Region.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/region/region.cs %}
{% endhighlight %}
{% endtabs %}

## Coordinate units

Specify the coordinate units of the annotation as either `Pixel` or `Point`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/co-ordinate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Co-ordinate.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/co-ordinate/co-ordinate.cs %}
{% endhighlight %}
{% endtabs %}

## Alignment

Annotation provides `verticalAlignment` and `horizontalAlignment`. The `verticalAlignment` can be customized via `Top`, `Bottom` or `Middle` and the `horizontalAlignment` can be customized via `Near`, `Far` or `Center`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/alignment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Alignment.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/alignment/alignment.cs %}
{% endhighlight %}
{% endtabs %}

## Adding a y-axis subtitle using annotation

By setting a text element in the `content` option of the annotation object, you can add a subtitle to the chart's y-axis. Set the `coordinateUnits` value to `Pixel` and customize the x and y location of the text.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/axis-sub/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Axis-sub.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/column/axis-sub/axis-sub.cs %}
{% endhighlight %}
{% endtabs %}

