


import { CircularGauge, Annotations } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(Annotations);
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        annotations: [{
            content: '#annotation-template',
            angle: 90,
            radius: '150%',
            zIndex:'1'
        }],
        pointers:[{
            value: 50
        }]
    }]
}, '#element');



