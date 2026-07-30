


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    enablePointerDrag:true,
    height:'250px',
    width:'250px',
    axes: [{
        pointers: [{
            value: 50
        }]
    }]
}, '#element');



