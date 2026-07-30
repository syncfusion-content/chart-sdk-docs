var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        lineStyle: {
            color: 'transparent'
        },
        ranges: [
            { start: 0, end: 50, color: '#30B32D', radius:'108%' },
            { start: 50, end: 100, color: '#FFDD00', radius:'108%' }
        ],
        pointers: [{
            value: 50,
            type: 'RangeBar',
            roundedCornerRadius: 6
        }]
    }]
}, '#element');

