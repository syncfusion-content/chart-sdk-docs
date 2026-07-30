var chartData = [
    { x: 1975, y: 16, y1: 10, y2: 4.5 },
    { x: 1980, y: 12.5, y1: 7.5, y2: 5 },
    { x: 1985, y: 19, y1: 11, y2: 6.5 },
    { x: 1990, y: 14.4, y1: 7, y2: 4.4 },
    { x: 1995, y: 11.5, y1: 8, y2: 5 },
    { x: 2000, y: 14, y1: 6, y2: 1.5 },
    { x: 2005, y: 10, y1: 3.5, y2: 2.5 },
    { x: 2010, y: 16, y1: 7, y2: 3.7 }
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Years',
            lineStyle: { width: 0 },
            minimum: 1975,
            maximum: 2010,
            interval: 5,
            edgeLabelPlacement: 'Shift'
        },
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
            //tooltip template for chart
            template: '<div>${x}</div><div>${y}</div>'
        }
}, '#element');

