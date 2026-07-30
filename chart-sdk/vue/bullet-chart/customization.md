---
layout: post
title: Customization in Vue Bullet chart component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Customization in Vue Bullet chart component

## Orientation

The Bullet Chart can be rendered in different orientations such as **Horizontal** or **Vertical** via the [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#orientation) property. By default, the Bullet Chart is rendered in the **Horizontal** orientation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs8" %}

## Right-to-left (RTL)

The Bullet Chart supports the right-to-left rendering that can be enabled by setting the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#enablertl) property to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs9" %}

## Animation

The actual and the target bar supports the linear animation via the [`animation`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#animation) setting. The speed and the delay are controlled using the `duration` and `delay` properties respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs10" %}

## Theme

The Bullet Chart supports different type of themes via the [`theme`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#theme) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/bullet-chart/bullet-chart-dimensions/container-cs11" %}