---
layout: post
title: How to downsample data in JavaScript Chart | Syncfusion
description: Learn here all about Down sampling in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to down sample data in JavaScript Chart

Down sampling is the process of reducing the data rate. We have given a 2000 data points for chart. After applying down sampling algorithm, chart data points has been reduced  and rendered with 400 data points.

Down sampling data using the "Largest-Triangle-Three-Buckets algorithm"[`LTTB`](https://gist.github.com/FraserChapman/649f1aba28f6bc941d5c) which describes the point in the bucket that forms the largest triangle using the area of the triangles. This helps to reducing the number of points.

In Down sampling when we perform zooming, particular level of zoomed chart we can see the chart clearly with original data, so we can use original data for that level of zooming. This can be achieved by [`zoomComplete`](../../api/chart#zoomcomplete) event. Refer the below sample for down sampling with zooming feature.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-appearance-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-appearance-cs18" %}
**Before applying down sampling algorithm**
![Before applying down sampling algorithm](images/Before_downsampling.png)

**After applying down sampling algorithm**
![After applying down sampling algorithm](images/After_downsampling.png)
