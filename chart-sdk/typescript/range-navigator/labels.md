---
layout: post
title: Labels in TypeScript Range Navigator | Syncfusion
description: Learn here all about Labels in Syncfusion TypeScript Range Navigator of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range Navigator 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Labels in TypeScript Range Navigator

## Multilevel labels

The `labelIntersectAction` property is used to avoid overlapping of labels. The following code sample shows the setting of `labelIntersectAction` property to **Hide**.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/range-selector/axis-cs13" %}

## Grouping

The second level axis labels can be grouped using “groupBy” property with the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/range-selector/axis-cs14" %}

## Smart labels

The `labelIntersectAction` property is used to avoid overlapping of labels. The following code sample shows the setting of `labelIntersectAction` property to **Hide**.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/range-selector/axis-cs15" %}

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the `labelPosition` property.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/range-selector/axis-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/range-selector/axis-cs16" %}

## Labels customization

The font size, color, family, etc. can be customized using the `labelStyle` setting.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/range-selector/lightweight-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/range-selector/lightweight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/range-selector/lightweight-cs1" %}

## Allow decimals

The [`allowDecimals`](https://ej2.syncfusion.com/documentation/api/range-navigator/index-default#allowDecimals) property determines whether the range navigator can display decimal values on a numeric scale. The default value is `true`.

* When `true` (default), the range navigator can display decimal intervals and labels when required.
* When `false`, the range navigator displays only whole-number intervals and labels.
* This property applies only when the [`valueType`](https://ej2.syncfusion.com/documentation/api/range-navigator/index-default#valuetype) is set to `Double` (numeric). It has no effect on `DateTime` or `Logarithmic` value types.

Use `allowDecimals: false` when the selected scale represents whole-number values, such as counts of people, orders, tickets, or products, where labels such as 1.5 are meaningless.

Set the property directly on the Range Navigator component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/range-selector/allow-decimals/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/range-selector/allow-decimals/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/range-selector/allow-decimals" %}