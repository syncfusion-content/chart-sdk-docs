---
layout: post
title: Axis Labels in Syncfusion ASP.NET Core Chart Component
description: Learn here all about Axis Labels in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis Labels
publishingplatform: chart-sdk
documentation: ug
---


# Axis Labels in ASP.NET Core Chart Component

## Smart Axis Labels

When the axis labels overlap with each other, you can use [`labelIntersectAction`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_LabelIntersectAction) property in the axis, to place them smartly.

When setting `labelIntersectAction` as `Hide`

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/hide/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Hide.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/hide/hide.cs %}
{% endhighlight %}
{% endtabs %}



When setting `labelIntersectAction` as `Rotate45`

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/rotate45/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rotate45.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/rotate45/rotate45.cs %}
{% endhighlight %}
{% endtabs %}



When setting `labelIntersectAction` as `Rotate90`

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/rotate90/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rotate90.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/rotate90/rotate90.cs %}
{% endhighlight %}
{% endtabs %}


## Axis Labels Positioning

By default, the axis labels can be placed `outside` the axis line and this also can be placed `inside` the axis line using the `labelPosition` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/position/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/position/position.cs %}
{% endhighlight %}
{% endtabs %}



## Multilevel Labels

Any number of levels of labels can be added to an axis using the `multiLevelLabels` property. This property can be configured using the following properties:

• Categories
• Overflow
• Alignment
• Text style
• Border

### Categories

Using the categories property, you can configure the `start`, `end`, `text`, and `maximumTextWidth` of multilevel labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-category/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Category.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-category/category.cs %}
{% endhighlight %}
{% endtabs %}



### Overflow

Using the `overflow` property, you can `trim` or `wrap` the multilevel labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-overflow/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Overflow.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-overflow/overflow.cs %}
{% endhighlight %}
{% endtabs %}



### Alignment

The `alignment` property provides option to position the multilevel labels at `far`, `center`, or `near`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-alignment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Alignement.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-alignment/alignement.cs %}
{% endhighlight %}
{% endtabs %}



### Text customization

The `textStyle` property of multilevel labels provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-textcustom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Text-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-textcustom/text-custom.cs %}
{% endhighlight %}
{% endtabs %}



### Border customization

Using the `border` property, you can customize the `width`, `color`, and `type`. The `type` of border are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder` and `CurlyBrace`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-bordercustom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Border-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/multi-bordercustom/border-custom.cs %}
{% endhighlight %}
{% endtabs %}



## Edge Label Placement

Labels with long text at the edges of an axis may appear partially in the chart. To avoid this, use [`edgeLabelPlacement`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_EdgeLabelPlacement) property in axis, which moves the label inside the chart area for better appearance or hides it. By default, the [`edgeLabelPlacement`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_EdgeLabelPlacement) property is set to **Shift** to ensure that labels are shifted inside the chart area, avoiding any overlap or coincidence.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/edge/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Edge.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/edge/edge.cs %}
{% endhighlight %}
{% endtabs %}



## Labels Customization

The [`labelStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_LabelStyle) property of an axis provides options to customize the `color`, `font-family`, `font-size` and `font-weight` of the axis labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/labels-custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Labels-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/labels-custom/labels-custom.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing Specific Point

You can customize the specific text in the axis labels using `axisLabelRender` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/custom-point/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-point.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/custom-point/custom-point.cs %}
{% endhighlight %}
{% endtabs %}



## Trim using maximum label width

You can trim the label using [`enableTrim`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_EnableTrim) property and width of the labels can also be customized using [`maximumLabelWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html#Syncfusion_EJ2_Charts_ChartAxis_MaximumLabelWidth) property in the axis, the value maximum label width is `34` by default.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/labels-trim/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Labels-trim.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/labels-trim/labels-trim.cs %}
{% endhighlight %}
{% endtabs %}



## Line break support

Line break feature used to customize the long axis label text into multiple lines by using `<br>` tag. Refer the following example in that dataSource x value contains long text, it breaks into two lines by using `<br>` tag.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/line-break/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Line-break.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/line-break/line-break.cs %}
{% endhighlight %}
{% endtabs %}



## Maximum Labels

`MaximumLabels` property is set, then the labels will be rendered based on the count in the property per 100 pixel. If you have set range (minimum, maximum, interval) and maximumLabels, then the priority goes to range only. If you haven’t set the range, then priority is considered to be maximumLabels property.

{% tabs %}
{% highlight c# tabtitle="Max-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/max-label/max-label.cs %}
{% endhighlight %}
{% endtabs %}

## Axis label template

The axis label template allows you to customize axis labels by formatting them with HTML content, applying conditional styling, and including dynamic elements such as icons, images or additional data. This customization is enabled by setting the template content in the `labelTemplate` property of the [ChartAxis](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAxis.html).

{% tabs %}
{% highlight c# tabtitle="Label-template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/multiple/label-template/label-template.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Chart Control](images/axislabel-template.png)
