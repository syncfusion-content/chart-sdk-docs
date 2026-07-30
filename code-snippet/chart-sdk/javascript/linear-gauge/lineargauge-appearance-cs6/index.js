var gauge = new ej.lineargauge.LinearGauge({
 container: {
        height: 300,
        width: 30,
        type: 'Thermometer'
    },
    axes: [{
        pointers: [{
            value:50,
            width:15,
            type:'Bar'
        }]
    }]
}, '#element');

