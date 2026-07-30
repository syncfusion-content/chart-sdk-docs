---
layout: post
title: Levels in ASP.NET MVC Treemap Component
description: Learn here all about Levels in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Levels
publishingplatform: chart-sdk
documentation: ug
---

# Levels

TreeMap supports **n** number of levels and each level is separated by using the `groupPath` property.

<!-- markdownlint-disable MD036 -->

## Group path

The `groupPath` property is used to separate each level of the TreeMap by specifying the property from the data source.

In the following example, three levels are added and each level is configured using the `groupPath` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/group-path/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group_path.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/group-path/group-path.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with multiple levels](images/Levels/grouppath.png)

<!-- markdownlint-disable MD036 -->

## Group gap

The `groupGap` property is used to separate an item from each group or another item to differentiate the levels mentioned in the TreeMap.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/group-gap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Group_gap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/group-gap/group-gap.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap levels with group gap](images/Levels/groupgap.png)

<!-- markdownlint-disable MD036 -->

## Header format and Alignment

Customize header using the `headerFormat` property in which fields are mapping from the dataSource and align header using the `headerAlignment` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/header-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Header_format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/header-format/header-format.cs %}
{% endhighlight %}
{% endtabs %}



## Header height and style

Customize the font color, family, weight, opacity and size using the `headerStyle`. Based on the font settings, the header height is given using the `headerHeight` property in `levels`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/header-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Header_height.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/header-height/header-height.cs %}
{% endhighlight %}
{% endtabs %}



## Header template and position

The TreeMap header supports to customize header of each item using the `headerTemplate` property. It uses Essential<sup style="font-size:70%">&reg;</sup> JS2 Template engine to render the elements. You can position the template using the `templatePosition` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/levels/template/template.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with customized header](images/Levels/headeralignment.png)