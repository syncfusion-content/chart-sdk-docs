---
layout: post
title: Period Selector in ASP.NET MVC Range Navigator Component
description: Learn here all about Period Selector in Syncfusion ASP.NET MVC Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Period Selector
publishingplatform: chart-sdk
documentation: ug
---


# Period selector

The period selector allows to select a range with specified periods.

## Periods

An array of objects that allows the users to specify pre-defined time intervals. The `interval` property specifies the count value of the button, and the `text` property specifies the text to be displayed on the button. The `intervaltype` property allows the users to customize the interval type, and it supports the following types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/periods/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Periods.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/periods/periods.cs %}
{% endhighlight %}
{% endtabs %}



![Periods](images/period-selector/periods.png)

## Positioning period selector

The `position` property allows the users to position the period selector at the **Top** or **Bottom**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/position/position.cs %}
{% endhighlight %}
{% endtabs %}



![Positioning](images/period-selector/position.png)

## Height

The `height` property allows the users to specify the height of the period selector. The default value of the height property is **43px**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Height.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/height/height.cs %}
{% endhighlight %}
{% endtabs %}



![Height](images/period-selector/height.png)

## Visibility of range navigator

The `disableRangeSelector` property allows the users to display only the period selector and not the Range Selector.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/visible/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Visible.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/period/visible/visible.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [LightWeight](./light-weight)