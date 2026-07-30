var circulargauge = new ej.circulargauge.CircularGauge({
    // Title for circular gauge.
    tooltip: {
        enable: true,
        template: '${value}'
    },
    axes:[{
        pointers:[{
            value: 70
        }]
    }]
}, '#element');

