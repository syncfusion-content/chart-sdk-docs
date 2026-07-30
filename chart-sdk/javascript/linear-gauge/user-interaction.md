---
layout: post
title: User interaction in JavaScript Linear gauge control | Syncfusion
description: Learn here all about User interaction in Syncfusion JavaScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: User interaction 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# User interaction in JavaScript Linear gauge control

## Tooltip

Linear gauge displays the details about a pointer value through [`tooltip`](../api/linear-gauge/tooltipSettings), when the mouse hovers over the pointer. To enable the tooltip, set the [`enable`](../api/linear-gauge/tooltipSettings/#enable-boolean) property to **true** and inject the **GaugeTooltip** module in Linear Gauge.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs1" %}


### Tooltip Format

Tooltip in the Linear Gauge control can be formatted using the [`format`](../api/linear-gauge/tooltipSettings/#format) property in [`tooltip`](../api/linear-gauge/tooltipSettings/) object. It is used to render the tooltip in certain format or to add a user-defined unit in the tooltip. By default, the tooltip shows the pointer value only. In addition to that, more information can be added in the tooltip. For example, the format **{value}km** shows pointer value with kilometer unit in the tooltip.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs2" %}

### Tooltip Template

The HTML element can be rendered in the tooltip of the Linear Gauge using the [`template`](../api/linear-gauge/tooltipSettings/#template) property in the [`tooltip`](../api/linear-gauge/tooltipSettings) . The **${value}** can be used as placeholders in the HTML element to display the pointer values of the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs3" %}

### Customize the appearance of the tooltip

The tooltip can be customized using the following properties in [`tooltip`](../api/linear-gauge/tooltipSettings).

* [`fill`](../api/linear-gauge/tooltipSettings/#fill) - To fill the color for tooltip.
* [`enableAnimation`](../api/linear-gauge/tooltipSettings/#enableanimation) - To enable or disable the tooltip animation.
* [`border`](../api/linear-gauge/tooltipSettings/#border) - To set the border color and width of the tooltip.
* [`textStyle`](../api/linear-gauge/tooltipSettings/#textstyle) - To customize the style of the text in tooltip.
* [`showAtMousePosition`](../api/linear-gauge/tooltipSettings/#showatmouseposition) - To show the tooltip at the mouse position.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs4" %}

### Positioning the tooltip

The tooltip is positioned at the **End** of the pointer. To change the position of the tooltip at the start, or center of the pointer, set the [`position`](../api/linear-gauge/tooltipSettings/#position) property to **Start** or **Center**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs5" %}

## Pointer Drag

To drag either the marker or bar pointer to the desired axis value, set the [`enableDrag`](../api/linear-gauge/pointer/#enabledrag) property as **true** in the [`pointer`](../api/linear-gauge/pointerModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/user-interaction-cs6" %}
