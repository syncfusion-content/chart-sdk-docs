

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [
            {
                value: 80
            },
            {
                value: 60,
                markerType: 'Circle'
            },
            {
                value: 30,
                markerType: 'Diamond'
            }
            ]
        }]
}, '#element');



