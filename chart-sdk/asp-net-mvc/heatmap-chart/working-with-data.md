---
layout: post
title: Working With Data in Syncfusion ASP.NET MVC Heatmap Chart Component
description: Learn here all about Working With Data in Syncfusion ASP.NET MVC Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Working With Data
publishingplatform: chart-sdk
documentation: ug
---


# Working with data in ASP.NET MVC HeatMap Chart Component

Heat map visualizes the JSON data and two-dimensional array data. Using the data adaptor support, data can be bound to the heat map.

## Data adaptor

Heat map supports the following types of data binding with the adaptor support.

* Array
    * Table Binding
    * Cell Binding
* JSON data
    * Table Binding
    * Cell Binding

### Array - table binding

This data type is a collection of one dimensional array objects, at which each inner array contains data points for an X-axis data label. This is the default data binding type for heat map. You can also directly bind the array object to the [dataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~DataSource.html) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/array-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Array-row.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/array-row/array-row.cs %}
{% endhighlight %}
{% endtabs %}



### Array - cell binding

This data type is a collection of array objects that contain information about the row index, column index, and data value for each cell. You can bind the data to heat map by using the `data` property in the [dataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~DataSource.html) and setting the `adaptorType` property to **Cell**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/array-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Array-cell.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/array-cell/array-cell.cs %}
{% endhighlight %}
{% endtabs %}



### JSON data - table binding

In JSON table data binding, each JSON object contains an X-axis data point as row header and all the corresponding Y-axis data values. You can bind the JSON table data to the heat map using the `data` property in [dataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~DataSource.html). To achieve this, you should enable the `isJsonData` property and  define the `adaptorType` property as **Table**. The `xDataMapping` property is used to map the row header in JSON data.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/json-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Json-row.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/json-row/json-row.cs %}
{% endhighlight %}
{% endtabs %}



### JSON data - Cell binding

In JSON cell data binding, each JSON object consists a value for each cell along with a mapping value for row and column. You can bind the JSON cell data having information for each cell to the heat map using the `data` property in [dataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~DataSource.html). To achieve this, you should define the `adaptorType` property as **Cell**, and enable the `isJsonData` property. Now, map the fields of data by using the `valueMapping`, `xDataMapping` and `yDataMapping` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/json-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Json-cell.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/json-cell/json-cell.cs %}
{% endhighlight %}
{% endtabs %}



## Empty points

The data points that use the **null** or **undefined** or empty string as value are considered as empty points. Empty data points are ignored and not displayed in the heat map, and these points are rendered with default palette. You can customize the empty data point color value using the [emptyPointColor](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMapPaletteSettings~EmptyPointColor.html) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/empty-points/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-points.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/empty-points/empty-points.cs %}
{% endhighlight %}
{% endtabs %}



## Binding nested JSON data

In complex data binding, you can bind the nested JSON data to the data points in the heat map. The nested data can be mapped using the `xDataMapping`, `yDataMapping`, `valueMapping` and `bubbleDataMapping` properties as string value concatenated by a dot.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/nested-json-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Nested-json-cell.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/working-with-data/nested-json-cell/nested-json-cell.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [To bind data for bubble heat map with size and color attributes](./bubble-heatmap/#binding-data-for-bubble-heat-map-with-size-and-color-attributes)
