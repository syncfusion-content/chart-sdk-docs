---
layout: post
title: Grouping in JavaScript Accumulation Chart | Syncfusion
description: Learn how to group data points in the Syncfusion JavaScript Accumulation Chart using the groupTo property.
platform: JavaScript
control: Accumulation Chart 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Grouping in JavaScript Accumulation Chart

You can club/group few points of the series based on
[`groupTo`](../api/accumulation-chart/accumulationSeries) property. For example, if the club
value is 11, then the points with value less than 11 is grouped together and will be showed as a single
point with label `others`. The property also takes value in percentage (percentage of total data points value).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs26" %}

## Group Mode

Slice can also be grouped based on number of points by specifying the `groupMode` to Point. For example, if the group to value is 11, accumulation chart will show 1st 11 points and will group remaining entries in the collection as a single point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs27/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs27" %}

## Customization

You can customize the grouped point and its data label using `pointRender` and `textRender` event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs28/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs28" %}
