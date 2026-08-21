---
layout: post
title: Smith chart series in JavaScript Smithchart control | Syncfusion
description: Learn here all about Smith chart series in Syncfusion JavaScript Smithchart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smith chart series 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Smith chart series in JavaScript Smithchart control

You can add any number of series to the smithchart as per your requirement. You can use series setting to either add or customize the data. For the points or datasource added in the series, line is drawn. You can customize the each series as per your requirement with marker, datalabel, animation, opacity and so on.

## points or datasource

For adding values in the smithchart, you can use either points or datasource in the series. Points and datasource both should be array of object which should contain the field names resistance and rectangle.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-series-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-series-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-series-cs1" %}

## Series customization

Using following options in series settings, you can customize each series in smithchart as per your requirement.

* [`fill`] - Used to customize the fill color for the series.
* [`enableSmartLabels`] - Used to place the data labels on the smithchart without overlapping with each other.
* [`visibility`] - Used to handle the visibility of the series.
* [`opacity`] - Used to control the opacity of the series line.
* [`width`] - Used to customize the width of the series line.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-series-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-series-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-series-cs2" %}