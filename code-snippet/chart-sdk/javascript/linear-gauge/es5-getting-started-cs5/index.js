ej.base.enableRipple(true);
var lineargauge = new ej.lineargauge.LinearGauge({
    axes: [{
        pointers:[{
            value: 40,
            color: 'green'
        }]
    }]
});
lineargauge.appendTo('#element');

