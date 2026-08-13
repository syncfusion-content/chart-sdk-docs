---
layout: post
title: Axis in TypeScript HeatMap Chart | Syncfusion
description: Configure X and Y axes in the JavaScript HeatMap Chart with category, numeric, or date-time types, plus inversed, opposed, multilevel, and formatted labels.
platform: TypeScript
control: Axis 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Axis in TypeScript HeatMap Chart

HeatMap consists of two axes namely, X-axis and Y-axis that displays the row headers and column headers to plot the data points respectively.
You can define the type, format, and other customizing options for both axes in the HeatMap.

## Types

There are three different axis types available in the HeatMap, which defines the data type of the axis labels. You can define the axis type by using the [valueType](../api/heatmap/axis#valuetype) property in the HeatMap.

### Category axis

Category axis type is used to represent the string values in axis labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs1" %}

### Numeric axis

Numeric axis type is used to represent the numeric values in axis labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs2" %}

### Date-time axis

Date-time axis type is used to represent the date-time values in axis labels with a specific format. In date-time axis, you can define the start and end date/time using the [minimum](../api/heatmap/axis#minimum) and [maximum](../api/heatmap/axis#maximum) properties.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs3" %}

## Inversed axis

HeatMap supports inversing the axis origin for both axes, where the axis labels are placed in an inversed manner. You can enable axis inversing by enabling the [isInversed](../api/heatmap/axis#isinversed) property.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs4" %}

## Opposed axis

In HeatMap, you can place the axis label in an opposite position of its default axis label position by using the [opposedPosition](../api/heatmap/axis#opposedposition) property.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs5" %}

## Enable axis labels

You can add axis labels to the HeatMap and format those labels using the [xAxis](../api/heatmap#xaxis) and [yAxis](../api/heatmap#yaxis) properties. Axis labels provide additional information about the data points populated in the HeatMap.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs2" %}

## Axis labels customization

### Customizing the text style

The text style of the axis labels can be customized using the following options available in the [textStyle](../api/heatmap/axisModel#textstyle) property.

* [color](../api/heatmap/fontModel#color) - It is used to change the text color of the axis labels.
* [fontFamily](../api/heatmap/fontModel#fontfamily) - It is used to change the font family of the axis labels.
* [fontStyle](../api/heatmap/fontModel#fontstyle) - It is used to change the font style of the axis labels.
* [fontWeight](../api/heatmap/fontModel#fontweight) - It is used to change the font weight of the axis labels.
* [size](../api/heatmap/fontModel#size) - It is used to change the font size of the axis labels.
* [textAlignment](../api/heatmap/fontModel#textalignment) - It is used to position and align the axis labels. This property allows you to specify values such as **Near**, **Center**, and **Far**.
* [textOverflow](../api/heatmap/fontModel#textoverflow) - When the axis label exceeds the intended space, this property is used to trim or wrap it. This property takes values such as **None**, **Trim**, and **Wrap**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs13" %}

### Providing line breaks

Axis labels with line breaks improve the readability of the HeatMap by splitting the text on an axis into multiple lines. The **"\<br>"** character is used to add line breaks to the axis labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs14" %}

### Customizing labels when intersecting with other labels

When the axis labels intersect, [labelIntersectAction](../api/heatmap/axisModel#labelintersectaction) property is used to handle the intersection. The `labelIntersectAction` property can take the following values.

* **None** - It specifies that no action is taken when the axis labels intersect.
* **Trim** - It specifies to trim the axis labels when they intersect.
* **Rotate45** - When the axis labels intersect, they are rotated to 45 degrees.
* **MultipleRows** - It specifies to show all the axis labels as multiple rows when they intersect.

The below example demonstrates to trim the axis labels by using the `labelIntersectAction` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs11" %}

### Rotating labels

The axis labels can be rotated to the desired angles by using the [labelRotation](../api/heatmap/axisModel#labelrotation) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs12" %}

### Label formatting

HeatMap supports formatting the axis labels by using the [labelFormat](../api/heatmap/axis#labelformat) property. Using this property, you can customize the axis label by global string format ('P', 'C', etc) or customized format like '{value}°C'.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs6" %}

## Axis intervals

In HeatMap, you can define an interval between the axis labels using the [interval](../api/heatmap/axis#interval) property. In date-time axis, you can change the interval mode by using the [intervalType](../api/heatmap/axis#intervaltype) property. The date-time axis supports the following interval types:

* Years
* Months
* Days
* Hours
* Minutes

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs7" %}

## Axis label increment

Axis label increment in the HeatMap is used to display the axis labels with regular interval values in numeric and date-time axes. The labels will be displayed with tick gaps when you set the label interval. But, to achieve the same behavior without tick gaps, use the label increment. You can set the axis label increment using the [increment](../api/heatmap/axis#increment) property and the default value of this property is **1**.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs8" %}

## Limiting labels in date-time axis

You can display the axis labels at specific time intervals along with the date-time axis using the [showLabelOn](../api/heatmap/axis#showlabelon) property. This property supports the following types:

* None: Displays the axis labels based on the `intervalType` and `interval` property of the axis. This type is default value of the `showLabelOn` property.
* Years: Displays the axis labels on every year between given date-time range.
* Months: Displays the axis labels on every month between given date-time range.
* Days: Displays the axis labels on every day between given date-time range.
* Minutes: Displays the axis labels on every minute between given date-time range.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs9" %}

## Multilevel Labels

Multilevel labels are used to classify a group of axis labels as a single category, which is then displayed with a label. By using [multiLevelLabels](../api/heatmap/axis#multilevellabels), you can add multiple levels on top of the axis labels.

To divide and group the axis labels, you can use `multiLevelLabels` property. The starting and ending indexes of the axis labels can be set using the [start](../api/heatmap/multiLevelCategoriesModel#start) and [end](../api/heatmap/multiLevelCategoriesModel#end) properties in the [categories](../api/heatmap/multiLevelCategoriesModel). The [text](../api/heatmap/multiLevelCategoriesModel#text) property can be used to specify a name for the grouped axis labels.

The multilevel labels can be customized by using the following properties.
* [overflow](../api/heatmap/multiLevelLabels#overflow) - It is used to trim or wrap the multilevel labels when the label overflows the intended space. NOTE: This property is only for x-axis.
* [alignment](../api/heatmap/multiLevelLabels#alignment) - It is used to place and align the multilevel labels.
* [maximumTextWidth](../api/heatmap/multiLevelCategoriesModel#maximumtextwidth) - It is used to set the maximum width of the text. When the text length exceeds the maximum text width, the overflow action will be performed.
* [textStyle](../api/heatmap/multiLevelLabels#textstyle) - It is used to customize the font style of the multilevel labels.
* [border](../api/heatmap/multiLevelLabels#border) - It is used to customize the border of the multilevel labels displayed in the x-axis and y-axis.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/axis-cs10" %}

