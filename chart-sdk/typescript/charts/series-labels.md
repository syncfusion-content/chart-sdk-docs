---
layout: post
title: Series labels in TypeScript Charts | Syncfusion
description: Learn here all about Series label in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Series labels in TypeScript Charts

Series labels display the name of each series directly within the Chart area, near the end of the series path or the last visible data point. This helps identify a series without repeatedly referring to the legend. Label placement depends on the rendered series type and the available space.

Series labels are supported for Line, Column, Area, Spline, and their stacked variants.

## Enable series labels

Use the series [`labelSettings`](https://ej2.syncfusion.com/documentation/api/chart/seriesmodel#labelsettings) property to configure an inline series label. Set [`visible`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#visible) to `true` to display the label. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/series-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/series-label/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/series-label/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/series-label" %}

> Note: To use the series label feature, inject the `SeriesLabel` module into the `services`.

## Customize series labels

Use the following properties in `labelSettings` to customize the content, appearance, and overlap behavior of a series label:

- [`text`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#text): Specifies custom label text. The default value is `null`; when no custom text is specified, the series name is displayed.
- [`font`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#font): Customizes the label text using properties such as `color`, `size`, `fontFamily`, `fontStyle`, `fontWeight`, and `opacity`.
- [`background`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#background): Specifies the label background color. The default value is `transparent`.
- [`border`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#border): Configures the label border using properties such as `color`, `width`, and `dashArray`. The default width is `0`.
- [`opacity`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#opacity): Specifies the opacity of the label. The default value is `1`.
- [`showOverlapText`](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettingsmodel#showoverlaptext): Determines whether the label is displayed when it overlaps another label or Chart element. The default value is `false`, which hides overlapping labels.

Set `showOverlapText` to `true` only when displaying every label is more important than avoiding overlap in a dense multi-series Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/series-label-customization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/series-label-customization/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/series-label-customization/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/series-label-customization" %}

Note: To use the series label feature, inject the `SeriesLabel` module into the `services`.

## Troubleshooting

- If a label is missing in a dense Chart, check whether it overlaps another label and set `showOverlapText` to `true` only when overlap is acceptable.
- If custom text is not displayed, verify that `labelSettings.text` is set on the intended series.

## See also

- [Series label settings API](https://ej2.syncfusion.com/documentation/api/chart/serieslabelsettings)
- [Data labels](./data-labels)
- [Legend](./legend)
- [Appearance](./appearance)
- [Getting started](./getting-started)