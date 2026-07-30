var chartData = [
    { x: new Date(2016, 0, 1), y: -7 }, { x: new Date(2016, 1, 1), y: -3 },
    { x: new Date(2016, 2, 1), y: 8 }, { x: new Date(2016, 3, 1), y: 6 },
    { x: new Date(2016, 4, 1), y: 13 }, { x: new Date(2016, 5, 1), y: 18 },
    { x: new Date(2016, 6, 1), y: 19 }, { x: new Date(2016, 7, 1), y: 18 },
    { x: new Date(2016, 8, 1), y: 13 }, { x: new Date(2016, 9, 1), y: 4 },
    { x: new Date(2016, 10, 1), y: -3 }, { x: new Date(2016, 11, 1), y: -6 }
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Months',
            valueType: 'DateTime', labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift'
        },
        primaryYAxis:
        {
            title: 'Temperature (Celsius)',
            minimum: -20, maximum: 20, interval: 10,
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}°C'
        },
        series: [
            {
                type: 'Line', name: 'Warmest', width: 2,
                dataSource: chartData, xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    height: 10, width: 10,
                    shape: 'Pentagon',isFilled: true,
                    //Data label for chart series
                    dataLabel: { visible: true , format:"n2"}
                }
            }
        ],
        title: 'Alaska Weather Statistics - 2016'
}, '#element');

