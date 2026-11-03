---
layout: post
title: Gradient in JavaScript Charts | Syncfusion
description: Learn here all about Gradient in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
<!-- markdownlint-disable MD036 -->

# Gradient in JavaScript charts

Gradients let you blend two or more colors across a chart element. The Chart component supports two gradient types:

- Linear gradient
- Radial gradient

Gradients can be applied to:

- Series
- Trendlines
- Technical Indicators

## Linear gradient

A linear gradient blends colors alongside a straight path from a defined start point to an end point. Configure it by adding [`linearGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/lineargradient) inside the target element (series, trendlines, or indicators) and define one or more color stops that control how colors transition across the gradient. Set the start and end coordinates of the gradient using `x1`, `y1`, `x2`, and `y2` properties (each normalized to the range 0 to 1; defaults are `x1=0, y1=0, x2=1, y2=0` which produces a left-to-right gradient). The gradient color stop values are set using the `gradientColorStop` property.

In the `linearGradient`:

- `x1` - Sets the horizontal start position of the gradient, normalized to 0 to 1. Default: `0`.
- `y1` - Sets the vertical start position of the gradient, normalized to 0 to 1. Default: `0`.
- `x2` - Sets the horizontal end position of the gradient, normalized to 0 to 1. Default: `1`.
- `y2` - Sets the vertical end position of the gradient, normalized to 0 to 1. Default: `0`.

In the `gradientColorStop` (an array of stop objects):

- `offset` - Specifies the position of the color stop along the gradient, from 0 to 100.
- `color` - Sets the color at the stop (any valid CSS color string).
- `opacity` - Defines the transparency of the stop, from 0 (transparent) to 1 (opaque).
- `lighten` - Adjusts lightness at the stop as a number from 0 to 1. For example, `lighten: 0.5` lightens the stop color by 50%.
- `brighten` - Adjusts brightness at the stop as a number from -1 to 1. Negative values darken the stop color; positive values lighten it.

### Series

Apply a linear gradient to a series by adding [`linearGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/lineargradient) inside the series object. The same gradient is applied to the series markers, the legend symbol, and the tooltip marker for visual consistency.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-gradient-cs1" %}

### Trendlines

Apply a linear gradient to a trendline by adding [`linearGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/lineargradient) inside the trendline object. The trendline uses the same color stop configuration as the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-gradient-cs2" %}

### Technical indicators

Apply a linear gradient to a technical indicator by adding [`linearGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/lineargradient) inside the indicator object. The indicator uses the same color stop configuration as the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-gradient-cs3" %}

## Radial gradient

A radial gradient blends colors outward from a central point, creating a circular or elliptical color progression. Configure it by adding [`radialGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/radialGradient) inside the target element (series, trendlines, or indicators) and define one or more color stops to control how colors transition from the center to the outer edge. Set the gradient's center, optional focal point, and radius using the `radialGradient` properties. The color stop values are set using the `gradientColorStop` property.

In the `radialGradient`:

- `cx` - Sets the normalized horizontal center of the gradient, from 0 to 1. Default: `0.5`.
- `cy` - Sets the normalized vertical center of the gradient, from 0 to 1. Default: `0.5`.
- `fx` - Sets the normalized horizontal focal point from which the gradient appears to originate, from 0 to 1. Optional; defaults to `cx` if omitted.
- `fy` - Sets the normalized vertical focal point, from 0 to 1. Optional; defaults to `cy` if omitted.
- `r` - Sets the normalized radius of the gradient circle, from 0 to 1. Default: `0.5`.

In the `gradientColorStop` (an array of stop objects):

- `offset` - Specifies the position of the color stop along the gradient, from 0 to 100.
- `color` - Sets the color at the stop (any valid CSS color string).
- `opacity` - Defines the transparency of the stop, from 0 (transparent) to 1 (opaque).
- `lighten` - Adjusts lightness at the stop as a number from 0 to 1. For example, `lighten: 0.5` lightens the stop color by 50%.
- `brighten` - Adjusts brightness at the stop as a number from -1 to 1. Negative values darken the stop color; positive values lighten it.

### Series

Apply a radial gradient to a series by adding [`radialGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/radialGradient) inside the series object. The same gradient is applied to the series markers, the legend symbol, and the tooltip marker for visual consistency.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-gradient-cs4" %}

### Trendlines

Apply a radial gradient to a trendline by adding [`radialGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/radialGradient) inside the trendline object. The trendline uses the same color stop configuration as the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-gradient-cs9" %}

### Technical indicators

Apply a radial gradient to a technical indicator by adding [`radialGradient`](https://ej2.syncfusion.com/javascript/documentation/api/chart/radialGradient) inside the indicator object. The indicator uses the same color stop configuration as the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-gradient-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-gradient-cs10" %}

## Troubleshooting

* **Gradient does not render** — Verify that the `gradientColorStop` array is non-empty. An empty `gradientColorStop: []` falls back to the default `fill`. Confirm the snippet is running with Essential JS 2 v18.4 or later.
* **Gradient appears as a solid color** — Check that the `gradientColorStop` array contains at least two entries. A single stop produces a flat color from the `offset` position to the end of the gradient.
* **`lighten` or `brighten` has no visible effect** — The values are normalized to the range documented above. Values outside the allowed range are clamped silently. Increase the magnitude in small steps (for example, `0.1`) to see the change.
* **Trendline or indicator gradient does not match the series gradient** — Each target accepts its own `linearGradient` or `radialGradient`. The chart does not inherit the gradient from the parent series.

## See also

* [Chart appearance](./chart-appearance)
* [Series configuration](./chart-series)
* [Technical indicators](./technical-indicators)
* [Trendlines](./trend-lines)
* [Chart animation](./chart-animation)
