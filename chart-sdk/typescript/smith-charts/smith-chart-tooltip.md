---
layout: post
title: Smith chart tooltip in TypeScript Smithchart control | Syncfusion
description: Learn here all about Smith chart tooltip in Syncfusion TypeScript Smithchart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smith chart tooltip 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Smith chart tooltip in TypeScript Smithchart control

Smithchart will display details about the points through tooltip, when the mouse is moved over the point. By default, tooltip is disabled. To enable the tooltip for smithchart, you need to import and inject TooltipRender module from chart. And also set the property visible as true, in tooltip settings. You can customize the tooltip's visibility and appearance differently each series in the smithchart.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/smith-chart/smithchart-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/smith-chart/smithchart-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/smith-chart/smithchart-tooltip-cs1" %}