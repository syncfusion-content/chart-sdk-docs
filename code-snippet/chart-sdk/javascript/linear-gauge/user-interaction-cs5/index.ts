

import { LinearGauge, GaugeTooltip } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(GaugeTooltip);
let gauge: LinearGauge = new LinearGauge({
    tooltip: {
        enable: true,
        position: "Center"
    },
    axes: [{
        pointers: [{
            type: 'Bar',
            value: 50,
            offset: -50,
            color: "red"
        }],
        majorTicks: {
            interval: 10
        },
        minorTicks: {
            interval: 2
        },
        labelStyle: {
            offset: 48
        }
    }],
}, '#element');



