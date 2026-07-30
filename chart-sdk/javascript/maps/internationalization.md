---
layout: post
title: Internationalization in JavaScript Maps component | Syncfusion
description: Learn here all about Internationalization in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Internationalization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Internationalization in JavaScript Maps component

Internationalization enables the Maps component to display content in different cultures and locales, making it accessible to users worldwide. The Maps component supports internationalization for the following elements:

* Data label
* Tooltip

For more information about number and date formatters, refer to the [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization) section.

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a control that works in different cultures/locales. Internationalization library is used to globalize number, date, time values in Maps component using [`format`](../api/maps/mapsModel/format) property in the [`Maps`](../api/maps/mapsModel).

## Numeric format

The numeric formats such as currency, percentage and so on can be displayed in the tooltip and data labels of the Maps using the [`format`](../api/maps/mapsModel/format) property in the [`Maps`](../api/maps/mapsModel). In the below example, the tooltip is globalized to **German** culture. When setting the [`useGroupingSeparator`](../api/maps/mapsModel/usegroupingseparator) property as **true**, the numeric text in the Maps separates with the comma separator.

```ts
import { Maps, MapsTooltip } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { setCulture } from '@syncfusion/ej2-base';
setCulture('de');
Maps.Inject(MapsTooltip);
let maps: Maps = new Maps({
    format: 'c',
    useGroupingSeparator: true,
    layers: [
        {
            shapeData: world_map,
            dataSource: [
                { "Country": "China", "Membership": "Permanent", population: '38332521' },
                { "Country": "France", "Membership": "Permanent", population: '19651127' },
                { "Country": "Russia", "Membership": "Permanent", population: '3090416' },
                { "Country": "Kazakhstan", "Membership": "Non-Permanent", population: '1232521' },
                { "Country": "Poland", "Membership": "Non-Permanent", population: '90332521' },
                { "Country": "Sweden", "Membership": "Non-Permanent", population: '383521' }
            ],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'population'
            }
        }
    ]
});
maps.appendTo('#element');
```