---
layout: post
title: Working with Data in JavaScript Bullet Chart | Syncfusion
description: Learn how to bind local and remote data to the Syncfusion JavaScript Bullet Chart using valueField and targetField.
platform: JavaScript
control: Data binding 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Working with Data in JavaScript Bullet Chart

The `dataSource` property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the `valueField` and `targetField` respectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/dataSource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/dataSource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/dataSource-cs1" %}