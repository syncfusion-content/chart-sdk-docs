---
layout: post
title: Appearance in Syncfusion ASP.NET Core Heatmap Chart Component
description: Learn here all about Appearance in Syncfusion ASP.NET Core Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Appearance
publishingplatform: chart-sdk
documentation: ug
---


# Appearance in ASP.NET Core HeatMap Chart Component

## Cell customization

You can customize the cell by using the [cellSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~CellSettings.html) property.

### Border

Change the width, color, and radius of the heat map cells by using the [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html#Syncfusion_EJ2_HeatMap_HeatMapCellSettings_Border) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/border/border.cs %}
{% endhighlight %}
{% endtabs %}

### Cell highlighting


Enable or disable the cell highlighting while hovering over the heatmap cells by using the [enableCellHighlighting](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html#Syncfusion_EJ2_HeatMap_HeatMapCellSettings_EnableCellHighlighting) property.

N> The cell highlighting only works in a SVG rendering mode.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/cell-highlight/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cell-highlight.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/cell-highlight/cell-highlight.cs %}
{% endhighlight %}
{% endtabs %}

### Color gradient mode

The [colorGradientMode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.ColorGradientMode.html) property can be used to set the minimum and maximum values for colors based on row and column. Three types of color gradient modes are available.

* **Table**: The minimum and maximum value colors calculated for overall data.
* **Row**: The minimum and maximum value colors calculated for each row of data.
* **Column**: The minimum and maximum value colors calculated for each column of data.


N> The default value of `ColorGradientMode` is **Table**.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/colormode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Colormode.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/colormode/colormode.cs %}
{% endhighlight %}
{% endtabs %}

## Background color

The background color of the HeatMap can be customized using the [backgroundColor](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_Background) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/background-color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="BackgroundColor.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/background-color/background-color.cs %}
{% endhighlight %}
{% endtabs %}

## Margin

Set the margin for the heatmap from its container by using the [margin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_Margin) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/margin/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}

## Title

The title is used to provide a quick information about the data plotted in heatmap. The [text](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapTitle.html#Syncfusion_EJ2_HeatMap_HeatMapTitle_Text) property is used to set the title for the heatmap. The text style of the title can be customized by using the [textStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapTitle.html#Syncfusion_EJ2_HeatMap_HeatMapTitle_TextStyle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/title/title.cs %}
{% endhighlight %}
{% endtabs %}

## Data label

The visibility of data labels can be toggled using the [showLabel](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html#Syncfusion_EJ2_HeatMap_HeatMapCellSettings_ShowLabel) property. By default, the data labels will be visible.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/data-label/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/data-label/data-label.cs %}
{% endhighlight %}
{% endtabs %}

### Customize the data label

The label displayed in the HeatMap cell can be changed using the [cellRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMap.html#Syncfusion_EJ2_HeatMap_HeatMap_CellRender) event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/cellRender/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellRender.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/cellRender/cellRender.cs %}
{% endhighlight %}
{% endtabs %}

### Text style

The text attributes of the data label such as font-family, font-size, and color can be customized using the [textStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html#Syncfusion_EJ2_HeatMap_HeatMapCellSettings_TextStyle) in the [cellSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~CellSettings.html) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/text-style/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Text-style.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/text-style/text-style.cs %}
{% endhighlight %}
{% endtabs %}



### Format

The format of the data label, such as currency, decimal, percent etc. can be changed using [format](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html#Syncfusion_EJ2_HeatMap_HeatMapCellSettings_Format) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/format/format.cs %}
{% endhighlight %}
{% endtabs %}


### Template

Any HTML elements can be added as a template in the data labels by using the [labelTemplate](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html#Syncfusion_EJ2_HeatMap_HeatMapCellSettings_LabelTemplate) property of [cellSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapCellSettings.html) in the HeatMap.

The following examples show various data binding methods in the HeatMap using the `labelTemplate` property.

#### Array binding

By including `${value}` in the template content, the value from the data source for the corresponding cell can be displayed in the HeatMap cell as data label template content. Additionally, the x-axis and y-axis label values can be displayed by including `${xLabel}` and `${yLabel}` in the template content.

**Table**

The following example demonstrates how to add a data label template for array table binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-array-table/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template-array-table.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-array-table/template-array-table.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with data label template and array table binding](./images/appearance/data-label-template-with-array-table-binding.png)


**Cell**

The following example demonstrates how to add a data label template for array cell binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-array-cell/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template-array-cell.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-array-cell/template-array-cell.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with data label template and array cell binding](./images/appearance/data-label-template-with-array-cell-binding.png)


#### JSON binding

By including the desired field name in the template content, such as **${value}**, the value from the data source for the corresponding cell can be displayed in the HeatMap cell as data label template content.

**Table**

The following example demonstrates how to add a data label template for JSON table binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-json-table/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template-json-table.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-json-table/template-json-table.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with data label template and JSON table binding](./images/appearance/data-label-template-with-JSON-table-binding.png)


**Cell**

The following example demonstrates how to add a data label template for JSON cell binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-json-cell/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template-json-cell.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/appearance/template-json-cell/template-json-cell.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with data label template and JSON cell binding](./images/appearance/data-label-template-with-JSON-cell-binding.png)
