---
layout: post
title: Category axis in JavaScript Chart control | Syncfusion
description: Learn here all about Category axis in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Category axis 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Category axis in JavaScript Chart control

<!-- markdownlint-disable MD036 -->

The category axis is used to represent string-based values instead of numeric values. It is commonly used for displaying discrete categories such as names, labels, or textual groupings along an axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs61/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs61/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs61" %}

> Note: To use the category axis, inject `Category` module using `Chart.Inject(Category)` method and set the [`valueType`](../api/chart/axis) property of the axis to `Category`.

## Labels Placement

By default, category labels are positioned between the axis tick marks. They can also be aligned directly on the ticks by using the [`labelPlacement`](../api/chart/a xis) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs62/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs62/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs62" %}

## Range

The visible range of the category axis can be customized by using the [`minimum`](../api/chart/axis), [`maximum`](../api/chart/axis), and [`interval`](../api/chart/axis) properties of the axis. These properties control the start value, end value, and spacing between category labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs63/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs63/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs63" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This behavior can be enabled by setting the `isIndexed` property of the axis to **true**, which positions data points according to their index instead of their actual category values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs64/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs64/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs64" %}