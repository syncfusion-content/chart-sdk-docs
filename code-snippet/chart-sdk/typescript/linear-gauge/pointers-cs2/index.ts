

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 80,
            type: 'Marker',
            markerType: 'Circle'
        }]
    }]
}, '#element');



