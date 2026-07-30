

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
            color : '#f54ea2',
            radialGradient: {
                radius: '60%',
                outerPosition: { x: '50%', y: '50%' },
                innerPosition: { x: '50%', y: '50%' },
                colorStop: [
                    { color: '#fff5f5', offset: '0%', opacity: 0.9 },
                    { color: '#f54ea2', offset: '100%', opacity: 0.8 }]
            }
        }],
        ranges: [{
            start: 0, end: 80,
            startWidth: 30, endWidth: 30,
            color:  '#f54ea2', offset: 30,
        }]
    }]
}, '#element');



