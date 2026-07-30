

import { CircularGauge, PdfExport } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(PdfExport);

let gauge: CircularGauge = new CircularGauge({
    allowPdfExport: true
}, '#element');
document.getElementById('export').onclick = () => {
    gauge.export("PDF", "Gauge", 0);
};


