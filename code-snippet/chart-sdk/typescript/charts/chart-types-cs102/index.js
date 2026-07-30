var chartData = [
    { x: 'Jan', low: 87, high: 200 }, { x: 'Feb', low: 45, high: 135 },
    { x: 'Mar', low: 19, high: 85 },  { x: 'Apr', low: 31, high: 108 },
    { x: 'May', low: 27, high: 80 },  { x: 'Jun', low: 84, high: 130 },
    { x: 'Jul', low: 77, high: 150 }, { x: 'Aug', low: 54, high: 125 },
    { x: 'Sep', low: 60, high: 155 }, { x: 'Oct', low: 60, high: 180 },
    { x: 'Nov', low: 88, high: 180 }, { x: 'Dec', low: 84, high: 230 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis:
    {
        labelFormat: '{value}mm',
        edgeLabelPlacement: 'Shift',
        title: 'Rainfall'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', high: 'high', low: 'low',
            type: 'Hilo', fill: 'blue'
        }
    ],
    title: 'Maximum and Minimum Rainfall'
}, '#element');

