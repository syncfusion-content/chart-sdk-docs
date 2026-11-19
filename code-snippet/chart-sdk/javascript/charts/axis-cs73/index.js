var chartData = [
    { x: new Date(2025, 0, 1), y: 45 },
    { x: new Date(2025, 1, 1), y: 52 },
    { x: new Date(2025, 2, 1), y: 48 },
    { x: new Date(2025, 3, 1), y: 63 },
    { x: new Date(2025, 4, 1), y: 58 },
    { x: new Date(2025, 5, 1), y: 70 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        intervalType: 'Months',
        interval: 1,
        labelFormat: 'MMM',
        title: 'Months'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Sales'
    },
    series: [{
        dataSource: chartData,
        xName: 'x',
        yName: 'y',
        name: 'Sales',
        type: 'Line'
    }],
    axisLabelRender: function(args) {
        if (args.axis.name === 'primaryXAxis') {
            args.text = 'Month: ' + args.text;
        }
    },
    title: 'Monthly Sales'
}, '#element');