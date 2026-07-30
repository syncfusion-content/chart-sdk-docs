


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    moveToCenter: true,
    axes: [{
        lineStyle: {
            width: 2,
            color: '#F8F8F8'
        },
        startAngle: 270,
        endAngle: 90,
        radius: '80%'
    }]
}, '#element');



