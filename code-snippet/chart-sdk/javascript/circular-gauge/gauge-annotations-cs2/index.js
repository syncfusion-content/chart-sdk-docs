var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        annotations: [{
            content: '#annotation-template',
            angle: 90,
            radius: '150%',
            zIndex:'1'
        }],
        pointers:[{
            value: 50
        }]
    }]
}, '#element');

