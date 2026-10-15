---
layout: post
title: Logarithmic axis in TypeScript Charts | Syncfusion
description: Learn here all about Logarithmic axis in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Logarithmic axis in TypeScript Charts

<!-- markdownlint-disable MD033 -->

The logarithmic axis uses a logarithmic scale and is particularly useful for visualizing data that spans a wide range of values. It effectively represents datasets that include both very small values (for example, 10<sup>-6</sup>) and very large values (for example, 10<sup>6</sup>) within the same chart, improving readability and comparison.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs74/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs74/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs74" %}

>Note: To use log axis, we need to inject `Logarithmic` using method `Chart.Inject(Logarithmic)` and set the [`valueType`](../api/chart/axis#valuetype-string) of axis to `Logarithmic`.

## Range

The range of the logarithmic axis is calculated automatically based on the provided data. This automatic calculation ensures that all data points are visible within the chart area. The axis range can also be customized explicitly using the [`minimum`](https://ej2.syncfusion.com/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/documentation/api/chart/axis#interval) properties.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs75/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs75/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs75" %}

## Logarithmic Base

The logarithmic base of the axis can be customized using the [`logBase`](https://ej2.syncfusion.com/documentation/api/chart/axis#logbase-number) property. This property determines how the axis values are distributed along the scale. The default value is `10`. 

For example, when the logarithmic base is set to `5`, the axis values follow the sequence 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, and so on.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs76/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs76/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs76" %}

## Logarithmic Interval

The spacing between logarithmic axis labels can be controlled using the [`interval`](https://ej2.syncfusion.com/documentation/api/chart/axis#interval) property. This property defines the step size between consecutive logarithmic values.

For example, when the logarithmic base is `10` and the interval is `2`, the axis labels are placed every two exponents (for example, 10<sup>0</sup>, 10<sup>2</sup>, 10<sup>4</sup>, 10<sup>6</sup>). The default value of the interval is `1`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs77/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs77/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs77" %}

## See also

* [Numeric axis in JavaScript Charts](./numeric-axis)
* [Category axis in JavaScript Charts](./category-axis)
* [Axis customization in JavaScript Charts](./axis-customization)