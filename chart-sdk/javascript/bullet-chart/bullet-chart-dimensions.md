---
layout: post
title: Bullet chart dimensions in JavaScript Bullet chart control | Syncfusion
description: Learn here all about Bullet chart dimensions in Syncfusion JavaScript Bullet chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bullet chart dimensions 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Bullet chart dimensions in JavaScript Bullet chart control

## Size for Container

The size of the Bullet Chart is determined by the container size, and it can be changed inline or via CSS as following.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs1" %}

## Size for Bullet Chart

The `width` and `height` properties are used to adjust the size of the Bullet Chart.

### Pixel

Can set the size of the Bullet Chart in pixels as shown below.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs2" %}

### Percentage

By setting a value in percentage, the Bullet Chart gets its dimension with respect to its container. For example, when the height is **50%**, the Bullet Chart renders to half of the container’s height.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/bullet-chart/bullet-chart-dimensions-cs3" %}

>If the size is not specified, the Bullet Chart will be rendered with a height of **126px** and a width of the window.