

import { LinearGauge, Gradient } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Gradient);
let gauge: LinearGauge = new LinearGauge({
    orientation: 'Horizontal',
    container: {
        width: 30, offset: 30
    },
    axes: [{
        line: { width: 0 },
        majorTicks: { height: 0, interval: 25 },
        minorTicks: { height: 0 },
        labelStyle: {
            font: { color: '#424242',
            }, offset: 55
        },
        pointers: [{
            value: 80, height: 25,
            width: 35, placement: 'Near',
            offset: -44, markerType: 'Triangle',
            color: '#f54ea2'
        }],
        ranges: [{
            start: 0, end: 80,
            startWidth: 30, endWidth: 30,
            offset: 30,
            radialGradient: {
                radius: '65%',
                outerPosition: { x: '50%', y: '70%' },
                innerPosition: { x: '60%', y: '60%' },
                colorStop: [
                    { color: '#fff5f5', offset: '5%', opacity: 0.9 },
                    { color: '#f54ea2', offset: '100%', opacity: 0.9 }
                ]
            }
        }]
    }]
}, '#element');



