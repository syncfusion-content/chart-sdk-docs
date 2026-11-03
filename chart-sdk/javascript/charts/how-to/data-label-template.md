---
layout: post
title: How to use a data label template in JavaScript Charts | Syncfusion
description: Learn here all about Data label template in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to use a data label template in JavaScript Charts

Use a data label template to render custom HTML for each data point. Map an additional field from the series `dataSource` through `marker.dataLabel.name`, and assign the template element selector to `marker.dataLabel.template`.

## Define the template

Add the template element to the HTML page before `index.js` runs. The template can access the mapped label field through `${point.text}` and the point value through `${point.y}`.

```html
<script id="index" type="text/x-template">
    <div id='templateWrap' style="background-color: ${point.text}; border-radius: 3px;"><span>${point.y}</span></div>
</script>
```

In this example, `point.text` contains the value mapped through `marker.dataLabel.name`. Because the value is applied as a CSS color, the mapped data must contain a valid CSS color value.

## Bind the template to the data label

Set `marker.dataLabel.visible` to `true`, map the `color` field through `name`, and assign the template selector to `template`.

```javascript
marker: {
    visible: true,
    dataLabel: {
        visible: true,
        name: 'color',
        template: '#index'
    }
}
```

The field mapped through `name` supplies the custom label text exposed as `point.text`. The `xName` and `yName` properties continue to map the point's X and Y values.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/datalabel-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/datalabel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/datalabel-cs1" %}

## Troubleshooting

- If the template is not displayed, verify that `marker.dataLabel.visible` is `true` and that the template selector matches an existing element ID.
- If `point.text` is empty, verify that `marker.dataLabel.name` matches a field in every data-source object.
- If the background color is not applied, verify that the mapped field contains a valid CSS color value.
- If `${point.y}` is empty, verify that `yName` matches the numeric value field in the data source.

## See also

- [Data labels](../data-labels)
- [Markers](../data-markers)
- [Series API](https://ej2.syncfusion.com/javascript/documentation/api/chart/series)
- [Getting started](../es5-getting-started)
