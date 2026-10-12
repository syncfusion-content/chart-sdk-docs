---
layout: post
title: Axis labels in JavaScript Charts | Syncfusion
description: Learn here all about Axis labels in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Axis labels in JavaScript Charts

This guide demonstrates how to configure and customize axis labels in Syncfusion JavaScript Charts, including label positioning, overlap handling, multi-level labels, and advanced formatting options.

## Smart axis labels

When axis labels overlap due to limited space or dense data points, the [`labelIntersectAction`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#labelintersectaction) property can be used to control how the labels are rendered. This helps improve readability by automatically adjusting label visibility or orientation. The supported values are `None`, `Hide`, `Rotate45`, `Rotate90`, `Rotate45WithTrim`, `Rotate90WithTrim`, `Wrap`, `MultipleRows`, and `Trim`. The default value is `None`.

**Label Handling Options:**
- `None`: No action (displays all labels as-is)
- `Hide`: Hides overlapping labels for clarity
- `Rotate45`: Rotates labels 45 degrees
- `Rotate90`: Rotates labels vertically (90 degrees)
- `Rotate45WithTrim`: Rotates 45 degrees and trims long text
- `Rotate90WithTrim`: Rotates vertically and trims long text
- `Wrap`: Wraps text to multiple lines
- `MultipleRows`: Distributes labels across multiple rows
- `Trim`: Truncates text without rotation

When setting `labelIntersectAction` as `Hide`, overlapping labels are hidden to avoid visual clutter.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs1" %}

When setting `labelIntersectAction` as `Rotate45`, the labels are rotated by 45 degrees to reduce overlap.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs2" %}

When setting `labelIntersectAction` as `Rotate90`, the labels are rotated vertically to maximize space utilization.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs3" %}

When setting `labelIntersectAction` as `Rotate45WithTrim`, the labels are trimmed when the available space is insufficient and rotated by 45 degrees.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs100/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs100/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs100" %}

When setting `labelIntersectAction` as `Rotate90WithTrim`, the labels are trimmed when the available space is insufficient and rotated vertically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs101/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs101/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs101" %}

## Axis label positioning

By default, axis labels are positioned `Outside` the axis line using the `labelPosition` property. Labels can also be placed `Inside` the axis line, which is useful when optimizing space within the chart area. Supported values are `Inside` and `Outside` (default: `Outside`).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs4" %}

## Multilevel labels

Multiple levels of labels can be displayed on an axis using the `multiLevelLabels` property. This feature is useful for grouping related categories and improving data interpretation. Each multilevel label level can be independently configured with the following options:

• **Categories**: Define the range and content of multilevel labels
• **Overflow**: Control text overflow behavior (trim or wrap)
• **Alignment**: Position labels relative to the axis
• **Text style**: Customize font, color, and text properties
• **Border**: Customize border appearance around label groups

> **Note**: To use the multilevel label feature, inject `MultiLevelLabel` using `Chart.Inject(MultiLevelLabel)` method before creating the chart instance.

### Categories

Using the categories property, the `start`, `end`, `text`, and `maximumTextWidth` values of multilevel labels can be configured to define the label range and content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs5" %}

### Overflow

Using the `overflow` property, multilevel labels can be configured to either `Trim` or `Wrap` when the text exceeds the available space. Default value is `Wrap`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs6" %}

### Alignment

The `alignment` property provides options to position multilevel labels at `Far`, `Center`, or `Near` relative to the axis. Default value is `Center`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs7" %}

### Text customization

The `textStyle` property of multilevel labels provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs8" %}

### Border customization

Using the `border` property, the `width`, `color`, and `type` of the multilevel label border can be customized. The supported border types are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder`, and `CurlyBrace`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs9" %}

## Edge label placement

Labels with long text at the edges of an axis may appear partially outside the chart area. To avoid this, use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#edgelabelplacement) property in the axis. By default, the property is set to **Shift**, ensuring that labels are repositioned inside the chart area to prevent overlap.

**Supported values:**
- `Shift`: Moves edge labels inside the chart area (default)
- `Hide`: Hides edge labels that extend outside the chart area
- `None`: No action will be performed on edge labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs10" %}

## Sorting

## Sorting

The chart data source can be sorted using the `sort` utility before it is assigned to the series. In this example, use the drop-down list to select the sorting mode:

- Select `X` to sort the data by the `x` category field.
- Select `Y` to sort the data by the `car`, `trucks`, `bike`, and `cycle` value fields.
- Use the **Descending** option to control the sort order. When selected, the data is sorted in descending order; otherwise, it is sorted in ascending order.

After sorting, the updated data source is assigned to all the stacked column series, and the `refresh` method is called to render the chart with the updated order.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs11" %}

## Label customization

The [`labelStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#labelstyle) property of an axis provides options to customize the `color`, `font-family`, `font-size`, and `font-weight` of axis labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs12" %}

## Customizing specific axis labels

Specific axis label text can be customized using the `axisLabelRender` event, which allows conditional formatting or dynamic text updates during label rendering.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs13" %}

## Line break support

The line break feature is used to display long axis label text across multiple lines. In the following example, the `x` value in the data source contains long text, which is split into two lines using the `<br>` tag.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs14" %}

## Maximum labels

The `maximumLabels` property specifies the maximum number of axis labels to render per 100 pixels of the axis. It helps control label density based on the available axis size.

**Priority:**

- When `minimum`, `maximum`, and `interval` are specified along with `maximumLabels`, the explicitly configured axis range and interval take priority.
- When the axis range and interval are not explicitly specified, the label count is calculated based on the `maximumLabels` value and the axis length.
- **Recommended:** Use `maximumLabels` to automatically control label density based on the available space. Use `minimum`, `maximum`, and `interval` when precise control over the axis range and label interval is required.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs15" %}

## Axis label template

The axis label template allows axis labels to be customized using HTML content. This enables conditional styling and the inclusion of dynamic elements such as icons, images, or additional contextual data. This customization is enabled by setting the template content in the [`labelTemplate`](https://ej2.syncfusion.com/documentation/api/chart/axismodel#labelTemplate) property of the `AxisModel`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs99/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs99/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs99" %}

## See Also

* [Remove Duplicate X-Axis Labels in Stacked Charts](https://support.syncfusion.com/kb/article/21504/how-to-remove-duplicate-x-axis-labels-in-stacked-charts-using-javascript)
* [Format Axis Labels in Billions](https://support.syncfusion.com/kb/article/21518/how-to-format-axis-labels-in-billions-using-javascript-chart)