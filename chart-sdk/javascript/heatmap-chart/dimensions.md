---
layout: post
title: Dimensions in JavaScript Heatmap chart control | Syncfusion
description: Learn here all about Dimensions in Syncfusion JavaScript Heatmap chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dimensions 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Dimensions in JavaScript Heatmap chart control

## Size for container

Heat map can be rendered to its container size. You can set the size through inline or CSS.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

## Size for heat map

You can  set the size of heat map directly by using the [width](../api/heatmap/#width) and [height](../api/heatmap/#height) properties.

## In Pixel

You can set the size for heat map in a pixel.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/dimensions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/dimensions-cs1" %}

## In percentage

By setting value in percentage, heat map gets its dimension with respect to its container. For example, when the height is ‘50%’, heat map rendered to half of the container height.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/dimensions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/dimensions-cs2" %}
