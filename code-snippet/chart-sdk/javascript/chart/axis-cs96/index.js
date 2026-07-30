var data = [
    { x: new Date(2000, 1, 11), y: 10 },
    { x: new Date(2000, 3, 7), y: 30 },
    { x: new Date(2000, 5, 6), y: 15 },
    { x: new Date(2000, 7, 30), y: 65 },
    { x: new Date(2000, 9, 8), y: 90 },
    { x: new Date(2000, 11, 22), y: 45 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'MMM d'
    },
    primaryYAxis: {
        title: 'Temperature (°C)',
        // Custom label format
        labelFormat: '{value}°C'
    },
    series: [{
        dataSource: data,
        xName: 'x', yName: 'y',
        type: 'Line',
        marker: {
            visible: true,
            height: 6,
            width: 6,
            isFilled: true
        }
    }],
    title: 'Monthly Temperature Data'
}, '#element');


