---
layout: post
title: How to prevent data labels for zero values in JavaScript Charts | Syncfusion
description: Learn here all about Prevent data label in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to prevent data labels for zero values in JavaScript Charts

Use the Chart [`textRender`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#textrender) event to cancel a data label before it is rendered. Check the numeric point value and set `args.cancel` to `true` when the value is zero. The event runs for each data label. 

## Enable data labels

Set `marker.dataLabel.visible` to `true`. Data labels are not displayed unless they are enabled for the series.

```javascript
marker: {
    visible: true,
    dataLabel: {
        visible: true
    }
}
```

## Cancel labels for zero values

Handle `textRender` at the Chart level and compare the mapped Y value with numeric zero.

```javascript
textRender: function(args) {
    args.cancel = args.point.y === 0;
},
```

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/how-to-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/how-to-cs15" %}

## Troubleshooting

- If zero labels remain visible, verify that `textRender` is configured on the Chart and that the Y field contains numeric zero.
- If no labels appear, verify that `marker.dataLabel.visible` is `true` and Data Label support is available in the loaded EJ2 ES5 bundle.
- If the data value is a formatted string, convert it to a number or compare the correct source field.
- If near-zero values remain visible, use an application-appropriate tolerance instead of strict equality.
- If the entire point disappears, verify that only `args.cancel` in `textRender` is changed and that the series data is not filtered.

## See also

- [Data labels](../data-labels)
- [Data markers](../data-markers)
- [TextRender API](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartmodel#textrender)
- [Chart events](../chart-events)
- [Getting started](../es5-getting-started)
