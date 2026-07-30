var gauge = new ej.lineargauge.LinearGauge({
        allowImageExport: true
}, '#element');

document.getElementById('export').onclick = function() {
        gauge.export("PNG","Gauge");
};

