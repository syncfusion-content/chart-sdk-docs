---
layout: post
title: Orientation and RTL in ASP.NET MVC Sankey Chart Component
description: Learn here all about Orientation and RTL in Syncfusion ASP.NET MVC Sankey Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Orientation and RTL
publishingplatform: chart-sdk
documentation: ug
---

# Orientation and RTL in ASP.NET MVC Sankey Chart component

The Sankey Chart supports flexible layout options including horizontal and vertical orientations, as well as right-to-left (RTL) rendering for international applications. These features enable you to create localized and directionally appropriate visualizations.

This guide covers orientation options and RTL configuration for different languages and reading directions.

## Orientation

Control the layout direction of the Sankey Chart using the `Orientation` property. The orientation determines how nodes are arranged and how links flow through the diagram.

### Orientation Options

| Option | Description |
|--------|-------------|
| 'Horizontal' | Nodes flow from left to right. Links flow horizontally between nodes. (Default) |
| 'Vertical' | Nodes flow from top to bottom. Links flow vertically between nodes. |

## Horizontal Orientation

The default orientation displays nodes horizontally across the chart, with flows moving from left to right. This is the standard layout for most Sankey diagrams:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/horizontal-orientation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Horizontal-orientation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/horizontal-orientation/horizontal-orientation.cs %}
{% endhighlight %}
{% endtabs %}

## Vertical Orientation

Display nodes vertically with flows moving from top to bottom. This layout is useful for depicting hierarchical relationships or processes that flow downward:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/vertical-orientation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Vertical-orientation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/vertical-orientation/vertical-orientation.cs %}
{% endhighlight %}
{% endtabs %}

## Right-to-Left (RTL) Support

Enable RTL rendering for languages that read from right to left (such as Arabic, Hebrew, and Persian) using the `EnableRtl` property. RTL mode reverses the horizontal flow direction and mirrors the layout:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/rtl/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rtl.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/rtl/rtl.cs %}
{% endhighlight %}
{% endtabs %}

## RTL with Horizontal Orientation

Combining RTL mode with horizontal orientation creates a right-to-left flow layout. Nodes flow from right to left, and labels are right-aligned, making it suitable for RTL languages:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/rtl-horizontal/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rtl-horizontal.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/sankey-diagram/orientation/rtl-horizontal/rtl-horizontal.cs %}
{% endhighlight %}
{% endtabs %}

## RTL Effects on Layout

When RTL is enabled:
- Nodes flow from right to left in horizontal orientation
- Legend positions are mirrored
- Labels and text are right-aligned
- Tooltips and menus adjust to RTL layout
- All UI elements adapt to right-to-left reading order

## Best Practices

- Use RTL when targeting languages like Arabic, Hebrew, Persian, or Urdu
- Test layouts in both LTR and RTL modes to ensure proper spacing and readability
- Combine orientation and RTL settings based on your specific visualization needs
- Ensure all labels and text content support the target language and character encoding
