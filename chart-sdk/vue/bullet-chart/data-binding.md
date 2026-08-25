---
layout: post
title: Data binding in Vue Bullet chart component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Data binding in Vue Bullet chart component

The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#datasource) property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the [`valueField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valuefield) and [`targetField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#targetfield) respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs12" %}