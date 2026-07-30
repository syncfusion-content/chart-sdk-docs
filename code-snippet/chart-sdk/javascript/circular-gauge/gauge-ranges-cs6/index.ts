


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        minimum: 0,
        maximum: 100,
        ranges: [{
            start: 40,
            end: 80,
            radius: '50%',
            roundedCornerRadius: 5,
        }]
    }]
}, '#element');



