var data = [
     { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
    { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
];
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: {
        title: 'Orders',
        allowDecimals: false
    },
    series: [{ dataSource: data, xName: 'x', yName: 'y', type: 'Column' }]
}, '#element');

