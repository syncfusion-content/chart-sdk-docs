var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        pointers: [{
            value: 90,
            radius: '50%',
            cap: {
                radius: 15,
                color: 'white',
                border: {
                    color: '#007DD1',
                    width: 5
                }
            },
            needleTail: {
                length: '22%',
                color: '#007DD1'
            },
            color: '#007DD1',
            pointerWidth: 25
        }]
    }]
}, '#element');

