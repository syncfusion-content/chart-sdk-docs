

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 80
        }]
    }]
}, '#element');

document.getElementById('btn').onclick = () => {
    gauge.setPointerValue(0, 0, 30);
};


