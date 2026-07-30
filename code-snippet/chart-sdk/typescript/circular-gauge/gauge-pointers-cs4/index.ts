


import { CircularGauge, Annotations} from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(Annotations);
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        startAngle: 270,
        endAngle: 90,
        lineStyle: { width: 3, color: '#1E7145' },
        labelStyle: {
            position: 'Outside',
            font: { size: '0px', color: '#1E7145' }
        }, majorTicks: {
            width: 1,
            height: 0,
            interval: 100
        }, minorTicks: {
            height: 0,
            width: 0,
        },
        radius: '90%',
        minimum: 0,
        maximum: 100,
        pointers: [{
        animation: { enable: true , duration: 1000},
        value: 70,
        radius: '80%',
        color: 'green',
        pointerWidth: 2,
        needleStartWidth: 4,
        needleEndWidth: 4,
        cap: {
            radius: 8,
            color: 'green'
        },
        needleTail: {
            length: '0%'
        }
        }],
        annotations: [
            {
                angle: 180, zIndex: '1',
                radius: '20%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;padding-top: 26px">Customized Needle</div>'
            }
        ]
    }]
}, '#element');



