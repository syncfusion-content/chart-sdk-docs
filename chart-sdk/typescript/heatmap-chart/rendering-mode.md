---
layout: post
title: Rendering mode in TypeScript HeatMap Chart | Syncfusion
description: Switch the TypeScript HeatMap Chart rendering between SVG, Canvas, or automatic mode to optimize performance for large or small datasets.
platform: chart-sdk
control: Rendering mode 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Rendering Mode in TypeScript HeatMap Chart

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by
setting the [renderingMode](../api/heatmap#renderingmode) property as **Auto**.

> If the `Auto` mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a `Canvas` mode; Otherwise, the heat map will be rendered in a `SVG` mode.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/rendering-mode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/rendering-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/rendering-mode-cs1" %}
