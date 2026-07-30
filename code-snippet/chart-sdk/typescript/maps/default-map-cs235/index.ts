

import { world_map } from './world-map.ts';
import { Maps, MapsTooltip, ITooltipRenderEventArgs } from '@syncfusion/ej2-maps';
Maps.Inject(MapsTooltip);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
            fill: '#D0D0D0',
            textStyle: {
                color: 'green',
                fontFamily: 'Times New Roman',
                fontStyle: 'Sans-serif'
            },
            duration: 3000
        }
    }]
});
map.appendTo('#element');


