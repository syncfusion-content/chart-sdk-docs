---
layout: post
title: Gauge dimensions in TypeScript Circular gauge control | Syncfusion
description: Learn here all about Gauge dimensions in Syncfusion TypeScript Circular gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge dimensions 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---


# Gauge dimensions in TypeScript Circular gauge control

## Size for Container

Circular gauge can render to its container size. You can set the size via inline or CSS as demonstrated below.

  ```
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
  ```

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs1" %}

## Size for Circular Gauge

You can also set size for the gauge directly through [`width`](../api/circular-gauge/#width-string) and [`height`](../api/circular-gauge/#height-string) properties.

**In Pixel**

You can set the size of the gauge in pixel as demonstrated below.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs2" %}

**In Percentage**

By setting value in percentage, gauge gets its dimension with respect to its container. For example, when the height is ‘50%’, gauge renders to half of the container height.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/gauge-dimensions-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.