---
layout: post
title: Empty Points in ASP.NET Core Accumulation Chart Component | Syncfusion
description: Learn here all about Empty Points in Syncfusion ASP.NET Core Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Empty Points
publishingplatform: chart-sdk
documentation: ug
---


# Empty Points in ASP.NET Core Accumulation Chart Component

The data points those uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and not plotted in the chart. You can customize those points, using the `emptyPointSettings` property in series. The default mode of the empty point is `Gap`. Other supported modes are `Average` and `Zero`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/empty-points/empty/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class EmptyPointsChartData
{
    public string xValue;
    public Nullable<double> yValue;
}
{% endhighlight %}
{% endtabs %}



## Customization

Specific color for an empty point can be set by using the `fill` property in `emptyPointSettings` and the border for an empty point can be set by using the `border` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/empty-points/custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class EmptyPointsChartData
{
    public string xValue;
    public Nullable<double> yValue;
}
{% endhighlight %}
{% endtabs %}

## Handling No Data

When no data is available to render in the accumulation chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/dynamic-update/no-data-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="No-data-template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/accumulation-chart/accumulation-charts/dynamic-update/no-data-template/no-data-template.cs %}
{% endhighlight %}
{% endtabs %}


![ASP.NET Core Accumulation Chart Control](images/nodatatemplate-accumulationchart.png)