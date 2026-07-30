---
layout: post
title: Annotations in Syncfusion ASP.NET Core Maps Component
description: Learn here all about Annotations in Syncfusion ASP.NET Core Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Annotations
publishingplatform: chart-sdk
documentation: ug
---

# Annotations in ASP.NET Core Maps Component

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

## Annotation

By using the `Content` property of `MapsAnnotation`, text content or id of an element or an HTML string can be specified to render a new HTML element in Maps.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotation.cs %}
{% endhighlight %}
{% endtabs %}



![Annotation](./images/Annotation/Annotation.PNG)

## Annotation customization

### Changing the z-index

The stack order of an annotation element can be changed using the `ZIndex` property in the `MapsAnnotation`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotaion-zindex/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotaion-zindex.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotaion-zindex/annotaion-zindex.cs %}
{% endhighlight %}
{% endtabs %}



![Annotation zindex](./images/Annotation/Annotation-zindex.PNG)

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the `X` and `Y` properties in the `MapsAnnotation`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotation-position/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation-position.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotation-position/annotation-position.cs %}
{% endhighlight %}
{% endtabs %}



![Annotation zindex](./images/Annotation/Annotation-position.PNG)

### Alignment of an annotation

Annotations can be aligned using the `HorizontalAlignment` and `VerticalAlignment` properties in the `MapsAnnotation`. The possible values can be **Center**, **Far**, **Near** and **None**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotation-alignment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation-alignment.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/annotation-alignment/annotation-alignment.cs %}
{% endhighlight %}
{% endtabs %}



![Annotation zindex](./images/Annotation/Annotation-alignment.PNG)

## Multiple Annotation

Multiple annotations can be added to the Maps by adding Multiple `MapsAnnotation` in the `MapsAnnotations` and customization for the annotations can be done with the `MapsAnnotation`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/multiple-annotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Multiple-annotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/annotations/multiple-annotation/multiple-annotation.cs %}
{% endhighlight %}
{% endtabs %}



![Annotation zindex](./images/Annotation/Multiple-annotation.PNG)