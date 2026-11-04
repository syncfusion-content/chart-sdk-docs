var chartData1 = [
    { x: 'USA', y: 50 },
    { x: 'China', y: 40 },
    { x: 'Japan', y: 70 }
];

var chartData2 = [
    { x: 'Germany', y: 45 },
    { x: 'France', y: 55 },
    { x: 'Italy', y: 35 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        isIndexed: true,
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
    },
    series: [
        {
            dataSource: chartData1,
            xName: 'x',
            yName: 'y',
            name: 'Series 1',
            type: 'Column'
        },
        {
            dataSource: chartData2,
            xName: 'x',
            yName: 'y',
            name: 'Series 2',
            type: 'Column'
        }
    ],
    title: 'Indexed Category Axis'
}, '#element');