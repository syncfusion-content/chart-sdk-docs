

import { LinearGauge, GaugeTooltip } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(GaugeTooltip);
let gauge: LinearGauge = new LinearGauge({
 tooltipRender: function() {
 },
 tooltip: {
   enable: true
 },
 axes: [{
   pointers: [{
     value: 40
   }]
 }]
}, '#element');


