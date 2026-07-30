---
layout: post
title: Data Label in ASP.NET Core Treemap Control | Syncfusion
description: Learn here all about Data Label in Syncfusion ASP.NET Core Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Label
publishingplatform: chart-sdk
documentation: ug
---

# Data Label in ASP.NET Core TreeMap Control

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the `labelPath` of the `leafItemSettings`.

## Add labels

Add labels to show additional information about the items in the TreeMap. By default, the visibility of the label is `true`. Customize label visibility using the `showLabels` property in `leafItemSettings`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/getting-started/labels/tagHelper %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core TreeMap with Label](images/treemap-with-labels.webp)


## Format

Customize the labels for each item using the `labelFormat` property in the `leafItemSettings`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/datalabel/format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/datalabel/format/format.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with data label format](images/datalabel/Format.png)

## Template

The template supports customizing labels of each leaf node using the `labelTemplate` property. It uses Essential<sup style="font-size:70%">&reg;</sup> JS2 template engine to render elements and the position of templates can be customize using the `templatePosition` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/datalabel/template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/datalabel/template/template.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap label with template](images/datalabel/Template.png)

## InterSectAction

When the label size in each item exceeds the actual size, use the `interSectAction` property in the `leafItemSettings` to customize the labels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/datalabel/intersectaction/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Intersectaction.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/datalabel/intersectaction/intersectaction.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap label with intersect options](images/datalabel/IntersectAction.png)