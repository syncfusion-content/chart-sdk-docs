---
layout: post
title: How to create a table in TypeScript HeatMap Chart | Syncfusion
description: Build a custom table-style tooltip for the TypeScript HeatMap Chart using an HTML template bound to xValue, yValue, and value in the tooltipRender event.
platform: chart-sdk
control: Tooltip template 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to create a table in TypeScript HeatMap Chart

You can show a tooltip as a table using the `template` property in `tooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**:

Initialize the tooltip template div as shown in the following html page.

```
<script id="tooltipTemplate" type="text/x-template">
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><td bgcolor="#00FFFF">${xValue}:</td><td bgcolor="#00FFFF">${yValue}</td><td bgcolor="#00FFFF">${value}</td></tr>
        </table>
    </div>
</script>

```

**Step 2**:

Set the element id to the `template` property in `tooltipSettings` to show the tooltip template.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/how-to-cs2" %}
