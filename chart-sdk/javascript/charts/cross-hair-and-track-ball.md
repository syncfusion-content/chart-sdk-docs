---
layout: post
title: Cross hair and track ball in JavaScript Chart control | Syncfusion
description: Learn here all about Cross hair and track ball in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Cross hair and track ball 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Cross hair and track ball in JavaScript Chart control

The crosshair feature displays vertical and horizontal guide lines that intersect at the mouse or touch position, helping to identify the corresponding axis values precisely.

Crosshair lines can be enabled by setting the [`enable`](../api/chart/crosshairTooltip#enable-boolean) property in the `crosshair` settings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs5" %}

## Tooltip for axis

Axis tooltip labels can be enabled by setting the [`enable`](../api/chart/crosshairTooltipModel#enable-boolean) property of `crosshairTooltip` in the corresponding axis. This tooltip displays the current axis value at the crosshair position.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs6" %}

## Customization

The [`fill`](../api/chart/crosshairTooltip#fill-string) and [`textStyle`](../api/chart/crosshairTooltip#textstyle-fontmodel) properties of `crosshairTooltip` are used to customize the background color and font style of the crosshair label.

The color and width of the crosshair lines can be customized by using the [`line`](../api/chart/crosshairSettingsModel#line-bordermodel) property in the crosshair settings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs7" %}

> Note: To use the crosshair feature, inject `Crosshair` module `Chart.Inject(Crosshair)` method.

**Snap to data**

By enabling the [`snapToData`](../api/chart/crosshairSettingsModel#snaptodata) property, the crosshair snaps to the nearest data point instead of following the exact mouse position. This improves accuracy when inspecting values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs50/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs50/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs50" %}

## Trackball

The trackball feature tracks the data point closest to the mouse or touch position. A trackball marker highlights the nearest point, and the trackball tooltip displays detailed information about that point.

To use the trackball feature, inject both `Crosshair` and `Tooltip` into the `provide`.

Trackball functionality can be enabled by setting the [`enable`](../api/chart/crosshairSettings#enable-boolean) property of the crosshair to **true** and the [`shared`](../api/chart/tooltipSettings#shared-boolean) property of the tooltip to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs8" %}

## Crosshair highlight

The [`highlightCategory`](../api/chart/crosshairSettings#highlightcategory) property highlights the background of the entire category when the crosshair is moved over the chart.

The crosshair line color can be customized using the [`color`](../api/chart/borderModel#color) property within the [`line`](../api/chart/crosshairSettings#line) configuration.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs54/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs54/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs54" %}

## Crosshair label customization

The [`crosshairLabelRender`](../api/chart/chartModel#crosshairlabelrender) event fires before each crosshair axis label is rendered, allowing you to customize the label's appearance or content, or to prevent it from being displayed.

Event arguments:

* `text` – The label text that can be modified.
* `value` – The data value at the crosshair position.
* `axisName` – The axis identifier (e.g., `primaryXAxis`).
* `axisOrientation` – Either `Horizontal` or `Vertical`.
* `textStyle` – Font properties for customization.
* `fill` – Background color of the label.
* `cancel` – Set to **true** to skip rendering the label.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/crosshair-label-render/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/crosshair-label-render/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/chart-sdk/javascript/charts/crosshair-label-render/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/crosshair-label-render" %}
