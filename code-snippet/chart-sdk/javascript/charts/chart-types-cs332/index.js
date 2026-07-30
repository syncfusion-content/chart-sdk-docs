var chartData = [
    { x: 2005, y: 8, y1: 4 },
    { x: 2006, y: 5, y1: 8 },
    { x: 2007, y: 6, y1: 3.5 },
    { x: 2008, y: 7, y1: 6 },
    { x: 2009, y: 3.5, y1: 4 },
    { x: 2010, y: 5, y1: 3.5 },
    { x: 2011, y: 3.5, y1: 5 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2004,
        maximum: 2012,
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3,
        maximum: 12,
        interval: 1,
        title: 'Percentage',
        labelFormat: '{value}%'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y',
            // Series type as bar series
            type: 'Bar'
        },
        {
            dataSource: chartData,
            xName: 'x',
            yName: 'y1',
            columnWidthInPixel: 5,
            // Series type as bar series
            type: 'Bar',
        }
    ],
    title: 'Unemployment rate (%)'
}, '#element');

