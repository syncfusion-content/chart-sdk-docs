---
layout: post
title: Tooltip in UWP Pivot Gauge | Syncfusion®
description: Tooltip in the UWP Pivot Gauge displays detailed information about gauge values and supports interactive data analysis and visualization.
platform: chart-sdk
control: SfPivotGauge
documentation: ug
---

# Tooltip in UWP Pivot Gauge

The SfPivotGauge provides the information about values when the mouse pointer is moved over the gauge. The following code snippet illustrates how to show a tooltip by using the `ShowGaugeTooltip` property.

{% tabs %}

{% highlight xaml %}

<syncfusion:SfPivotGauge x:Name="PivotGauge1" ShowGaugeTooltip="True"
                         ItemSource="{Binding ProductSalesData}" PivotRows="{Binding PivotRows}"
                         PivotColumns="{Binding PivotColumns}" PivotCalculations="{Binding PivotCalculations}">
</syncfusion:SfPivotGauge>

{% endhighlight %}

{% highlight c# %}

PivotGauge1.ShowGaugeTooltip = true;

{% endhighlight %}

{% highlight vb %}

PivotGauge1.ShowGaugeTooltip = True

{% endhighlight %}

{% endtabs %}

![Tooltip](Tooltip_images/Tooltip.png)
