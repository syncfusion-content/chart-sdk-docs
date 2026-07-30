var chartData = [
    { x: 'Jan', y: -7.1 }, { x: 'Feb', y: -3.7 },
    { x: 'Mar', y: 2 }, { x: 'Apr', y: 6.3 },
    { x: 'May', y: 13.3 }, { x: 'Jun', y: 18.0 },
    { x: 'Jul', y: 19.8 }, { x: 'Aug', y: 18.1 },
    { x: 'Sep', y: 13.1 }, { x: 'Oct', y: 4.1 },
    { x: 'Nov', y: -3.8 }, { x: 'Dec', y: -6.8 }
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Months',
            valueType: 'Category'
        },
        primaryYAxis:
        {
            title: 'Temperature (Celsius)',
            minimum: -20, maximum: 25, interval: 5,
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}°C'
        },
        series: [
            {
                type: 'Column', name: 'Warmest',
                dataSource: chartData, xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    height: 10, width: 10,
                    shape: 'Pentagon',
                    //Data label position as middle
                    dataLabel: { visible: true, position: 'Middle', margin:{ left:5, right:5, top:5, bottom:5 } }
                }
            }
        ],
        title: 'Alaska Weather Statistics - 2016'
}, '#element');

