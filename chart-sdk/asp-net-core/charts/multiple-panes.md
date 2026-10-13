---
layout: post
title: Multiple Panes in ASP.NET Core Charts | Syncfusion
description: Learn here all about Multiple Panes in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Multiple Panes
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Multiple Panes in ASP.NET Core Charts

Chart area can be divided into multiple panes using [`rows`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRow.html) and [`columns`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartColumn.html).

## Rows

To split the chart area vertically into a number of rows, use the [`rows`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRow.html) property of the chart.

* You can allocate space for each row by using the [`height`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRow.html#Syncfusion_EJ2_Charts_ChartRow_Height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRow.html) property of the axis.
* To customize each row’s bottom line, use [`border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRow.html) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/row/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Row.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/row/row.cs %}
{% endhighlight %}
{% endtabs %}

To span the vertical axis across multiple rows, you can use the [`span`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartRow.html) property of an axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/row-span/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Row-span.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/row-span/row-span.cs %}
{% endhighlight %}
{% endtabs %}

## Columns

To split the chart area horizontally into a number of columns, use the [`columns`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartColumn.html) property of the chart.

* You can allocate space for each column by using the [`width`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartColumn.html#Syncfusion_EJ2_Charts_ChartColumn_Width) property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartColumn.html) property of the axis.
* To customize each column’s bottom line, use [`border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartColumn.html#Syncfusion_EJ2_Charts_ChartColumn_Border) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/column/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Column.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/column/column.cs %}
{% endhighlight %}
{% endtabs %}

To span the horizontal axis across multiple columns, you can use the [`span`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartColumn.html) property of an axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/column-span/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Column-span.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple-panes/column-span/column-span.cs %}
{% endhighlight %}
{% endtabs %}

