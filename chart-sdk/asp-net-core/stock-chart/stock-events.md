---
layout: post
title: Stock Events in ASP.NET Core Stock Chart Component
description: Learn here all about Stock Events in Syncfusion ASP.NET Core Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stock Events
publishingplatform: chart-sdk
documentation: ug
---

<!-- markdownlint-disable MD036 -->

# Stock Events

Stock Events visualizes stockevents in stockchart. 'SplineSeries' is used to represent selected data value. You can customize the specific data value using `stockEvents` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/stock-events/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="StockEvents.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/stock-events/stockEvents.cs %}
{% endhighlight %}
{% endtabs %}



**Stock Events for individual series**

By default, stock events will be showed for all series. Now, you can set the stock events for particular series using `SeriesIndexes` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/stock-events-2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stock-events-2.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/stockchart-feature/stock-events-2/stock-events-2.cs %}
{% endhighlight %}
{% endtabs %}

