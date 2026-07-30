---
layout: post
title: Internationalization in Vue Chart component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Internationalization in Vue Chart component

Chart provides support for internationalization for the following elements:

- Data label
- Axis label
- Tooltip

For more information about number and date formatting, see the internationalization guide: [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales. Use the internationalization library to localize numbers, dates, and times in the Chart component, for example by using the axis `labelFormat` property.

**Numeric Format**

The example below globalize axis, point, and tooltip labels to the EUR currency format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/number-format-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/number-format-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/charts/number-format-cs1" %}