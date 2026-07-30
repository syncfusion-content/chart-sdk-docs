---
layout: post
title: Linear gauge dimensions in JavaScript Linear gauge control | Syncfusion
description: Learn here all about Linear gauge dimensions in Syncfusion JavaScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Linear gauge dimensions 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Linear gauge dimensions in JavaScript Linear gauge control

## Size for Linear Gauge

The height and width of the Linear Gauge can be set using the [`width`](https://ej2.syncfusion.com/documentation/api/linear-gauge/#width) and [`height`](https://ej2.syncfusion.com/documentation/api/linear-gauge/#height) properties in Linear Gauge.

### In Pixel

The size of the Linear Gauge can be set in pixel as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-dimensions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-dimensions-cs1" %}

### In Percentage

By setting value in percentage, Linear Gauge receives its dimension matching to its parent. For example, when the height is set as **50%**, Linear Gauge renders to half of the parent height. The Linear Gauge will be responsive when the width is set as **100%**.

```
    <div id='container'>
        <div id='element' style="width:1000px; height:600px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-dimensions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/lineargauge-dimensions-cs2" %}

>Note: When the component's size is not specified, the height will be **450px** and the width will be the same as the parent element's width.
