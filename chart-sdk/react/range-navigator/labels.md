---
layout: post
title: Labels in React Range Navigator | Syncfusion
description: Learn how to configure and customize labels in the Syncfusion React Range Navigator Component using labelFormat, labelStyle, and labelIntersectAction.
control: Labels
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Labels in React Range Navigator

## Multilevel labels

The multi-level labels for the Range Selector can be enabled by setting the [`enableGrouping`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#enablegrouping) property to **true**. This is restricted to the DateTime axis alone.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/range-selector/lightweight-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/range-selector/lightweight-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/range-selector/lightweight-cs1" %}

## Grouping

The multi-level labels can be grouped using the [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#groupby) property with the following interval types:

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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/range-selector/lightweight-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/range-selector/lightweight-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/range-selector/lightweight-cs2" %}

## Smart labels

The [`labelIntersectAction`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelintersectaction) property is used to avoid overlapping of labels. The following code sample shows the setting of [`labelIntersectAction`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelintersectaction) property to **Hide**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/range-selector/getting-started-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/range-selector/getting-started-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/range-selector/getting-started-cs22" %}

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelposition) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/range-selector/getting-started-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/range-selector/getting-started-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/range-selector/getting-started-cs23" %}

## Labels customization

The font size, color, family, etc. can be customized using the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelstyle) setting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/range-selector/lightweight-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/range-selector/lightweight-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/range-selector/lightweight-cs3" %}

## Allow decimals

The [`allowDecimals`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/index-default#allowDecimals) property determines whether the range navigator can display decimal values on a numeric scale. The default value is `true`.

* When `true` (default), the range navigator can display decimal intervals and labels when required.
* When `false`, the range navigator displays only whole-number intervals and labels.
* This property applies only when the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/index-default#valuetype) is set to `Double` (numeric). It has no effect on `DateTime` or `Logarithmic` value types.

Use `allowDecimals: false` when the selected scale represents whole-number values, such as counts of people, orders, tickets, or products, where labels such as 1.5 are meaningless.

Set the property directly on the Range Navigator component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/range-selector/allow-decimals/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/range-selector/allow-decimals/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/range-selector/allow-decimals" %}