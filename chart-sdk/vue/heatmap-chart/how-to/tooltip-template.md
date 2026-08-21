---
layout: post
title: How to create a table in tooltip in Vue HeatMap Chart | Syncfusion
description: Display a table inside the tooltip of the Syncfusion Vue HeatMap Chart control by initializing a template element and assigning its id to the template property.
control: Tooltip template 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to create a table in tooltip in Vue HeatMap Chart

You can show a tooltip as a table using the `template` property in `tooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**:

Initialize the tooltip template div as shown in the following html page.

**Step 2**:

Set the element id to the `template` property in `tooltipSettings` to show the tooltip template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/how-to-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/heatmap-chart/how-to-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/heatmap-chart/how-to-cs2" %}