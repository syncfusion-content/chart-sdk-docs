var gauge = new ej.lineargauge.LinearGauge({
axes: [{
        minimum: 0,
        maximum: 200,
        pointers: [{
            value: 140
        }],
        labelStyle: {
            format: '{value}°C'
        },
        ranges: [{
            start: 0,
            end: 80,
            startWidth:15,
            endWidth:15
        }, {
            start: 80,
            end: 120,
            startWidth:15,
            endWidth:15
        }, {
            start: 120,
            end: 140,
            startWidth:15,
            endWidth:15
        }, {
            start: 140,
            end: 200,
            startWidth:15,
            endWidth:15
        }]
    }]
}, '#element');

