


import { LinearGauge, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations);
let gauge: LinearGauge = new LinearGauge({
    annotations: [{
        content: '<div id="first"><h1>Gauge</h1></div>',
        x: 100,
        y: 100,
        zIndex: '1'
    }]
}, '#element');



