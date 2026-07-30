var chartData = [
    { x: new Date(2000, 6, 11), y: 10 },
    { x: new Date(2002, 3, 7), y: 30 },
    { x: new Date(2004, 3, 6), y: 15 },
    { x: new Date(2006, 3, 30), y: 65 },
    { x: new Date(2008, 3, 8), y: 90 },
    { x: new Date(2010, 3, 8), y: 85 }
];
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        // Date time scale in primary X Axis
        valueType: 'DateTime',
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Column'
    }],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

