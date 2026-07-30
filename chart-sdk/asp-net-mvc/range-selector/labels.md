---
layout: post
title: Labels in ASP.NET MVC Range Navigator Component
description: Learn here all about Labels in Syncfusion ASP.NET MVC Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Labels
publishingplatform: chart-sdk
documentation: ug
---


# Labels

## Multilevel labels

The multi-level labels for the Range Selector can be enabled by setting the `enableGrouping` property to **true**. This is restricted to the DateTime axis alone.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/multi/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Multi.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/multi/multi.cs %}
{% endhighlight %}
{% endtabs %}



![Multilevel labels](images/labels/multi.png)

## Grouping

The multi-level labels can be grouped using the `groupBy` property with the following interval types:

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
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/group/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/group/group.cs %}
{% endhighlight %}
{% endtabs %}



![Grouping](images/labels/group.png)

## Smart labels

The `labelIntersectAction` property is used to avoid overlapping of labels. The following code sample shows the setting of `labelIntersectAction` property to **Hide**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/smart/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Smart.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/smart/smart.cs %}
{% endhighlight %}
{% endtabs %}



![Smart labels](images/labels/smart.png)

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the `labelPosition` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/position/position.cs %}
{% endhighlight %}
{% endtabs %}



![Label positioning](images/labels/position.png)

## Labels customization

The font size, color, family, etc. can be customized using the `labelStyle` setting.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/label/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



![Labels Customization](images/labels/custom.png)