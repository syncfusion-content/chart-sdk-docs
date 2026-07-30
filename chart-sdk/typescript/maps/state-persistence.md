---
layout: post
title: State persistence in TypeScript Maps component | Syncfusion
description: Learn here all about State persistence in Syncfusion TypeScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: State persistence 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# State persistence in TypeScript Maps component

State persistence enables the Maps component to retain the current state in browser storage for state maintenance across page refreshes. This feature is controlled through the [`enablePersistence`](../api/maps#enablepersistence) property which is set to **false** by default. When this property is set to **true**, specific Maps component model values are preserved even after the page is refreshed.

```ts
import { world_map } from './world-map.ts';
import { Maps, Selection, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Selection, Zoom);
let map: Maps = new Maps({
    enablePersistence:true,
    zoomSettings:{
        enable:true
    },
    layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');
```