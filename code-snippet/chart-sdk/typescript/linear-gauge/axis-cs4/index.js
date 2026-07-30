var gauge = new ej.lineargauge.LinearGauge({
  axes: [{
        minimum: 20,
        maximum: 140,
        majorTicks: {
            interval: 20,
            position: "Cross"
        },
        minorTicks: {
            interval: 5,
            color: 'red',
            position: "Outside",
            offset: 15
        }
    }]
}, '#element');

