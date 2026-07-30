---
layout: post
title: Linear gauge appearance in JavaScript Linear gauge control | Syncfusion
description: Learn here all about Linear gauge appearance in Syncfusion JavaScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Linear gauge appearance 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Linear gauge appearance in JavaScript Linear gauge control

## Customizing the Linear Gauge area

The following properties are available in the [`LinearGauge`](../api/linear-gauge/) to customize the Linear Gauge area.

* [`background`](../api/linear-gauge/#background) - Applies the background color for the Linear Gauge.
* [`border`](../api/linear-gauge/#border) - To customize the color and width of the border in Linear Gauge.
* [`margin`](../api/linear-gauge/#margin) - To customize the margins of the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs1" %}

## Setting up the Linear Gauge title

The title for the Linear Gauge can be set using [`title`](../api/linear-gauge/#title) property in Linear Gauge. Its appearance can be customized using the [`titleStyle`](../api/linear-gauge/#titlestyle) with the below properties.

* [`color`](../api/linear-gauge/fontModel/#color) - Specifies the text color of the title.
* [`fontFamily`](../api/linear-gauge/fontModel/#fontfamily) - Specifies the font family of the title.
* [`fontStyle`](../api/linear-gauge/fontModel/#fontstyle) - Specifies the font style of the title.
* [`fontWeight`](../api/linear-gauge/fontModel/#fontweight) - Specifies the font weight of the title.
* [`opacity`](../api/linear-gauge/fontModel/#opacity) - Specifies the opacity of the title.
* [`size`](../api/linear-gauge/fontModel/#size) - Specifies the font size of the title.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs2" %}

## Customizing the Linear Gauge container

The area used to render the ranges and pointers at the center position of the gauge is called container. The following types of container to be applicable for Linear Gauge.

* Normal
* Rounded Rectangle
* Thermometer

The type of the container can be modified by using the [`type`](../api/linear-gauge/containerModel/#type) property in [`container`](../api/linear-gauge/#container). The container can be customized by using the following properties in [`container`](../api/linear-gauge/#container).

* [`offset`](../api/linear-gauge/containerModel/#offset) - To place the container with the specified distance from the axis of the Linear Gauge.
* [`width`](../api/linear-gauge/containerModel/#width) - To set the thickness of the container.
* [`height`](../api/linear-gauge/containerModel/#height) - To set the length of the container.
* [`backgroundColor`](../api/linear-gauge/containerModel/#backgroundcolor) - To set the background color of the container.
* [`border`](../api/linear-gauge/containerModel/#border) - To set the color and width for the border of the container.

### Normal

The **Normal** type will render the container as a rectangle and this is the default container type.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs3" %}

### Rounded Rectangle

The **RoundedRectangle** type will render the container as a rectangle with rounded corner radius. The rounded corner radius of the container can be customized using the [`roundedCornerRadius`](../api/linear-gauge/containerModel/#roundedcornerradius) property in [`container`](../api/linear-gauge/#container).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs4" %}

### Thermometer

The **Thermometer** type will render the container similar to the appearance of thermometer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs5" %}

## Fitting the Linear Gauge to the control

The Linear Gauge component is rendered with margin by default. To remove the margin around the Linear Gauge, the [`allowMargin`](../api/linear-gauge/#allowmargin) property in [`LinearGauge`](../api/linear-gauge/) is set as **false**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-appearance-cs6" %}

>To use this feature, set the [`allowMargin`](../api/linear-gauge/#allowmargin) property to **false**, the [`width`](../api/linear-gauge/#width) property to **100%** and the properties of [`margin`](../api/linear-gauge/#margin) to **0**.