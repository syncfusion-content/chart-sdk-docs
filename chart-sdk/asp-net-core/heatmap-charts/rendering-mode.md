---
layout: post
title: Rendering Mode in Syncfusion ASP.NET Core Heatmap Chart Component
description: Learn here all about Rendering Mode in Syncfusion ASP.NET Core Heatmap Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Rendering Mode
publishingplatform: chart-sdk
documentation: ug
---


# Rendering mode in ASP.NET Core HeatMap Chart Component

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by setting the [renderingMode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.HeatMap.HeatMap~RenderingMode.html) property to **Auto**.


N> If the **Auto** mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a **Canvas** mode; Otherwise, the heat map will be rendered in a **SVG** mode.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/rendering-mode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rendering-mode.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/heatmap-chart/rendering-mode/rendering-mode.cs %}
{% endhighlight %}
{% endtabs %}

