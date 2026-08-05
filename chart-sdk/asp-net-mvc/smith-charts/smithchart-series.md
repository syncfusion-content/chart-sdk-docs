---
layout: post
title: Smithchart Series in ASP.NET MVC Smithchart Component
description: Learn here all about Smithchart Series in Syncfusion ASP.NET MVC Smithchart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smithchart Series
publishingplatform: chart-sdk
documentation: ug
---


# Series

You can add any number of series to the smithchart as per your requirement. You can use series setting to either add or customize the data. For the points or datasource added in the series, line is drawn. You can customize the each series as per your requirement with marker, datalabel, animation, opacity and so on.

## points or datasource

For adding values in the smithchart, you can use either points or datasource in the series. Points and datasource both should be array of object which should contain the field names resistance and rectangle.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/series/series/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/series/series/series.cs %}
{% endhighlight %}
{% endtabs %}



## Series customization

Using following options in series settings, you can customize each series in smithchart as per your requirement.

* [`fill`] - Used to customize the fill color for the series.
* [`enableSmartLabels`] - Used to place the data labels on the smithchart without overlapping with each other.
* [`visibility`] - Used to handle the visibility of the series.
* [`opacity`] - Used to control the opacity of the series line.
* [`width`] - Used to customize the width of the series line.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/series/custom-series/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-series.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/smith-chart/series/custom-series/custom-series.cs %}
{% endhighlight %}
{% endtabs %}

