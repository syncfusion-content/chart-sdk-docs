


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    centerX: '10%',
    centerY: '50%',
    axes: [{
        lineStyle: {
            width: 2,
            color: '#F8F8F8'
        },
        startAngle: 0,
        endAngle: 180
    }]
}, '#element');



