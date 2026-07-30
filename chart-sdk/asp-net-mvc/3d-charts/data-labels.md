---
layout: post
title: Data labels in ASP.NET MVC Syncfusion 3D Chart Component
description: Learn here all about data labels in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Labels
publishingplatform: chart-sdk
documentation: ug
---


# Data labels in ASP.NET MVC 3D Chart Component

Data labels are fields that includes information about the sample point connected to an output. It can be added to a chart series by enabling the [`Visible`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Visible) property in the [`DataLabel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_DataLabel). By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/datalabel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datalabel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/datalabel/datalabel.cs %}
{% endhighlight %}
{% endtabs %}



## Position

The [`Position`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Position) property is used to place the label either on `Top`, `Middle`, or `Bottom`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/position/position.cs %}
{% endhighlight %}
{% endtabs %}



## Template

Label content can be formatted by using the template option. Inside the template, the placeholder text `${point.x}` and `${point.y}` can be added to display corresponding data points x & y value. Using [`Template`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Template) property, the data label template can be set.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/template/template.cs %}
{% endhighlight %}
{% endtabs %}



## Text mapping

Text from the data source can be mapped using the [`Name`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Name) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/mapping/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mapping.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/mapping/mapping.cs %}
{% endhighlight %}
{% endtabs %}



## Format

Data label for the chart can be formatted using the [`Format`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Format) property. The global formatting options can be used as 'n', 'p', and 'c'.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/format/format.cs %}
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

The [`Margin`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Margin) for data label can be applied by using [`Left`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DMargin.html#Syncfusion_EJ2_Charts_Chart3DMargin_Left), [`Right`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DMargin.html#Syncfusion_EJ2_Charts_Chart3DMargin_Right), [`Bottom`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DMargin.html#Syncfusion_EJ2_Charts_Chart3DMargin_Bottom) and [`Top`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DMargin.html#Syncfusion_EJ2_Charts_Chart3DMargin_Top) properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/margin/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}



## Customization

The `Stroke` and `Border` of data label can be customized using [`Fill`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Fill) and [`Border`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DDataLabelSettings.html#Syncfusion_EJ2_Charts_Chart3DDataLabelSettings_Border) properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing specific label

A specific label can be customized by using the [`TextRender`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_TextRender) event.  The `TextRender` event allows you to change the label text for the point.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/series-percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/datalabel/series-percentage/series-percentage.cs %}
{% endhighlight %}
{% endtabs %}


