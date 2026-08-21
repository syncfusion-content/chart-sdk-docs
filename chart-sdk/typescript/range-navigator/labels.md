---
layout: post
title: Labels in TypeScript Range Selector | Syncfusion
description: Learn here all about Labels in Syncfusion TypeScript Range Selector of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Range Selector 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Labels in TypeScript Range Selector

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