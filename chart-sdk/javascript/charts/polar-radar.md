---
layout: post
title: Polar and radar charts in JavaScript Charts | Syncfusion
description: Learn here all about Polar radar in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Polar and radar charts in JavaScript Charts

Polar and radar charts display values using angular and radial axes. Polar charts plot points on a circular coordinate system, while radar charts connect values across categories to support comparative analysis.

## Polar chart

To render a polar series, set the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#type) to `Polar`.

### Draw types

Use the series `drawType` property to render a polar series as `Line`, `Column`, `Area`, `RangeColumn`, `Spline`, `Scatter`, `StackingArea`, or `StackingColumn`. The default value is `Line`.

#### Line

To render the line draw type, set the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) to `Line`.

The [`isClosed`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#isclosed) property specifies whether the first and last points of a polar line series are connected to form a closed path. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs162/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs162/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs162" %}

#### Spline

To render the spline draw type, set the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) to `Spline`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs163/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs163/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs163" %}

#### Area

To render the area draw type, set the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) to `Area`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs164/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs164/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs164" %}

#### Stacked area

To render the stacked area draw type, set the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) to `StackingArea`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs165/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs165/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs165" %}

#### Column

To render a column draw type, use series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) as `Column`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs166/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs166/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs166" %}

#### Stacked column

To render a stacked column draw type, use series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) as `StackingColumn`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs167/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs167/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs167" %}

#### Range column

To render a range column draw type, use series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) as `RangeColumn`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs168/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs168/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs168" %}

#### Scatter

To render the scatter draw type, set the series [`drawType`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#drawtype) to `Scatter`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs169/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs169/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs169" %}

## Radar chart

To render a radar series, set the series [`type`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#type) to `Radar`.

### Draw type

Similar to a polar series, use the `drawType` property to render a radar series as `Line`, `Column`, `Area`, `RangeColumn`, `Spline`, `Scatter`, `StackingArea`, or `StackingColumn`. The default value is `Line`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs170/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs170/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs170" %}

## Axis customization

### Start angle

Use the [`startAngle`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#startangle) property of the primary X-axis to rotate the polar or radar chart. The default value is `0` degrees.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs171/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs171/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs171" %}

### Axis coefficient

Use the [`coefficient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#coefficient) property of the primary X-axis to control the radius of the polar or radar chart. The default value is `100`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs172/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs172/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs172" %}

## See also

- [Data labels](./data-labels)
- [Tooltip](./tool-tip)
- [Polar chart](./chart-types/polar)
- [Radar chart](./chart-types/radar)
