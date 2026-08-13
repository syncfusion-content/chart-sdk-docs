---
layout: post
title: Comparative Bar in JavaScript Bullet Chart | Syncfusion
description: Learn how to display the target bar in the Syncfusion JavaScript Bullet Chart using the targetField property.
platform: JavaScript
control: Comparative Bar 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Comparative Bar in JavaScript Bullet Chart

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`targetField`](../api/bullet-chart#targetfield) should be mapped to the appropriate field from the datasource.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs1" %}

## Types of target bar

The shape of the target bar can be customized using the [`targetTypes`](../api/bullet-chart#targettypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs2" %}

## Target bar customization

The following properties can be used to customize the target bar. Also, you can bind the color for the target bar from [`dataSource`](../api/bullet-chart#datasource) for the bullet chart.

* [`targetColor`](../api/bullet-chart#targetcolor) - Specifies the fill color of target bar.
* [`targetWidth`](../api/bullet-chart#targetwidth) - Specifies the width of target bar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/targetbar-cs3" %}