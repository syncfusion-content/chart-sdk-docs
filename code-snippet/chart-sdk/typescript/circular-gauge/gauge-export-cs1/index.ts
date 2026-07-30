

import { CircularGauge, ImageExport} from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(ImageExport);

let gauge: CircularGauge = new CircularGauge({
    allowImageExport: true
}, '#element');
document.getElementById('export').onclick = () => {
    gauge.export("PNG","Gauge");
};


