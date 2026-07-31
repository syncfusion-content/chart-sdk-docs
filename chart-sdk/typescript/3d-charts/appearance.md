---
layout: post
title: Appearance in TypeScript 3D Chart control | Syncfusion
description: Learn here all about appearance in Syncfusion TypeScript 3D Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 3D Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Appearance in TypeScript 3D Chart control

## Custom color palette

The default color of series or points can be customized by providing a custom color palette of your choice by using the [`palettes`](../api/chart3d/chart3DModel/#palettes) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs1" %}

## Data point customization

The color of an individual data point can be customized using the below options.

### Point color mapping

The color for the points can be bound from the [`dataSource`](../api/chart3d/series3D/#datasource) for the series by utilizing the [`pointColorMapping`](../api/chart3d/series3D/#pointcolormapping) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs2" %}

## Point level customization

The data label and fill color of each data point can be customized using the [`pointRender`](../api/chart3d/i3DPointRenderEventArgs/) and [`textRender`](../api/chart3d/i3dtextrendereventargs/) events.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs3" %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

<!-- markdownlint-disable MD036 -->

**Customize the chart background**

The background color and border of the 3D chart can be customized using the [`background`](../api/chart3d/chart3DModel/#background) and [`border`](../api/chart3d/chart3DModel/#border) properties.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs4" %}

**Chart margin**

The 3D chart's margin can be set from its container using the [`margin`](../api/chart3d/chart3DModel/#margin) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs5" %}

## Animation

To customize the animation for a particular series, the [`animation`](../api/chart3d/series3D/#animation) property can be used. It can be enabled or disabled by using the [`enable`](../api/chart3d/animationModel/#enable) property. The [`duration`](../api/chart3d/animationModel/#duration) property specifies the duration of an animation and the [`delay`](../api/chart3d/animationModel/#delay) property allows us to start the animation at desire time.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs6" %}

## Chart rotation

The 3D chart can be rotated by using the [`enableRotation`](../api/chart3d/chart3DModel/#enablerotation) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs12" %}

## Title

The 3D chart can be given a title by using [`title`](../api/chart3d/chart3DModel/#title) property, to show the information about the data plotted.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs7" %}

### Title position

By using the [`position`](../api/chart3d/titleSettingsModel/#position) property in [`titleStyle`](../api/chart3d/chart3DModel/#titlestyle), the [`title`](../api/chart/#title-string) can be positioned at left, right, top or bottom of the 3D chart. The title is positioned at the top of the 3D chart, by default.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs8" %}

The custom option is used to position the title anywhere in the 3D chart using [`x`](../api/chart3d/titleSettingsModel/#x) and [`y`](../api/chart3d/titleSettingsModel/#y) coordinates.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs9" %}

### Title alignment

The title can be aligned to the near, far, or center of the 3D chart by using the [`textAlignment`](../api/chart3d/titleSettingsModel/#textalignment) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs10" %}

### Title customization

The [`titleStyle`](../api/chart3d/chart3DModel/#titlestyle) property of the 3D chart provides options to customize the title by using the following properties.

* [`size`](../api/chart3d/titleSettingsModel/#size) - Specifies the size of the title.
* [`color`](../api/chart3d/titleSettingsModel/#color) - Specifies the color for the title. 
* [`fontFamily`](../api/chart3d/titleSettingsModel/#fontfamily) - Specifies the font family for the title.
* [`fontWeight`](../api/chart3d/titleSettingsModel/#fontweight) - Specifies the font weight of the title.
* [`fontStyle`](../api/chart3d/titleSettingsModel/#fontstyle) - Specifies the font style for the title.
* [`opacity`](../api/chart3d/titleSettingsModel/#opacity) - Specifies the opacity for the color of the title.
* [`textAlignment`](../api/chart3d/titleSettingsModel/#textalignment) - Specifies the alignment of the title.
* [`textOverflow`](../api/chart3d/titleSettingsModel/#textoverflow) - Specifies the overflow of the title.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/appearance-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/appearance-cs11" %}

