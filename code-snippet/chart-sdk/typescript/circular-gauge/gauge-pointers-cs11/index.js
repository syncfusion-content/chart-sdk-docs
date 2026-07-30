var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        pointers: [{
            value: 90,
            type: 'Marker',
            markerShape: 'InvertedTriangle',
            radius: '100%',
            markerHeight: 15,
            markerWidth: 15
        }, {
            value: 90,
            type: 'RangeBar',
            radius: '60%',
            pointerWidth: 10
        }, {
            value: 90,
            radius: '60%',
            cap: {
                radius: 15,
                border: {
                    width: 5
                }
            },
            needleTail: {
                length: '22%',
            },
            pointerWidth: 25
        }]
    }]
}, '#element');

