---
layout: post
title: Tool Tip in ASP.NET MVC Stock Chart Component
description: Learn here all about Tool Tip in Syncfusion ASP.NET MVC Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tool Tip
publishingplatform: chart-sdk
documentation: ug
---


# Tooltip

<!-- markdownlint-disable MD036 -->

Stock Chart will display details about the points through tooltip, when the mouse is moved over the point.

## Default tooltip

By default, tooltip is not visible. Enable the tooltip by setting [`Enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTooltipSettings.html#Syncfusion_EJ2_Charts_ChartTooltipSettings_Enable) property to true .

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD013 -->

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/format/format.cs %}
{% endhighlight %}
{% endtabs %}



## Position the tooltip

By default, the tooltip is positioned at the left side of the stock chart. You can move the tooltip along with the mouse by setting **Nearest** to the [`Position`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.StockChartStockTooltipSettings.html#Syncfusion_EJ2_Charts_StockChartStockTooltipSettings_Position) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/position/position.cs %}
{% endhighlight %}
{% endtabs %}



## Customize the appearance of the tooltip

The [`Fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTooltipSettings.html#Syncfusion_EJ2_Charts_ChartTooltipSettings_Fill) and [`Border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTooltipSettings.html#Syncfusion_EJ2_Charts_ChartTooltipSettings_Border) properties are used to customize the background color and border of the tooltip respectively. The [`TextStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTooltipSettings.html#Syncfusion_EJ2_Charts_ChartTooltipSettings_TextStyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/customtooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Customtooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/stock-chart/stockchart-feature/customtooltip/customtooltip.cs %}
{% endhighlight %}
{% endtabs %}


