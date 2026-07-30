var gauge = new ej.lineargauge.LinearGauge({
        allowImageExport: true
}, '#element');

document.getElementById('export').onclick = function() {
        gauge.export('JPEG', 'Gauge', null, false).then(function(data) {
            var base64 = data;
            document.writeln(base64);
        });
};

