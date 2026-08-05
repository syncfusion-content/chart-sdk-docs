---
layout: post
title: Appearance in ASP.NET Core Stock Chart Component
description: Learn here all about Appearance in Syncfusion ASP.NET Core Stock Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Appearance
publishingplatform: chart-sdk
documentation: ug
---


# Appearance

## Stock Chart Title

Stock Chart can be given a title using [`title`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChart.html#Syncfusion_EJ2_Charts_StockChart_Title) property, to show the information about the data plotted.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/appearance/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/appearance/title/title.cs %}
{% endhighlight %}
{% endtabs %}



<!-- markdownlint-disable MD036 -->

## Title Customizations

The `textStyle` property of chart title provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/appearance/titlewrap/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Titlewrap.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/appearance/titlewrap/titlewrap.cs %}
{% endhighlight %}
{% endtabs %}



## Stock Chart Theme

Changing theme will affect background color,gridlines,tooltip colors and appearance.

[`theme`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.StockChart.html#Syncfusion_EJ2_Charts_StockChart_Theme) property of Stock chart is shipped with several built-in themes such as `Material`, `Fabric`, `Bootstrap` , `HighContrastLight`, `MaterialDark`, `FabricDark`, `FabricDark`, `HighContrast` and `BootstrapDark`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/appearance/theme/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Theme.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/stock-chart/appearance/theme/theme.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Axis Customization](./axis-customization/)
