


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    enableRangeDrag:true,
    height:'250px',
    width:'250px',
    axes: [{
        ranges: [{
            start: 0,
            end: 100,
            startWidth: 8, endWidth: 8,
            radius: '108%',
            color: '#30B32D'
        }],
        pointers: [{
            value: 50
        }]
    }]
}, '#element');



