---
layout: post
title: Working With Data in ASP.NET MVC Smithchart Component
description: Learn here all about Working With Data in Syncfusion ASP.NET MVC Smithchart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Working With Data
publishingplatform: chart-sdk
documentation: ug
---


# Working with Data

Smithchart can visualise the data bound from local data. The data you bind for the smithchart, should be an array of object and that should contain the field resistance and rectangle. This should be bind to points or datasource in the smithchart.

## Data Binding

You can bind simple JSON data to smithchart using point property in series. JSON data should contain [`resistance`] and [`reactance`] fields. This JSON data should be bind to points or datasource in the smithchart. You can any number of JSON for points or datasource as per your requirement.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/data/working-with-data/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Working-with-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/data/working-with-data/working-with-data.cs %}
{% endhighlight %}
{% endtabs %}

