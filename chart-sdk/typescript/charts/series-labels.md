---
layout: post
title: Series label in TypeScript Chart control | Syncfusion
description: Learn here all about Series label in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Series label 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Series label in TypeScript Chart control

The series label displays the name of each series inline, positioned near the end of the series path or the last visible data point. This helps identify each series without referring to the legend.

## Overview

Enable series labels using the [`labelSettings`](../api/chart/seriesModel#labelsettings) property within the series configuration. Set the [`visible`](../api/chart/seriesLabelSettingsModel#visible) property to **true** to display the label.

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

## Customization

Customize the appearance of series labels using the following properties:

* [`text`](../api/chart/seriesLabelSettingsModel#text) – Custom text for the label. Defaults to the series name.
* [`font`](../api/chart/seriesLabelSettingsModel#font) – Font customization options including color, size, family, and weight.
* [`background`](../api/chart/seriesLabelSettingsModel#background) – Background color of the label.
* [`border`](../api/chart/seriesLabelSettingsModel#border) – Border width and color.
* [`opacity`](../api/chart/seriesLabelSettingsModel#opacity) – Label transparency (default: 1).
* [`showOverlapText`](../api/chart/seriesLabelSettingsModel#showOverlapText) – When **false**, overlapping labels are hidden.

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

## See also

* [Data labels](./data-labels.md)
* [Legend](./legend.md)
