var chartData = [
    { x: 'Jan', high: 29, low: 19 },
    { x: 'Feb', high: 32, low: 22 },
    { x: 'Mar', high: 35, low: 25 },
    { x: 'Apr', high: 37, low: 27 },
    { x: 'May', high: 35, low: 25 },
    { x: 'Jun', high: 32, low: 22 },
    { x: 'Jul', high: 30, low: 20 },
    { x: 'Aug', high: 32, low: 22 },
    { x: 'Sep', high: 35, low: 25 },
    { x: 'Oct', high: 37, low: 27 },
    { x: 'Nov', high: 35, low: 25 },
    { x: 'Dec', high: 32, low: 22 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        labelFormat: '{value}˚C',
        title: 'Temperature',
        lineStyle: { width: 0 },
        minimum: 10,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'RangeStepArea',
            dataSource: chartData,
            xName: 'x', high: 'high', low: 'low'
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');

