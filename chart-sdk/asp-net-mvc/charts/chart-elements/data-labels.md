---
layout: post
title: Data Labels in ASP.NET MVC Charts | Syncfusion
description: Learn here how to use Data Labels in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Labels
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


# Data Labels in ASP.NET MVC Charts

Data label can be added to a chart series by enabling the [`Visible`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Marker) option in the dataLabel. By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/datalabel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datalabel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/datalabel/datalabel.cs %}
{% endhighlight %}
{% endtabs %}



## Position

Using [`Position`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Marker) property, you can place the label either on `Top`, `Middle`,`Bottom` or `Outer` (outer is applicable for column and bar type series).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/position/position.cs %}
{% endhighlight %}
{% endtabs %}



N> The position `Outer` is applicable for column and bar type series.

## Data Label Template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text `${point.x}` and `${point.y}` to display corresponding data points x & y value. Using [`Template`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html#Syncfusion_EJ2_Charts_ChartDataLabelSettings_Template) property, you can set data label template in chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/template/template.cs %}
{% endhighlight %}
{% endtabs %}



## Text Mapping

Text from the data source can be mapped using `Name` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/mapping/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mapping.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/mapping/mapping.cs %}
{% endhighlight %}
{% endtabs %}

## Format

Data label for the chart can be formatted using [`Format`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.ChartDataLabelSettings.html#Syncfusion_EJ2_Charts_ChartDataLabelSettings_Format) property. You can use the global formatting options, such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/format/format.cs %}
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

`Margin` for data label can be applied to using `Left`, `Right`, `Bottom` and `Top` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/margin/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

`stroke` and `border` of data label can be customized using `Fill` and `Border` properties. Rounded corners can be customized using `Rx` and `Ry` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



N> `Rx` and `Ry` properties requires `Border` values not to be null.

### Handling Overlapping Data Labels

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

These relocation modes enable the Smart Data Label feature, which improves readability by relocating overlapping data labels and connecting them to their corresponding data points using connector lines. Use the `smartLabelSettings` property to customize relocated labels through the `background`, `pointerShape`, `border`, `connectorLineStyle`, and `offset` settings. The `offset` property is applicable only when `labelIntersectAction` is set to `RelocateVertically`. Note that the `seriesOverlapAction` property in `smartLabelSettings` is not applicable for `RelocateVertically` and `RelocateHorizontally`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-data-label/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Smart-data-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-data-label/smart-data-label.cs %}
{% endhighlight %}
{% endtabs %}

## Smart Label

Smart Label places data labels of Cartesian series so that they do not overlap each other, the markers, or the plot area boundary. Enable it by setting the `EnableSmartLabels` property to `true`. The default value is `false`.

How it works:

- **Positioning**: A label stays at its default position when that position is free. Otherwise, the label is checked around its point at the top, right, bottom, and left positions, and then at the diagonal positions. The first position that is inside the plot area of its series and does not overlap any other label or marker is used. If no free position is found, the label is hidden.
- **Label and marker detection**: A label is checked against the other data labels and the visible markers of all series.
- **Connector line**: A relocated label that is more than 12 px away from its point is joined to the point with a connector line and an arrow pointer.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Smart-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label/smart-label.cs %}
{% endhighlight %}
{% endtabs %}

> Note: When Smart Label is enabled, `labelIntersectAction` is ignored, and the data label `position` decides only the default position. Stacked column and bar series continue to use the `RelocateVertically` and `RelocateHorizontally` options.

### Duplicate data labels

Use the `ShowDuplicateLabels` property of the chart to control labels that have the same text at the same location, such as labels of multiple series with identical values.

- `true` (default) - Renders all the labels.
- `false` - Renders only the first label and skips the others. The first label is decided by the series order and then the point order.

This property works with or without `EnableSmartLabels`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label-duplicate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Smart-label-duplicate.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label-duplicate/smart-label-duplicate.cs %}
{% endhighlight %}
{% endtabs %}

### Customization

Use the `SmartLabelSettings` property in the series `DataLabel` to customize relocated labels and their connector lines. Labels at their default position keep the `DataLabel` settings.

- `background` - Sets the background color of the relocated label.
- `border` - Sets the `color`, `width`, and `dashArray` of the relocated label border.
- `pointerShape` - Sets the pointer at the point end of the connector line. The options are `Arrow` (default) and `None`.
- `connectorLineStyle` - Sets the `color`, `width`, and `opacity` of the connector line and pointer. Set `width` to `0` or `color` to `transparent` to hide the line.
- `seriesOverlapAction` - Specifies whether labels avoid series elements. See [Series overlap action](#series-overlap-action).

> Note: The `offset` property is not applicable when Smart Label is enabled, because Smart Label automatically determines the final label position to avoid overlaps.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label-customization/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Smart-label-customization.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label-customization/smart-label-customization.cs %}
{% endhighlight %}
{% endtabs %}

### Series overlap action

Use the `seriesOverlapAction` property in `SmartLabelSettings` to specify whether labels can overlap the series elements, such as lines, areas, columns, bars, and trendlines.

- `None` (default) - Labels avoid only other labels and markers, so they can be placed over series elements.
- `Hide` - Labels also avoid the elements of all visible series. A label moves to a free position if one exists, and is hidden only when none is available.

> Note: In canvas rendering mode, `Hide` behaves like `None`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label-series-overlap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Smart-label-series-overlap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/smart-label-series-overlap/smart-label-series-overlap.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing Specific Point

You can also customize the specific marker and label using [`PointRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_PointRender) and [`TextRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TextRender) event. `PointRender` event allows you to change the shape, color and border for a point, whereas the `TextRender` event allows you to change the text for the point.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/custom-point/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-point.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/custom-point/custom-point.cs %}
{% endhighlight %}
{% endtabs %}

## Show percentage based on each series points

You can calculate the percentage value based on the sum for each series using the `SeriesRender` and `TextRender` events in the chart. In `SeriesRender` calculate the sum of each series y values and In `TextRender` calculate percentage value based on the sum value and modify the text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/series-percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/datalabels/series-percentage/series-percentage.cs %}
{% endhighlight %}
{% endtabs %}
