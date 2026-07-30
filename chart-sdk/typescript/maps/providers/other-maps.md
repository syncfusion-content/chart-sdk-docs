---
layout: post
title: Other maps in TypeScript Maps component | Syncfusion
description: Learn here all about Other maps in Syncfusion TypeScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Other maps 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Custom map provider integration in TypeScript Maps component

In addition to OpenStreetMap, Bing Maps, and Azure Maps, the Maps component supports integration with other third-party online map service providers. Custom map providers can be rendered by specifying their tile server URL in the [urlTemplate](../../api/maps/layerSettingsModel/urltemplate) property. The Maps component supports any tile-based map provider that uses standard URL template formats for tile requests.

## URL template format

The Maps component uses a standardized URL template format for requesting map tiles. Any map service provider using the following tile URL structure is compatible with the control:

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* **{z}** - Represents the zoom level (automatically replaced by the control)
* **{x}** - Represents the tile X coordinate (automatically replaced by the control)
* **{y}** - Represents the tile Y coordinate (automatically replaced by the control)

The Maps component automatically substitutes these placeholders with the appropriate values based on the current map view, zoom level, and visible tile range. Authentication keys or API tokens required by the map provider can be appended to the URL as query parameters.

## Prerequisites

Before integrating a third-party map provider, the following prerequisites should be met:

* **Provider account** - An active account with the chosen map service provider
* **API key or token** - Valid authentication credentials for accessing the tile service
* **Service terms** - Understanding of the provider's usage terms, rate limits, and attribution requirements

## Adding TomTom Maps

The following example demonstrates how to integrate TomTom Maps. To obtain a TomTom API key, visit the [TomTom Developer Portal](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction), create an account, and generate an API key. Replace `subscription_key` in the URL template with the actual API key.

```ts

import { Maps } from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
        }
    ]
});
map.appendTo('#element');

```

![TomTom Maps](../../maps/images/MapProviders/tomtom-maps.PNG)

## Enabling zooming and panning

Tile-based map layers support zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the `zoomSettings` property with toolbar controls for user interaction.

```ts

import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        toolbarSettings: {
            buttonSettings: {
                toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
            }
        }
    },
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
        }
    ]
});
map.appendTo('#element');

```

![TomTom Maps with Zooming and Panning](../../maps/images/MapProviders/tomtom-maps-zooming.PNG)

## Adding markers and navigation line

Markers can be added to tile-based map layers to highlight specific locations by setting the latitude and longitude coordinates using [markerSettings](../../api/maps/layerSettingsModel/markersettings). Navigation lines can be drawn on top of the tile layer to visualize routes or connections between locations by configuring the [navigationLineSettings](../../api/maps/layerSettingsModel/navigationlinesettings) with corresponding latitude and longitude coordinates.

```ts

import { Maps, NavigationLine, Marker, MarkerSettings } from '@syncfusion/ej2-maps';
Maps.Inject(NavigationLine, Marker, Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        zoomFactor: 4
    },
    centerPosition: {
        latitude: 29.394708,
        longitude: -94.954653
    },
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key",
            markerSettings: [{
                visible: true,
                height: 25,
                width: 15,
                dataSource: [{
                    latitude: 34.060620,
                    longitude: -118.330491,
                    name: "California"
                },
                {
                    latitude: 40.724546,
                    longitude: -73.850344,
                    name: "New York"
                }]
            }],
            navigationLineSettings: [{
                visible: true,
                color: "blue",
                width: 5,
                angle: 0.1,
                latitude: [34.060620, 40.724546],
                longitude: [-118.330491,-73.850344]
            }]
        }
    ]
});
map.appendTo('#element');

```

![TomTom Maps with Markers and Navigation Line](../../maps/images/MapProviders/tomtom-maps-marker-and-line.PNG)

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the tile-based map layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](../../api/maps/layerSettingsModel/type) property to **SubLayer**. The sublayer overlays the base map tiles while maintaining interactivity with the underlying map.

```ts

import { Maps } from '@syncfusion/ej2-maps';
import { Africa_Continent } from './Africa_Continent.ts';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
        },
        {
            shapeData: Africa_Continent,
            type: "SubLayer",
            shapeSettings: {
                fill: "blue"
            }
        }
    ]
});
map.appendTo('#element');

```

![TomTom Maps with Sublayer](../../maps/images/MapProviders/tomtom-map-sublayer.PNG)

## Enabling legend

A legend can be displayed with tile-based maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](../../api/maps/legendSettingsModel/visible) property of [legendSettings](../../api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.

```ts

import { Maps, Legend, Marker } from '@syncfusion/ej2-maps';
import { markerDataSource } from './markerdata.ts';

Maps.Inject(Legend, Marker);
let map: Maps = new Maps({
    legendSettings: {
        visible: true,
        type: 'Markers',
        useMarkerShape:true,
        toggleLegendSettings: {
          enable: true,
          applyShapeSettings: false,
          border: {
            color: 'green',
            width: 2
          }
        }
    },
    layers: [
        {
          urlTemplate:"http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key",
          shapeDataPath: 'name',
          shapePropertyPath: 'name',
          shapeSettings: {
            fill: '#E5E5E5'
          },
          markerSettings: [
            {
              dataSource: markerDataSource,
              colorValuePath: 'color',
              shapeValuePath:'shape',
              legendText: 'country',
              visible: true
            }
          ]
        }
    ]
});
map.appendTo('#element');

```

![TomTom Maps with Legend](../../maps/images/MapProviders/tomtom-map-legend.PNG)
