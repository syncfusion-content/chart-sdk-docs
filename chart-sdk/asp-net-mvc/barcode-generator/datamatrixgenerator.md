---
layout: post
title: Datamatrixgenerator in ASP.NET MVC Barcode Control | Syncfusion
description: Learn here all about Datamatrixgenerator in Syncfusion ASP.NET MVC Barcode control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Datamatrixgenerator
publishingplatform: chart-sdk
documentation: ug
---


# Data Matrix generator

## Data Matrix

DataMatrix Barcode is a two dimensional barcode that consists of a grid of dark and light dots or blocks forming square or rectangular symbol. The data encoded in the barcode can either be numbers or alphanumeric. They are widely used in printed media such as labels and letters. You can read it easily with the help of a barcode reader and mobile phones.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/datamatrixgenerator/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datamatrixgenerator.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/datamatrixgenerator/datamatrixgenerator.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing the DataMatrix color

A page or printed media with DataMatrix often appears colorful in the background and surrounding region with other contents. In such cases, the DataMatrix can also be customized to suit the needs. You can achieve this by using the forecolor property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Color.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/color/color.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing the DataMatrix dimension

The dimension of the DataMatrix can be changed using the height and width property of the DataMatrix Generator.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/dimension/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dimension.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/dimension/dimension.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing the text

In DataMatrix generators, you can customize the DataMatrix text by using the display text property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Text.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/datamatrixgenerator/text/text.cs %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Barcode/QRCodeandDataMatrixSample).