---
layout: post
title: Last Value Label in ASP.NET Core Charts | Syncfusion
description: Learn here all about Data Labels in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Last value label
publishingplatform: chart-sdk
documentation: ug
---

# Last Value Label in ASP.NET Core Charts

The `lastValueLabel` in a chart allows you to easily display the value of the last data point in a series. This feature provides an intuitive way to highlight the most recent or last data value in a series on your chart.

## Enable Last value label

To show the last value label, make sure the `enable` property inside the `lastValueLabel` settings is set to `true` within the series configuration. 

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/last-value-label/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="LastValueLabel.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/last-value-label/lastValueLabel.cs %}
{% endhighlight %}
{% endtabs %}

## Customization

The appearance of the last value label can be customized using style properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry` in the lastValueLabel property of the chart series. These settings allow you to tailor the label’s look to align with your desired visual presentation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/last-value-label-customization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="LastValueLabelCustomization.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/last-value-label-customization/lastValueLabelCustomization.cs %}
{% endhighlight %}
{% endtabs %}