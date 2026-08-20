---
layout: post
title: Appearance in ASP.NET MVC Sparkline Component
description: Learn here all about Appearance in Syncfusion ASP.NET MVC Sparkline component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Appearance
publishingplatform: chart-sdk
documentation: ug
---


# Appearance

The appearance of the sparkline can be customized using margin, container Area border, and container Area background.

## Sparkline border

The [`containerArea border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.SparklineContainerArea~Border.html) of the sparkline is used to render border to cover sparkline area.

The following code example shows the sparkline with overall border.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/border/border.cs %}
{% endhighlight %}
{% endtabs %}



## Sparkline padding

Padding is used to specify padding value between container and sparkline. By default, padding value of the sparkline is 5. Sparkline [`padding`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.SparklinePadding.html) values are specified by the left, right, top, and bottom.

The following code example shows the sparkline with overall padding is set to 20.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/padding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Padding.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/padding/padding.cs %}
{% endhighlight %}
{% endtabs %}



## Sparkline area customization

The background color of the sparkline area can be customized using the [`containerArea background`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.SparklineContainerArea~BackGround.html) color. By default, the sparkline background color is `transparent`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/area-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Area_custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/area-custom/area_custom.cs %}
{% endhighlight %}
{% endtabs %}



## Sparkline theme

Datalabel and track line colors of the sparkline will be changed based on theme. For example, for dark theme, the color of datalabel and track line should be white; for light theme, their value should be black. The possible values for sparkline theme are [`Material`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline~Theme.html), [`Fabric`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline~Theme.html), [`Bootstrap`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline~Theme.html), and [`Highcontrast`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.Charts.Sparkline~Theme.html).

The following code example shows the color for datalabel and track line is set to white for dark theme.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/theme/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Theme.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sparkline-charts/appearance/theme/theme.cs %}
{% endhighlight %}
{% endtabs %}

