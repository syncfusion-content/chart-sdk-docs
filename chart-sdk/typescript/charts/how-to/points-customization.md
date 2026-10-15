---
layout: post
title: How to customize points in in TypeScript Charts | Syncfusion
description: Learn how to apply SVG patterns or colors to individual points by using pointColorMapping in the Syncfusion TypeScript Chart control.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to customize points in in TypeScript Charts

Use the series `pointColorMapping` property to map a data-source field to the fill of each rendered point. The mapped field can contain a CSS color or an SVG pattern reference such as `url(#chess)`. The documented pattern example uses a Column series and maps a data field containing SVG pattern URLs. 

## Define the SVG patterns

Add the SVG `<defs>` and its `<pattern>` elements to the HTML document before the Chart script runs. Give each pattern a unique ID.

The SVG can have zero visual dimensions because only the pattern definitions are required. Do not use `display: none` on the SVG because some browsers may not resolve paint-server references from a non-rendered SVG element.

```html
<svg class="pattern-definitions" aria-hidden="true">
    <defs>
        <pattern id="chess" x="0" y="0" patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill="#fff"></rect>
            <rect width="10" height="10" fill="#ed7d31"></rect>
            <rect x="10" y="10" width="10" height="10" fill="#ed7d31"></rect>
        </pattern>
    </defs>
</svg>
```

## Map patterns to data points

Add a field such as `pattern` to every data object and store a matching SVG URL reference in that field. Set `pointColorMapping` to the field name.

```javascript
series: [{
    type: 'Column',
    dataSource: chartData,
    xName: 'x',
    yName: 'y',
    pointColorMapping: 'color'
}]
```

The Chart reads `dataSource[index].color` for each point. Values may be CSS colors or SVG references such as `url(#chess)`. 

## Complete example

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/pattern-point-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/pattern-point-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/pattern-point-cs1" %}


## Troubleshooting

- If all points use the same fill, verify that `pointColorMapping` exactly matches the mapped field name.
- If a pattern is missing, verify that the mapped URL and SVG pattern ID match, such as `url(#chess)` and `id="chess"`.
- If patterns fail in a browser, keep the SVG definitions in the document and avoid `display: none`.
- If a point is transparent, verify that its mapped field is present and contains a valid CSS color or SVG reference.
- If the pattern is not applied to a Line or Area series, use a point-based series type or customize markers instead.

## See also

- [Point color mapping](../working-with-data#point-color-mapping)
- [Column Chart](../chart-types/column)
- [Data markers](../data-markers)
- [Series API](https://ej2.syncfusion.com/documentation/api/chart/series)
- [Getting started](../getting-started)