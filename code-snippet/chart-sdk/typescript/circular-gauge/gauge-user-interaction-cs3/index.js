var circulargauge = new ej.circulargauge.CircularGauge({
    // Title for circular gauge.
    axes: [{
        radius: '90%',
        minimum: 0,
        maximum: 120,
        startAngle: 240,
        endAngle: 120,
        annotations: [{
           content: 'CircularGauge', zIndex:'1', angle: 180
        }],
        lineStyle: { width: 0 },
        majorTicks: { color: 'white', offset: -5, height: 12 },
        minorTicks: { width: 0 },
        labelStyle: { useRangeColor: true, font: { color: '#424242', size: '13px', fontFamily: 'Roboto' } },
        pointers: [{
            value: 70,
            radius: '60%',
            color: '#33BCBD',
            cap: { radius: 10, border: { color: '#33BCBD', width: 5 } },
            animation: { enable: false }
        }],
        ranges: [{
            start: 0,
            end: 50,
            startWidth: 10, endWidth: 10,
            radius: '102%',
            color: '#3A5DC8',
        }, {
            start: 50,
            end: 120,
            radius: '102%',
            startWidth: 10, endWidth: 10,
            color: '#33BCBD',
        }]
    }],
    tooltip: {
        type:['Pointer', 'Range', 'Annotation'],
        enable: true,
        enableAnimation: false,
        annotationSettings: { template:'<div>CircularGauge</div>' },
        rangeSettings: { fill:'red' }
    }
}, '#element');

