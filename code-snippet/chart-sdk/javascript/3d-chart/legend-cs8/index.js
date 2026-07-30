var chartData = [
    { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
    { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
    { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
    { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
    { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
    { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
];
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        title: 'Countries',
        valueType: 'Category', interval: 1,
        labelIntersectAction : 'Rotate45'
    },
    primaryYAxis:
    {
        title: 'Penetration (%)',
        labelFormat: '{value}%',
        minimum: 0, maximum: 90
    },
    series: [
        {
            type: 'Column', name: 'December 2007',
            dataSource: chartData, xName: 'x', yName: 'y'
        }, {
            type: 'Column', name: 'December 2008',
            dataSource: chartData, xName: 'x', yName: 'y1'
        }, {
            type: 'Column', name: 'December 2009',
            dataSource: chartData, xName: 'x', yName: 'y2'
        }, {
            type: 'Column', name: 'December 2010',
            dataSource: chartData, xName: 'x', yName: 'y3'
        }
    ],
    title: 'FB Penetration of Internet Audience',
    legendSettings: {
        padding: 10, shapePadding: 10,
        visible: true, border: {
            width: 2, color: 'grey'
        },
        width: '200'
    },
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,


}, '#element');

