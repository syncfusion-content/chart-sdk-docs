---
layout: post
title: Labels in Angular Range Navigator | Syncfusion
description: Learn here all about Labels in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Labels 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Labels in Angular Range Navigator

## Multilevel labels

The multi-level labels for the Range Selector can be enabled by setting the [`enableGrouping`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#enablegrouping) property to **true**. This is restricted to the DateTime axis alone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/labels/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/labels/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/range-selector/labels/default-cs1" %}

## Grouping

The multi-level labels can be grouped using the [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#groupby) property with the following interval types:

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
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/labels/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/labels/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/range-selector/labels/default-cs2" %}

## Smart labels

The [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#labelintersectaction) property is used to avoid overlapping of labels. The following code sample shows the setting of [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#labelintersectaction) property to **Hide**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/axis/datetime-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/axis/datetime-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/range-selector/axis/datetime-cs4" %}

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#labelposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/axis/datetime-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/axis/datetime-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/range-selector/axis/datetime-cs5" %}

## Labels customization

The font size, color, family, etc. can be customized using the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator#labelstyle) setting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/lightweight/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/lightweight/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/range-selector/lightweight/default-cs1" %}

## Allow decimals

The [`allowDecimals`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/index-default#allowDecimals) property determines whether the range navigator can display decimal values on a numeric scale. The default value is `true`.

* When `true` (default), the range navigator can display decimal intervals and labels when required.
* When `false`, the range navigator displays only whole-number intervals and labels.
* This property applies only when the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/index-default#valuetype) is set to `Double` (numeric). It has no effect on `DateTime`, `DateTimeCategory`, or `Logarithmic` value types.

Use `allowDecimals` as `false` when the axis represents whole-number values, such as counts of people, orders, tickets, or products. This prevents fractional intervals and labels from being displayed, ensuring the axis shows only meaningful integer values.

Set the property directly on the Range Navigator control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/axis/allow-decimals/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/range-selector/axis/allow-decimals/src/main.ts %}
{% endhighlight %}
{% endtabs %}
 
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/range-selector/axis/allow-decimals" %}