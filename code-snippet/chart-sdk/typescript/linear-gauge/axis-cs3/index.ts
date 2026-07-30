

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
      axes: [{
        minimum: 20,
        maximum: 140,
        majorTicks: {
            interval: 20
        },
        minorTicks: {
            interval: 5,
            color: 'red'
        }
    }]
}, '#element');



