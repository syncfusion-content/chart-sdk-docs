var chartData = [
    { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
    { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
    { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
    { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
    { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
    { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
    { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
    { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Years',
            lineStyle: { width: 0 },
            labelFormat: 'y',
            intervalType: 'Years',
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },
         //Highlight color for tooltip
        highlightColor: 'red',
        primaryYAxis:
        {
            title: 'Percentage (%)',
            minimum: 0, maximum: 20, interval: 2,
            labelFormat: '{value}%'
        },
        series: [
            {
                type: 'StepLine',
                dataSource: chartData, xName: 'x', yName: 'y',
                width: 2, name: 'China',
                marker: {
                    visible: true, width: 10, height: 10
                },
            },
            {
                type: 'StepLine',
                dataSource: chartData, xName: 'x', yName: 'y1',
                width: 2, name: 'Australia',
                marker: {
                    visible: true, width: 10, height: 10
                },
            },
            {
                type: 'StepLine',
                dataSource: chartData, xName: 'x', yName: 'y2',
                width: 2, name: 'Japan',
                marker: {
                    visible: true, width: 10, height: 10
                },

            },
        ],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {
            enable: true,
            format: '${series.name} ${point.x} : ${point.y}',
            //fill for tooltip
            fill: '#7bb4eb',
            //border for tooltip
            border: {
                width: 2,
                color: 'grey'
            }
        }
}, '#element');

