var gauge = new ej.lineargauge.LinearGauge({
tooltip: {
            enable: true,
            fill: '#e5bcbc',
            border: {
                color: '#d80000',
                width: 2
            }
        },
        axes: [{
            pointers: [{
                value: 80
            }]
        }]
}, '#element');

