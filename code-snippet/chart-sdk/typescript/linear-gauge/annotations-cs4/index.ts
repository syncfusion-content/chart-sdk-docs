


import { LinearGauge, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations);
let gauge: LinearGauge = new LinearGauge({
      annotations: [
            {
                content: '<div><h1 style="color:red;">Speed</h1></div>',
                verticalAlignment: 'Near',
                horizontalAlignment: 'Center',
                x: 100,
                y: 150,
                zIndex: '1'
            },
            {
                content: '<div><h1 style="color:blue;">Meter</h1></div>',
                verticalAlignment: 'Center',
                horizontalAlignment: 'Center',
                x: -100,
                y: -100,
                zIndex: '1'
            }]
}, '#element');



