---
layout: post
title: Category axis in TypeScript Charts | Syncfusion
description: Learn here all about Category axis in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Category axis in TypeScript Charts

<!-- markdownlint-disable MD036 -->

The category axis is used to represent string-based values instead of numeric values. It is commonly used for displaying discrete categories such as names, labels, or text along an axis. Unlike numeric or datetime axes, the category axis treats data as text and positions them sequentially based on their order or index.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs61/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs61/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs61" %}

> Note: To use the category axis, inject `Category` module using `Chart.Inject(Category)` method and set the [`valueType`](https://ej2.syncfusion.com/documentation/api/chart/axis) property of the axis to `Category`.

## Labels Placement

By default, category labels are positioned between the axis tick marks. They can also be aligned directly on the ticks by using the [`labelPlacement`](https://ej2.syncfusion.com/documentation/api/chart/axis#labelplacement) property.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs62/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs62/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs62" %}

## Range

The visible range of the category axis can be customized by using the [`minimum`](https://ej2.syncfusion.com/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/documentation/api/chart/axis#interval) properties of the axis. These properties control the starting category, ending category, and spacing between category labels.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs63/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs63/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs63" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This behavior can be enabled by setting the [`isIndexed`](https://ej2.syncfusion.com/documentation/api/chart/axis#isindexed) property of the axis to **true**, which positions data points according to their index instead of their actual category values. This is useful when you want equal spacing between all data points regardless of category values.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs64/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/axis-cs64/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/axis-cs64" %}