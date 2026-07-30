

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
  animationComplete: function() {

  },
  axes:[{
        pointers:[{
            value: 10
        }]
    }]
}, '#element');


