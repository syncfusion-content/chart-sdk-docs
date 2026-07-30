---
layout: post
title: Grid Tick in ASP.NET Core Range Navigator Component
description: Learn here all about Grid Tick in Syncfusion ASP.NET Core Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Grid Tick
publishingplatform: chart-sdk
documentation: ug
---


# Grid and Tick Lines

## Grid line customization

The gridlines indicate axis divisions by drawing the chart plot. Gridlines include helpful cues to the user, particularly for large or complicated charts. The `width`, `color`, and `dashArray` of the major gridlines can be customized by using the `majorGridLines` setting.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/grid/grid/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Grid.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/grid/grid/grid.cs %}
{% endhighlight %}
{% endtabs %}



![Gridline customization](images/grid-tick/grid.png)

## Tick line customization

Ticklines are the small lines which is drawn on the axis line representing the axis labels. Ticklines will be drawn outside the axis by default. The `width`, `color`, and `dashArray` of the major ticklines can be customized by using the `majorTickLines` setting.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/grid/tick/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Tick.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/range-selector/grid/tick/tick.cs %}
{% endhighlight %}
{% endtabs %}



![Tickline customization](images/grid-tick/tick.png)