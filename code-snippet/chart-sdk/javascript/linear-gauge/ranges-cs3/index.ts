

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        ranges: [{
            start: 40,
            end: 80,
            startWidth: 10,
            endWidth: 10,
            color: 'red'
        }],
        labelStyle: {
            useRangeColor: true
        }
    }]
}, '#element');



