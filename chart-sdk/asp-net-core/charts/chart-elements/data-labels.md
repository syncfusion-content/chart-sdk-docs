---
layout: post
title: Data Labels in ASP.NET Core Charts | Syncfusion
description: Learn here how to use Data Labels in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Labels
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

# Data Labels in ASP.NET Core Charts

A data label can be added to a chart series by enabling the [`visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html#Syncfusion_EJ2_Charts_ChartDataLabelSettings_Visible) option in [`dataLabel`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_DataLabel). By default, the labels are arranged smartly without overlapping.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/datalabel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datalabel.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/datalabel/datalabel.cs %}
{% endhighlight %}
{% endtabs %}

## Position

Using the [`position`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html#Syncfusion_EJ2_Charts_ChartDataLabelSettings_Position) property, you can place the label at `Top`, `Middle`, `Bottom`, or `Outer` (`Outer` is applicable for column and bar type series).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/position/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/position/position.cs %}
{% endhighlight %}
{% endtabs %}

N> The position `Outer` is applicable for column and bar type series.

## Data label template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text `${point.x}` and `${point.y}` to display corresponding data points x & y value. Using [`template`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html#Syncfusion_EJ2_Charts_ChartDataLabelSettings_Template) property, you can set data label template in chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/template/template.cs %}
{% endhighlight %}
{% endtabs %}

## Text mapping

Text from the data source can be mapped using `name` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/mapping/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Mapping.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/mapping/mapping.cs %}
{% endhighlight %}
{% endtabs %}

## Format

Data label for the chart can be formatted using [`format`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html#Syncfusion_EJ2_Charts_ChartDataLabelSettings_Format) property. You can use the global formatting options, such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/format/format.cs %}
{% endhighlight %}
{% endtabs %}

<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>The number is rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
    <td>The number is rounded to 2 decimal places.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>The number is rounded to 3 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
    <td>The number is converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>The number is converted to percentage with 2 decimal place.</td>
  </tr>
   <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
    <td>The number is converted to percentage with 3 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>The currency symbol is appended to number and number is rounded to 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>The currency symbol is appended to number and number is rounded to 2 decimal place.</td>
  </tr>
</table>

## Margin

The margin for the data label can be set using the `left`, `right`, `bottom`, and `top` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/margin/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}

## Customization

The fill and border of the data label can be customized using the `fill` and `border` properties. Rounded corners can be customized using the `rx` and `ry` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}

> The `rx` and `ry` properties require the `border` value to be set.

### Handling overlapping data labels

Use the `labelIntersectAction` property to specify how overlapping data labels are handled.

The available options are:

- `None` - Displays all data labels even when they overlap.
- `Hide` - Hides overlapping data labels.
- `Rotate90` - Rotates overlapping data labels by 90 degrees.
- `RelocateVertically` - Relocates overlapping data labels vertically.
- `RelocateHorizontally` - Relocates overlapping data labels horizontally.

The `RelocateVertically` and `RelocateHorizontally` options are supported only for the following series types:

- `StackingColumn`
- `StackingColumn100`
- `StackingBar`
- `StackingBar100`

These relocation modes enable the Smart Data Label feature, which improves readability by relocating overlapping data labels and connecting them to their corresponding data points using connector lines. Use the `smartLabelSettings` property to customize relocated labels through the `background`, `pointerShape`, `border`, `connectorLineStyle`, and `offset` settings. The `offset` property is applicable only when `labelIntersectAction` is set to `RelocateVertically`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/smart-data-label/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Smart-data-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/smart-data-label/smart-data-label.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing a specific point

You can also customize the specific marker and label using the [`pointRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) and [`textRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TextRender) event. The `pointRender` event allows you to change the shape, color, and border for a point, whereas the `textRender` event allows you to change the text for the point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/custom-point/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-point.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/custom-point/custom-point.cs %}
{% endhighlight %}
{% endtabs %}

## Show percentage based on each series point

You can calculate the percentage value based on the sum for each series using the `seriesRender` and `textRender` events in the chart. In `seriesRender`, calculate the sum of each series' y-values, and in `textRender`, calculate the percentage value based on the sum and modify the text.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/series-percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/datalabels/series-percentage/series-percentage.cs %}
{% endhighlight %}
{% endtabs %}

