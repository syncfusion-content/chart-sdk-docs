---
layout: post
title: Tooltip in ASP.NET MVC Treemap Component
description: Learn here all about Tooltip in Syncfusion ASP.NET MVC Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tooltip
publishingplatform: chart-sdk
documentation: ug
---

# Tooltip

Tooltip is used to display details about the items in the TreeMap. When space constraints prevent us from displaying the information using Data Labels, the tooltip comes in handy.

## Default tooltip

The tooltip is not visible by default, to make it visible, set the `visible` property in the `tooltipSettings` to **true**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/tooltip/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Tooltip.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/tooltip/tooltip/tooltip.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with tooltip](images/Tooltip/Tooltip.png)

## Format tooltip

The tooltip content is displayed by default based on the `weightValuePath`. In addition, to show more information in the tooltip, use the `format` property and define field from the data source as `${datafield}`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/tooltip/format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Format.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/tooltip/format/format.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with tooltip format](images/Tooltip/TooltipFormat.png)

## Tooltip template

Tooltip can be rendered as a custom component using the `template` property in the `tooltipSettings` which accepts one or more UI elements as an input, that can be rendered as a part of the tooltip rendering. You can use `${datafield}` as placeholder in HTML element to display the values from data source.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/tooltip/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Template.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/treemap/tooltip/template/template.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap with tooltip template](images/Tooltip/Template.png)