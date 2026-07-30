var chartData = [
    { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
    { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
    { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
    { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
];
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        // Span for chart axis
        span: 2
    },
    primaryYAxis: {
        minimum: 0, maximum: 90, interval: 10,
        title: 'Temperature (Fahrenheit)',
        labelFormat: '{value}°F'
    },
    // Columns for chart axis
    columns:[
        {
            width: '50%'
        },{
            width: '50%'
        }
    ],
    axes:[
        {
            majorGridLines: { width: 0 },
            columnIndex: 1,
            valueType: 'Category',
            name: 'xAxis'
        }
    ],
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Germany', type: 'Column'
    },{
        dataSource: chartData,
        xName: 'x', yName: 'y1', xAxisName: 'xAxis',
        name: 'Japan', type: 'Column'
    }],
    title: 'Weather Condition',
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

