var chartData = [
    { x: 2006, y: 7.8 }, { x: 2007, y: 7.2 },
    { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
    { x: 2010, y: 10.8}, { x: 2011, y: 9.8 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2005, 
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
   series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as bar series
        type: 'Bar'
    }],
    title: 'Unemployment rate (%)',
    pointRender: function (args) {
        if (args.point.index === 1) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 4) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
    }
}, '#element');

