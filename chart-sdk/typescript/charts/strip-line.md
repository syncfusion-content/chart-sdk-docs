---
layout: post
title: Strip lines in TypeScript Charts | Syncfusion
description: Learn here all about Strip line in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
<!-- markdownlint-disable MD036 -->

# Strip lines in TypeScript Charts

Strip lines highlight ranges, thresholds, dates, or categories in the Chart area. Add horizontal strip lines to a vertical axis and vertical strip lines to a horizontal axis. To use strip line features, inject the `StripLine` module using `Chart.Inject(StripLine)` method.

## Horizontal strip lines

Add entries to the axis [`stripLines`](https://ej2.syncfusion.com/documentation/api/chart/axismodel#striplines) collection on the vertical axis to render horizontal strip lines. Set [`visible`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#visible) to `true` for each strip line. The default value is `false`.

Multiple strip lines can be added to the same axis to highlight different value ranges.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs92/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs92/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs92" %}

## Vertical strip lines

Add entries to the axis [`stripLines`](https://ej2.syncfusion.com/documentation/api/chart/axismodel#striplines) collection on the horizontal axis to render vertical strip lines. Set `visible` to `true` for each strip line.

Vertical strip lines can highlight categories, dates, milestones, or intervals along the horizontal axis.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs93/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs93/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs93" %}

## Customize a strip line

### Range configuration

Use the following properties to define the strip-line range:

- [`start`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#start): Specifies the starting axis value.
- [`end`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#end): Specifies the ending axis value.
- [`startFromAxis`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#startfromaxis): Starts the strip line from the axis origin when set to `true`. The default value is `false`.
- [`size`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#size): Specifies the strip-line width or height when the range is defined from the axis origin.
- [`sizeType`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#sizetype): Specifies how `size` is interpreted. The default value is `Auto`.

### Appearance and z-order

Use the following properties to customize strip-line appearance:

- [`color`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#color): Specifies the strip-line color.
- [`opacity`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#opacity): Specifies transparency from `0` to `1`.
- [`border`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#border): Configures border color and width.
- [`dashArray`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#dasharray): Specifies a dashed pattern.
- [`imageUrl`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#imageurl): Displays an image as the strip-line background.
- [`zIndex`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#zindex): Set to `Behind` to render the strip line behind the series or `Over` to render it over the series.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs94/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs94/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs94" %}

## Customize strip-line text

Use [`text`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#text) to display a label within the strip line.

- [`textStyle`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#textstyle): Customizes the label font.
- [`rotation`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#rotation): Rotates the label by the specified angle.
- [`horizontalAlignment`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#horizontalalignment): Aligns the label horizontally using `Start`, `Middle`, or `End`. The default value is `Middle`.
- [`verticalAlignment`](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings#verticalalignment): Aligns the label vertically using the supported axis-label positions. The default value is `Middle`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs95/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs95/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs95" %}

## Troubleshooting

- If a strip line is not displayed, verify that `visible` is set to `true`.
- If a strip line is outside the Chart area, verify that `start`, `end`, or `size` falls within the corresponding axis range.
- If a strip line covers the series unexpectedly, set `zIndex` to `Behind`.
- If an origin-based strip line is not rendered as expected, use `startFromAxis` with a valid `size` and `sizeType`.
- If a segmented strip line is not displayed, verify that `segmentAxisName` matches an existing axis name and that the segment range is valid.

## See also

- [StripLineSettings API](https://ej2.syncfusion.com/documentation/api/chart/striplinesettings)
- [Axis API](https://ej2.syncfusion.com/documentation/api/chart/axis)
- [Axis customization](./axis-customization)
- [DateTime axis](./date-time-axis)
- [Mark a threshold in a Chart](./how-to/threshold)