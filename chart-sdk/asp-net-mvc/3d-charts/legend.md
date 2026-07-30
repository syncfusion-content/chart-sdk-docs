---
layout: post
title: Legend in ASP.NET MVC Syncfusion 3D Chart Component
description: Learn here all about legend in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend
publishingplatform: chart-sdk
documentation: ug
---


# Legend in ASP.NET MVC 3D Chart Component

Legend provides information about the series rendered in the 3D chart.

## Position and alignment

By using the [`Position`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_Position) property, the legend can be positioned at left, right, top or bottom of the 3D chart. The legend is positioned at the bottom of the 3D chart, by default.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/position/position.cs %}
{% endhighlight %}
{% endtabs %}



The custom position helps you to position the legend anywhere in the 3D chart using X and Y coordinates.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/custom-position/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-position.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/custom-position/custom-position.cs %}
{% endhighlight %}
{% endtabs %}



### Legend reverse

The order of the legend items can be reversed by using the [`Reverse`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_Reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/reverse/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Reverse.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/reverse/reverse.cs %}
{% endhighlight %}
{% endtabs %}



### Legend alignment

The legend can be aligned at near, far or center to the 3D chart using the [`Alignment`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_Alignment) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/alignment/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Alignment.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/alignment/alignment.cs %}
{% endhighlight %}
{% endtabs %}



## Legend customization

To change the legend icon shape, [`LegendShape`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html#Syncfusion_EJ2_Charts_Chart3DSeries_LegendShape) property in the [`Series`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DSeries.html) can be used. By default, the legend icon shape is `SeriesType`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/custom/custom.cs %}
{% endhighlight %}
{% endtabs %}



### Legend size

By default, legend takes 20% - 25% of the 3D chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the 3D chart's width vertically, when it is placed on left or right position. You can change this default legend size by using the [`Height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_Height) and [`Width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_Width) properties of the `LegendSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/size/size.cs %}
{% endhighlight %}
{% endtabs %}



### Legend item size

The size of the legend items can be customised by using the [`ShapeHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_ShapeHeight) and [`ShapeWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_ShapeWidth) properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/item-size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Item-size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/item-size/item-size.cs %}
{% endhighlight %}
{% endtabs %}


### Paging for legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. Each legend items can be viewed by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/paging/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Paging.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/paging/paging.cs %}
{% endhighlight %}
{% endtabs %}



### Legend text wrap

When the legend text exceeds the container, the text can be wrapped by using the [`TextWrap`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_TextWrap) property. End user can also wrap the legend text based on the [`MaximumLabelWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_MaximumLabelWidth) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/text-wrap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Text-wrap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/text-wrap/text-wrap.cs %}
{% endhighlight %}
{% endtabs %}



## Series selection through legend

By default, you can collapse the series visibility by clicking the legend. On the other hand, turn off the [`ToggleVisibility`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_ToggleVisibility) property if you must use a legend click to choose a series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/selection/selection.cs %}
{% endhighlight %}
{% endtabs %}



## Collapsing legend item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/collapse/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Collapse.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/collapse/collapse.cs %}
{% endhighlight %}
{% endtabs %}



## Legend title

You can set title for legend using [`Title`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_Title) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_LegendSettings). The [`Size`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_Size), [`Color`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_Color), [`Opacity`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_Opacity), [`FontStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_FontStyle), [`FontWeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_FontWeight), [`FontFamily`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_FontFamily), [`TextAlignment`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_TextAlignment), and [`TextOverflow`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DFont.html#Syncfusion_EJ2_Charts_Chart3DFont_TextOverflow) of legend title can be customized by using the [`TitleStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_TitleStyle) property in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3D.html#Syncfusion_EJ2_Charts_Chart3D_LegendSettings). The [`TitlePosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_TitlePosition) is used to set the legend position in `Top`, `Left` and `Right` position. The [`MaximumTitleWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_MaximumTitleWidth) is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/title/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/title/title.cs %}
{% endhighlight %}
{% endtabs %}



## Arrow page navigation

The page number will always be visible while using legend paging. It is now possible to disable the page number and enable page navigation with the left and right arrows. The [`EnablePages`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_EnablePages) property needs to be set to **false** in order to render the arrow page navigation.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/arrow-page/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Arrow-page.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/arrow-page/arrow-page.cs %}
{% endhighlight %}
{% endtabs %}



## Legend item padding

The [`ItemPadding`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DLegendSettings.html#Syncfusion_EJ2_Charts_Chart3DLegendSettings_ItemPadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/item-padding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Item-padding.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/legend/item-padding/item-padding.cs %}
{% endhighlight %}
{% endtabs %}


