---
layout: post
title: Axis labels in ASP.NET MVC 3D Chart Component
description: Learn here all about axis labels in Syncfusion ASP.NET MVC 3D Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis Labels
publishingplatform: chart-sdk
documentation: ug
---


# Axis labels in ASP.NET MVC 3D Chart Component

Axis labels are the labels that are positioned adjacent to the y-axis and beneath the x-axis. It provides descriptive information about the axis.

## Smart axis labels

When the axis labels overlap with each other, [`LabelIntersectAction`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_LabelIntersectAction) property in the axis can be used to place them smartly.

Case 1: When setting `LabelIntersectAction` as `Hide`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/hide/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hide.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/hide/hide.cs %}
{% endhighlight %}
{% endtabs %}



Case 2: When setting `LabelIntersectAction` as `Rotate45`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/rotate45/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rotate45.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/rotate45/rotate45.cs %}
{% endhighlight %}
{% endtabs %}



Case 3: When setting `LabelIntersectAction` as `Rotate90`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/rotate90/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rotate90.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/rotate90/rotate90.cs %}
{% endhighlight %}
{% endtabs %}



## Edge label placement

Labels with long text at the edges of an axis may appear partially in the 3D chart. To avoid this,
use the [`EdgeLabelPlacement`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_EdgeLabelPlacement) property in axis, which moves the label inside the chart area for better appearance or hides it.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/placement/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Placement.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/placement/placement.cs %}
{% endhighlight %}
{% endtabs %}



## Maximum labels

The labels will be rendered based on the count in the [`MaximumLabels`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.Chart3DAxis.html#Syncfusion_EJ2_Charts_Chart3DAxis_MaximumLabels) property per 100 pixel. If the range (minimum, maximum, interval) and `MaximumLabels` are set, then the priority goes to range. If the range is not set, then the priority goes to `MaximumLabels` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/maximumlabels/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Maximumlabels.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/3d-charts/series/axis/maximumlabels/maximumlabels.cs %}
{% endhighlight %}
{% endtabs %}