---
layout: post
title: DateTime axis in TypeScript Charts | Syncfusion
description: Learn here all about Date time axis in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
<!-- markdownlint-disable MD036 -->

# DateTime axis in TypeScript Charts

The DateTime axis is designed to display time-based data on chart axes. It supports various date and time formats, customizable intervals, and range padding options for time-series visualization.

## DateTime axis

The DateTime axis uses a date-time scale and displays date-time values as axis labels based on the specified format. This axis type is ideal for visualizing time-based data such as trends, timelines, and time-series data.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs65/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs65/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs65" %}

> Note: To use the Datetime axis, inject `DateTime` using `Chart.Inject(DateTime)` method and set the [`valueType`](../api/chart/axis#valuetype-string) property of the axis to `DateTime`.

## DateTimeCategory axis

The DateTimeCategory axis is used to render date-time values with non-linear intervals. This axis type is especially useful when certain time ranges, such as weekends or holidays, need to be excluded. In the following example, only business days are displayed within a week.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs66/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs66/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs66" %}

>Note: To use the DateTimeCategory axis, inject `DateTimeCategory` using `Chart.Inject(DateTimeCategory)` method and set the [`valueType`](../api/chart/axis#valuetype-string) property of the axis to `DateTimeCategory`. The axis range can be controlled using the [`minimum`](../api/chart/axis#minimum-object), [`maximum`](../api/chart/axis#maximum-object), and [`interval`](../api/chart/axis#interval-number) properties.

### Range

The axis range is calculated automatically based on the provided data. You can also customize the range of the axis using the [`minimum`](https://ej2.syncfusion.com/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/documentation/api/chart/axis#interval) properties of the axis.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs67/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs67/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs67" %}

### Interval customization

DateTime intervals can be customized using the [`interval`](https://ej2.syncfusion.com/documentation/api/chart/axis#interval) and [`intervalType`](https://ej2.syncfusion.com/documentation/api/chart/axis#intervaltype) properties of the axis. For example, when the interval is set to `2` and the interval type is set to `Years`, the axis displays labels at two-year intervals.

The DateTime axis supports the following interval types:

- Auto
- Years
- Months
- Days
- Hours
- Minutes
- Seconds

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs68/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs68/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs68" %}

### Applying padding to the range

Padding can be applied to the minimum and maximum values of the axis range using the [`rangePadding`](https://ej2.syncfusion.com/documentation/api/chart/axis#rangepadding) property. The DateTime axis supports the following range padding types:

- None
- Round
- Additional

#### DateTime - None

When the [`rangePadding`](https://ej2.syncfusion.com/documentation/api/chart/axis#rangepadding) property is set to `None`, the minimum and maximum values of the axis are calculated directly from the data values.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs69/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs69/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs69" %}

#### DateTime - Round

When the [`rangePadding`](https://ej2.syncfusion.com/documentation/api/chart/axis#rangepadding) property is set to `Round`, the minimum and maximum values are rounded to the nearest interval boundary. For example, if the minimum value is January 15 and the interval type is set to `Months` with an interval of `1`, the axis minimum is adjusted to January 1.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs70/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs70/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs70" %}

#### DateTime - Additional

When the [`rangePadding`](https://ej2.syncfusion.com/documentation/api/chart/axis#rangepadding) property is set to `Additional`, an additional interval is added before the minimum and after the maximum values of the axis range to provide extra spacing.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs71/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs71/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs71" %}

## Label format

Date values displayed on the DateTime axis can be formatted using the [`labelFormat`](https://ej2.syncfusion.com/documentation/api/chart/axis#labelformat) property. This property supports globalized date and time formats for clear and localized label rendering.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs72/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs72/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs72" %}

The following table illustrates the output produced by applying commonly used date-time format strings to the `labelFormat` property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>Displays the full name of the day</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>Displays the date in month/day/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>MMM</td>
<td>Apr</td>
<td>Displays the abbreviated month name</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Displays the time in hours and minutes</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>Displays the time in hours, minutes, and seconds</td>
</tr>
</table>

## Custom label format

Use the `axisLabelRender` event to add custom text to DateTime axis labels. First, format the DateTime values using the `labelFormat` property, and then modify the generated label text in the `axisLabelRender` event.

In the following example, the DateTime values are formatted using the abbreviated month format, and the text `Month:` is added before each axis label.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs73/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs73/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs73" %}

## See also

* [Numeric axis in JavaScript Charts](https://ej2.syncfusion.com/documentation/chart/numeric-axis)
* [Category axis in JavaScript Charts](https://ej2.syncfusion.com/documentation/chart/category-axis)
* [Axis customization in JavaScript Charts](https://ej2.syncfusion.com/documentation/chart/axis)