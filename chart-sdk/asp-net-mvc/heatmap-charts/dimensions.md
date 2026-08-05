---
layout: post
title: Dimensions in Syncfusion ASP.NET MVC Heatmap Chart Component
description: Learn here all about Dimensions in Syncfusion ASP.NET MVC Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dimensions
publishingplatform: chart-sdk
documentation: ug
---


# Dimensions in ASP.NET MVC HeatMap Chart Component

## Size for container

Heat map can be rendered to its container size. You can set the size through inline or CSS.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

## Size for heat map

You can  set the size of heat map directly by using the [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~Width.html) and [height](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~Height.html) properties.

## In pixel

You can set the size for heat map in a pixel.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/dimensions/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pixel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/dimensions/pixel/pixel.cs %}
{% endhighlight %}
{% endtabs %}



## In percentage

By setting value in percentage, heat map gets its dimension with respect to its container. For example, when the height is ‘50%’, heat map rendered to half of the container height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/dimensions/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Percentage.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/heatmap-chart/dimensions/percentage/percentage.cs %}
{% endhighlight %}
{% endtabs %}

