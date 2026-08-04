---
layout: post
title: Center Label in Syncfusion ASP.NET MVC Accumulation Chart
description: Learn here all about Center Label in Syncfusion ASP.NET MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Center Label
publishingplatform: chart-sdk
documentation: ug
---


# Center label in ASP.NET MVC Accumulation Chart Component

## Center label

Using [`CenterLabel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartCenterLabel.html) it is now possible to place a label at the center of a pie or doughnut chart. To configure the default text rendered on the center label for the pie and doughnut charts, use the [`Text`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartCenterLabel.html#Syncfusion_EJ2_Charts_AccumulationChartCenterLabel_Text) property in the [`CenterLabel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartCenterLabel.html).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/centerlabel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Centerlabel.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/centerlabel/centerlabel.cs %}
{% endhighlight %}
{% endtabs %}

## Hover text

The default text in the center label can be changed when the mouse pointer hovers over the pie and doughnut charts slice using the [`HoverTextFormat`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartCenterLabel.html#Syncfusion_EJ2_Charts_AccumulationChartCenterLabel_HoverTextFormat) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/hovertext/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hovertext.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/hovertext/hovertext.cs %}
{% endhighlight %}
{% endtabs %}

## Customization

Customize the center label text using the [`TextStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.AccumulationChartCenterLabel.html#Syncfusion_EJ2_Charts_AccumulationChartCenterLabel_TextStyle) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/customization/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Customization.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/accumulation-chart/accumulation-charts/chart-print/customization/customization.cs %}
{% endhighlight %}
{% endtabs %}


