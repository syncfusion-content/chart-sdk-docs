var chartData = [
    { x: 'Jan', y: -7.1, text: 'Very Cold' },
    { x: 'Feb', y: -3.7, text: 'Cold' },
    { x: 'Mar', y: 2, text: 'Cool' },
    { x: 'Apr', y: 6.3, text: 'Mild' },
    { x: 'May', y: 13.3, text: 'Pleasant' },
    { x: 'Jun', y: 18.0, text: 'Warm' },
    { x: 'Jul', y: 19.8, text: 'Warmest' },
    { x: 'Aug', y: 18.1, text: 'Warm' },
    { x: 'Sep', y: 13.1, text: 'Pleasant' },
    { x: 'Oct', y: 4.1, text: 'Cool' },
    { x: 'Nov', y: -3.8, text: 'Cold' },
    { x: 'Dec', y: -6.8, text: 'Very Cold' }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Months',
        valueType: 'Category'
    },
    primaryYAxis: {
        title: 'Temperature (Celsius)',
        minimum: -20,
        maximum: 25,
        interval: 5,
        edgeLabelPlacement: 'Shift',
        labelFormat: '{value}°C'
    },
    series: [{
        type: 'Column',
        name: 'Temperature',
        dataSource: chartData,
        xName: 'x',
        yName: 'y',
        marker: {
            dataLabel: {
                visible: true,
                name: 'text',
                position: 'Outer'
            }
        }
    }],
    title: 'Alaska Weather Statistics - 2016'
}, '#element');