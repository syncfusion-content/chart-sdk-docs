---
layout: post
title: Axis Labels in Syncfusion ASP.NET MVC Chart Component
description: Learn here all about Axis Labels in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis Labels
publishingplatform: chart-sdk
documentation: ug
---


# Axis Labels in ASP.NET MVC Chart Component

## Smart Axis Labels

When the axis labels overlap with each other, you can use [`LabelIntersectAction`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_LabelIntersectAction) property in the axis, to place them smartly.

When setting `LabelIntersectAction` as `Hide`

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/hide/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hide.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/hide/hide.cs %}
{% endhighlight %}
{% endtabs %}



When setting `LabelIntersectAction` as `Rotate45`

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/rotate45/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rotate45.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/rotate45/rotate45.cs %}
{% endhighlight %}
{% endtabs %}



When setting `LabelIntersectAction` as `Rotate90`

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/rotate90/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rotate90.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/rotate90/rotate90.cs %}
{% endhighlight %}
{% endtabs %}



## Axis Labels Positioning

By default, the axis labels can be placed at `Outside` the axis line and this also can be placed at `Inside` the axis line using the `LabelPosition` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/position/position.cs %}
{% endhighlight %}
{% endtabs %}



## Multilevel Labels

Any number of levels of labels can be added to an axis using the `MultiLevelLabels` property. This property can be configured using the following properties:

• Categories
• Overflow
• Alignment
• Text style
• Border

### Categories

Using the categories property, you can configure the `Start`, `End`, `Text`, and `MaximumTextWidth` of multilevel labels.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-category/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Category.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-category/category.cs %}
{% endhighlight %}
{% endtabs %}



### Overflow

Using the `Overflow` property, you can `Trim` or `Wrap` the multilevel labels.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-overflow/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Overflow.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-overflow/overflow.cs %}
{% endhighlight %}
{% endtabs %}



### Alignment

The `Alignment` property provides option to position the multilevel labels at `Far`, `Center`, or `Near`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-alignment/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Alignement.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-alignment/alignement.cs %}
{% endhighlight %}
{% endtabs %}



### Text customization

The `TextStyle` property of multilevel labels provides options to customize the `Size`, `Color`, `FontFamily`, `FontWeight`, `FontStyle`, `Opacity`, `TextAlignment` and `TextOverflow`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-textcustom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Text-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-textcustom/text-custom.cs %}
{% endhighlight %}
{% endtabs %}



### Border customization

Using the `Border` property, you can customize the `Width`, `Color`, and `Type`. The `Type` of border are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder` and `CurlyBrace`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-bordercustom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/multi-bordercustom/border-custom.cs %}
{% endhighlight %}
{% endtabs %}



## Edge Label Placement

Labels with long text at the edges of an axis may appear partially in the chart. To avoid this, use [`EdgeLabelPlacement`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_EdgeLabelPlacement) property in axis, which moves the label inside the chart area for better appearance or hides it. By default, the [`EdgeLabelPlacement`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_EdgeLabelPlacement) property is set to **Shift** to ensure that labels are shifted inside the chart area, avoiding any overlap or coincidence.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/edge/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Edge.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/edge/edge.cs %}
{% endhighlight %}
{% endtabs %}



## Labels Customization

The [`LabelStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_LabelStyle) property of an axis provides options to customize the `Color`, `Font-family`, `Font-size` and `Font-weight` of the axis labels.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/labels-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Labels-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/labels-custom/labels-custom.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing Specific Point

You can customize the specific text in the axis labels using `AxisLabelRender` event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/custom-point/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-point.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/custom-point/custom-point.cs %}
{% endhighlight %}
{% endtabs %}



## Trim using maximum label width

You can trim the label using [`EnableTrim`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_EnableTrim) property and width of the labels can also be customized using [`MaximumLabelWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_MaximumLabelWidth) property in the axis, the value maximum label width is `34` by default.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/labels-trim/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Labels-trim.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/labels-trim/labels-trim.cs %}
{% endhighlight %}
{% endtabs %}



## Line break support

Line break feature used to customize the long axis label text into multiple lines by using `<br>` tag. Refer the below example in that dataSource x value contains long text, it breaks into two lines by using `<br>` tag.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/line-break/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Line-break.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/line-break/line-break.cs %}
{% endhighlight %}
{% endtabs %}



## Maximum Labels

`MaximumLabels` property is set, then the labels will be rendered based on the count in the property per 100 pixel. If you have set range (minimum, maximum, interval) and maximumLabels, then the priority goes to range only. If you haven’t set the range, then we have considered priority to maximumLabels property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/max-label/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Max-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/max-label/max-label.cs %}
{% endhighlight %}
{% endtabs %}


## Axis label template

The axis label template allows you to customize axis labels by formatting them with HTML content, applying conditional styling, and including dynamic elements such as icons, images or additional data. This customization is enabled by setting the template content in the `LabelTemplate` property of the [ChartAxis](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/label-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Label-template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/multiple/label-template/label-template.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET MVC Chart Control](images/axislabel-template.png)