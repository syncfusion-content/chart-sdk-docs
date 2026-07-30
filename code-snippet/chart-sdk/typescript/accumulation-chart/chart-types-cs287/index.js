var chartData = [
    { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },
    { x: 'Apr', y: null },  { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
    { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 }, { x: 'Sep', y: undefined },
    { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 },  { x: 'Dec', y: 0 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: -5, maximum: 30, interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as spline area series
        type: 'SplineArea',
        marker: { visible: true, width: 7, height: 7, isFilled: true },
        emptyPointSettings: {
            mode: 'Average',
            fill: 'red'
        }
    }],
    title: 'Climate Graph-2012'
}, '#element');

