---
layout: post
title: Working with data in React Smithchart component | Syncfusion
description: Learn here all about Working with data in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Working with data 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Working with data in React Smithchart component

The Smith chart can visualize the data bound from local data. The data bound for the Smith chart should be an array of object and should contain the field resistance and rectangle. This data should be bound to points or data source in the Smith chart.

## Data Binding

You can bind simple JSON data to Smith chart using the point property in series. The JSON data should contain [`resistance`] and [`reactance`] fields. This JSON data should be bound to points or data source in the Smith chart. You can add any number of JSON or data source to points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/smith-chart/getting-started-cs30" %}