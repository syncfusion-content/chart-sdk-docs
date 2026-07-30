---
layout: post
title: Legend in ASP.NET MVC Treemap Component
description: Learn here all about Legend in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend
publishingplatform: chart-sdk
documentation: ug
---

# Legend

Legend is used to provide valuable information for interpreting what the TreeMap displays. The legends can be represented in various colors, shapes or other identifiers based on the data.

## Position and alignment

Legend position is used to place legend in various positions. Based on the legend position, the legend item will be aligned. For example, if the position is top or bottom, the legend items are placed by rows. If the position is left or right, the legend items are placed by columns.

The following options are available to customize the legend position:

* Top
* Bottom
* Left
* Right
* Float

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/position/position.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with legend on top](images/Legend/LegendPosition.png)

Legend Alignment is used to align the legend items in specific location. The following options are available to customize the legend alignment:

* Near
* Center
* Far

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/align/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Align.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/align/align.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with legend alignment](images/Legend/LegendAlignment.png)

## Legend mode

The TreeMap control supports two different types of legend rendering modes such as `Default` and `Interactive`.

<!-- markdownlint-disable MD036 -->

### Default mode

In default mode, the legends have symbols with legend labels that are used to identify the items in the TreeMap.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/default/default.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with default legend mode](images/Legend/DefaultLegend.png)

<!-- markdownlint-disable MD036 -->

### Interactive mode

The legends can be made interactive with an arrow mark that indicates exact range color in the legend when the mouse hovers on the TreeMap item. Enable this option by setting the `mode` property in the `legendSettings` to **Interactive**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/interactive/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Interactive.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/interactive/interactive.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with interactive legend](images/Legend/InteractiveLegend.png)

## Legend size

Customize the legend size by modifying the `height` and `width` properties in the `legendSettings`. It accepts values in both percentage and pixel.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/size/size.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with custom legend size](images/Legend/legendSize.png)

### Paging support

TreeMap support legend paging, if the legend items cannot be placed within the provided `height` and `width` of the legend.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/paging/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Paging.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/paging/paging.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap legend with paging](images/Legend/Paging.png)

## Legend for items excluded from color mapping

Based on the mapping ranges in the data source, get the excluded ranges from the color mapping, and show the legend with the excluded range values that are bound to the specific legend.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/excludelegend/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Excludelegend.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/excludelegend/excludelegend.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap legend for excluded items](images/Legend/ExcludeLegend.png)

## Hide desired legend items

To enable or disable the desired legend item for each color mapping, set the `showLegend` property to **true** in the `colorMapping`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/hidelegend/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hidelegend.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/hidelegend/hidelegend.cs %}
{% endhighlight %}
{% endtabs %}



![Hide specific legend item in TreeMap](images/Legend/HideLegendDS.png)

## Hide legend items based data source value

To enable or disable the legend visibility for each item through the data source, bind the appropriate data source field name to `showLegendPath` property in the `legendSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/hidelegendbasedDS/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HidelegendbasedDS.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/hidelegendbasedDS/hidelegendbasedDS.cs %}
{% endhighlight %}
{% endtabs %}



![Hide TreeMap legend based on datasource](images/Legend/HideLegendDS.png)

## Bind legend item text from data source

To show the legend item text from the data source, bind the property name from data source to the `valuePath` property in the `legendSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/bindlegendtext/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bindlegendtext.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/bindlegendtext/bindlegendtext.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap legend text from datasource](images/Legend/legendTextDS.png)

## Hide duplicate legend items

To enable or disable the duplicate legend items, set the `removeDuplicateLegend` property to **true** in the `legendSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/duplicatelegend/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Duplicatelegend.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/duplicatelegend/duplicatelegend.cs %}
{% endhighlight %}
{% endtabs %}



![Remove duplicate legend item](images/Legend/DuplicateLegend.png)

## Legend Responsiveness

Use a responsive legend that switches positions between the right and the bottom based on the available height and width. To enable the responsive legend, set the `position` property to **Auto** in the `legendSettings` and the legend position is changed based on the available height and width.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/legend-responsive/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Legend-responsive.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/legend/legend-responsive/legend-responsive.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap legend with responsive](images/Legend/LegendResponsive.png)