var powerData= [
    { x: 1, y: 10 }, { x: 2, y: 50 },{ x: 3, y: 80 }, { x: 4, y: 110 },
    { x: 5, y: 180 }, { x: 6, y: 220 }, { x: 7, y: 300 }, { x: 8, y: 370 }, { x: 9, y: 490 }, { x: 10, y: 500 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Months',
    },
    primaryYAxis: {
        title: 'Rupees against Dollars',
        interval: 50
    },
    tooltip:{enable:true},
    chartArea: { border: { width: 0 } },
    series: [{
        dataSource: powerData,
        xName: 'x', yName: 'y',
        name: 'Apple Inc',
        fill: '#0066FF',
        //Series type as scatter
        type: 'Scatter',

        trendlines: [{ type: 'Power' }]
    }],

    title: 'Historical Indian Rupee Rate (INR USD)'
}, '#element');

