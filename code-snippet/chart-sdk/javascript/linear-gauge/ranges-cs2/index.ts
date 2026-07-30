

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        ranges: [{
            start: 50,
            end: 80,
            startWidth: 10,
            endWidth: 20,
            color: 'red'
        }]
    }]
}, '#element');



