---
layout: post
title: Data Binding in ASP.NET MVC Treemap Component
description: Learn here all about Data Binding in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data Binding
publishingplatform: chart-sdk
documentation: ug
---

# Data Binding

The TreeMap control supports data binding using the dataSource property.

## Populate data

The `dataSource` property accepts collection values as input. For example, a list of objects can be provided as input. Data can be given as either flat or hierarchical collection to the `dataSource` property.

<!-- markdownlint-disable MD036 -->

### Flat collection

The following code shows, how to bind a flat collection as data source to the TreeMap control.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/databind/flat/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Flat.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/databind/flat/flat.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with flat data](./images/Databinding/flatcollection.png)

### Hierarchical collection

The following code shows, how to bind a hierarchical collection as data source to the TreeMap control.

<!-- markdownlint-disable MD010 -->

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/databind/hierachical/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hierachical.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/databind/hierachical/hierachical.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with hierarchical data](./images/Databinding/Hierarchical.png)