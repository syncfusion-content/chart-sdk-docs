---
layout: post
title: Data Editing in ASP.NET MVC Chart Component
description: Learn here all about Data Editing in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Editing
publishingplatform: chart-sdk
documentation: ug
---


# Data Editing

## Enable Data Editing

It provides drag and drop support to the rendered points. Now, we can change the location or value of the point based on its `y` value. To enable the data editing, set the `Enable` property to true in the drag settings of the series. Also, we can set color using `Fill` property and set the data editing minimum and maximum range using `MinY` and `MaxY` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/data-editing/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/user-interaction/data-editing/default/default.cs %}
{% endhighlight %}
{% endtabs %}

