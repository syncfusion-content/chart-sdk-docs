---
layout: post
title: Data editing in TypeScript Chart control | Syncfusion
description: Learn here all about Data editing in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data editing 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

<!-- markdownlint-disable MD036 -->

# Data editing in TypeScript Chart control

## Enable Data Editing

Data editing allows users to modify chart data points interactively by dragging and dropping the rendered points. This functionality is enabled by injecting the `DataEditing` module into the chart provider, which adds drag-and-drop support for data points.

Once enabled, the position or value of a data point can be changed dynamically based on its `y` value. To activate data editing, set the `enable` property to **true** in the drag settings of the corresponding series.

In addition, the following properties can be used to customize the data editing behavior and appearance:

- Use the `fill` property to set the color of the editable data points.
- Use the `minY` and `maxY` properties to define the minimum and maximum allowable range for editing the data points.

These options help control both the visual feedback and the valid value range while editing data directly on the chart.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/user-interaction-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/user-interaction-cs9" %}