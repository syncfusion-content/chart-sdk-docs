


import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map';
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');



