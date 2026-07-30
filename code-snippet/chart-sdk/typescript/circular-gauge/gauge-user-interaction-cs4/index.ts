

import { CircularGauge, GaugeTooltip } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(GaugeTooltip);
let gauge: CircularGauge = new CircularGauge({
    enablePointerDrag: true,
    tooltip: {
        enable: true
    },
    axes:[{
        pointers:[{
            value: 70
        }]
    }]
}, '#element');



