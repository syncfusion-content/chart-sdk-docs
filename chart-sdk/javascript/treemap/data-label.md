---
layout: post
title: Data label in JavaScript Treemap control | Syncfusion
description: Learn here all about Data label in Syncfusion JavaScript Treemap control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: TreeMap
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Data label in JavaScript Treemap control

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the `labelPath` of the `leafItemSettings`.

## Add labels

Labels display descriptive text directly on TreeMap items, providing immediate context without requiring a legend lookup. Labels are shown by default, but you can customize their visibility and appearance using the [`showLabels`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/leafitemsettingsmodel#showlabels) property in the [`leafItemSettings`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/leafitemsettingsmodel) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/getting-started-cs4" %}

## Format

Customize the labels for each item using the `labelFormat` property in the `leafItemSettings`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/datalabel-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/datalabel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/datalabel-cs1" %}

## Template

The template supports customizing labels of each leaf node using the `labelTemplate` property. It uses Essential<sup style="font-size:70%">&reg;</sup> JS2 template engine to render elements and the position of templates can be customize using the `templatePosition` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/datalabel-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/datalabel-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/datalabel-cs2" %}

## InterSectAction

When the label size in each item exceeds the actual size, use the `interSectAction` property in the `leafItemSettings` to customise the labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/datalabel-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/datalabel-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/datalabel-cs3" %}