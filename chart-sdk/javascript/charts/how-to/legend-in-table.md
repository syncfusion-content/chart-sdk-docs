---
layout: post
title: How to add a legend in a table in JavaScript Charts | Syncfusion
description: Learn here all about Legend in table in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to add a legend in a table in JavaScript Charts

Use Chart annotations to place a custom HTML legend beside table-style X-axis labels. Use `primaryXAxis.multiLevelLabels` to create grouped rows below the category labels. The documented Syncfusion approach combines annotations, HTML templates, and multi-level labels. 

## Configure table-style axis labels

Set the X-axis `valueType` to `Category` and `isIndexed` to `true` so repeated category values remain separate points. Define `multiLevelLabels` with rectangular borders to create grouped table rows.

Each multi-level category uses:

- `start`: Starting indexed-axis position.
- `end`: Ending indexed-axis position.
- `text`: Text displayed across the range.
- `border.type`: Border style used for the table cell.

## Add the custom legend

Create the legend as an HTML template and reference the template ID through annotation `content`. Set `coordinateUnits` to `Pixel` in `Chart` to position the template with Chart-relative pixel coordinates.

```javascript
annotations: [{
    content: '#templateWrap',
    coordinateUnits: 'Pixel',
    x: 120,
    y: 328
}]
```

Pixel-based coordinates depend on the Chart dimensions and margins. Recalculate the position after resizing, or place the table legend outside the Chart for a fully responsive layout.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-table-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-table-cs1" %}

## Positioning and responsive behavior

- `coordinateUnits: 'Pixel'` positions the annotation with pixel values; it does not follow axis values.
- The Chart bottom margin must reserve enough space for multi-level labels and the custom legend.
- Fixed Chart dimensions make the example predictable, but pixel coordinates must be recalculated for responsive Charts.
- Use a separate HTML table outside the Chart when the legend must participate in normal responsive document layout.

## Troubleshooting

- If the legend table is missing, verify that the annotation `content` selector matches the template ID.
- If the table overlaps axis labels, increase the bottom margin or adjust the annotation `x` and `y` coordinates.
- If grouped labels are incorrect, verify every `start` and `end` range against the indexed category positions.
- If repeated category labels collapse into one point, verify that `primaryXAxis.isIndexed` is `true`.

## See also

- [Multi-level labels](../multi-level-labels)
- [Chart annotations](../chart-annotations)
- [Legend](../legend)
- [ChartAnnotationSettings API](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartannotationsettings)
- [Getting started](../es5-getting-started)
