

import { LinearGauge, Print } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Print);

let gauge: LinearGauge = new LinearGauge({
  allowPrint: true,
  beforePrint: function() {
  }
}, '#element');

document.getElementById('print').onclick = () => {
    gauge.print();
};


