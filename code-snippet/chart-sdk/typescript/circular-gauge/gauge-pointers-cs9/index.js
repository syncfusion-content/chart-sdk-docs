var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        pointers: [{
            value: 90,
            type: 'Marker',
            markerShape: 'Triangle',
            radius: '100%',
            color: 'white',
            border: {
                color: '#007DD1',
                width: 2
            },
            markerHeight: 15,
            markerWidth: 15
        }]
    }]
}, '#element');

