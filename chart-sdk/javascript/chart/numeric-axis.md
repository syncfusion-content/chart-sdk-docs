---
layout: post
title: Numeric axis in JavaScript Chart control | Syncfusion
description: Learn here all about Numeric axis in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Numeric axis 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Numeric axis in JavaScript Chart control

The [numeric axis](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-axis) is used to represent numeric values in a chart. By default, the `valueType` of an axis is set to `Double`, which is suitable for displaying continuous numerical data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs82/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs82/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs82" %}

## Range

The range of the axis is calculated automatically based on the provided data. You can also customize the visible range by using the [`minimum`](../api/chart/axisModel#minimum-object), [`maximum`](../api/chart/axisModel#maximum-object), and [`interval`](../api/chart/axisModel#interval-number) properties of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs83/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs83/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs83" %}

## Range Padding

Padding can be applied to the minimum and maximum values of the axis range by using the [`rangePadding`](../api/chart/axisModel#rangepadding-string) property. The numeric axis supports the following padding options:

* None
* Round
* Additional
* Normal
* Auto

**Numeric - None**

When the [`rangePadding`](../api/chart/axisModel#rangepadding-string) property is set to `None`, the minimum and maximum values of the axis are derived directly from the data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs84/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs84/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs84" %}

**Numeric - Round**

When the [`rangePadding`](../api/chart/axisModel#rangepadding-string) property is set to `Round`, the minimum and maximum values are rounded to the nearest values divisible by the interval. For example, if the minimum value is 3.5 and the interval is 1, the minimum value is rounded to 3.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs85/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs85/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs85" %}

**Numeric - Additional**

When the [`rangePadding`](../api/chart/axisModel#rangepadding-string) property is set to `Additional`, one interval is added to both the minimum and maximum values of the axis range.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs86/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs86/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs86" %}

**Numeric - Normal**

When the [`rangePadding`](../api/chart/axisModel#rangepadding-string) property is set to `Normal`, padding is applied to the axis based on the default range calculation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs87/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs87/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs87" %}

**Numeric - Auto**

When the [`rangePadding`](../api/chart/axisModel#rangepadding-string) property is set to `Auto`, the horizontal numeric axis uses `None` as padding, while the vertical numeric axis uses `Normal` padding.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs88/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs88/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs88" %}

## Label Format

**Numeric Label Format**

Numeric axis labels can be formatted by using the [`labelFormat`](../api/chart/axisModel#labelformat-string) property. This property supports all Globalize numeric formats.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs89/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs89/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs89" %}

The following table shows examples of commonly used numeric label formats and their corresponding outputs.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>Rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>Rounded to 2 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>Rounded to 3 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>Converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>Converted to percentage with 2 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>Converted to percentage with 3 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>Currency format with 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>Currency format with 2 decimal places</td>
</tr>
</table>

## GroupingSeparator

To separate groups of thousands in numeric labels, enable the [`useGroupingSeparator`](../api/chart/chartModel#useGroupingSeparator-boolean) property in the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs90/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs90/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs90" %}

## Custom Label Format

The numeric axis also supports custom label formats by using placeholders such as `{value}°C`, where `{value}` represents the numeric axis label. For example, the value `20` is displayed as `20°C`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs91/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs91/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs91" %}