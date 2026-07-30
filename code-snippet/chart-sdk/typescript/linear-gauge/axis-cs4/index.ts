

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        minimum: 20,
        maximum: 140,
        majorTicks: {
            interval: 20,
            position: "Cross"
        },
        minorTicks: {
            interval: 5,
            color: 'red',
            position: "Outside",
            offset: 15
        }
    }]
}, '#element');



