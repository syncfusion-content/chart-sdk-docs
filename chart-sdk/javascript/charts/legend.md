---
layout: post
title: Legend in JavaScript Charts | Syncfusion
description: Learn here all about Legend in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
<!-- markdownlint-disable MD036 -->

# Legend in JavaScript charts

The legend provides information about the series rendered in the chart and helps users identify each series by its color, shape, or style.

## Position and alignment

Use the [`position`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#position) property to place the legend on the `Left`, `Right`, `Top`, or `Bottom` of the chart. The default is `Bottom`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs2" %}

### Custom positioning

Set [`position`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#position) to `Custom` to place the legend at any point in the chart using `x` and `y` coordinates. Coordinates are in pixels by default.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs3" %}

### Legend reverse

Use the [`reverse`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#reverse) property to reverse the order of legend items. By default, legend items appear in the same order as their series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs4" %}

### Legend alignment

Align the legend to `Center`, `Far`, or `Near` using the [`alignment`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#alignment) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs5" %}

## Customization

To change the legend icon shape, use the [`legendShape`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#legendshape) property in the [`series`](https://ej2.syncfusion.com/javascript/documentation/api/chart#series) model. By default, the legend icon shape matches the series type.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs6" %}

### Legend size

By default, the legend occupies approximately 20%–25% of the chart height when positioned at the top or bottom, and 20%–25% of the chart width when positioned at the left or right. Change the default size using the [`width`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#width) and [`height`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#height) properties of `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs7" %}

### Legend item size

Customize the size of legend items using the [`shapeHeight`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#shapewidth) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs8" %}

### Paging for legend

Paging is enabled automatically when the legend items exceed the legend bounds. Page controls (left/right arrows and page numbers) appear at the bottom of the legend. Use the arrows or page numbers to navigate between pages. Paging also triggers for multi-series legends with limited width.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs9" %}

### Legend text wrap

When legend text exceeds the container, enable wrapping using the [`textWrap`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#textwrap) property. Wrapping can also be controlled using the [`maximumLabelWidth`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#maximumlabelwidth) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs10" %}

### Set the label color based on series color

Use the chart's [`loaded`](https://ej2.syncfusion.com/javascript/documentation/api/chart/index-default#loaded) event to set the legend label color based on the series color.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs11" %}

## Series selection on Legend

By default, clicking a legend item toggles the visibility of its series. To run a custom action on a legend click (such as selecting the series) instead of toggling visibility, set [`toggleVisibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#togglevisibility) to `false` and handle the click with the [`legendClick`](../api/chart#legendclick) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs12" %}

## Collapsing legend item

By default, each series contributes one legend item. To omit a legend item for a particular series, set the series [`name`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#name) to an empty string, or set [`visibleOnLegend`](../api/chart/series#visibleonlegend-boolean) to `false` on the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs13" %}

## Expose series and point in legendRender event

The [`legendRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/index-default#legendrender) event fires for each legend item while the legend is being rendered. The `args.series` property exposes the underlying [`series`](https://ej2.syncfusion.com/javascript/documentation/api/chart/index-default#series) model. The `args.point` property exposes the underlying data point when [`legendSettings.mode`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendSettingsModel#mode) is set to `'Point'` (the default mode is `'Series'`, which renders one legend item per series). Use these arguments to customize the legend item text dynamically based on series and point data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs20" %}

## Legend title

Set a title for the legend using the [`title`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#title) property in `legendSettings`. Use [`titlePosition`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#titleposition) to place the title at `Top`, `Left`, or `Right`. The [`maximumTitleWidth`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#titleposition) property sets the width of the legend title and defaults to `100px`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs14" %}

## Arrow page navigation

When legend paging is enabled, page numbers are shown by default. To display only left and right arrows for navigation, set [`enablePages`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#enablepages) to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs15" %}

## Legend item padding

Use the [`itemPadding`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#itempadding) property to adjust the spacing between legend items.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs16" %}

## Legend layout

The [`layout`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendsettingsmodel#layout) property in `legendSettings` displays the legend horizontally or vertically. By default, `layout` is set to **Auto**.

The [`maximumColumns`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendSettingsModel#maximumcolumns) property defines the maximum number of columns that can be displayed within the available space when using auto layout.

Enabling the [`fixedWidth`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendSettingsModel#fixedwidth) property ensures that all legend items have equal widths, determined by the maximum item width.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs18" %}

## Legend template

Legend templates allow you to replace default legend icons and text with custom HTML for each series. This enables branded styles, richer content (icons, multi-line text, badges), improved readability, and localization.

You can customize the legend items by using the [`template`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendSettingsModel#template) property of `legendSettings`. Legend interactions (click to toggle series) remain unless [`toggleVisibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendSettings#togglevisibility-boolean) is set to `false`. Templates work with all legend positions, alignments, and paging.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs19" %}

## Troubleshooting

* **Legend items are truncated** — Reduce the number of series, enable paging `textWrap` and `maximumLabelWidth`, or set `height` / `width` to give the legend more room.
* **Paging does not appear when expected** — Paging triggers when items exceed the legend bounds. Lower the `height` / `width` to force paging, or use the `layout` option to spread items across rows.
* **Templated legend does not render** — Confirm that the template `<div>` is placed outside the chart container and that its `id` matches the `template` option. Templates only work after the chart has rendered at least once.
* **Clicking the legend does nothing** — Check `toggleVisibility`; if you set it to `false`, register a `legendClick` handler to perform a custom action.

## See also

* [Customize each shape in legend](./how-to#customize-each-shape-in-legend)
* [Customize legend text](https://support.syncfusion.com/kb/article/20959/how-to-customize-legend-text-in-javascript-charts)
* [Hide/Show series by clicking a single legend item](https://support.syncfusion.com/kb/article/21482/how-to-hideshow-series-by-clicking-single-legend-in-javascript-chart)
* [Selection](./selection)
* [Highlight](./selection#highlight)
* [Chart series configuration](./chart-series)