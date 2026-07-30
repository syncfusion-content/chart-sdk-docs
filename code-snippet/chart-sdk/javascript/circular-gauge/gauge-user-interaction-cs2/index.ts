

import { CircularGauge, GaugeTooltip } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(GaugeTooltip);
let gauge: CircularGauge = new CircularGauge({
    // Title for circular gauge.
    tooltip: {
        enable: true,
        template: '${value}'
    },
    axes:[{
        pointers:[{
            value: 70
        }]
    }]
}, '#element');



