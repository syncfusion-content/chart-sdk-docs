---
layout: post
title: Data labels in TypeScript Charts | Syncfusion
description: Learn here all about Data labels in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Data labels in TypeScript Charts

Data labels display the values of data points directly on the chart, reducing the need to reference axes for exact values. Enable data labels by setting the [`visible`](../api/chart/dataLabelSettingsModel#visible-boolean) option to `true` in the `dataLabel` configuration. Labels automatically adjust to avoid overlapping and maintain readability.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs1" %}

> Note: To use the data label feature, inject `DataLabel` using `Chart.Inject(DataLabel)` method.

## Position

Use the [`position`](../api/chart/dataLabelSettingsModel#position-string) property to place data labels at `Top`, `Middle`, `Bottom`, or `Outer` (applicable to column and bar series). Appropriate label positioning enhances clarity and preserves chart readability.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs2" %}

> Note: The `Outer` position applies only to column and bar series types.

## Data Label Template

Customize label content using templates. Use placeholders such as `${point.x}` and `${point.y}` to display data point values. The [`template`](../api/chart/dataLabelSettingsModel#template-string) property enables fully customizable and visually rich labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs3" %}

## Text Mapping

Display custom text using the `name` property, which maps label text from a specific field in the data source. This feature is useful for descriptive or category‑based labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs4" %}

## Format

Apply number or date formatting using the [`format`](../api/chart/dataLabelSettings#format) property. Global formatting symbols include:

- `n` – number format  
- `p` – percentage format  
- `c` – currency format 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs5" %}

<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>Rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
    <td>Rounded to 2 decimal places.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>Rounded to 3 decimal places.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
    <td>Converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>Converted to percentage with 2 decimal places.</td>
  </tr>
   <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
    <td>Converted to percentage with 3 decimal places.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>Currency with 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>Currency with 2 decimal places.</td>
  </tr>
</table>

## Margin

Adjust spacing around labels using the `margin` property, which includes `left`, `right`, `bottom`, and `top` values. Margins help prevent labels from overlapping chart elements.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs6" %}

## Customization

Enhance label appearance using properties such as `fill` (background), `border`, and corner radius (`rx`, `ry`). Refine text appearance using the `font` settings, which support `color`, `fontFamily`, `fontWeight`, and `size`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs7" %}

> Note: The `rx` and `ry` properties require non‑null `border` values.

### Handling Overlapping Data Labels

Use the `labelIntersectAction` property to specify how overlapping data labels are handled.

The available options are:

- `None` - Displays all data labels even when they overlap.
- `Hide` - Hides overlapping data labels.
- `Rotate90` - Rotates overlapping data labels by 90 degrees.
- `RelocateVertically` - Relocates overlapping data labels vertically.
- `RelocateHorizontally` - Relocates overlapping data labels horizontally.

The `RelocateVertically` and `RelocateHorizontally` options are supported only for the following series types:

- `StackingColumn`
- `StackingColumn100`
- `StackingBar`
- `StackingBar100`

These relocation modes improve readability by relocating overlapping data labels and connecting them to their corresponding data points using connector lines. Use the `smartLabelSettings` property to customize relocated labels through the `background`, `pointerShape`, `border`, `connectorLineStyle`, and `offset` settings. The `offset` property is applicable only when `labelIntersectAction` is set to `RelocateVertically`. Note that the `seriesOverlapAction` property in `smartLabelSettings` is not applicable for `RelocateVertically` and `RelocateHorizontally`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-data-label" %}

## Smart Label

Smart Label places data labels of Cartesian series so that they do not overlap each other, the markers, or the plot area boundary. Enable it by setting the [`enableSmartLabels`](../api/chart#enablesmartlabels-boolean) property to `true`. The default value is `false`.

How it works:

- **Positioning**: A label stays at its default position when that position is free. Otherwise, the label is checked around its point at the top, right, bottom, and left positions, and then at the diagonal positions. The first position that is inside the plot area of its series and does not overlap any other label or marker is used. For example, if the top and right positions collide with other labels, the label is placed at the bottom when there is enough space. If no free position is found, the label is hidden.
- **Label and marker detection**: A label is checked against the other data labels and the visible markers of all series.
- **Connector line**: A relocated label that is more than 12 px away from its point is joined to the point with a connector line and an arrow pointer.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-label" %}

> Note: When Smart Label is enabled, `labelIntersectAction` is ignored, and the data label `position` decides only the default position. Stacked column and bar series continue to use the `RelocateVertically` and `RelocateHorizontally` options.

### Duplicate data labels

Use the [`showDuplicateLabels`](../api/chart#showduplicatelabels-boolean) property of the chart to control labels that have the same text at the same location, such as labels of multiple series with identical values.

- `true` (default) - Renders all the labels.
- `false` - Renders only the first label and skips the others. The first label is decided by the series order and then the point order.

This property works with or without `enableSmartLabels`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label-duplicate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label-duplicate/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-label-duplicate" %}

### Customization

Use the `smartLabelSettings` property in the series `dataLabel` to customize relocated labels and their connector lines. Labels at their default position keep the `dataLabel` settings.

- `background` - Sets the background color of the relocated label.
- `border` - Sets the `color`, `width`, and `dashArray` of the relocated label border.
- `pointerShape` - Sets the pointer at the point end of the connector line. The options are `Arrow` (default) and `None`.
- `connectorLineStyle` - Sets the `color`, `width`, and `opacity` of the connector line and pointer. Set `width` to `0` or `color` to `transparent` to hide the line.
- `seriesOverlapAction` - Specifies whether labels avoid series elements. See [Series overlap action](#series-overlap-action).

> Note: The `offset` property is not applicable when Smart Label is enabled, because Smart Label automatically determines the final label position to avoid overlaps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label-customization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label-customization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-label-customization" %}

### Series overlap action

Use the `seriesOverlapAction` property in `smartLabelSettings` to specify whether labels can overlap the series elements, such as lines, areas, columns, bars, and trendlines.

- `None` (default) - Labels avoid only other labels and markers, so they can be placed over series elements.
- `Hide` - Labels also avoid the elements of all visible series. A label moves to a free position if one exists, and is hidden only when none is available.

> Note: In canvas rendering mode, `Hide` behaves like `None`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label-series-overlap/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-label-series-overlap/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-label-series-overlap" %}

## Customizing Specific Point

Customize individual markers or labels using the [`pointRender`](../api/chart#pointrender-emittypeipointrendereventargs) and [`textRender`](../api/chart#textrender-emittypeitextrendereventargs) events.  
- `pointRender` modifies shape, color, or border of a point.  
- `textRender` customizes the label text for specific points.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/data-markers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/data-markers-cs8" %}

## Show percentage based on each series points

Calculate and display percentage values based on each series’ total using the `seriesRender` and `textRender` events.  
- In `seriesRender`, compute the total of `y` values.  
- In `textRender`, calculate the percentage for each point and update the label text.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/legend-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/legend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/legend-cs1" %}

## Last value label

The `lastValueLabel` feature highlights the final data point in a series, making the latest trend or value easy to identify.

### Enable last value label

Enable the label by setting the `enable` property inside the `lastValueLabel` configuration. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/last-value-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/last-value-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/last-value-label" %}

> Note: To use the last value label feature, inject the `LastValueLabel` module using `Chart.Inject(LastValueLabel)` method.

### Customization

Customize the appearance using properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/last-value-label-customization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/last-value-label-customization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/last-value-label-customization" %}

## See Also

* [Show total stacking values in data label](../chart/how-to/stacking-total)
* [Prevent the data label when the data value is 0](../chart/how-to/prevent-data-label#prevent-the-data-label-when-the-data-value-is-0)
