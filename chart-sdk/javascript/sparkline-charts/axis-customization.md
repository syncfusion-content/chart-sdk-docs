---
layout: post
title: Axis customization in JavaScript Sparkline control | Syncfusion
description: Learn here all about Axis customization in Syncfusion JavaScript Sparkline control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Axis customization in JavaScript Sparkline control

You can customize axis value types and min and max values of the sparkline.

## Change value type of the sparkline

You can change the sparkline value type by setting the [`valueType`] property to [`Numeric`], [`Category`], or [`DateTime`].

**DateTime**

You can assign date-time values to the sparkline by setting the [`valueType`] property to [`DateTime`].

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1" %}

**Category**

You can assign category values to the sparkline by setting [`valueType`] to [`Category`].

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2" %}

**Numeric**

You can assign numeric values to the sparkline by setting [`valueType`] to [`Numeric`].

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3" %}

## Change min and max values of axis

You can change the min and max values of x-axis by setting the [`minX`] and [`maxX`] values to the [`axisSettings`] property. You can also change the min and max values of y-axis by setting the [`minY`] and [`maxY`] values to the [`axisSettings`] property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4" %}

## Change value of axis

You can set horizontal axis line value of the sparkline by setting [`value`] to the [`axisSettings`] property. The following code example shows this.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5" %}

## Axis line customization

Axis of the sparkline can be collapsed using the [`visible`] property in [`lineSettings`]; this is not applicable for win-loss. You can customize the [`color`], [`width`], [`opacity`], and [`dashArray`] of axis line.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6" %}
