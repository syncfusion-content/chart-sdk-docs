---
layout: post
title: Appearance in JavaScript Charts | Syncfusion
description: Learn here all about Chart appearance in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Appearance in JavaScript Charts

The chart appearance can be customized in multiple ways, including custom color palettes for series, data point-level customization, chart area formatting, and animation settings.

## Custom color palette

Customize the default color of series or points by providing a custom color palette using the [`palettes`](https://ej2.syncfusion.com/javascript/documentation/api/chart#palettes) property.

## Supported color formats

The chart supports various CSS color formats for customization:  

- **Hex**: `"#E94649"`, `"#F6B53F"`  
- **RGB**: `"rgb(233, 70, 73)"`, `"rgb(246, 181, 63)"`  
- **RGBA**: `"rgba(233, 70, 73, 0.5)"`  
- **HSL**: `"HSL(0, 79%, 60%)"`  
- **HWB**: `"HWB(0 9% 8%)"`  

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs6" %}

## Data point customization

The color of individual data point or data points within a range can be customized using the options below.

### Point color mapping

You can bind colors for data points from the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#datasource) using the [`pointColorMapping`](https://ej2.syncfusion.com/javascript/documentation/api/chart/series#pointcolormapping) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs7" %}

### Range color mapping

You can differentiate data points based on their y values using [`rangeColorSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart/rangeColorSetting) in the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs8" %}

## Point level customization

Marker, data label, and fill color of individual data points can be customized using the [`pointRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#pointrender) and [`textRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart#textrender) events.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs9" %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

**Customize the chart background**

Use the [`background`](https://ej2.syncfusion.com/javascript/documentation/api/chart#background) and [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart#border) properties on the chart to change its background color and border.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs10" %}

**Chart margin**

Set the chart margin relative to its container using the [`margin`](https://ej2.syncfusion.com/javascript/documentation/api/chart#margin) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs11" %}

**Chart area customization**

To customize the plotting region (chart area), use the `chartArea` properties: [`background`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAreaModel#background) and [`border`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAreaModel#border) to customize appearance, and [`width`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAreaModel#width) to adjust the chart area size.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs12" %}

**Chart area margin**

You can customize the space between the chart area and its container using the [`margin`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAreaModel#margin) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs24" %}

## Animation

Customize animation for a series using the [`animation`](https://ej2.syncfusion.com/javascript/documentation/api/chart/animationModel) property. Use `enable` to turn animation on or off; `duration` controls the animation length and `delay` sets when the animation starts.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs13" %}

### Fluid animation

Fluid animation provides a smooth transition when the series data is updated. Instead of replaying the entire series animation from its initial state, the existing data points animate from their current values or positions to the updated values or positions. After updating the series data source, call the `animate` method to apply the transition.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs14" %}

## See also

* [Customize the series points using patterns](https://ej2.syncfusion.com/javascript/documentation/chart/how-to/points-customization/#customize-the-series-points-by-using-patterns)
