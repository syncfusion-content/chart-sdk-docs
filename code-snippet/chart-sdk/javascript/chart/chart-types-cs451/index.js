var chartData = [
    { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
    { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
    { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
    { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
    { x: 'May', open: 150, high: 170, low: 110, close: 130 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Price in Dollar', 
        minimum: 60, 
        maximum: 200, 
        interval: 20,
        labelFormat: '${value}'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', open: 'open', 
            close: 'close', high: 'high', low: 'low',
            // Series type as HiloOpenClose
            type: 'HiloOpenClose'
        }
    ],
    title: 'Financial Analysis',
    seriesRender: function (args) {
        args.series.bearFillColor = '#ff6347';
        args.series.bullFillColor = '#009cb8';
    }
}, '#element');

