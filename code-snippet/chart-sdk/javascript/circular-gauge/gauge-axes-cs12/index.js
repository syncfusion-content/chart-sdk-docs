var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        minimum: 0,
        maximum: 12,
        startAngle: 0,
        endAngle: 360,
        majorTicks: {
            interval: 1,
            position: 'Inside',
            height: 10
        },
        minorTicks: {
            interval: 0.2,
            position: 'Inside',
            height: 5
        },
        labelStyle: {
            position: 'Inside',
            hiddenLabel: 'First'
        }
    }]
}, '#element');

