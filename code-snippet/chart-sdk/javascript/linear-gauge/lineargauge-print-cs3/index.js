var gauge = new ej.lineargauge.LinearGauge({
        allowPrint: true
}, '#element');

document.getElementById('print').onclick = function() {
        gauge.print();
};

