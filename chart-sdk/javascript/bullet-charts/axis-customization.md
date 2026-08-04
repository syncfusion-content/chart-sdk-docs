---
layout: post
title: Axis customization in JavaScript Bullet chart control | Syncfusion
description: Learn here all about Axis customization in Syncfusion JavaScript Bullet chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Axis customization in JavaScript Bullet chart control

## MajorTickLines and MinorTickLines Customization

You can customize the `width`, `color`, and `size` of minor and major tick lines using the [`majorTickLines`](../api/bullet-chart/bulletChartModel/) and [`minorTickLines`](../api/bullet-chart/bulletChartModel/) properties of the bullet-chart.

The following properties can be used to customize `majorTicklines` and `minorTicklines`.

* **width** - Specifies the width of ticklines.
* **height** - Specifies the height of ticklines.
* **color** - Specifies the color of ticklines.
* **useRangeColor** - Specifies the color of ticklines and represents the color from corresponding range colors.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs1" %}

## Tick Placement

You can place major and minor ticks `inside` or `outside` the ranges using the [`tickPosition`](../api/bullet-chart/bulletChartModel/) property of bullet-chart. The major and the minor ticks can be placed **inside** or **outside** the ranges using the `tickPosition` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs2" %}

## Label Format

***Axis Label Format***

Axis numeric labels can be formatted by using the [`labelFormat`](../api/bullet-chart/bulletChartModel/#labelformat)property. Axis labels support all globalize formats. The following table describes the result of applying some commonly used label formats on numeric axis values.
Axis numeric labels can be formatted by using the `labelFormat` property. Axis labels support all globalize formats.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs3" %}

The following table describes the result of applying some commonly used formats to numeric axis labels.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

## GroupingSeparator

To separate groups of thousands, use the [`enableGroupSeparator`](../api/bullet-chart/bulletChartModel/#enablegroupseparator) property of bullet-chart.
To separate the groups of thousands, set the `enableGroupSeparator` property to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs4" %}

## Custom Label Format

Using the `labelFormat` property, axis labels can be specified with a custom defined format in addition to the axis value. The label format uses a placeholder such as **${value}K**, which represents the axis label.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs5" %}

## Label Placement

You can customize the axis labels `inside` or `outside` the bullet-chart using the [`labelPosition`](../api/bullet-chart/bulletChartModel/#labelposition) property. Label can be placed **Inside** or **Outside** of the ranges using the `labelPosition` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs6" %}

## Opposed Position

To place an axis opposite to its original position, set the [`opposedPosition`](../api/bullet-chart/bulletChartModel/#opposedposition) property to true. To place an axis opposite to its original position, set the `opposedPosition` property to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs7" %}

## Category Label

The Bullet Chart supports X-axis label by specifying the property from the data source to the `categoryField`. It helps to understand the input data in a more efficient way.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs8" %}

## Category Label Customization

The label color, opacity, font size, font family, font weight, and font style can be customized by using the `categoryLabelStyle` setting for category and the `labelStyle` setting for axis label. The `useRangeColor` property specifies the color of the axis label and represents the color from the corresponding range colors.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-axis-cs9" %}