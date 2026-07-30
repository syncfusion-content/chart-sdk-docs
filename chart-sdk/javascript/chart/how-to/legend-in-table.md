---
layout: post
title: Legend in table in JavaScript Chart control | Syncfusion
description: Learn here all about Legend in table in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend in table 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Legend in table in JavaScript Chart control

The `annotation` property is used to add legend in table and the `multiLevelLabels` property is used to customize the axis label in table format.

To add legend in table with x-axis labels, follow the given steps:

**Step 1**:

Initialize the custom elements using the `annotation` property.

Create table and rectangle shapes in the html page and set this to the `content` property of annotation.

By setting `coordinateUnits` value to `pixel` in annotation object, you can place the legend in chart based on pixel values.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-table-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-table-cs1" %}