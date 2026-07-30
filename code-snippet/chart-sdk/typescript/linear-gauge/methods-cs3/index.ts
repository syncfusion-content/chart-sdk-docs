

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes:[{
        pointers:[{
            value: 10
        }]
    }]
}, '#element');

document.getElementById('btn').onclick = () => {
    gauge.refresh();
};

