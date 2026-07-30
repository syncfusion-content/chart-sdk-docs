var data1 = [
    { x: '2012', y: 104 },
    { x: '2016', y: 121 },
    { x: '2020', y: 113 }
];

var data2 = [
    { x: '2012', y: 46 },
    { x: '2016', y: 46 },
    { x: '2020', y: 39 }
];

var data3 = [
    { x: '2012', y: 65 },
    { x: '2016', y: 67 },
    { x: '2020', y: 65 }
];

var data4 = [
    { x: '2012', y: 29 },
    { x: '2016', y: 27 },
    { x: '2020', y: 22 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series: [
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', groupName: 'USA', columnWidth: 0.7,
            dataSource: data1, columnSpacing: 0.1
        },
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', groupName: 'USA', columnWidth: 0.5,
            dataSource: data2, columnSpacing: 0.1
        },
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', groupName: 'UK', columnWidth: 0.7,
            dataSource: data3, columnSpacing: 0.1
        },
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', groupName: 'UK', columnWidth: 0.5,
            dataSource: data4, columnSpacing: 0.1
        }
    ]
}, '#element');

