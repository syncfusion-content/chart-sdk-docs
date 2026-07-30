

import { LinearGauge, GaugeTooltip } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(GaugeTooltip);
let gauge: LinearGauge = new LinearGauge({
    tooltip: {
            enable: true,
            fill: '#e5bcbc',
            border: {
                color: '#d80000',
                width: 2
            }
        },
        axes: [{
            pointers: [{
                value: 80
            }]
        }]
}, '#element');



