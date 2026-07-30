

import { LinearGauge, PdfExport } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(PdfExport);

let gauge: LinearGauge = new LinearGauge({
    allowPdfExport: true
}, '#element');

document.getElementById('export').onclick = () => {
        gauge.export("PDF", "Gauge", 0);
};


