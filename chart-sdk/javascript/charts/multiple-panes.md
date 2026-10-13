---
layout: post
title: Multiple panes in JavaScript Charts | Syncfusion
description: Learn here all about Multiple panes in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Multiple panes in JavaScript Charts

The Chart area can be divided into multiple panes by configuring rows and columns. Each pane can display a related dataset with its own axis while remaining within the same Chart container.

Rows divide the Chart area into vertically stacked panes, while columns divide it into horizontally arranged panes. Associate a series with a pane by assigning the series to a named axis through the `xAxisName` or `yAxisName` property.


## Rows

Use the [rows](https://ej2.syncfusion.com/javascript/documentation/api/chart/row) collection to divide the Chart area into vertically stacked rows.

- Use the [height](https://ej2.syncfusion.com/javascript/documentation/api/chart/row#height) property to specify the height of each row in pixels or as a percentage.
- Use the [rowIndex](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#rowindex) property to associate a vertical axis with a row. The index is zero-based and must correspond to an entry in the `rows` collection.
- Use the [border](https://ej2.syncfusion.com/javascript/documentation/api/chart/row#border) property to customize the separator line of a row.
- Use the series `yAxisName` property to bind a series to the named vertical axis assigned to the required row.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs78/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs78/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs78" %}

### Span an axis across rows

Use the [span](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#span) property to span a vertical axis across multiple rows, starting from the row specified by `rowIndex`. Ensure that the span does not exceed the number of available rows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs79/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs79/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs79" %}

## Columns

Use the [columns](https://ej2.syncfusion.com/javascript/documentation/api/chart/column) collection to divide the Chart area into horizontally arranged columns.

- Use the [width](https://ej2.syncfusion.com/javascript/documentation/api/chart/column#width) property to specify the width of each column in pixels or as a percentage.
- Use the [columnIndex](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#columnindex) property to associate a horizontal axis with a column. The index is zero-based and must correspond to an entry in the `columns` collection.
- Use the [border](https://ej2.syncfusion.com/javascript/documentation/api/chart/column#border) property to customize the separator line of a column.
- Use the series `xAxisName` property to bind a series to the named horizontal axis assigned to the required column.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs80/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs80/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs80" %}

### Span an axis across columns

Use the [span](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis#span) property to span a horizontal axis across multiple columns, starting from the column specified by `columnIndex`. Ensure that the span does not exceed the number of available columns.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs81/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/axis-cs81/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/axis-cs81" %}

## See also

- [Multiple axes](./axis-customization#multiple-axis)
- [Axis customization](./axis-customization)
- [Row API](https://ej2.syncfusion.com/javascript/documentation/api/chart/row)
- [Column API](https://ej2.syncfusion.com/javascript/documentation/api/chart/column)
- [Axis API](https://ej2.syncfusion.com/javascript/documentation/api/chart/axis)