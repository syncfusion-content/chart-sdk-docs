---
layout: post
title: Data label in Vue Bullet chart component | Syncfusion
description: Learn here all about Data label in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Data label 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Data label in Vue Bullet chart component

Data Labels are used to identify the value of actual bar in the Bullet Chart component. The Data Labels will be shown by specifying the [`dataLabel`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#datalabel) setting's [`enable`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletDataLabelModel/#enable) property to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs13" %}

## Data Label Customization

Data Labels color, opacity, font size, font family, font weight, and font style can be customized using the [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletDataLabelModel/#labelstyle).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs14" %}