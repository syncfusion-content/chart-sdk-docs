


import { CircularGauge, Legend } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(Legend);
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        minimum: 0,
        maximum: 100,
        majorTicks: {
            useRangeColor: true
        },
        minorTicks: {
            useRangeColor: true
        },
        labelStyle: {
            useRangeColor: true
        },
        ranges: [{
            start: 0,
            end: 25,
            radius: '108%'
        },{
            start: 25,
            end: 50,
            radius: '108%'
        },{
            start: 50,
            end: 75,
            radius: '108%'
        },{
            start: 75,
            end: 100,
            radius: '108%'
        }]
    }],
    legendSettings : {
        visible: true,
        toggleVisibility: true
    }
}, '#element');



