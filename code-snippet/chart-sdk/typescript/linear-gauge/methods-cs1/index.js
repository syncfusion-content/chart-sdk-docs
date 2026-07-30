var gauge = new ej.lineargauge.LinearGauge({
  axes:[{
        pointers:[{
            value: 10
        }]
    }]
}, '#element');

document.getElementById('btn').onclick = function() {
    gauge.setPointerValue(0, 0, 30);
};

