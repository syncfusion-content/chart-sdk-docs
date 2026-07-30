var circulargauge = new ej.circulargauge.CircularGauge({
        allowImageExport: true
}, '#element');
document.getElementById('export').onclick = function() {
        circulargauge.export('JPEG', 'Gauge', null, false).then(function(data) {
            var base64 = data;
            document.writeln(base64);
        });
};

