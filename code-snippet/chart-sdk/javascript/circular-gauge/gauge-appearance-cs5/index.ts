


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    background: 'skyblue',
    //Customize the chart border and opacity.
    border: {color: "#FF0000", width: 2},
    //Change chart margin to left, right, top and bottom.
    margin: { left: 40, right: 40, top: 40, bottom: 40 },
    axes: [{
        radius: '90%',
        maximum: 120,
        startAngle: 230,
        endAngle: 130,
        majorTicks: {
            width: 1, color: '#8c8c8c'
        },
        lineStyle: { width: 2 },
        minorTicks: {
            width: 1, color: '#8c8c8c'
        },
        pointers: [{
            value: 60,
            radius: '60%'
        }],
        ranges: [{
            start: 0,
            end: 70,
            radius: '110%'
        }, {
            start: 70,
            end: 110,
            radius: '110%'
        }, {
            start: 110,
            end: 120,
            radius: '110%'
        }]
    }]
}, '#element');



