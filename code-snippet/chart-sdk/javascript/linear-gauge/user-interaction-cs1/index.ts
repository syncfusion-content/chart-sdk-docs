

import { LinearGauge, GaugeTooltip } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(GaugeTooltip);
let gauge: LinearGauge = new LinearGauge({
   tooltip: {
       enable: true
   },
   axes: [{
        pointers: [{
            value: 80
        }]
    }]
}, '#element');



