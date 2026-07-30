

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 60,
            type: 'Bar',
            width: 20,
            color: '#f44141'
        }]
    }]
}, '#element');



