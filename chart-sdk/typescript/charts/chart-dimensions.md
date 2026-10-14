---
layout: post
title: Chart dimensions in TypeScript Charts | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Chart dimensions in TypeScript Charts

The chart can be sized using the container element or by explicitly setting width and height properties. Choose the approach that best fits your layout requirements.

## Size for the Container

The chart renders to fit its container size. Set the size via inline styles or CSS as shown below.

```html
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs1" %}

## Size for the Chart

<!-- markdownlint-disable MD036 -->

Set the chart size directly using the [`width`](https://ej2.syncfusion.com/documentation/api/chart#width) and [`height`](https://ej2.syncfusion.com/documentation/api/chart#height) properties.

### In pixel

You can set the size of chart in pixel as demonstrated below.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs2" %}

### In percentage

When percentage values are used, the chart dimensions are relative to the container. For example, a height of `50%` renders the chart to half the container height. Percentage values are useful for creating responsive charts that adapt to the container size.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-dimensions-cs3" %}

> **Note:** When no size is specified, the chart defaults to a height of `450px` and uses the window width.