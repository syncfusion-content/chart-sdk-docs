---
layout: post
title: Gradient in JavaScript Accumulation chart control | Syncfusion
description: Learn here all about Gradient in Syncfusion JavaScript Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gradient
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Gradient in JavaScript Accumulation chart control

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:

- Linear gradient
- Radial gradient

## Linear gradient

A linear gradient blends colors along a straight path from a defined start point to an end point. In accumulation charts, a linear gradient can be applied either to the whole series or to each point via the pointRender event. An `linearGradient` is configured with one or more color stops.

The linear gradient properties are:

- `x1` - Horizontal start position of the gradient (0 to 1).
- `y1` - Vertical start position of the gradient (0 to 1).
- `x2` - Horizontal end position of the gradient (0 to 1).
- `y2` - Vertical end position of the gradient (0 to 1).

Properties for `gradientColorStop`:

- `offset` - Position along the gradient (0 to 100).
- `color` - Base color at the stop.
- `opacity` - Transparency (0 to 1).
- `lighten` - Adjusts lightness (positive lightens, negative darkens).
- `brighten` - Adjusts brightness (positive increases, negative decreases).

### Apply gradient to the entire series

A linear gradient may be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs5" %}

### Apply a gradient per point using the point render event

A diagonal linear gradient can be applied per data point using the pointRender event for a clear light-to-shadow transition.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs6" %}

## Radial gradient

A radial gradient blends colors outward from a central point, creating a circular or elliptical color progression. Configure it by adding `radialGradient` inside the target element and define one or more color stops to control how colors transition from the center to the outer edge. Set the gradient’s center, optional focal point, and radius using `radialGradient` properties. The color stop values such as `offset`, `color`, `opacity`, `lighten`, and `brighten` are set using the `gradientColorStop` property.

In the `radialGradient`:

- `cx` - Sets the normalized horizontal center of the gradient (0 to 1).
- `cy` - Sets the normalized vertical center of the gradient (0 to 1).
- `fx` - Sets the normalized horizontal focal point from which the gradient appears to originate (0 to 1).
- `fy` - Sets the normalized vertical focal point (0 to 1).
- `r` - Sets the normalized radius of the gradient circle (0 to 1).

In the `gradientColorStop`:

- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop.
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Ranges: -1 to 1.

### Apply a radial gradient to the entire series

A radial gradient can be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs7" %}

### Apply a radial gradient per point using the point render event

The following example uses a distinct color palette and an off-center radial gradient to create a clear light-to-shadow effect on each data point. The gradient is configured in pointRender, so each data point receives its own radial gradient derived from its base color.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-gradient-cs8" %}