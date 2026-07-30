var circulargauge = new ej.circulargauge.CircularGauge({
        allowImageExport: true
}, '#element');
document.getElementById('export').onclick = function() {
        circulargauge.export('PNG','Gauge');
};

