---
layout: post
title: Custom in ASP.NET MVC Range Navigator Component
description: Learn here all about Custom in Syncfusion ASP.NET MVC Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Custom
publishingplatform: chart-sdk
documentation: ug
---


# Customization

## Navigator appearance

The Range Selector can be customized by using the `navigatorStyleSettings`. The `selectedRegionColor` property is used to specify the color for the selected region, whereas the `unselectedRegionColor` property is used to specify the color for the unselected region.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/appearance/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Appearance.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/appearance/appearance.cs %}
{% endhighlight %}
{% endtabs %}



![Range Selector appearance](images/custom/appearance.png)

## Thumb

The thumb property allows to customize the border, fill color, size, and type of thumb. Thumbs can be of two shapes: **Circle** and **Rectangle**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/thumb/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Thumb.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/thumb/thumb.cs %}
{% endhighlight %}
{% endtabs %}



![Thumb](images/custom/thumb.png)

## Border customization

Using the `navigatorBorder`, the `width` and `color` of the Range Selector border can be customized.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/border/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Border.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/border/border.cs %}
{% endhighlight %}
{% endtabs %}



![Range Selector Border](images/custom/border.png)

## Deferred update

If the `enableDeferredUpdate` property is set to **true**, then the changed event will be triggered after dragging the slider. If the `enableDeferredUpdate` is **false**, then the changed event will be triggered when dragging the slider. By default, the `enableDeferredUpdate` is set to **false**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/defer/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Snap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/defer/snap.cs %}
{% endhighlight %}
{% endtabs %}



## Allow snapping

The `allowSnapping` property toggles the placement of the slider exactly to the left or on the nearest interval.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/snap/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Snap.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/snap/snap.cs %}
{% endhighlight %}
{% endtabs %}



## Animation

The speed of the animation can be controlled using the `animationDuration` property. The default value of the `animationDuration` property is **500** milliseconds.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/animation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Animation.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/custom/animation/animation.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Grid and Tick Lines](./grid-tick/)
* [Labels](./labels/)