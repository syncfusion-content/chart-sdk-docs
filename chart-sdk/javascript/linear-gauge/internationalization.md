---
layout: post
title: Internationalization in JavaScript Linear gauge control | Syncfusion
description: Learn here all about Internationalization in Syncfusion JavaScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Internationalization in JavaScript Linear gauge control

Globalization is the process of designing and developing a component that works in different cultures. Internationalization is used to globalize the number content in Linear Gauge component using [`format`](../api/linear-gauge/label/#format) property in Linear Gauge component. It has static text on some features such as

* Axis label
* Tooltip

The static text on above features can be changed to any culture such as Arabic, Deutsch and French. To know more about the globalization in JavaScript components, refer [here](https://ej2.syncfusion.com/documentation/common/internationalization/)

## Numeric Format

The text in axis labels and tooltip can be displayed in the numeric format such as currency, percentage and so on. To know more about the numeric formats in axis labels, refer [here](axis/#displaying-numeric-format-in-labels). In the below example, the axis label is displayed in the currency format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/getting-started-cs1" %}