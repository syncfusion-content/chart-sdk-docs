---
layout: post
title: Map providers in Angular Maps component | Syncfusion
description: Learn here all about Map providers in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Map providers 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Map providers in Angular Maps component

Maps component support map providers such as OpenStreetMap that can be added to any layers in maps.

## Open Street Map

OpenStreetMap(OSM) is a online map provider. The OpenStreetMap allows you to view, edit and use geographical data in a collaborative way from any place on the Earth. One of the most important features in Maps component is the built-in online map provider support. By using this feature, you can render OpenStreetMaps in the maps component. This provides the ability to visualize street map tiles without using any external shape files.

``` typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='container'>
    <e-layers>
    <e-layer [urlTemplate]='urlTemplate'></e-layer>
    </e-layers>
  </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public urlTemplate = 'http://a.tile.openstreetmap.org/level/tileX/tileY.png';
}

```

## Bing Maps

Bing Maps is a online map provider for accessing the external geospatial imagery services for deep-zoom satellite view which is supported in the Maps component. This provides the ability to visualize satellite, aerial, and street maps without using any external shape files.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadEventArgs } from '@syncfusion/ej2-angular-maps';

@Component({
  selector: 'my-app',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='container' (load)="load($event)">
    <e-layers>
    <e-layer></e-layer>
    </e-layers>
  </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public load = (args: ILoadEventArgs) : void => {
      args.maps.getBingUrlTemplate("https://dev.virtualearth.net/REST/V1/Imagery/Metadata/AerialWithLabel?output=json&uriScheme=https&key=?").then(function(url) {
        args.maps.layers[0].urlTemplate= url;
      });
  };
}
```