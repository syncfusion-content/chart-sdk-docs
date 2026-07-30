var circulargauge = new ej.circulargauge.CircularGauge({
        allowPdfExport: true
}, '#element');
document.getElementById('export').onclick = function() {
        circulargauge.export("PDF", "Gauge");
};

