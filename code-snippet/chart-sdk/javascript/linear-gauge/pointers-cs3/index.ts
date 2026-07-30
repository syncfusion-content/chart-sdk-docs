

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 80,
            markerType: 'Circle',
            height: 15,
            width: 15,
            color: '#cd41f4'
        }]
    }]
}, '#element');



