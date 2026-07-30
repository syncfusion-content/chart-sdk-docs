---
layout: post
title: Drilldown with label in JavaScript Treemap control | Syncfusion
description: Learn here all about Drilldown with label in Syncfusion JavaScript Treemap control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Drilldown with label 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Drilldown with label in JavaScript Treemap control

Yon can add a label template as <div> element to the tree map control when using the label template. To add a label template to the tree map control, you have to hide another labels by setting the `showLabels` property to false in `leafItemSettings` to show only the label template.

To add label template to tree map drilldown, follow the given steps:

**Step 1**:

Create a tree map control and enable the drill-down option.

```javascript
import { TreeMap, IDrillStartEventArgs } from '@syncfusion/ej2-treemap';
import { CarSales } from './datasource';

let treemap: TreeMap = new TreeMap({
  dataSource: CarSales,
  enableDrillDown: true,
  weightValuePath: 'Sales',
  palette: ["white"],
  levels: [
    {
      groupPath: 'Continent',
      border: { width: 0.5, color: 'black' }
    },
    {
      groupPath: 'Company',
      border: { width: 0.5, color: 'black' }
    },
  ]
}, '#container');
```

**Step 2**:

Add the label template in the `leafItemSettings` options, and then set the `showLabels` property to false to hide another labels and show only label template.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/how-to/label-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/how-to/label-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/how-to/label-template-cs1" %}