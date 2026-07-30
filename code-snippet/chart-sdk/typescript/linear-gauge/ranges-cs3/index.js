var gauge = new ej.lineargauge.LinearGauge({
    axes: [{
        ranges: [{
            start: 40,
            end: 80,
            startWidth: 10,
            endWidth: 10,
            color: 'red'
        }],
        labelStyle: {
            useRangeColor: true
        }
    }]
}, '#element');

