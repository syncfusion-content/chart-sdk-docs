---
layout: post
title: Special Points Customization in ASP.NET MVC Sparkline Charts | Syncfusion
description: Learn here all about Special Points Customization in Syncfusion ASP.NET MVC Sparkline Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Special Points Customization
publishingplatform: chart-sdk
documentation: ug
---


# Special Points Customization in ASP.NET MVC Sparkline Charts

You can customize the points by initializing the point colors. The customization options allows to differentiate the [`start`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~StartPointColor.html), [`end`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~EndPointColor.html), [`positive`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~HighPointColor.html), [`negative`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~NegativePointColor.html), and [`low`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline Charts~LowPointColor.html) points. This customization is only applicable for line, column, and area type Sparkline Chartss.

<!-- markdownlint-disable MD036 -->

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/specialpoints/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/specialpoints/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



**Tie point color**

Tie point color is used to configure the win-loss series type sparkline's y-value point color. The following code sample shows the tie point color of sparkline series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/specialpoints/tie-point/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tie_point.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/specialpoints/tie-point/tie-point.cs %}
{% endhighlight %}
{% endtabs %}

