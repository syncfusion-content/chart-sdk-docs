var chartData = [
    { x: '2000', y: 0.61, y1: 0.03, y2: 0.48},
    { x: '2001', y: 0.81, y1: 0.05, y2: 0.53 },
    { x: '2002', y: 0.91, y1: 0.06, y2: 0.57 },
    { x: '2003', y: 1, y1: 0.09, y2: 0.61 },
    { x: '2004', y: 1.19, y1: 0.14, y2: 0.63 },
    { x: '2005', y: 1.47, y1: 0.20, y2: 0.64 },
    { x: '2006', y: 1.74, y1: 0.29, y2: 0.66 },
    { x: '2007', y: 1.98, y1: 0.46, y2: 0.76 },
    { x: '2008', y: 1.99, y1: 0.64, y2: 0.77 },
    { x: '2009', y: 1.70, y1: 0.75, y2: 0.55 },
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Years',
            valueType: 'Category',
            majorTickLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        primaryYAxis:
        {
            title: 'Spend in Billions',
            minimum: 0,
            maximum: 4,
            interval: 1,
            majorTickLines: { width: 0 },
            labelFormat: '{value}B'
        },
        series: [
            {
                dataSource: chartData, xName: 'x', yName: 'y',
                // Series type as polar series
                type : 'Polar',
                //Series draw type as stacked area series
                drawType: 'StackingArea',
                name: 'Organic',
            }, {
                dataSource: chartData, xName: 'x', yName: 'y1',
                type : 'Polar',
                drawType: 'StackingArea', name: 'Fair-trade',
            }, {
                dataSource: chartData, xName: 'x', yName: 'y2',
                type : 'Polar',
                drawType: 'StackingArea', name: 'Veg Alternatives',
            },
        ],
        title: 'Trend in Sales of Ethical Produce'
}, '#element');

