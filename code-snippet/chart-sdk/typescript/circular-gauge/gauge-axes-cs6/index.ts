


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        majorTicks: {
            interval: 10,
            color:'red',
            height: 10,
            width: 3
        },
        minorTicks: {
            interval: 5,
            color:'green',
            height: 5,
            width: 2
        }
    }]
}, '#element');



