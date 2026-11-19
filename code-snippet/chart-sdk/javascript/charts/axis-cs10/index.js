var chartData = [
    { x: 'Product A', y: 72 },
    { x: 'Product B', y: 103 },
    { x: 'Product C', y: 139 },
    { x: 'Product D - Very Long Label', y: 462 },
    { x: 'Product E - Extended Text', y: 721 },
    { x: 'Product F', y: 286 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        // edge label placement to shift long labels
        edgeLabelPlacement: 'Shift',
        title: 'Products'
    },
    primaryYAxis: {
        minimum: 0, maximum: 800,
        interval: 100,
        title: 'Sales Values'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Sales', type: 'Column'
    }],
    title: 'Edge Label Placement - Shift'
}, '#element');


