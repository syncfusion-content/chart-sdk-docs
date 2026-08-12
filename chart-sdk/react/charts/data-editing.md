---
layout: post
title: Data Editing in React Charts | Syncfusion
description: Learn how to enable interactive data editing in Syncfusion React Charts so users can drag and drop chart points to update values within a configured range.
control: Data editing 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

<!-- markdownlint-disable MD036 -->

# Data Editing in React Charts

## Enable Data Editing

Data editing allows users to modify chart data points interactively by dragging and dropping the rendered points. This functionality is enabled by injecting the `DataEditing` module into the chart `services`, which adds drag-and-drop support for data points.
Once enabled, the position or value of a data point can be changed dynamically based on its `y` value. To activate data editing, set the `enable` property to **true** in the drag settings of the corresponding series.
In addition, the following properties can be used to customize the data editing behavior and appearance:
- Use the `fill` property to set the color of the editable data points.
- Use the `minY` and `maxY` properties to define the minimum and maximum allowable range for editing the data points.
These options help control both the visual feedback and the valid value range while editing data directly on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/user-interaction/data-editing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/user-interaction/data-editing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/user-interaction/data-editing-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/user-interaction/data-editing-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/user-interaction/data-editing-cs1" %}
