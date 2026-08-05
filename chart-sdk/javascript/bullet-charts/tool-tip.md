---
layout: post
title: Tool tip in JavaScript Bullet chart control | Syncfusion
description: Learn here all about Tool tip in Syncfusion JavaScript Bullet chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Tool tip 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Tool tip in JavaScript Bullet chart control

When the mouse is hovered over a bar in the Bullet Chart, the tooltip displays important summary about the actual and the target bar values.

## Default tooltip

By setting [`enable`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#enable)the property to 'True' and by injecting `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)`.The 'Tooltip' is visible in the 'Bullet chart' by default.
The tooltip is not visible by default. To make it visible, set the `enable` property in the `tooltip` to **true** and injecting `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/user-interaction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/user-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/user-interaction-cs1" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the `template` property of the `tooltip`. You can use the **${target}** and **${value}** as place holders in the HTML element to display the value and target values from the data source of corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/user-interaction-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/user-interaction-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/user-interaction-cs2" %}

## Customization of the appearance of tooltip

The [`fill`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

The following properties can be used to customize the Bullet Chart tooltip.

* `fill` - Specifies the color of tooltip.
* `border` - Specifies the tooltip border color and width.
* `textStyle` - Specifies the tooltip font family, font style, font weight, color and size.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs4/" %}