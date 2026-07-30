

import { CircularGauge, Print } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(Print);

let gauge: CircularGauge = new CircularGauge({
    allowPrint: true
}, '#element');
document.getElementById('print').onclick = () => {
    gauge.print();
};


