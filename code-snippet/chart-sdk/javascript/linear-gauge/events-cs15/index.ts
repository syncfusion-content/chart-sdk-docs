

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
 valueChange: function() {
 },
 axes: [{
   pointers: [{
     enableDrag: true,
     value: 40
   }]
 }]
}, '#element');


