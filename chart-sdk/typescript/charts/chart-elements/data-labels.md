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

These relocation modes enable the Smart Data Label feature, which improves readability by relocating overlapping data labels and connecting them to their corresponding data points using connector lines. Use the `smartLabelSettings` property to customize relocated labels through the `background`, `pointerShape`, `border`, `connectorLineStyle`, and `offset` settings. The `offset` property is applicable only when `labelIntersectAction` is set to `RelocateVertically`.

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

Smart Label is a collision-aware placement mode for the data labels of Cartesian chart series. It prevents labels from overlapping each other, series markers, and the plot area boundary. Enable it by setting the [`enableSmartLabels`](../api/chart#enablesmartlabels-boolean) property to `true`. By default, it is `false`, and data labels render as usual.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-data-label" %}

> Note: Inject the `DataLabel` module and set `visible` to `true` in the series `dataLabel` to use Smart Label.

### Supported series

Smart Label applies to the following Cartesian series types:

- Line, StepLine, Spline, MultiColoredLine, StackingLine, and StackingLine100
- Area, StepArea, SplineArea, MultiColoredArea, StackingArea, StackingArea100, and StackingStepArea
- Column, Bar, Waterfall, Histogram, and Pareto
- Scatter and Bubble
- BoxAndWhisker, Hilo, HiloOpenClose, and Candle
- RangeArea, SplineRangeArea, RangeStepArea, and RangeColumn

The following are not handled by Smart Label:

- `StackingColumn`, `StackingColumn100`, `StackingBar`, and `StackingBar100` continue to use the `RelocateVertically` and `RelocateHorizontally` behavior described in [Handling Overlapping Data Labels](#handling-overlapping-data-labels).
- Polar and Radar charts, accumulation charts, and template data labels.
- Rotated labels. Smart Label ignores `enableRotation` and always renders labels at 0 degrees.

> Note: When Smart Label is enabled, the `labelIntersectAction` property is ignored for the supported series. The `position` and `alignment` properties of the data label decide only the default position of the label.

### How Smart Label works

Smart Label places labels in two steps. First, the chart renders all series and markers. Then, it positions every label, so each label can be checked against the elements of all series, including those rendered after it.

#### Label positioning

Each label follows this order of priority: keep the default position, relocate if needed, and hide only as the last option.

1. **Default position**: The label stays at its default position, as decided by the `position` and `alignment` properties, when that position is inside the plot area and does not overlap any other label or marker. No connector line is drawn, and the label keeps its `fill`, `border`, and `margin`.
2. **Relocation**: If the default position is not free, the label moves to the nearest free position around its data point. The label is checked at eight candidate positions, in this order: `Outer`, `Inner`, `Right`, `Left`, `OuterRight`, `OuterLeft`, `InnerRight`, and `InnerLeft`.
   - `Outer` is the side of the point away from the value axis origin, and `Inner` is the opposite side. The diagonal positions combine a vertical side with `Right` or `Left`. In a transposed chart, these sides rotate by 90 degrees.
   - The distance from the point starts at 4 px and grows in steps of 2 px up to 20 px. At each distance, the first position that is inside the plot area and free from overlaps is used.
   - A relocated label keeps the same size as it has at the default position.
3. **Hidden**: If no free position is found, the label is not drawn. A label is never rendered over another label.

The label always stays inside the plot area of its own series. In charts with multiple panes, a label never moves into another pane.

> Note: Labels are placed in series order, and then in point order. When two labels compete for the same position, the label of the earlier series keeps it. To give a series priority, add it earlier in the `series` collection. The same data, chart size, and fonts always produce the same layout.

#### Overlap detection with other data labels

A label is treated as overlapping when its area intersects another data label. The labels considered include:

- Labels of other series.
- Labels of the stacked column and bar series, which use the legacy path.
- Labels that Smart Label has already placed earlier.

Labels with identical or very close values in multiple series share the same anchor. In this case, the labels fan out around the point in candidate order, and a label is hidden only when no free candidate exists within 20 px.

#### Overlap detection with markers

The label is also checked against the bounds of every visible marker, including the marker border. This applies to the markers of all series. Markers that are not visible and points that are empty or hidden do not block labels. A label cannot sit over its own marker, except when the data label `position` is `Middle`, since the label is then meant to sit on the point.

> Note: Error bars, annotations, strip lines, technical indicators, and connector lines are not considered while detecting overlaps.

#### Connector line

When a relocated label ends up more than 12 px away from its data point, a connector line joins the label to the point, so the owner of the label remains clear.

- The line starts at the edge of the label closest to the point and ends at the edge of the marker. When the point has no visible marker, it ends at the point.
- An arrow pointer is drawn at the point end of the line. Use the `pointerShape` property to change or remove it.
- Labels at their default position, or moved less than 12 px, do not have a connector line.
- The connector line and pointer use the color and opacity from `connectorLineStyle`. See [Customization](#customization) for the available settings.

#### Label visibility

| Situation | Result |
|---|---|
| Default position is free | The label stays and has no connector line. |
| Default position is not free, and a free position exists | The label moves to the nearest free position. A connector line is drawn when the gap is more than 12 px. |
| No free position exists | The label is not drawn, and no connector line is drawn. |
| The plot area is smaller than the label | The label is not drawn. |
| The point is outside the visible axis range | The label is not drawn. |

The `textRender` event is still raised for every label. Changes to the text, font, color, and border in this event are honored, and a changed `location` becomes the default position of the label.

#### Range, Hilo, and Candle series

For these series, each label always uses a fixed side, so the two labels of a point never swap.

- **Range series** (RangeArea, SplineRangeArea, RangeStepArea, and RangeColumn): The upper label is placed on the top side (right side when the chart is transposed), and the lower label on the bottom side (left side when transposed). The sides swap when the y-axis is inversed.
- **Hilo, HiloOpenClose, and Candle**: The high label uses the upper side, and the low label uses the lower side. The open and close labels use the standard search described above.

The label slides along the plot area edge to stay inside the plot area.

### Duplicate data labels

When multiple series have points at the same location and with the same text, identical labels are drawn on top of each other. Use the [`showDuplicateLabels`](../api/chart#showduplicatelabels-boolean) property of the chart to control this behavior.

- `true` (default) - Renders all labels, even when they share the same text and location.
- `false` - Renders only the first label from labels that share the same text and location, and skips the others.

Labels are compared by their formatted text and their location, rounded to whole pixels. The first label in series order, and then point order, is kept. The check runs before the `textRender` event and before Smart Label placement, so skipped labels do not raise the event.

The `showDuplicateLabels` property works with or without `enableSmartLabels`.

The following scenarios are supported:

- Multiple line, spline, or area series with the same values at the same x-values.
- Scatter or bubble series that share the same points.
- Combination charts where a column and a line series show the same value at the same location.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-data-label" %}

### Customization

Use the `smartLabelSettings` property in the series `dataLabel` to customize relocated labels and their connector lines. The settings apply only to labels that Smart Label has relocated. Labels at their default position keep the `fill`, `border`, and other settings of the `dataLabel`.

| Property | Type | Default | Description |
|---|---|---|---|
| `background` | `string` | `null` | Sets the background color of the relocated label. When not set, the `fill` of the `dataLabel` is used. |
| `border` | `BorderModel` | `{}` | Sets the `color`, `width`, and `dashArray` of the border of the relocated label. When not set, the `border` of the `dataLabel` is used. |
| `pointerShape` | `'Arrow'` \| `'None'` | `'Arrow'` | Sets the shape drawn at the point end of the connector line. `Arrow` draws a filled arrow, and `None` draws no pointer. |
| `connectorLineStyle` | `ConnectorLineStyleModel` | `{}` | Customizes the connector line with the `color`, `width`, and `opacity` properties. |
| `seriesOverlapAction` | `'None'` \| `'Hide'` | `'None'` | Specifies whether labels avoid series elements. See [Series overlap action](#series-overlap-action). |
| `offset` | `number` | `0.5` | Sets the distance of the relocated label in the `RelocateVertically` mode of `labelIntersectAction`. |

The `connectorLineStyle` property has the following settings:

- `color` - Sets the color of the connector line and the pointer. When not set, the border color of the label is used if the border width is greater than 0, and otherwise the font color of the theme is used.
- `width` - Sets the width of the connector line. The default value is 1.
- `opacity` - Sets the opacity of the connector line and the pointer. The default value is 1.

Set `width` to `0` or `color` to `'transparent'` to hide the connector line.

> Note: The `offset` property is not applicable when Smart Label is enabled. Smart Label automatically determines the final position of each label to avoid overlaps. The `offset` property applies only when `labelIntersectAction` is set to `RelocateVertically` for the stacked column and bar series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-data-label" %}

### Series overlap action

By default, Smart Label avoids only other labels and markers, so a label can sit over the line, area, column, or bar of a series. Use the `seriesOverlapAction` property in `smartLabelSettings` to control this behavior for each series.

- `None` (default) - Labels can be placed over series elements. The series elements are not considered, which keeps the placement fast.
- `Hide` - Labels also avoid the elements of all visible series and the trendlines. If a label has any free position, it moves there instead of being hidden. It is hidden only when no free position is available.

When `Hide` is used, the following elements act as obstacles for a label:

| Series type | Obstacle |
|---|---|
| Column, Bar, Waterfall, Histogram, Pareto, Bubble, Candle, and BoxAndWhisker | The bounds of each point of the other series. The own column, bar, bubble, candle, or box of the label is not an obstacle. |
| Line, Spline, StepLine, MultiColoredLine, and stacking line types | The rendered line, including the line of its own series. |
| Area types | The filled area of other series, and the outline of every area, including its own. The own area fill of the label is not an obstacle. |
| Trendlines | The rendered trendline paths. |

When labels from different series overlap, the label of the earlier series keeps its position, and the labels of later series move around it. A label that is moved away from its point is joined to the point by a connector line.

> Note: Series elements are detected from the rendered SVG paths. In canvas rendering mode, `Hide` behaves like `None`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/smart-data-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/smart-data-label" %}

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
