---
layout: post
title: Chart dimensions in JavaScript Chart control | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart dimensions 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Chart dimensions in JavaScript Chart control

## Size for Container

The chart can render to its container size. Set the size via inline styles or CSS as shown below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs1" %}
<!-- markdownlint-disable MD036 -->

## Size for Chart

<!-- markdownlint-disable MD036 -->

Set the chart size directly using the [`width`](../api/chart#width-string) and [`height`](../api/chart#height-string) properties.

**In Pixel**

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs2" %}

**In Percentage**

When percentage values are used, the chart dimensions are relative to the container. For example, a height of `50%` renders the chart to half the container height.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-dimensions-cs3" %}

> Note: When you do not specify the size, it takes `450px` as the height and window size as its width.
> Note: When no size is specified, the chart defaults to a height of `450px` and uses the window width.