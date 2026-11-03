---
layout: post
title: How to customize legend shapes in TypeScript Charts | Syncfusion
description: Learn here all about Legend customization in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to customize legend shapes in TypeScript Charts

Use the Chart [`legendRender`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#legendrender) event to customize each legend item before it is rendered. Set `args.shape` to a supported legend shape according to the related series name or index.

## Customize each legend item

The `legendRender` event provides information about the legend item being rendered. This example checks `args.text` and assigns a different shape to each series.

```javascript
legendRender: function (args) {
    if (args.text === 'Renewable') {
        args.shape = 'Circle';
    } else if (args.text === 'Non-Renewable') {
        args.shape = 'Triangle';
    }
}
```

Supported values include `Circle`, `Rectangle`, `Triangle`, `Diamond`, `Cross`, `HorizontalLine`, `VerticalLine`, `Pentagon`, `InvertedTriangle`, `SeriesType`, and `Image`.

## Complete example

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/how-to-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/how-to-cs11" %}

## Event and configuration notes

- `args.text` contains the legend label associated with the current item.
- `args.shape` controls the symbol rendered beside the legend text.
- Series `name` supplies the default legend text for Cartesian Chart series.
- Matching by text is simple but can be ambiguous when multiple series share the same name; use series information exposed by the current event arguments when unique identification is required.
- Setting a series `legendShape` configures that series directly; use `legendRender` when the shape must be decided dynamically at render time.
- `legendSettings` controls overall legend layout, position, alignment, paging, dimensions, accessibility, and appearance.

## Troubleshooting

- If the shape does not change, verify that `legendRender` is configured on the Chart and that `args.text` exactly matches the series name.
- If the legend is missing, verify that `legendSettings.visible` is `true`.
- If a shape is not rendered, verify that the assigned value is supported by the installed EJ2 version.
- If the wrong item receives a shape, avoid duplicate series names or identify the series through more specific event data.

## See also

- [Legend](../legend)
- [LegendShape API](https://ej2.syncfusion.com/documentation/api/chart/legendshape)
- [LegendSettings API](https://ej2.syncfusion.com/documentation/api/chart/legendsettings)
- [Getting started](../es5-getting-started)