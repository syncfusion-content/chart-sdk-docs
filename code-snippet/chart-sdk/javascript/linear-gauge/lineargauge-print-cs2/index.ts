

import { LinearGauge, Print } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Print);

let gauge: LinearGauge = new LinearGauge({
  allowPrint: true
}, '#element');

document.getElementById('print').onclick = () => {
    gauge.print();
};


