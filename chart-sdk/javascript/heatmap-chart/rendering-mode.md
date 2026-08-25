---
layout: post
title: Rendering mode in JavaScript Heatmap chart control | Syncfusion
description: Learn here all about Rendering mode in Syncfusion JavaScript Heatmap chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Rendering mode 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Rendering mode in JavaScript Heatmap chart control

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by
setting the [renderingMode](../api/heatmap/#renderingmode) property as **Auto**.

> If the `Auto` mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a `Canvas` mode; Otherwise, the heat map will be rendered in a `SVG` mode.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/rendering-mode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/rendering-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/rendering-mode-cs1" %}
