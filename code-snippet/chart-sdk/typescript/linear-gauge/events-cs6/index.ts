

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
 dragStart: function() {
 },
 axes : [{
   pointers: [{
     enableDrag: true
   }]
 }]
}, '#element');


