


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        pointers: [{
            value: 50,
            type: 'RangeBar',
            radius: '60%'
        }]
    }]
}, '#element');



