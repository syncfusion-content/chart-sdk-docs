---
layout: post
title: Tooltip in ASP.NET MVC Syncfusion 3D Chart Component
description: Learn here all about tooltip in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip
publishingplatform: chart-sdk
documentation: ug
---

# Tooltip in ASP.NET MVC 3D Chart Component

The 3D Chart will display details about the points through tooltip, when the mouse is moved over the specific point.

## Default tooltip

By default, tooltip is not visible. The tooltip can be enabled by setting the [`Enable`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Enable) property in `TooltipSettings` to **true**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/default-tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/default-tooltip/default-tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Fixed tooltip

By default, tooltip track the mouse movement, but the tooltip can be set in fixed position by using the [`Location`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Location) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/fixed-tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Fixed-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/fixed-tooltip/fixed-tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Format the tooltip

By default, tooltip shows information of x and y value in points. In addition to that, more information can be shown in tooltip by using the [`Format`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Format) property. For example the format `${series.name} : ${point.y}` shows series name and point y value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/format-tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Format-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/format-tooltip/format-tooltip.cs %}
{% endhighlight %}
{% endtabs %}



## Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```cshtml
    .Tooltip(tooltip => tooltip
        .Enable(true)
        .Format("<b>${series.name}</b><br>${point.x:MMM yyyy} : ${point.y:n2}")
    )
```

In the above example, `point.x` is displayed in month-year format, `point.y` is displayed with two decimal places, and `series.name` displays the name assigned to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value of the data point, such as DateTime or category values.
- `point.y` – Specifies the numeric y-value of the data point.
- `series.name` – Specifies the name assigned to the series.
- `series.type` – Specifies the rendering type of the series, such as `Column`, `Bar`, `Line`, or `StackingColumn`.
- `series.opacity` – Specifies the opacity value applied to the series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the 3D chart series type. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

The following format types are supported:

- DateTime formats such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- Number formats such as:
  - `n2` – number with two decimal places
  - `n0` – number without decimal places
  - `c2` – currency format
  - `p1` – percentage format
  - `e1` – exponential notation

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/tooltip-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip-format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/tooltip-format/tooltip-format.cs %}
{% endhighlight %}
{% endtabs %}



## Tooltip template

Any HTML elements can be displayed in the tooltip by using the [`Template`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Template) property of the tooltip. The ${x} and ${y} can be used as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/template/template.cs %}
{% endhighlight %}
{% endtabs %}



## Customize the appearance of tooltip

The [`Fill`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Fill) and [`Border`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_Border) properties are used to customize the background color and border of the tooltip respectively. The [`TextStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DTooltipSettings.html#Syncfusion_EJ2_Charts_Chart3DTooltipSettings_TextStyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/custom-tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/user-interaction/custom-tooltip/custom-tooltip.cs %}
{% endhighlight %}
{% endtabs %}


