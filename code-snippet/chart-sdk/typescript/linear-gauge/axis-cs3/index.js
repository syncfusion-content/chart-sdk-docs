var gauge = new ej.lineargauge.LinearGauge({
  axes: [{
        minimum: 20,
        maximum: 140,
        majorTicks: {
            interval: 20
        },
        minorTicks: {
            interval: 5,
            color: 'red'
        }
    }]
}, '#element');

