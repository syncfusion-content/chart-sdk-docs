---
layout: post
title: Axis customization in TypeScript Charts | Syncfusion
description: Learn here all about Axis customization in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Axis customization in TypeScript Charts

The TypeScript Chart component provides options for customizing axis positions, titles, tick lines, grid lines, direction, and multiple-axis layouts.

## Axis crossing

An axis can be positioned dynamically within the chart area using the [`crossesAt`](https://ej2.syncfusion.com/documentation/api/chart/axis#crossesat) and [`crossesInAxis`](https://ej2.syncfusion.com/documentation/api/chart/axis#crossesinaxis) properties. The `crossesAt` property specifies the value at which the axis intersects another axis. The value must be compatible with the value type of the intersecting axis. The `crossesInAxis` property specifies the name of the axis that the current axis intersects.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs16" %}

## Axis title

Use the [`title`](https://ej2.syncfusion.com/documentation/api/chart/axis#title) property to add a title to an axis. Axis titles provide context for the values displayed along the axis.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs17" %}

## Axis title rotation

Use the [`titleRotation`](https://ej2.syncfusion.com/documentation/api/chart/axis#titlerotation) property to rotate an axis title. It accepts a numeric angle in degrees from 0 through 360, enabling the title to align with the chart layout and available space.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs18" %}

## Tick line customization

Customize major and minor tick lines using the [`majorTickLines`](https://ej2.syncfusion.com/documentation/api/chart/axis#majorticklines) and [`minorTickLines`](https://ej2.syncfusion.com/documentation/api/chart/axis#minorticklines) properties. These settings control properties such as the color, width, and height of the tick lines. Minor tick lines are displayed only when minor ticks are configured for the axis.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs19" %}

## Grid line customization

Customize major and minor grid lines using the [`majorGridLines`](https://ej2.syncfusion.com/documentation/api/chart/axis#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/documentation/api/chart/axis#minorgridlines) properties. These settings control properties such as `color`, `width`, and `dashArray`. Minor grid lines are displayed only when minor intervals are configured for the axis.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs20" %}

## Multiple axes

In addition to the primary X-axis and Y-axis, you can add axes through the [`axes`](https://ej2.syncfusion.com/documentation/api/chart#axes) property. Assign a unique [`name`](https://ej2.syncfusion.com/documentation/api/chart/axis#name) to each additional axis, and map a series to it using the series [`xAxisName`](https://ej2.syncfusion.com/documentation/api/chart/series#xaxisname) or [`yAxisName`](https://ej2.syncfusion.com/documentation/api/chart/series#yaxisname) property. Multiple axes are useful when datasets use different units or scales.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs21" %}

## Inversed axis

<!-- markdownlint-disable MD033 -->

Set the [`isInversed`](https://ej2.syncfusion.com/documentation/api/chart/axis#isinversed) property to `true` to render axis values in reverse order. On a numeric axis, the highest value is displayed nearer the origin and the lowest value is displayed farther from it. This configuration is useful for rankings and other reverse-scale visualizations.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs22" %}

## Opposed position

Set the [`opposedPosition`](https://ej2.syncfusion.com/documentation/api/chart/axis#opposedposition) property to `true` to place an axis on the side opposite its default position. This configuration is useful for multiple-axis charts and layouts that require axes on both sides of the plot area.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs23" %}

## Troubleshooting
- **An additional axis is not used:** Verify that the axis has a unique `name` and that the series `xAxisName` or `yAxisName` exactly matches it.
- **Minor tick lines or grid lines are not displayed:** Configure the applicable minor interval or minor tick count for the axis.
- **An axis does not cross at the expected position:** Verify that `crossesInAxis` matches an existing axis name and that the `crossesAt` value is compatible with that axis value type and range.
- **The title rotation is not visible:** Confirm that the axis has a title and enough space is available to render the rotated text.