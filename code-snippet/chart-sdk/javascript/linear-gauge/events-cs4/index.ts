

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
 dragEnd: function() {
 },
 axes : [{
   pointers: [{
     enableDrag: true
   }]
 }]
}, '#element');


