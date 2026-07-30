

import { LinearGauge, ImageExport } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(ImageExport);

let gauge: LinearGauge = new LinearGauge({
    allowImageExport: true
}, '#element');

document.getElementById('export').onclick = () => {
    gauge.export("PNG","Gauge");
};


