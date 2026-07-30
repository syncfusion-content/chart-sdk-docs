var gauge = new ej.lineargauge.LinearGauge({
    axes: [{
        showLastLabel:true,
        maximum: 115,
        line: {
            color: '#9E9E9E'
        },
        pointers: [{
            value: 20,
            height: 15,
            width: 15,
            color: '#757575',
            offset: 30
        }],
    }]
}, '#element');

