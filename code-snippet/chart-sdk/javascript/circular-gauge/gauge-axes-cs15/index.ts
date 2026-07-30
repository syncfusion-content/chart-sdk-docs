


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        hideIntersectingLabel: true,
        minimum: 0,
        maximum: 200,
        startAngle: 270,
        endAngle: 90,
        majorTicks: {
           interval:4
        },
        minorTicks: {
           interval:2
        }
    }]
}, '#element');



