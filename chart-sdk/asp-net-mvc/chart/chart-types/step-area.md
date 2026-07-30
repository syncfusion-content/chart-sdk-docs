---
layout: post
title: Step Area Chart in ASP.NET MVC Charts
description: Learn here all about Step Area Chart in Syncfusion ASP.NET MVC Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Step Area Chart
publishingplatform: chart-sdk
documentation: ug
---


# Step Area Chart in ASP.NET MVC Charts

## Step Area

To render a [step area](https://www.syncfusion.com/aspnet-mvc-ui-controls/charts/chart-types/step-area-chart) series in your chart, you need to follow a few steps to configure it correctly. Here’s a concise guide on how to do this:

* **Set the series type:** Define the series `Type` as **StepArea** in your chart configuration. This indicates that the data should be represented as a step area chart, which connects data points with vertical and horizontal lines, creating a step like appearance.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Steparea.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea/steparea.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data with series

You can bind data to the chart using the `DataSource` property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `XName` and `YName` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Steparea.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea/steparea.cs %}
{% endhighlight %}
{% endtabs %}

## Series customization

The following properties can be used to customize the `step area` series.

**Fill**

The `Fill` property determines the color applied to the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Steparea-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea-fill/steparea-fill.cs %}
{% endhighlight %}
{% endtabs %}

The `Fill` property can be used to apply a gradient color to the step area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea-fill-grad/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Steparea-fill-grad.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/steparea-fill-grad/steparea-fill-grad.cs %}
{% endhighlight %}
{% endtabs %}

**Opacity**

The `Opacity` property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/opacity/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Opacity.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/opacity/opacity.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/dash-array/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dash-array.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/dash-array/dash-array.cs %}
{% endhighlight %}
{% endtabs %}

**Step**

Use the `Step` property to change the position of the steps in a step area series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/step/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Step.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/step/step.cs %}
{% endhighlight %}
{% endtabs %}

**No risers**

You can eliminate the vertical lines between points by using the `NoRisers` property in a series. This approach is useful for highlighting trends without the distraction of risers.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/area-charts/stepareaseries/no-risers/razor %}
{% endhighlight %}
{% highlight c# tabtitle="No-risers.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/area-charts/stepareaseries/no-risers/no-risers.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points with **null** or **undefined** values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the `Mode` property to define how empty or missing data points are handled in the series. The default mode for empty points is **Gap**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/empty/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/empty/empty.cs %}
{% endhighlight %}
{% endtabs %}

**Fill**

Use the `Fill` property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/empty-fill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-fill.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/empty-fill/empty-fill.cs %}
{% endhighlight %}
{% endtabs %}

**Border**

Use the `Border` property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/empty-border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/empty-border/empty-border.cs %}
{% endhighlight %}
{% endtabs %}

## Events

### Series render

The `SeriesRender` event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/series-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Series-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/series-render/series-render.cs %}
{% endhighlight %}
{% endtabs %}

### Point render

The `PointRender` event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/point-render/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Point-render.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/series/step-area/point-render/point-render.cs %}
{% endhighlight %}
{% endtabs %}

## See also

* [Data Label](../data-labels)
* [Tooltip](../tool-tip)