---
layout: post
title: Internationalization in JavaScript Chart control | Syncfusion
description: Learn here all about Internationalization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Internationalization in JavaScript Chart control

Chart provides support for internationalization for the following elements:

- Data label
- Axis label
- Tooltip

For more information about number and date formatting, see the internationalization guide: [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales. Use the internationalization library to localize numbers, dates, and times in the Chart component, for example by using the axis `labelFormat` property.

**Numeric Format**

The example below globalizes axis, point, and tooltip labels to the EUR currency format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/internationalization-cs1" %}