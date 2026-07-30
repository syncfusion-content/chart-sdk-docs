var gauge = new ej.lineargauge.LinearGauge({
    tooltip: {
        enable: true,
        position: "Center"
    },
    axes: [{
        pointers: [{
            type: 'Bar',
            value: 50,
            offset: -50,
            color: "red"
        }],
        majorTicks: {
            interval: 10
        },
        minorTicks: {
            interval: 2
        },
        labelStyle: {
            offset: 48
        }
    }],
}, '#element');

