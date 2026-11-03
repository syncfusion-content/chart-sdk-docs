---
layout: post
title: How to create a dynamic Chart in JavaScript Charts | Syncfusion
description: Learn how to create and remove Syncfusion JavaScript Chart instances dynamically in response to button selections.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to create a dynamic Chart in JavaScript Charts

Use a native HTML button to create a unique Chart container and Chart instance for each selection. The number of rendered Charts increases with the button click count.

## Create a host container and controls

Add an **Add Chart** button, a **Remove Last Chart** button, a status element, and a container for dynamically created Charts. Use unique element IDs because each Chart instance must be attached to a separate host element.

## Create a Chart on button click

In the Add button handler:

1. Create a new `<div>` element.
2. Assign a unique ID based on a counter.
3. Append the new element to the host container.
4. Create an `ej.charts.Chart` instance and attach it to the new element.
5. Store the Chart instance so it can be destroyed later.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/dynamic-chart-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/dynamic-chart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/dynamic-chart-cs1" %}

## Troubleshooting

- If no Chart appears, verify that the host container exists and that the generated element ID is unique.
- If a dynamically created Chart is blank, verify that the host has measurable width and height.
- If removed Charts continue to consume memory, verify that `destroy()` is called before removing their elements.
- If repeated clicks create too many Charts, disable the Add button at an application-defined maximum.
- If only the data needs to change, update an existing series instead of creating additional Chart instances.

## See also

- [Dynamic data update](../dynamic-data-update)
- [Add or remove series](./add-series)
- [Working with data](../working-with-data)
- [Chart dimensions](../chart-dimensions)
- [Getting started](../es5-getting-started)