


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        pointers: [{
            value: 90,
            animation: {
                enable: true,
                duration: 1500
            }
        }]
    }]
}, '#element');



