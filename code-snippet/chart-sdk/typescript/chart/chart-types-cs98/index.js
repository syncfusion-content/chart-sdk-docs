var chartData = [
    { x: 2006, y: 7.8, color: 'red', error: 4 },
    { x: 2007, y: 7.2, color: 'blue', error: 3 },
    { x: 2008, y: 6.8, color: 'green', error: 2 },
    { x: 2009, y: 10.7, color: 'orange', error: 1 },
    { x: 2010, y: 8.8, color: 'yellow', error: 3 },
    { x: 2011, y: 9.8, color: 'grey', error: 2 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2005, 
        maximum: 2012, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, maximum: 12,
        interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        errorBar: {
            visible: true,
            errorBarColorMapping: 'color',
            verticalError: 'error'
        }, 
        marker: {
            visible: true
        },
        animation: { enable: false },
        type: 'Line'
    }],
    title: 'Unemployment rate (%)'
}, '#element');

