var circulargauge = new ej.circulargauge.CircularGauge({
    background: 'skyblue',
    // Customize the chart border and opacity.
    border: {color: "#FF0000", width: 2},
    axes: [{
        radius: '90%',
        maximum: 120,
        startAngle: 230,
        endAngle: 130,
        majorTicks: {
            width: 1, color: '#8c8c8c'
        },
        lineStyle: { width: 2 },
        minorTicks: {
            width: 1, color: '#8c8c8c'
        },
        pointers: [{
            value: 60,
            radius: '60%'
        }],
        ranges: [{
            start: 0,
            end: 70,
            radius: '110%',
            strokeWidth: 10
        }, {
            start: 70,
            end: 110,
            radius: '110%',
            strokeWidth: 10
        }, {
            start: 110,
            end: 120,
            radius: '110%',
            strokeWidth: 10
        }]
    }]
}, '#element');

