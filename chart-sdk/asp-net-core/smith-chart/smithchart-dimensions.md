---
layout: post
title: Smithchart Dimensions in ASP.NET Core Smithchart Component
description: Learn here all about Smithchart Dimensions in Syncfusion ASP.NET Core Smithchart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smithchart Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Smithchart Dimensions

You can render the smithchart either corresponding to its container size or you can set the size of the smithchart as per your requirement. To render the smithchart corresponding to its container size, you need to set the size for the smithchart container. Else to set the size for the smithchart as per your requirement, you can use the width and height properties in the smithchart.

## Size for Container

You can render smithchart to it's container size. To achieve this, you need to specify the width and height of the smithchart's container via inline or CSS as demonstrated below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/dimension/container/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Container.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/dimension/container/container.cs %}
{% endhighlight %}
{% endtabs %}



## Size for Smithchart

<!-- markdownlint-disable MD036 -->

You can also set size for smithchart directly through [`width`] and [`height`] properties. Using this properties, you can directly mention the width and height of the smithchart in pixels or you can set the width and height in percentage.

**In Pixel**

In smithchart's width and height property, you can directly give values in pixels like below demonstration. This will render smithchart in same size as you mentioned in you code.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/dimension/size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/dimension/size/size.cs %}
{% endhighlight %}
{% endtabs %}



**In percentage**

You can also specify the width and height of the smithchart in percentage. If you mention the width and height in percentage, then smithchart will be render as per the percentage of it's container size. You can set the values in percentage like below demonstration.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/dimension/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/dimension/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}

