---
layout: post
title: Axis in Syncfusion ASP.NET Core HeatMap Chart Component
description: Learn here all about axis in Syncfusion ASP.NET Core HeatMap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis
publishingplatform: chart-sdk
documentation: ug
---


# Axis in ASP.NET Core HeatMap Chart Component

HeatMap consists of two axes namely, X-axis and Y-axis that displays the row headers and column headers to plot the data points respectively. You can define the type, format, and other customizing options for both axes in the HeatMap.

## Types

There are three different axis types available in the HeatMap, which defines the data type of the axis labels. You can define the axis type by using the [valueType](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_ValueType) property in the HeatMap.

### Category axis

Category axis type is used to represent the string values in axis labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/category/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Category.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/category/category.cs %}
{% endhighlight %}
{% endtabs %}


### Numeric axis

Numeric axis type is used to represent the numeric values in axis labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/numeric/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Numeric.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/numeric/numeric.cs %}
{% endhighlight %}
{% endtabs %}



### Date-time axis

Date-time axis type is used to represent the date-time values in axis labels with a specific format. In date-time axis, you can define the start and end date/time using the [minimum](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_Minimum) and [maximum](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_Maximum) properties.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/dateTime/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="DateTime.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/dateTime/dateTime.cs %}
{% endhighlight %}
{% endtabs %}


## Inversed axis

HeatMap supports inversing the axis origin for both axes, where the axis labels are placed in an inversed manner. You can enable axis inversing by enabling the [isInversed](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_IsInversed) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/inversed/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Inversed.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/inversed/inversed.cs %}
{% endhighlight %}
{% endtabs %}



## Opposed axis

In HeatMap, you can place the axis label in an opposite position of its default axis label position by using the [opposedPosition](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_OpposedPosition) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/opposed/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opposed.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/opposed/opposed.cs %}
{% endhighlight %}
{% endtabs %}

## Axis labels customization

### Customizing the text style

The text style of the axis labels can be customized using the following options available in the [textStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_TextStyle) property.

* [color](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_Color) - It is used to change the text color of the axis labels.
* [fontFamily](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_FontFamily) - It is used to change the font family of the axis labels.
* [fontStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_FontStyle) - It is used to change the font style of the axis labels.
* [fontWeight](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_FontWeight) - It is used to change the font weight of the axis labels.
* [size](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_Size) - It is used to change the font size of the axis labels.
* [textAlignment](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_TextAlignment) - It is used to position and align the axis labels. This property allows you to specify values such as **Near**, **Center**, and **Far**.
* [textOverflow](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapFont.html#Syncfusion_EJ2_HeatMap_HeatMapFont_TextOverflow) - When the axis label exceeds the intended space, this property is used to trim or wrap it. This property takes values such as **None**, **Trim**, and **Wrap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/textstyle/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TextStyle.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/textstyle/textstyle.cs %}
{% endhighlight %}
{% endtabs %}

![Customizing the text style of axis labels in ASP.NET Core HeatMap chart](./images/heatmap-chart-axis-labels-text-style.png)

### Providing line breaks

Axis labels with line breaks improve the readability of the HeatMap by splitting the text on an axis into multiple lines. The **"\<br>"** character is used to add line breaks to the axis labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/line-breaks/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Line-breaks.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/line-breaks/line-breaks.cs %}
{% endhighlight %}
{% endtabs %}

![Axis Labels with line breaks in ASP.NET Core HeatMap chart](./images/heatmap-chart-axis-labels-with-line-breaks.png)


### Customizing labels when intersecting with other labels

When the axis labels intersect, [labelIntersectAction](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_LabelIntersectAction) property is used to handle the intersection. The `labelIntersectAction` property can take the following values.

* **None** - It specifies that no action is taken when the axis labels intersect.
* **Trim** - It specifies to trim the axis labels when they intersect.
* **Rotate45** - When the axis labels intersect, they are rotated to 45 degrees.
* **MultipleRows** - It specifies to show all the axis labels as multiple rows when they intersect.

The below example demonstrates to trim the axis labels by using the `labelIntersectAction` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/label-intersection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="LabelIntersectAction.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/label-intersection/label-intersection.cs %}
{% endhighlight %}
{% endtabs %}

![Customizing axis labels when intersecting with other labels in ASP.NET Core HeatMap chart](./images/heatmap-chart-label-intersect-action.png)


### Rotating labels

The axis labels can be rotated to the desired angles by using the [labelRotation](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_LabelRotation) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/label-rotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="LabelRotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/label-rotation/label-rotation.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with rotated axis labels](./images/heatmap-chart-rotating-labels.png)

### Label formatting

HeatMap supports formatting the axis labels by using the [labelFormat](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_LabelFormat) property. Using this property, you can customize the axis label by global string format ('P', 'C', etc) or customized format like '{value}°C'.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/label-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Label-format.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/label-format/label-format.cs %}
{% endhighlight %}
{% endtabs %}

## Axis intervals

In HeatMap, you can define an interval between the axis labels using the [interval](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_Interval) property. In date-time axis, you can change the interval mode by using the [intervalType](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_IntervalType) property. The date-time axis supports the following interval types:

* Years
* Months
* Days
* Hours
* Minutes

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/interval/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Interval.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/interval/interval.cs %}
{% endhighlight %}
{% endtabs %}


## Axis label increment

Axis label increment in the HeatMap is used to display the axis labels with regular interval values in numeric and date-time axes. The labels will be displayed with tick gaps when you set the label interval. But, to achieve the same behavior without tick gaps, use the label increment. You can set the axis label increment using the [increment](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_Increment) property and the default value of this property is **1**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/increment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Increment.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/increment/increment.cs %}
{% endhighlight %}
{% endtabs %}


## Limiting labels in date-time axis

You can display the axis labels at specific time intervals along with the date-time axis using the [showLabelOn](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapAxis.html#Syncfusion_EJ2_HeatMap_HeatMapAxis_ShowLabelOn) property. This property supports the following types:

* **None**: Displays the axis labels based on the `intervalType` and `interval` property of the axis. This type is default value of the `showLabelOn` property.
* **Years**: Displays the axis labels on every year between given date-time range.
* **Months**: Displays the axis labels on every month between given date-time range.
* **Days**: Displays the axis labels on every day between given date-time range.
* **Minutes**: Displays the axis labels on every minute between given date-time range.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/show-label/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Show-label.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/show-label/show-label.cs %}
{% endhighlight %}
{% endtabs %}


## Multilevel Labels

Multilevel labels are used to classify a group of axis labels as a single category, which is then displayed with a label. By using [multiLevelLabels](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapMultiLevelLabel.html#properties), you can add multiple levels on top of the axis labels.

To divide and group the axis labels, you can use `multiLevelLabels` property. The starting and ending indexes of the axis labels can be set using the `start` and `end` properties in the [categories](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapMultiLevelLabel.html#Syncfusion_EJ2_HeatMap_HeatMapMultiLevelLabel_Categories). The `text` property can be used to specify a name for the grouped axis labels.

The multilevel labels can be customized by using the following properties.
* [overflow](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapMultiLevelLabel.html#Syncfusion_EJ2_HeatMap_HeatMapMultiLevelLabel_Overflow) - It is used to trim or wrap the multilevel labels when the label overflows the intended space. NOTE: This property is only for x-axis.
* [alignment](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapMultiLevelLabel.html#Syncfusion_EJ2_HeatMap_HeatMapMultiLevelLabel_Alignment) - It is used to place and align the multilevel labels.
* `maximumTextWidth` - It is used to set the maximum width of the text. When the text length exceeds the maximum text width, the overflow action will be performed.
* [textStyle](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapMultiLevelLabel.html#Syncfusion_EJ2_HeatMap_HeatMapMultiLevelLabel_TextStyle) - It is used to customize the font style of the multilevel labels.
* [border](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.HeatMap.HeatMapMultiLevelLabel.html#Syncfusion_EJ2_HeatMap_HeatMapMultiLevelLabel_Border) - It is used to customize the border of the multilevel labels displayed in the x-axis and y-axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/multi-level-labels/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multi-level-labels.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/axis/multi-level-labels/multi-level-labels.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core HeatMap chart with multilevel labels](./images/heatmap-chart-multi-level-labels.png)
