import { Maps, Marker } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Marker);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: world_map,
            markerSettings: [{
                visible: true,
                shape: 'Circle',
                widthValuePath: 'width',
                heightValuePath: 'height',
                dataSource: [
                    {
                        latitude: 49.95121990866204,
                        longitude: 18.468749999999998,
                        width: 30,
                        height: 30,
                    },
                    {
                        latitude: 59.88893689676585,
                        longitude: -109.3359375,
                        width: 20,
                        height: 20,
                    },
                    {
                        latitude: -6.64607562172573,
                        longitude: -55.54687499999999,
                        width: 10,
                        height: 10,
                    },
                ],
            }],
        }
    ]
});
map.appendTo('#element');



