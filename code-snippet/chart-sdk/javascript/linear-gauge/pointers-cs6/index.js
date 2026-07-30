var gauge = new ej.lineargauge.LinearGauge({
   axes: [{
        pointers: [
            {
                value: 80
            },
            {
                value: 60,
                markerType: 'Circle'
            },
            {
                value: 30,
                markerType: 'Diamond'
            }
            ]
        }]
}, '#element');

