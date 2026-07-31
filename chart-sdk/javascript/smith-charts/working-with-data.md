---
layout: post
title: Working with data in JavaScript Smithchart control | Syncfusion
description: Learn here all about Working with data in Syncfusion JavaScript Smithchart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Working with data 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Working with data in JavaScript Smithchart control

Smithchart can visualise the data bound from local data. The data you bind for the smithchart, should be an array of object and that should contain the field resistance and rectangle. This should be bind to points or datasource in the smithchart.

## Data Binding

You can bind simple JSON data to smithchart using point property in series. JSON data should contain [`resistance`] and [`reactance`] fields. This JSON data should be bind to points or datasource in the smithchart. You can any number of JSON for points or datasource as per your requirement.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/working-with-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/working-with-data-cs1" %}