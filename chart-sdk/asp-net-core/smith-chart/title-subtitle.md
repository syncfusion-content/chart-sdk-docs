---
layout: post
title: Title Subtitle in ASP.NET Core Smithchart Component
description: Learn here all about Title Subtitle in Syncfusion ASP.NET Core Smithchart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Title Subtitle
publishingplatform: chart-sdk
documentation: ug
---


# Title and Subtitle

## Enable title

Title and subtitle is used to depicts the information about the data plotted in the smithchart. You can set the title and subtitle of the smithchart using the [`text`] property in title and subtitle. By default visibility of the title as well as subtitle is enabled. You need to set simply text for title and subtitle in your sample as like below.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/title/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/title/title/title.cs %}
{% endhighlight %}
{% endtabs %}



## Title trim

Both title and subtitle of the smithchart can be trimmed if it exceeds the certain length. Trimming is enabled using [`enableTrim`] for title as well as subtitle. This length can be changed using the property [`maximumWidth`]. Also [`font`], [`textAlignment`] and [`visibility`] can be customized for title as well as subtitle.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/title/title-trim/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title-trim.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/title/title-trim/title-trim.cs %}
{% endhighlight %}
{% endtabs %}

