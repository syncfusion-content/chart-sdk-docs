---
layout: post
title: Drilldown in JavaScript Treemap control | Syncfusion
description: Learn here all about Drilldown in Syncfusion JavaScript Treemap control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Drilldown 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Drilldown in JavaScript Treemap control

## Customize the header for treemap drilldown

Yon can add a header element as <div> and customize it to show the population of a particular country or continent on treemap drill-down.

To customize the header for treemap drill-down, follow the given steps:

**Step 1**:

Initialize the treemap and enable the drill-down option.

```javascript
import { TreeMap, ILoadedEventArgs, IDrillEndEventArgs, IDrillStartEventArgs } from '@syncfusion/ej2-treemap';
import { DrillDown } from './datasource';

// Initialize the tree map control
let treemap: TreeMap = new TreeMap({
    palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
    enableDrillDown: true,
    format: 'n',
    useGroupingSeparator: true,
    dataSource: DrillDown,
    weightValuePath: 'Population',
    tooltipSettings: {
        visible: true,
        format: '${Name} : ${Population}'
    },
    leafItemSettings: {
        labelPath: 'Name',
        showLabels: false,
        labelStyle: { size: '0px' },
        border: { color: 'black', width: 0.5 }
    },
    levels: [
        { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } },
        { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } },
        { groupPath: 'Region', showHeader: false, fill: '#336699', border: { color: 'black', width: 0.5 } },
    ],
});

// Render the initialized tree map
treemap.appendTo('#container');
```

**Step 2**:

Show the population of a particular continent in the treemap `loaded` event. In this event, you can get the header element.

```javascript
    loaded: function (args: ILoadedEventArgs) {
        let header: Element = document.getElementById('header');
        let population: number = 0;
        for (let i: number = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
            population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population
    }
```

**Step 3**:

Customize the population for drilled countries or states in the header element when drill-down the treemap. The `drillEnd` event will be triggered when treemap is drilled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/how-to/drill-down-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/how-to/drill-down-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/how-to/drill-down-cs1" %}