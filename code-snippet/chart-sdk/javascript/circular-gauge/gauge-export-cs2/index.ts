

import { CircularGauge, ImageExport } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(ImageExport);

let gauge: CircularGauge = new CircularGauge({
    allowImageExport: true
}, '#element');
document.getElementById('export').onclick = () => {
    gauge.export('JPEG', 'Gauge', null, false).then((data) => {
            let base64 = data;
            document.writeln(base64);
        });
};


