---
layout: post
title: Internationalization in Angular Chart component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Internationalization in Angular Chart component

Chart provides support for internationalization for the following elements:

* Datalabel
* Axis label
* Tooltip

For more information about number and date formatting, see the internationalization guide: [Internationalization guide](https://ej2.syncfusion.com/angular/documentation/chart/internationalization/?no-cache=1).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales. Use the internationalization library to localize numbers, dates, and times in the Chart component (for example, with the axis `labelFormat` property or the data label `format`).

**Numeric format (currency example)**

**Numeric Format**

The example below globalize axis, point, and tooltip labels to the EUR currency format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/charts/number-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/charts/number-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/charts/number-format-cs1" %}