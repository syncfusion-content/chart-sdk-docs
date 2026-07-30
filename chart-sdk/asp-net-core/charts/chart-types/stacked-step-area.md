---
layout: post
title: Stacked Step Area Chart in ASP.NET Core Charts
description: Learn here all about Stacked Step Area Chart in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stacked Step Area Chart
publishingplatform: chart-sdk
documentation: ug
---


# Stacked Step Area Chart in ASP.NET Core Charts

## Stacked Step Area

To render a stacked step area series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `type` as **StackingStepArea** in your chart configuration. This indicates that the data should be represented as a stacked step area chart, which is a combination of a stacked area chart and a step area chart. It connects the data points with vertical and horizontal lines, creating a step like appearance.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stackedsteparea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedsteparea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stackedsteparea/stackedsteparea.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `dataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName` and `yName` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stackedsteparea/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stackedsteparea.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stackedsteparea/stackedsteparea.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `stacked step area` series.

**Fill**

The `fill` property determines the color applied to the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stacked-step-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-step-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stacked-step-fill/stacked-step-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `fill` property can be used to apply a gradient color to the stacked step area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stacked-step-grad/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stacked-step-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stacked-step-grad/stacked-step-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/opacity/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/dash-array/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

**Step**

Use the `step` property to change the position of the steps in a stacked step area series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/step/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Step.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/step/step.cs %}
{% endhighlight %}
{% endtabs %}

**No risers**

You can eliminate the vertical lines between points by using the `NoRisers` property in a series. This approach is useful for highlighting trends without the distraction of risers.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/area-charts/stackedsteparea/no-risers/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="No-risers.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/area-charts/stackedsteparea/no-risers/no-risers.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/empty-fill/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/empty-border/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}



## Stack labels

The stack labels in stacked charts display cumulative total values for stack segments directly using data labels. If a stacked point has negative values, the stack labels are displayed below the point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stack-labels/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stack-labels.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stack-labels/stack-labels.cs %}
{% endhighlight %}
{% endtabs %}



### Stack labels customization

Stack labels have various properties for customization to enhance the visual based on your requirements:

* [`Visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Visible) - Specifies whether stack labels are visible. Setting to true will display the labels. Default is false.
* [`Fill`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Fill) - Defines the background color of the stack labels. Accepts valid CSS color strings (hex, RGBA, etc.). Default is transparent.
* [`Format`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Format) - Formats the text displayed in the stack labels. Supports placeholders like {value}. Default is null.
* [`Angle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Angle) - Specifies the rotation angle for stack labels in degrees. Default is 0.
* [`Rx`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Rx) - Defines the rounded corner radius along the X-axis (horizontal direction) for the stack label background. Default is 5.
* [`Ry`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Ry) - Defines the rounded corner radius along the Y-axis (vertical direction) for the stack label background. Default is 5.
* [`Margin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Margin) - Configures the margin around the stack label (left, right, top, and bottom).
* [`Border`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Border) - Configures the appearance of the stack label's border.
* [`Font`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartStackLabelSettings.html#Syncfusion_EJ2_Charts_ChartStackLabelSettings_Font) - Customizes the stack label text, including font size, color, style, weight, and family.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stack-labels-cus/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Stack-labels-cus.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/stack-labels-cus/stack-labels-cus.cs %}
{% endhighlight %}
{% endtabs %}



## Events

### Series render

The `seriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/series-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `pointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/point-render/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/series/stacked-steparea/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)