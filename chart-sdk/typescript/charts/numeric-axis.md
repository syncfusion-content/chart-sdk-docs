---
layout: post
title: Numeric axis in TypeScript Charts | Syncfusion
description: Learn here all about Numeric axis in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Numeric axis in TypeScript Charts

The [numeric axis](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-axis) represents continuous numeric values in a Chart. By default, the axis `valueType` is set to `Double`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs82/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs82/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs82" %}

## Range

The axis range is calculated automatically from the data. Use the [`minimum`](https://ej2.syncfusion.com/documentation/api/chart/axisModel#minimum), [`maximum`](https://ej2.syncfusion.com/documentation/api/chart/axisModel#maximum), and [`interval`](https://ej2.syncfusion.com/documentation/api/chart/axisModel#interval) properties to customize the visible range and the spacing between axis labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs83/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs83/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs83" %}

## Range padding

Use the [`rangePadding`](https://ej2.syncfusion.com/documentation/api/chart/axisModel#rangepadding) property to add space around the calculated minimum and maximum axis values. The supported values are `None`, `Round`, `Additional`, `Normal`, and `Auto`.

When `minimum` and `maximum` are explicitly configured, those values define the visible range and automatic range padding is not applied beyond them.

### None

`None` applies no padding. The calculated range starts and ends at the minimum and maximum data values.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs84/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs84/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs84" %}

### Round

`Round` rounds the calculated minimum down and the calculated maximum up to values aligned with the axis interval. For example, with an interval of `1`, a minimum value of `3.5` is rounded down to `3`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs85/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs85/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs85" %}

### Additional

`Additional` adds one interval before the calculated minimum and one interval after the calculated maximum.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs86/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs86/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs86" %}

### Normal

`Normal` applies the standard numeric-axis padding calculated by the Chart to provide visual space around the minimum and maximum data values.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs87/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs87/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs87" %}

### Auto

`Auto` selects the padding automatically. A horizontal numeric axis uses `None`, while a vertical numeric axis uses `Normal`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs88/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs88/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs88" %}

## Label format

### Numeric label format

Use the [`labelFormat`](https://ej2.syncfusion.com/documentation/api/chart/axisModel#labelformat) property to format numeric axis labels. The property supports Globalize numeric formats, including numeric, percentage, and currency formats. Numeric and percentage output depends on the active culture configured through `setCulture`; currency output also uses the currency code configured through `setCurrencyCode`. The following examples assume the default `en-US` culture and `USD` currency.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs89/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs89/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs89" %}

The following table shows examples of commonly used numeric label formats and their corresponding outputs.

| Label value | Format | Result | Description |
|---:|:---:|---:|---|
| `1000` | `n1` | `1,000.0` | Numeric format with one decimal place |
| `1000` | `n2` | `1,000.00` | Numeric format with two decimal places |
| `1000` | `n3` | `1,000.000` | Numeric format with three decimal places |
| `0.01` | `p1` | `1.0%` | Percentage format with one decimal place |
| `0.01` | `p2` | `1.00%` | Percentage format with two decimal places |
| `0.01` | `p3` | `1.000%` | Percentage format with three decimal places |
| `1000` | `c1` | `$1,000.0` | Currency format with one decimal place |
| `1000` | `c2` | `$1,000.00` | Currency format with two decimal places |

> **Note:** Percentage formats expect fractional input values. For example, `0.2` is formatted as `20%`.

### Custom label format

Use the `{value}` placeholder to append units or symbols to numeric labels. For example, the format `{value}°C` displays the value `20` as `20°C`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs91/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs91/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs91" %}

### Grouping separator

Set the Chart [`useGroupingSeparator`](https://ej2.syncfusion.com/documentation/api/chart/chartModel#usegroupingseparator) property to `true` to separate groups of thousands in numeric axis labels. For example, `10000` is displayed as `10,000` in the `en-US` culture. The separator varies according to the active culture.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs90/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs90/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs90" %}

## See also

- [Axis labels](./axis-labels)
- [Axis customization](./axis-customization)
- [Logarithmic axis](./logarithmic-axis)
- [Internationalization](./internationalization)
- [Getting started](./getting-started)