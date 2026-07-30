

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    container: {
        width: 30,
        type: 'Thermometer'
    },
    axes: [{
        pointers: [{
            value:50,
            width:15,
            type:'Bar'
        }]
    }]
}, '#element');



