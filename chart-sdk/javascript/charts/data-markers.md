---
layout: post
title: Data markers in JavaScript Chart control | Syncfusion
description: Learn here all about Data markers in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data markers 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Data markers in JavaScript Chart control

Data markers are visual indicators placed at each data point on a series, helping to clearly identify and highlight individual values in your chart. Markers improve readability and accessibility, especially in line and area charts where data points may otherwise be unclear. Customize marker shape, color, size, and appearance to match your design requirements.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Enable markers for data points by setting the [`visible`](../api/chart/markerSettingsModel#visible-boolean) option to `true` in the marker property. Each series receives distinct markers by default, improving visual differentiation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs9" %}

## Shape

Assign different shapes to markers such as Rectangle, Circle, Diamond, Triangle, and others using the [`shape`](../api/chart/markerSettings#shape) property. Shape selection helps distinguish between multiple series and improves visual clarity.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs10" %}

>Note : To know more about the marker shape type refer the [`shape`](../api/chart/markerSettings#shape-string).

## Images

Use custom images as markers instead of predefined shapes by setting the [`imageUrl`](../api/chart/markerSettingsModel#imageurl-string) property. This allows branded or thematic markers that enhance visual appeal and user engagement.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs11" %}

## Customization

Customize marker appearance by modifying the `fill` (background color) and `border` properties. Combined with shape and image options, these customizations enable comprehensive marker styling to match your application design.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs12" %}

## Customizing specific point

Use the [`pointRender`](../api/chart#pointrender-emittypeipointrendereventargs) event to customize markers for individual data points. This event allows you to conditionally change shape, color, and border properties based on data values or other criteria.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs13" %}

## Fill marker with series color

Fill markers with the series color by enabling the [`isFilled`](../api/chart/markerSettingsModel#isFilled-boolean) property. This creates a cohesive visual design where markers inherit the series color automatically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs14" %}

## See also

* [Customize the marker with different shape](./how-to/marker-customization#customize-the-marker-with-different-shape)
* [Change the Cursor to a Pointer on Series Markers](https://support.syncfusion.com/kb/article/21473/how-to-change-the-cursor-to-a-pointer-on-series-markers-in-javascript-charts)