---
layout: post
title: Data Label in ASP.NET MVC Treemap Component
description: Learn here all about Data Label in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Label
publishingplatform: chart-sdk
documentation: ug
---

# Data Label

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the `labelPath` of the `leafItemSettings`.

## Format

Customize the labels for each item using the `labelFormat` property in the `leafItemSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/datalabel/format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/datalabel/format/format.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with data label format](images/datalabel/Format.png)

## Template

The template supports customizing labels of each leaf node using the `labelTemplate` property. It uses Essential<sup style="font-size:70%">&reg;</sup> JS2 template engine to render elements and the position of templates can be customize using the `templatePosition` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/datalabel/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/datalabel/template/template.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap label with template](images/datalabel/Template.png)

## InterSectAction

When the label size in each item exceeds the actual size, use the `interSectAction` property in the `leafItemSettings` to customise the labels.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/datalabel/intersectaction/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Intersectaction.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/datalabel/intersectaction/intersectaction.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap label with intersect options](images/datalabel/IntersectAction.png)