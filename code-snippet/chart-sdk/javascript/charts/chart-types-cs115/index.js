var chartData = [
    { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },
    { x: 'Apr', y: 8 },  { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
    { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 }, { x: 'Sep', y: 16 },
    { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 },  { x: 'Dec', y: 0 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '{value}°C'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as Polar series
        type: 'Polar',
        // Series draw type as scatter
        drawType: 'Scatter'
    }],
    title: 'Climate Graph-2012'
}, '#element');

