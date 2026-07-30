var gauge = new ej.lineargauge.LinearGauge({
    allowPrint: true,
	beforePrint: function() {
	}
}, '#element');

document.getElementById('print').onclick = function() {
        gauge.print();
};

