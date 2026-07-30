---
layout: post
title: Color Mapping in ASP.NET MVC Treemap Component
description: Learn here all about Color Mapping in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Color Mapping
publishingplatform: chart-sdk
documentation: ug
---

# Color Mapping

Color mapping is used to customize the color for each group or item based on the specified types. The following options are available to customize the group and leaf items in the TreeMap.

## Range color mapping

Range color mapping is used to apply color to the items by giving specific ranges in the DataSource, and it should be specifying the data source properties to the `rangeColorValuePath`. The color mapping ranges to be specified in the `from` and `to` properties of the `colorMapping`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/range/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Range.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/range/range.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with color mapping](images/Colormapping/Range.png)

## Equal color mapping

Equal color mapping is used to fill colors to each item by specifying equal value present in the data source, that can be specified in the `equalColorValuePath` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/equal/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Equal.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/equal/equal.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with equal color mapping](images/Colormapping/EqualColor.png)

## Desaturation color mapping

Desaturation color mapping is used to apply colors to the items based on `minOpacity` and `maxOpacity` properties in the `colorMapping`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/desaturation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Desaturation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/desaturation/desaturation.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with desaturation color mapping](images/Colormapping/Desaturation.png)

## Palette color mapping

The palette color mapping is used to fill the color to each group or leaf item by given colors in the `palette` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/pallete/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pallete.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/pallete/pallete.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with palette color mapping](images/Colormapping/Palette.png)

## Desaturation with multiple colors

Multiple colors are used as gradient effect to specific shapes based on the ranges in datasource. By using [`color`] property, you can set n number of colors.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/pallete/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pallete.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/pallete/pallete.cs %}
{% endhighlight %}
{% endtabs %}



![Multiple color mapping in TreeMap with desaturation](images/Colormapping/DesaturationwithMultiplecolor.png)

## Color for items excluded from color mapping

Get the excluded ranges from data source using the color mapping and apply the specific color to those items, without specifying the `from` and `to` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/excludecolor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Excludecolor.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/excludecolor/excludecolor.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap color mapping for excluded items](images/Colormapping/ExcludeItem.png)

## Bind the colors to the items from data source

To set the color for each item from the data source, bind the data source property to the `colorValuePath`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/multiplecolor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Multiplecolor.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/colormapping/multiplecolor/multiplecolor.cs %}
{% endhighlight %}
{% endtabs %}



![Bind the colors to TreeMap from datasource](images/Colormapping/ColorDS.png)