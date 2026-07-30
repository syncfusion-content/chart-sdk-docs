

import { LinearGauge, ImageExport } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(ImageExport);
let gauge: LinearGauge = new LinearGauge({
    allowImageExport: true
}, '#element');
document.getElementById('export').onclick = () => {
        gauge.export('JPEG', 'Gauge', null, false).then((data) => {
            let base64 = data;
            document.writeln(base64);
        });
};


